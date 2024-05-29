<template>
    <div>

        <table>
            <tr v-for="content in contents">
                <td>{{ content }}</td>
            </tr>
            <tr><td><button>바로 주문하기</button><button @click="put_cart">장바구니에 넣기</button></td></tr>
        </table>
    </div>
</template>

<script>
    export default {
        name:"InfoBox",
        data(){
            return{
            contents:["가격:10000","aa","bb","cc","dd","ee"]
            }
        },
        methods : {
            put_cart(){
                this.$emit('request_img');
            }
        }
    }
</script>

<style>
.price{
    border: 1px solid black;
    height:150px;
    width: 400px;
    text-align: center;
    font-size: 40px;
    font-weight: bold;
}
table,td{
    width: 400px;
    border:1px solid black;
    border-collapse: collapse;
    padding:10px 50px 10px 50px;
    text-align: center;
}
button:nth-child(1){
    border-radius: 2px;
    background-color: blue;
    color: aliceblue;
}
button:nth-child(2){
    border-radius: 2px;
    background-color: red;
    color: aliceblue;
}
</style>