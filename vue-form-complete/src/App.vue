<template>
  <div>
    <form v-on:submit.prevent="submitForm">
      <div>
        <label for="username">id: </label>
        <!--v-model username에 입력한 값이 바로 적용 됨-->
        <input id="username" type="text" v-model="username">
      </div>
      <div>
        <label for="password">pw: </label>
        <input id="password" type="password" v-model="password">
      </div>
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: function(){
    return{
      username: '',
      password: ''
    }
  },
  methods: {
    submitForm: function() {
      //새로고침 방지
      // event.preventDefault();
      console.log(this.username, this.password);
      //https://jsonplaceholder.typicode.com/todos/1
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      });
    }
  }
}
</script>

<style>

</style>
<!--
Reactivity
인스턴스
컴포넌트, 컴포넌트 통신
-props, event emit
http통신 라이브러리 axios
템플릿 문법-데이터 바인딩, 뷰 디렉티브
vue cli
싱글 파일 컴포넌트
-->