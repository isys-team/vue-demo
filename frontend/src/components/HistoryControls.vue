<template>
    <div class="history-controls">
        <router-link class="history-button" to="/history/">История</router-link>
        <router-link class="history-button" to="/history/add">История добавлений</router-link>
        <router-link class="history-button" to="/history/remove">История удалений</router-link>
    </div>
</template>

<style lang="scss">
    .history-controls {
        text-align: right;
        padding: 10px 15px;

        .history-button {
            $background-color: #42b983;

            border: 1px solid #0e9959;
            border-radius: 5px;
            background-color: $background-color;
            text-decoration: none;
            color: #fff;
            padding: 0.5em 1em;

            margin-right: 0.5em;

            &:hover {
                background-color: darken($background-color, 20%);
            }

            &:last-of-type {
                margin-right: 0;
            }
        }
    }
</style>