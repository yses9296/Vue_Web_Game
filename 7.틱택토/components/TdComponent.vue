<template>
    <td @click="onClickTd">{{cellData}}</td>
</template>
<script>
    export default {
        name: 'TdComponent',
        props: {
            cellData: String,
            cellIndex: Number,
            rowIndex: Number,
        },
        methods: {
            onClickTd(){
                const rootData = this.$root.$data;
                console.log(rootData);
                
                this.$set(rootData.tableData[this.rowIndex], this.cellIndex, rootData.turn);
                rootData.turn = this.$root.$data.turn === 'O' ? 'X' :'O';
            }
        }
    }
</script>
