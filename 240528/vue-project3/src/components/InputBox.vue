<template>
    <div>
        <div>
            이름 :<input type="texxt" v-model="name">
            <button @click="show_name">이름입력 전송</button>
        </div>
        <div id="result" style="visibility:hidden">
            {{ name }}님이 인기 짱이야!!
        </div>
    </div>
</template>

<script>
    export default {
        name : "InputBox",
        data(){
            return{
                name:name
            }
        },
        methods : {
            show_name(){
                let res = document.getElementById("result");
                res.style.visibility = "visible";

            }
        }
        
    }
</script>

<style>
    #id{
        background-color: yellow;
    }
</style>