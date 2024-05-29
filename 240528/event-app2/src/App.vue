<script>
import ImageBox from "./components/ImageBox.vue"
import InfoBox from "./components/InfoBox.vue"
import TopMenu from "./components/TopMenu.vue"

export default{
  components:{ImageBox,InfoBox,TopMenu},
  data(){
    return{
      cart : ""

    }
  },
  methods:{
    handle_img(){
      const img = this.$refs.info.getData();
      this.received(img);
    },
    received(data){
      this.cart = data
    }
  }
}
</script>

<template>
  <header>
    <TopMenu></TopMenu>
  </header>
  <br>

  <main>
    <ImageBox ref="info"></ImageBox>
    <div class="cart">
      <span class="cart_tag">장바구니 가기</span>
      <img v-bind:src="cart">
    </div>
    <br>
    <br>
    <InfoBox @request_img="handle_img"></InfoBox>
    
  </main>
</template>

<style>
.cart{
  background-color: bisque;
  width:300px;
  height:300px;
  padding-left: 75px;
  padding-top: 30px;
  float:left;

}
.cart_tag{
  background-color: white;
  color:black;
  padding:10px;
  text-align: center;
  border-radius: 6px;
}
</style>
