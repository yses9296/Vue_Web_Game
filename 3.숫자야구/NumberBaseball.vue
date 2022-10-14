<template>
    <div>
        <h1>{{result}}</h1>
        <form @submit.prevent="onSubmitForm">
            <input maxlength="4" minlength="4" v-model="value" ref="answer">
            <button type="submit">Submit</button>
        </form>
        <div>Try: {{tries.length}}</div>
        <!-- <div>Answer is : {{answer}}</div> -->
        <ul>
            <li v-for="t in tries">
                <p>{{t.try}}</p>
                <p>{{t.result}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    const getNumbers = () => {
        const candidates = [1,2,3,4,5,6,7,8,9];
        const array = [];
        for (let i = 0; i < 4; i++){
            const chosen = candidates.splice(Math.floor(Math.random() * (9-i)), 1)[0];
            array.push(chosen);
        }
        return array
    }

    export default {
        data(){
            return {
                answer: getNumbers(),
                tries: [],
                value: '',
                result: ''
            }
        },
        methods: {
            onSubmitForm(e){
                if(this.value === this.answer.join('')){
                    this.tries.push({
                        try: this.value,
                        result: 'Homerun'
                    }); 
                    this.result = 'Homerun';
                    this.answer = getNumbers();
                    this.value = '';
                    this.tries = [];
                    this.$refs.answer.focus();
                    alert('Re-play');
                }
                else {
                    if(this.tries.length >= 9) { //10번째 시도
                        this.result = `You tried over ten times! The answer was ${this.answer.join('')}`;
                        this.answer = getNumbers();
                        this.value = '';
                        this.tries = [];
                        this.$refs.answer.focus();
                        alert('Re-play');
                    }
                    let strike = 0;
                    let ball = 0;
                    const answerArray = this.value.split('').map( v => parseInt(v) ); //문자열을 숫자로 분해해서 숫자열로 변환하는 과정
                    for (let i = 0; i < 4; i++){
                        if(answerArray[i] === this.answer[i]){ //숫자 맞고 자릿수까지 모두 정답일 때
                            strike++;
                        }
                        else if (this.answer.includes(answerArray[i])){ //숫자만 존재했을 떄
                            ball++;
                        }
                    }

                    this.tries.push({
                        try: this.value,
                        result: `${strike} Strike, ${ball} Ball`
                    })
                    this.value = '';
                    this.$refs.answer.focus();
                }
            }
        }
    }
</script>
<style>

</style>