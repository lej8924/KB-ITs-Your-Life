<template>
    <div id="wrapper">
        <h2>Sender</h2>
        <hr>
        <button @click="check_time">이벤트 발신</button>
    </div>
</template>

<script>
    export default {
        name:"Sender",
        data() {
            return{
                timestamp : 0
            }
        },
        methods:{
            check_time(){
                this.emitter.emit("message" , Date.now() + "에 발신된 메시지");
                console.log("##이벤트 로그 : message ->"+Date.now() + "에 발신된 메시지");
                
            }
        }
    }
    
</script>

<style scoped>

</style>