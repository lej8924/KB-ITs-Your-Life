<script setup>
import axios from 'axios';

const requestAPI = () =>{
  const url = '/api/todolist/gdhong';
  axios.get(url).then((response)=>{
    console.log("응답객체 : ",response);
  })
}

requestAPI();
</script>

<template>
  <main>
    <h2>콘솔을 확인합니다</h2>
  </main>
</template>

<style scoped>

</style>
