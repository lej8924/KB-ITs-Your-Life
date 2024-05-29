<script>
import CheckBoxItem from './components/CheckBoxItem.vue'
export default{
  components:{CheckBoxItem},
  data(){
    return{
      idols:[
        {id:1,name:"BTS",checked:true},
        {id:2,name:"Black Pink",checked:false},
        {id:3,name:"EXO",checked:false},
        {id:4,name:"ITZY",checked:false},
      ]
    }
  }
}
</script>

<template>

  <main>
    <h2>관심있는K-POP 가수?</h2>
    <hr>
    <ul>
      <CheckBoxItem v-for="idol in idols" :key="idol.id" v-bind="idol"></CheckBoxItem>
    </ul>
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
