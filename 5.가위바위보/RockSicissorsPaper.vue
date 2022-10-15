<template>
    <div id="container">
        <div id="computer" :style="computedStyleObj"></div>
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
    // background-position 설정
    const rspCoords = {
        Rock: '0',
        Sicissor: '-142px',
        Paper: '-284px'
    }
    export default {
        data(){
            return {
                imgCoord: rspCoords.Rock,
                result: '',
                score: 0
            }
        },
        computed: {
            computedStyleObj(){ 
                return{
                    backgroundImage: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`
                }
            }
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