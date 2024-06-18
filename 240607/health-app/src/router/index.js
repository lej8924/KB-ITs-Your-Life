import { createRouter, createWebHistory } from 'vue-router'
import MemberInfo from '@/pages/MemberInfo.vue';
import PTMemberInfo from '@/pages/PTMemberInfo.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MemberInfo },
        { path: '/pt', component: PTMemberInfo },
    ]
})

export default router;