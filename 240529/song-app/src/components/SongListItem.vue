<template>
    <li>
        <i :class="song.done ? icons.checked:icons.uncheked"></i>
        {{ song.title }}
    </li>
</template>

<script>
    export default {
        name : "SongListItem",
        props : ["song"],
        inject : ["icons"]
    }
</script>
