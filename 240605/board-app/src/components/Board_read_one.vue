<template>
    <h2>Hello</h2>
    <li class="list-group-item">
        <span>Email : {{ postItem.email  }}</span>
        <br>
        <span>Gender : {{ postItem.gender  }}</span>

      <button class="btn btn-primary m-1" 
        @click="router.push(`/update/${postItem.id}`)">
        Edit</button>
      <button class="btn btn-primary m-1" 
        @click="deletePost(post.id)">
        Delete</button>
    </li>
</template>

<script setup>
import { useRouter,useRoute } from 'vue-router';
import { inject,reactive } from 'vue';
import { defineProps } from "vue";

const users = inject('users');
const { deletePost } = inject('actions');

const router = useRouter();
const currentRoute = useRoute();

console.log("now::",typeof(currentRoute.params.id));


const matchedPostItem = users.value.find((item)=> (item.id) == (currentRoute.params.id));
console.log("hello",matchedPostItem);
// if (!matchedPostItem)  { 
//     router.push('/'); 
// }

const postItem =  reactive({ ...matchedPostItem })

console.log("postItem",postItem.email);
console.log("postItem",postItem.gender);

</script>
