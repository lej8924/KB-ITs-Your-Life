<template>
    <div>
      <h3>당신이 경험한 프론트 엔드 기술은?(첫번째:Slot사용(X))</h3>
      <CheckBox v-for="item in items" :key="item.id" :id="item.id" :label="item.label"
          :checked="item.checked" @check-changed="CheckBoxChanged">
      </CheckBox>
    </div>
</template>

<script>
import CheckBox from './CheckBox.vue';

export default {
    name : "NoSlot",
    components : { CheckBox },
    data() {
        return {
            items : [
                { id:"V", checked:true, label:"Vue" },
                { id:"A", checked:false, label:"Angular" },
                { id:"R", checked:false, label:"React" },
                { id:"S", checked:false, label:"Svelte" },
            ]
        }
    },
    methods : {
        CheckBoxChanged(e) {
            let item = this.items.find((item)=> item.id === e.id);
            item.checked = e.checked;
        }
    }
}
</script>
