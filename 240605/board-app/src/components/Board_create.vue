<template>
    <div class="row">
        <div class="col p-3">
            <h2>Create Post</h2>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="form-group">
                <label htmlFor="first">First Name</label>
                <input type="text" required class="form-control" id="first" v-model="postItem.first_name" />
            </div>
            <div class="form-group">
                <label htmlFor="last">Last Name</label>
                <textarea class="form-control" rows="3" id="last" v-model="postItem.last_name"></textarea>
            </div>
            <div class="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" class="form-control" id="email" v-model="postItem.email" />
            </div>
            <div class="form-group">
                <label htmlFor="gender">Gender</label>
                <select v-model="postItem.gender" class="form-control" >
                    <option value="Male">Male</option>
                    <option value="FeMale">FeMale</option>
                    <option value="unknown">unknown</option>
                </select>
                {{postItem.gender}}
                <!-- <input type="text" class="form-control" id="gender" v-model="postItem.gender" /> -->
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-primary m-1" @click="addPostHandler">
                Create
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
import { useRouter } from 'vue-router';

const router = useRouter();
const { addPost } = inject('actions');
const postItem =  reactive({ first_name:"", last_name:"",email:"",gender:"" })


const addPostHandler = () => {
    let { post } = postItem;
    console.log("post",postItem);
    // if (!post || post.trim()==="") {
    //     alert('할일은 반드시 입력해야 합니다');
    //     return;
    // }
    addPost({ ...postItem }, ()=>{
        router.push('/')
    });
}
</script>