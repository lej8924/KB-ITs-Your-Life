<template>
    <ul>
        <SongListItem v-for="s in songs" :key="s.id" :song="s"></SongListItem>
    </ul>
    <div>체크된 곡 수 : {{doneCount}}</div>
</template>

<script>
import SongListItem from "./SongListItem.vue"
    export default {
        name : "SongList",
        components : {SongListItem},
        props : ["songs"],
        inject:["doneCount"]
    }
</script>

<style lang="scss" scoped>

</style>