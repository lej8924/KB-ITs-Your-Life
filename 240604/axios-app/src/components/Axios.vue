<template>
    <div>

    </div>
</template>

<script>
import axios from 'axios';
const listUrl = "/api/todolist_long/gdhong";
const todoUrlPrefix = "/api/todolist_long/gdhong/";

const requestAPI = () =>{
    axios
    .get(listUrl)
    .then((response)=>{
        todoList = response.data;
        console.log("## To do list: ",todoList);
        return todoList[0].id;
    })
    .then((id)=>{
        return axios.get(todoUrlPrefix+id);
    })
    .then((response)=>{
        console.log("## 첫 번째 todo :",response.data);
        return todoList[1].id;
    })
    .then((id)=>{
        axios.get(todoUrlPrefix+id).then((response)=>{
            console.log("## 두 번째 todo :",response.data);
        })
    })
    requestAPI();
}
</script>

<style lang="scss" scoped>

</style>