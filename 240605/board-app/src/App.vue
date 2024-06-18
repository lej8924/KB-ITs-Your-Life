<template>
  <div class="container">
    <Header></Header>
    <router-view></router-view>
    <Loading v-if="states.isLoading" />
  </div>

</template>

<script setup>
import { reactive,computed,provide } from 'vue';
import Header from './components/Header.vue';
import Loading from '@/components/Loading.vue'
import axios from 'axios';

const listUrl = "/api/users";
// const todoUrlPrefix = "/api/todolist_long/gdhong/";
const states = reactive({ users:[], isLoading:false })


const BASEURI = "http://localhost:3001/users";
// const owner = "1";

const fetchPost = async () => {
  states.isLoading = true;
  try {
    const response = await axios.get(BASEURI);
    if (response.status === 200) {
        states.users = response.data;
        console.log("fetch : ",states.users[0]);
    } else {
        alert('데이터 조회 실패');
    }
  } catch(error) {
    alert('에러발생 :' + error);
  }
  states.isLoading = false;
}

// 새로운 post를 추가합니다.
const addPost = async ({ first_name,last_name,email,gender }, successCallback) => {
  states.isLoading = true;
  try {
    const payload = { first_name,last_name,email,gender };
    const response = await axios.post(BASEURI , payload)
    console.log("hello",response.data);
    if (response.status === 201) {
      console.log("teest",response.data.id);
      states.users.push({ id: response.data.id, first_name,last_name,email,gender })
      successCallback();
    } else {
      alert('Post 추가 실패 : ' + response.data.message);
    }
  } catch(error) {
    alert('에러발생 :' + error);
  }
  states.isLoading = false;
}
// 기존 post를 변경합니다.
const updatePost = async ({ id, first_name,last_name,email,gender }, successCallback) => {
  states.isLoading = true;
  try {
    const payload = { first_name,last_name,email,gender };
    const response = await axios.put(BASEURI + `/${owner}/${id}`, payload)
    if (response.data.status === "success") {
        let index = states.users.findIndex((post) => post.id === id);
        states.users[index] = { id, first_name,last_name,email,gender };
        successCallback();
    } else {
        alert('Todo 변경 실패 : ' + response.data.message);
    }
  } catch(error) {
    alert('에러발생 :' + error);
  }
  states.isLoading = false;
}
//기존 post를 삭제합니다.
const deletePost = async (id) => {
  states.isLoading = true;
  try {
    const response = await axios.delete(BASEURI + `/${owner}/${id}`)
    if (response.data.status === "success") {
      let index = states.todoList.findIndex((todo) => todo.id === id);
      states.todoList.splice(index, 1);
    } else {
      alert('Todo 삭제 실패 : ' + response.data.message);
    }
  } catch(error) {
    alert('에러발생 :' + error);
  }
  states.isLoading = false;
}

provide('users', computed(()=>states.users));
provide('actions',{addPost, deletePost, updatePost})
fetchPost();

</script>



<style scoped>

</style>
