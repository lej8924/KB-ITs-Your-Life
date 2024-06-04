<script>
import CoralSeaTab from "./components/CoralSeaTab.vue"
import LayteGulfTab from "./components/LayteGulfTab.vue"
import MidwayTab from "./components/MidwayTab.vue"

export default{
  components : {CoralSeaTab,LayteGulfTab,MidwayTab},
  data(){
    return{
      currentTab:"CoralSeaTab",
      tabs : [
        {id:"CoralSeaTab",label : "산호해 해전"},
        {id:"MidwayTab",label : "미드웨이 해전"},
        {id:"LayteGulfTab",label : "레이테만 해전"},
      ]
    }
  },
  methods:{
    changeTab(tab){
      this.currentTab = tab;
    }
  }
}

</script>

<template>
  <h1>태평양 전쟁의 해전</h1>
  <ul>
    <li v-for="tab in tabs" :key="tab.id">
      <a style="cursor : pointer" :class="{active:tab.id===currentTab}"
      @click="changeTab(tab.id)">
      {{ tab.label }}
      </a>
    </li>
  </ul>
  <div>
    <keep-alive include="MidwayTab,CoralSeaTab">
      <component :is="currentTab"></component>
    </keep-alive>
  </div>
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
