<template>
    <div id="container">
        <div>
            <p>당첨 숫자</p>
            <div id="result_container">
                <lotto-ball v-for="ball in winBalls" number="5"></lotto-ball>
            </div>
        </div>
        <div>
            <p>Bonus!</p>
            <lotto-ball v-if="bonus"></lotto-ball>
            <button v-if="redo">Try it again</button>
        </div>
    </div>
</template>
<script>
    function getWinNumbers(){
        const candidate = Array(45).fill().map( (v, i) => i + 1); //
        const shuffle = [];
        while(candidate.length > 0){
            shuffle.push( candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0] );
        }

        const bonusNumber = shuffle[shuffle.length - 1];
        const winNumbers = shuffle.slice(0, 6).sort( (p, c) => p - c);

        return [...winNumbers, bonusNumber];
    }
    export default {
        data(){
            return {
                winBalls: [],
                bonus: null,
                redo: false,
            }
        },
        computed: {

        },
        methods: {

        },
        mounted(){},
        beforeDestroy(){},
        watch: {

        },
    }
</script>
<style scoped>
    #container {
        width: 300px;
        margin: 0 auto;
        background-color: #dbdbdb;
    }
</style>