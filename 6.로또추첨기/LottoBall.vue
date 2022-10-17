<template>
    <div class="ball" :style="setBackground">{{number}}</div>
</template>
<script>
    export default {
        name: 'LottoBall',
        props: {
            number: Number,
        },
        computed: {
            setBackground(){
                let background, color;
                if(this.number <= 10){
                    background = 'red';
                    color = 'white';
                }
                else if(this.number <= 20){
                    background = 'orange';
                }
                else if(this.number <= 30){
                    background ='yellow';
                }
                else if(this.number <= 40){
                    background = 'blue';
                    color = 'white';
                }
                else{
                    background = 'green';
                    color = 'white';
                }
                return {
                    background, color
                }
            }
        }
    }
</script>
<style scoped>
    .ball {
        display: inline-block;
        width: 40px; height: 40px;
        line-height: 40px;
        border: 1px solid #000;
        border-radius: 50%;
        font-size: 20px;
        text-align: center;
        margin-right: 20px;
    }
</style>