<template>
    <div>

    </div>
</template>

<script>
    import axios from 'axios';

    const listUrl = "/api/todolist_long/gdhong";
    const todoUrlPrefix = "/api/todolist_long/gdhong/";

    // const requestAPI = ()=>{
    //     let todoList;

    //     let response = await axios.get(listUrl);
    //     todoList = response.data;

    //     for(let i =0;i<todoList.length;i++){
    //         response = await axios.get(todoUrlPrefix+todoList[i].id);
    //         console.log(`## ${i+1}번째  todo :`,response.data);
    //     }
    // }
    const requestAPI = async()=>{
        try{
            const url = "/api/todolist/gdhong";
            const response = await axios.get(url);
            console.log("## 응답객체: ",response);
        }catch(e){
            console.log("## 다음 오류가 발생했습니다. ");
            if(e instanceof Error) console.log(e.message);
            else console.log(e);
        }

    }

    requestAPI();
</script>

<style lang="scss" scoped>

</style>