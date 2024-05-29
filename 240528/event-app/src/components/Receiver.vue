<template>
    <div id="wrapper">
        <h2>Receiver</h2>
        <hr>
        <h2>전송된 텍스트:</h2>
        <span>{{ received }}</span>
    </div>
</template>

<script>
export default {
    name : "Receiver",
    created(){
        this.emitter.on("message",this.receiveHandler);
    },
    data(){
        return{
            received : ""
        }
    },
    methods:{
        receiveHandler(msg){
            this.received = msg;
        }
    }
}
</script>

<style>

</style>