// import Vue from 'vue'; //package에서 vue 가져오기

import { createApp } from 'vue'
import NumberBaseball from './NumberBaseball.vue'; //NumberBaseball vue 파일 가져오기
//웹팩 설정에서 extensions 설정했기에 .vue 파일명 없어도 알아서 파일 찾아주기

// new Vue(NumberBaseball).$mount('#root'); //Vue 인스턴스
createApp(NumberBaseball).mount('#root')