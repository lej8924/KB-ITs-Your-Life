import { createRouter,createWebHistory,isNavigationFailure } from "vue-router";

import Board_create from "@/components/Board_create.vue";
import Board_read_list from "@/components/Board_read_list.vue";
import Board_read_one from "@/components/Board_read_one.vue";
import Board_update from "@/components/Board_update.vue";
import NotFound from "@/components/NotFound.vue";

const router = createRouter({
    history : createWebHistory(),
    routes : [
    {path : '/create',name:'create',component:Board_create},
    {path : '/',name:'read_list',component : Board_read_list},
    {path : '/read_one/:id',name:'read_one',component : Board_read_one},
    {path : '/update/:id',name:'update',component : Board_update},
    {path : '/:paths(.*)*',name:'NotFound',component:NotFound}
    ]
})

export default router;