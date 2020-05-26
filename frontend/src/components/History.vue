<template>
    <div class="history-table">
        <div class="tableHead1">Время</div>
        <div class="tableHead2">Операция</div>
        <div class="tableHead3">Информация об элементе</div>
        <div class="Data">
            <div class="dataRow" v-for="(historyRecord,index) in filteredHistoryRecord" :key="index">
                <div class="column1">{{historyRecord.time | formatTime}}</div>
                <div class="column2">{{historyRecord.operation}}</div>
                <div class="column3">id: {{historyRecord.item.id}}, name: {{historyRecord.item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        props: {
            historyFilter: {
                type: String,
                default: 'all'
            }
        },
        filters: {
            formatTime(timestamp) {
                const dateTime = new Date(timestamp);
                return dateTime.toISOString().substr(11, 8);
            }
        },
        computed: {
            ...mapState('history', ['historyRecords', 'operationTypes']),
            filteredHistoryRecord() {
                switch (this.historyFilter) {
                    case 'add': {
                        return this.historyRecords.filter((historyItem) => historyItem.operation === this.operationTypes.add)
                    }
                    case 'remove': {
                        return this.historyRecords.filter((historyItem) => historyItem.operation === this.operationTypes.remove)
                    }
                }
                return this.historyRecords;
            }
        }
    }
</script>

<style lang="scss">
    @mixin gridColumnsWidth {
        display: grid;
        grid-template-columns: 100px 150px 1fr;
        gap: 0 0;
    }

    .history-table {
        width: 1000px;
        margin: auto;
        height: 100%;

        @include gridColumnsWidth;
        grid-template-rows: 1.5em 1fr;

        grid-template-areas: "tableHead1 tableHead2 tableHead3" "Data Data Data";
    }

    .tableHead1, .tableHead2, .tableHead3 {
        text-align: center;
        font-weight: 700;
    }

    .tableHead1 {
        grid-area: tableHead1;
        border-bottom: 2px solid #42b983;
    }

    .tableHead2 {
        grid-area: tableHead2;
        border-bottom: 2px solid #42b983;
    }

    .tableHead3 {
        grid-area: tableHead3;
        border-bottom: 2px solid #42b983;
    }

    .Data {
        grid-area: Data;
        overflow: auto;
    }

    .dataRow {
        @include gridColumnsWidth;
        grid-template-rows: 1fr;
        grid-template-areas: "column1 column2 column3";
    }

    .column1, .column2, .column3 {
        padding: 0 0.5em;
    }

    .column1 {
        grid-area: column1;

        border-right: 1px solid #42b983;
    }

    .column2 {
        grid-area: column2;
        border-right: 1px solid #42b983;
    }

    .column3 {
        grid-area: column3;
    }
</style>