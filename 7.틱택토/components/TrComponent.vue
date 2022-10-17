<template>
    <tr>
        <td-component v-for="(cellData, index) in rowData" :cell-data="cellData" :cell-index="index" :row-index="index"></td-component>
    </tr>
</template>
<script>
    import TdComponent from './TdComponent.vue'
    export default {
        props: {
            rowData: Array,
            rowIndex: Number
        },
        components: {
            'td-component': TdComponent
        }
    }
</script>