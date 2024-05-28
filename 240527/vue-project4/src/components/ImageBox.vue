<template>
    <img :src="tmp">
</template>

<script>
    export default {
        name:"ImageBox",
        props : ["tmp"]
    }
</script>

<style scoped>
img{
    width: 300px;
}
</style>