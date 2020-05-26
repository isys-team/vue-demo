<template>
    <div class="home home-grid">
        <div class="controls">
            <HistoryControls/>
        </div>
        <div class="content">
            <Columns/>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Columns from '@/components/Columns.vue'
    import HistoryControls from "@/components/HistoryControls";

    export default {
        name: 'HomePage',
        components: {
            Columns,
            HistoryControls
        }
    }
</script>

<style lang="scss">
    .home-grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 50px 1fr;
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