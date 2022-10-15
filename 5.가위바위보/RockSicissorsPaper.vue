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
        Sicissor: '-136px',
        Paper: '-266px'
    }
    const scores = {
        Sicissor: 1,
        Rock: 0,
        Paper: -1
    }
    const computerChoice = (imgCoord) => {
        return Object.entries(rspCoords).find( (v) => {
            return v[1] === imgCoord;
        })[0];
    }
    let interval = null;
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
                    background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`
                }
            }
        },
        methods: {
            changeHand(){
                interval = setInterval(() => { //바위에서 가위, 가위에서 보, 보에서 바위로 이미지를 계속해서 변경
                    if(this.imgCoord === rspCoords.Rock){
                        this.imgCoord = rspCoords.Sicissor
                    }            
                    else if(this.imgCoord === rspCoords.Sicissor){
                        this.imgCoord = rspCoords.Paper
                    }            
                    else if(this.imgCoord === rspCoords.Paper){
                        this.imgCoord = rspCoords.Rock
                    }            
                }, 100);
            },
            onClickButton(value){
                clearInterval(interval);
                const myScore = scores[value];
                const cpuScore = scores[computerChoice(this.imgCoord)];
                const diff = myScore - cpuScore;

                console.log("scores array", scores);
                console.log("myScore", myScore);
                console.log("cpuScore", cpuScore);

                if(diff === 0){
                    this.result = 'Same'
                }
                else if( [-1, 2].includes(diff)){
                    this.result = 'You win';
                    this.score += 1;
                }
                else {
                    this.result = 'You lose';
                    this.score -= 1;
                }
                setTimeout( () => {
                    this.changeHand();
                }, 700)
            }
        },
        beforeCreate(){},
        created(){

        },
        beforeMounte(){},
        mounted(){
            this.changeHand();
        },
        beforeUpdate(){},
        updated(){

        },
        beforeDestroy(){
            clearInterval(interval); //쓸데없는 코드 정지
        },
        destroyed(){

        },
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
        width: 148px; height: 230px;
        margin: 0 auto;
    }
</style>