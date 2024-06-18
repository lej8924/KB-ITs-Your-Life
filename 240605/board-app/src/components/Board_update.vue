<template>
    <div class="row">
        <div class="col p-3">
            <h2>Edit Post</h2>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="form-group">
                <label htmlFor="gender">First Name</label>
                <textarea class="form-control" rows="3" id="gender" v-model="postItem.desc"></textarea>
            </div>
            <div class="form-group">
                <label htmlFor="gender">Last Name</label>
                <textarea class="form-control" rows="3" id="gender" v-model="postItem.desc"></textarea>
            </div>
            <div class="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" class="form-control" id="email" v-model="postItem.todo" />
            </div>
            <div class="form-group">
                <label htmlFor="gender">Gender</label>
                <textarea class="form-control" rows="3" id="gender" v-model="postItem.desc"></textarea>
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-primary m-1" @click="updatePostHandler">
                  Update
                </button>
                <button type="button" class="btn btn-primary m-1" @click="router.push('/')">
                  Cancel
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const currentRoute = useRoute();

const users = inject('users');
const { updatePost } = inject('actions');

console.log("update",users)

// const matchedPost = users.value.find((item)=> item.id === parseInt(currentRoute.params.id))
// if (!matchedPost)  { 
//     router.push('/'); 
// }
const postItem =  reactive({ ...matchedPost })

// const updatePostHandler = () => {
//     let { post } = postItem;
//     updatePost({ ...postItem }, ()=>{
//         router.push('/');
//     });
// }
</script>
