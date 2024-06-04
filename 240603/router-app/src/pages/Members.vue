<template>
    <div>
        <h2>Members</h2>
        <p>요청 경로: {{ currentRoute.fullPath}}</p>
        <div class="container">
            <div class="row">
                <div v-for="m in members" :key="m.id" class="col-6 col-xs-6 col-sm-4 col-md-3 col-lg-2">
                    <router-link :to="'members'+m.id">
                    </router-link>
                    <img class="img-thumnail" style="width:90px; height:110px;" :src="m.photo" :title="m.name">
                    <br>
                    <h6 class="display-7">{{ m.name }}</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import members from '@/members.json'
    import { useRoute } from 'vue-router';
    export default {
        name : "Members",
        setup(){
            const currentRoute = useRoute()
            return {currentRoute,members}
        }
    }
</script>
