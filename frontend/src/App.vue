<template>
    <div id="app">
        <div class="grid-container">
            <div class="Header">
                <div id="nav">
                    <router-link to="/">Главная страница</router-link>
                    |
                    <router-link to="/history/">История</router-link>
                </div>
                <img alt="Vue logo" src="./assets/logo.png">
            </div>
            <div class="MainContainer">
                <router-view/>
            </div>
        </div>

    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        mounted() {
            this.getDataFromServer();
        },
        methods: {
            ...mapActions('columns', ['getDataFromServer']),
        }
    }
</script>

<style lang="scss">
    body {
        margin: 0;
        padding: 0;
    }

    h1 {
        text-align: center;
    }


    button {
        padding: 0.5em;
        text-align: center;
    }

    button, input {
        height: 32px;
        box-sizing: border-box;
    }

    .home {
        height: inherit;
    }

    .grid-container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 280px 1fr;
        gap: 1px 1px;
        grid-template-areas: "Header" "MainContainer";
        height: 100vh;
    }

    .Header {
        grid-area: Header;
        text-align: center;
    }

    .MainContainer {
        grid-area: MainContainer;
        overflow: hidden;

        & > * {
            height: 100%;
            overflow: hidden;
        }
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        color: #2c3e50;
    }

    #nav {
        padding: 30px;


        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
