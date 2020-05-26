<template>
    <div class="columns-component-grid">

        <div class="FirstColumn">
            <div v-if="filteredData.length === itemsInFirstColumnCount">Всего: <b>{{itemsInFirstColumnCount}}</b></div>
            <div v-else>Всего: <b>{{itemsInFirstColumnCount}}</b> / Найдено: <b>{{filteredData.length}}</b></div>
            <ul>
                <li class="item"
                    v-for="(item,index) in filteredData" :key="index">
                    <button class="moveItem" @click="moveItemClick(item)">+</button>

                    {{item.name}}

                    <ul v-if="item.items.length> 0">
                        <li class="subItems" v-for="(subItem, subIndex) in item.items"
                            :key="subIndex">{{subItem.name}}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="ItemTransferControls"></div>
        <div class="SecondColumn">
            <ul>
                <li class="item"
                    v-for="(item,index) in secondColumnItems" :key="index">
                    {{item.name}}
                    <button class="moveItem" @click="moveItemBackClick(item)">-</button>
                    <ul v-if="item.items.length> 0">
                        <li class="subItems" v-for="(subItem, subIndex) in item.items"
                            :key="subIndex">{{subItem.name}}
                        </li>
                    </ul>
                </li>
            </ul>

        </div>

        <div class="BottomControls">
            <label>Поиск: <input name="search" v-model="filterValueLocal"/></label>
            <button @click="clearFilterValue">Очистить</button>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions, mapGetters} from 'vuex';

    export default {
        name: 'Columns',
        props: {
            msg: String,

        },
        computed: {
            ...mapState('columns', ['secondColumnItems']),
            filterValueLocal: {
                // getter
                get: function () {
                    return this.$store.state.columns.filterValue;
                },
                // setter
                set: function (newValue) {
                    this.$store.commit('columns/setFilterValue', newValue);
                }
            },

            ...mapGetters('columns', ['isDataLoading', 'filteredData', 'itemsInFirstColumnCount'])
        },


        methods: {
            ...mapActions('columns', ['moveItemToRightColumn', 'moveItemToLeftColumn']),
            moveItemClick(item) {
                this.moveItemToRightColumn(item);
            },
            moveItemBackClick(item) {
                this.moveItemToLeftColumn(item);
            },
            clearFilterValue() {
                this.filterValueLocal = '';
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

    h3 {
        margin: 40px 0 0;
    }

    a {
        color: #42b983;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    .columns-component-grid {
        height: 100%;

        margin: 0 30px;
        display: grid;
        grid-template-columns: 1fr minmax(50px, 100px) 1fr;
        grid-template-rows: 1fr 65px;
        gap: 1px 1px;
        grid-template-areas: "FirstColumn ItemTransferControls SecondColumn" "BottomControls BottomControls BottomControls";
    }


    .ItemTransferControls {
        grid-area: ItemTransferControls;
    }

    .FirstColumn {
        grid-area: FirstColumn;

        overflow: auto;
        border-right: 1px solid #42b983;
    }

    .SecondColumn {
        grid-area: SecondColumn;

        overflow: auto;
        border-left: 1px solid #42b983;
    }

    .BottomControls {
        grid-area: BottomControls;
        border-top: 1px solid #42b983;
        padding: 1em;

        * {
            margin: 0 0.5em 0 0;
        }
    }


    .item {
        text-align: left;
        padding: 0.25em 0.5em 0.25em 60px;
        margin: 0.25em;
        cursor: pointer;
        position: relative;

        .moveItem {
            position: absolute;
            left: 0;
            top: 0;
            width: 50px;
            height: 100%;
            cursor: pointer;
            font-size: 20px;
        }

        transition-property: background-color, color;
        transition-duration: 0.5s;

        &:hover {
            background-color: #bac8db;
        }

        .subItems {
            &:first-of-type {
                margin-top: 0.5em;
            }

            margin: 0.1em 0 0.1em 2em;
        }


    }
</style>
