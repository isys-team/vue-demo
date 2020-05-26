<template>
    <div class="home history-grid">
        <div class="controls">
            <HistoryControls/>
            <h1 v-if="historyFilter === 'add'">Фильтр: операция = добавление</h1>
            <h1 v-else-if="historyFilter === 'remove'">Фильтр: операция = удаление</h1>
            <h1 v-else>История операций</h1>
        </div>
        <div class="content">
            <History :historyFilter="historyFilter"/>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import History from '@/components/History.vue'
    import HistoryControls from "@/components/HistoryControls";

    export default {
        name: 'HistoryPage',
        props: {
            historyFilter: {
                type: String,
                default: 'all'
            }
        },
        components: {
            History,
            HistoryControls
        }
    }
</script>

<style lang="scss">
    .history-grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 125px 1fr;
        gap: 0 0;
        height: 100%;
        grid-template-areas: "controls" "content";
    }

    .controls {
        grid-area: controls;
    }

    .content {
        grid-area: content;
        overflow: hidden;
    }
</style>