<script>
import SongList from './components/SongList.vue';
import Modal from './components/Modal.vue'
import { computed } from 'vue';
import Loading from './components/Loading.vue';


export default{
  components : {SongList,Modal,Loading},
  data(){
    return{
      songs : [
        {id:1,title:"Blueming",done:true},
        {id:2,title:"Dynamic",done:true},
        {id:3,title:"LoveSick",done:false},
        {id:4,title:"Maria",done:false},
      ],
      isModal:false
    }
  },
  methods:{
    changeModal(){
      this.isModal = true;
      setTimeout(()=>{this.isModal = false},2000);
    }

  },
  provide(){
    return{
      icons:{
        checked : "far fa-check-circle",
        uncheked:"far fa-circle",
      },
      doneCount : computed(() => {
        return this.songs.filter((s)=> s.done === true).length
      })
    }
  }
}
</script>

<template>
  <main>
    <div>
      <h2>
        최신 인기곡
      </h2>
      <SongList :songs="songs"></SongList>
      <br><br>
      <button @click="changeModal">Teleport를 이용한 Modal 기능</button>
      <teleport to="#modal">
        <Modal v-if="isModal"></Modal>
      </teleport>
    </div>
  </main>
</template>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css");
</style>
