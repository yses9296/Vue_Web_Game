<template>
    <div>
        <div id="screen" :class="state" @click="onClickScreen">{{message}}</div>
        <template v-show="result.length">
            <p>평균 시간: {{avg}}ms</p>
            <button @click="onReset">Reset</button>
        </template>
    </div>
</template>
<script>
    // 반응속도 계산
    let startTime = 0;
    let endTime = 0;
    let timeout = null;

    export default {
        data(){
            return {
                result: [],
                state: 'waiting',
                message: "Start with a Click"
            }
        },
        computed: {
            avg() {
                return this.result.reduce((a, c) => a +c, 0) / this.result.length || 0
            }
        },
        methods: {
            onClickScreen() {
                //차례대로 상태 변경해주기
                if(this.state === 'waiting'){
                    this.state = 'ready';
                    this.message = "Click when the screen turns blue"
                    timeout = setTimeout( () => {
                        this.state = 'now';
                        this.message="Now Click!"
                        startTime = new Date();
                    }, Math.floor(Math.random() * 1000) + 2000 ) //대략 2-3초
                }
                else if (this.state === 'ready'){
                    clearTimeout(timeout)
                    this.state = 'waiting';
                    this.message = "Don't be hasty"
                }
                else if (this.state === 'now'){
                    endTime = new Date();
                    this.state = 'waiting';
                    this.message = "Start with a Click"

                    this.result.push(endTime - startTime);
                }
            },
            onReset(){
                this.result = [];
            }
        }
    }
</script>
<style scoped>
    #screen {
        width: 500px; height: 500px;
        margin: 0 auto ;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: 800;
    }
    #screen.waiting {
        background-color: red;
    }
    #screen.ready {
        background-color: green;
    }
    #screen.now {
        background-color: blue;
    }
</style>