<template>
    <div id="container">
        <div id="computer" :style="{ backgroundImage: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg)`}"></div>
            <div class="controller">
                <button @click="onClickButton('Rock')">Rock</button>
                <button @click="onClickButton('Sicissor')">Sicissor</button>
                <button @click="onClickButton('Paper')">Paper</button>
            </div>
            <p>{{result}}</p>
            <p>Your score is {{score}}</p>
        </div>
</template>
<script>
    export default {
        data(){
            return {
                result: '',
                score: 0
            }
        },
        computed: {

        },
        methods: {
            onClickButton(value){

            }
        }
    }
</script>
<style scoped>
    #container {
        width: 200px;
        margin: 0 auto;
    }
    .controller {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    button {
        display: block;
        background-color: transparent;
        border: 1px solid #dbdbdb;
        padding: 5px 10px;
    }
    #computer {
        width: 150px; height: 230px;
        margin: 0 auto;
    }
</style>