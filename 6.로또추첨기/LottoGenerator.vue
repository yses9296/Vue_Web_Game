<template>
    <div id="container">
        <div>
            <p>당첨 숫자</p>
            <div id="result_container">
                <lotto-ball v-for="ball in winBalls" :key="ball" :number="ball"></lotto-ball>
            </div>
        </div>
        <div>
            <p>Bonus!</p>
            <lotto-ball v-if="bonus" :number="bonus"></lotto-ball>
            <button v-if="redo" @click="onClickRedo">Try it again</button>
        </div>
    </div>
</template>
<script>
    import LottoBall from './LottoBall';
    function getWinNumbers(){
        const candidate = Array(45).fill().map( (v, i) => i + 1); // 1,2,3, ...44, 45 값을 배열에 저장
        const shuffle = [];
        while(candidate.length > 0){
            shuffle.push( candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0] );
        } //배열을 섞어서 shuffle 배열에 넣는 과정

        const bonusNumber = shuffle[shuffle.length - 1]; //shuffle의 맨 마지막 숫자
        const winNumbers = shuffle.slice(0, 6).sort( (p, c) => p - c);

        return [...winNumbers, bonusNumber]; //일반 로또 번호 6개 + 보너스 숫자 1개
    }

    export default {
        components: {
            'lotto-ball': LottoBall //import 하기
        },
        data(){
            return {
                winNumbers: getWinNumbers(), //미리 숫자를 다 뽑아놓고
                winBalls: [], //시각적인 효과를 주기 위해, 하나씩 추가하여 하나씩 나타나도록
                bonus: null,
                redo: false,
            }
        },
        computed: {

        },
        methods: {
            onClickRedo(){
                this.winNumbers = getWinNumbers();
                this.winBalls = [];
                this.bonus = null;
                this.redo = false;
                this.displayBall();
            },
            displayBall(){
                for ( let i = 0; i < this.winNumbers.length -1; i++ ){
                    setTimeout( () => {
                        this.winBalls.push(this.winNumbers[i]);
                    }, (i+1)*1000)
                } //1초에 숫자 하나씩 표현
                setTimeout( ()=>{
                    this.bonus = this.winNumbers[6];
                    this.redo = true;
                }, 7000)
            }
        },
        mounted(){
            this.displayBall();
        },
        beforeDestroy(){},
        watch: {

        },
    }
</script>
<style scoped>
    #container {
        width: 500px;
        margin: 0 auto;
    }
</style>