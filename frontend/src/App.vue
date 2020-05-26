<template>
    <div id="app">
        <div class="grid-container">
            <div class="Header">
                <div id="nav">
                    <router-link to="/">Главная страница</router-link>
                    |
                    <router-link to="/history">История</router-link>
                </div>
                <img alt="Vue logo" src="./assets/logo.png">
            </div>
            <div class="MainContainer">
                <router-view/>
            </div>
        </div>

    </div>
</template>

<style lang="scss">
    body {
        margin: 0;
        padding: 0;
    }

    h1 {
        text-align: center;
    }

    .grid-container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 280px 1fr;
        gap: 1px 1px;
        grid-template-areas: "Header" "MainContainer";
        height: calc(100vh - 10px);
    }

    .Header {
        grid-area: Header;
        text-align: center;
    }

    .MainContainer {
        grid-area: MainContainer;
        height: calc(100vh - 1px - 280px - 1px - 10px); /* -1px: gaps*/
        & > * {
            height: inherit;
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
