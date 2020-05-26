<template>
    <div class="home">
        <Columns/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Columns from '@/components/Columns.vue'

    export default {
        name: 'HomePage',
        components: {
            Columns
        }
    }
</script>