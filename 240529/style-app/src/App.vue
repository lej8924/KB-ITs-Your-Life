<script>
import Child1 from "./components/Child1.vue"
import Child2 from "./components/Child2.vue"
import Child3 from "./components/Child3.vue"

export default{
  components : {Child1,Child2,Child3}
}
</script>

<template>

  <main>
    <Child1></Child1>
    <Child2></Child2>
    <Child3></Child3>
  </main>
</template>

<style scoped>

</style>
