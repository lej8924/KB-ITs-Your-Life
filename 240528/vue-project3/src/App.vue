<script>
import InputBox from './components/InputBox.vue';
import CheckboxItem from './components/CheckboxItem.vue';

export default{
  components : {CheckboxItem,InputBox},
  data(){
    return{
      idols:[
        {id:1,name:"1-BTS",checked:true},
        {id:2,name:"2-Black Pink",checked:false},
        {id:3,name:"3-EXO",checked:false},
        {id:4,name:"4-ITXY",checked:false},
      ]
    }
  }
}
</script>

<template>
  <center>
    <div>
      관심있는 그룹을 선택하고, 이름을 입력
    </div>
    <ul>
      <CheckboxItem v-for="idol in idols" :key="idol.id" :name="idol.name" :checked="idol.checked"></CheckboxItem>
    </ul>
    <InputBox></InputBox>

  </center>
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
