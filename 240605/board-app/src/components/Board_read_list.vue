<template>
    <div class="row">
        <div class="col p-3">
            <router-link class="btn btn-primary" to="/create">
            Create New Post
            </router-link>
            <button class="btn btn-primary ms-1" @click="fetchPost">새로 고침</button>
        </div>
    </div>
    <table class="table table-striped">
        <thead>
        <th>id</th><th>first</th><th>last</th><th>email</th><th>gender</th>
        </thead>
        <tbody>
            <tr v-for="user in users" @click="router.push(`/read_one/${user.id}`)">
                <td v-for="item in user">{{ item }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import {inject} from 'vue';
import { useRouter,useRoute } from 'vue-router';

const users = inject('users');
const { fetchPost } =inject('actions');

const router = useRouter();
// const currentRoute = useRoute();

// console.log("지금 id",currentRoute.params.id);



</script>