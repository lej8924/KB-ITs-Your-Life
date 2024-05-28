<script>
import TableBox from "./components/TableBox.vue";
import ImageBox from "./components/ImageBox.vue"

export default{
  components : {TableBox,ImageBox},
  data(){
    return{
      "name" :  "kim baby",
      "age" : 1,
      "gender" : "woman",
      tmp : "https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAyNDAxMjFfMTYx%2FMDAxNzA1ODEwODQ4MDc3.1bBDcftcCbd_4SrO-vjxc3J1HjKrJ1MtM1CWUzo2n5Qg.88JbiJn6ihiusbWVXKpNMsL-tkaKzOrzEbNUWIXNIEgg.PNG%2FIAjD7zupfeWdiWGJQfROgiG1zbRI.jpg&type=a340"
    }
  }
}
</script>

<template>
  <main>
    <ImageBox v-bind:src="tmp">
    </ImageBox>
    <TableBox>
    </TableBox>

  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
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
