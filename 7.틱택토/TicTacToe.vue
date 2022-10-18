<template>
    <div id="container">
        <table-component :table-data="tableData"></table-component>

        <p>{{turn}} Your turn</p>
    </div>
</template>
<script>

    import TableComponent from './components/TableComponent.vue';

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
                ],
                turn: 'O'
            }
        },
        computed: {
            onChangeData(){
                //this.tableData[0][1] ='X' >> 작동 X
                // Vue.set(this.tableData[1], 0, 'X')
                this.$set(this.tableData[1], 0, 'X'); //Vue.set과 동일하게 작동
            }
        },
        methods: {

        },
        mounted(){

        },
        beforeDestroy(){

        },

    }
</script>

<style>
    table {
        border-collapse: collapse;
    }
    td {
        margin: 0; padding: 0;
        width: 100px; height: 100px;
        background-color: bisque;
        border: 1px solid #000;
        text-align: center;
        font-size: 30px;
        line-height: 100px;
    }
</style>