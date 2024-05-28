<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

export default{
  data(){
    return{
      "myLove" : [{"coffee" : "아이스 라떼","juice" : "블루베리 쥬스","salad":"치킨 샐러드"}],
      "src" : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA1MDNfMzkg%2FMDAxNzE0NzA3NDk2Nzc5.oS9HSM38mILTyt9chT4_9TTkltmtn82eq3iBFhh0-oMg.G74bll9X0w3DnmDrNEm1yX0nHX34jW7VHR9-8wnGRzEg.PNG%2Fimage.png&type=a340"
    }
  }
}
</script>

<template>

  <main>
    <center>
    <img v-bind:src>
    <table>
      <thead>
        <td>좋아하는 커피 종류</td>
        <td>좋아하는 쥬스 종류</td>
        <td>좋아하는 샐러드 종류</td>
      </thead>
      <tr v-for="love in myLove">
        <td>{{ love.coffee }}</td>
        <td>{{ love.juice }}</td>
        <td>{{ love.salad }}</td>
      </tr>
    </table>
  </center>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;

}
table,td{
  border:1px solid black;
  border-collapse: collapse;
  font-weight: bold;
}
thead{
  background-color: aqua;
}
tr{
  background-color: yellow;
}
td{
  padding:40px 4px 40px 4px;
  text-align: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
