<template>
    <div class="home">
        <History/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import History from '@/components/History.vue'

    export default {
        name: 'HistoryPage',
        components: {
            History
        }
    }
</script>