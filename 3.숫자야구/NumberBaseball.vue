<template>
    <div>
        <h1>{{result}}</h1>
        <form v-on:submit="onSubmitForm">
            <input maxlength="4" v-model="value" ref="answer">
            <button>Submit</button>
        </form>
        <div>Try: {{}}</div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                value: '',
                result: ''
            }
        },
        methods: {
            onSubmitForm(e){
                e.preventDefault();
                this.$refs.answer.focus();
            }
        }
    }
</script>
<style>

</style>