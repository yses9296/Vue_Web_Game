<template>
    <div id="container">
        <table-component :table-data="tableData"></table-component>
    </div>
</template>
<script>

    import TableComponent from './components/TableComponent.vue'
    export default {
        components: {
            'table-component' : TableComponent
        },
        data(){
            return {
                tableData: [
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', '']
                ]
            }
        },
        computed: {

        },
        methods: {

        },
        mounted(){

        },
        beforeDestroy(){

        },

    }
</script>
<style scoped>
    #container {
        width: 500px;
        margin: 0 auto;
    }
</style>