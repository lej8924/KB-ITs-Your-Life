<template>
  <div>
    <NoSlot />
    <Slot />
    <NamedSlot />
  </div>
</template>

<script>
import NoSlot from './components/NoSlot.vue'
import Slot from './components/Slot.vue'
import NamedSlot from './components/NamedSlot.vue'

export default {
  name: 'App',
  components: { NoSlot, Slot, NamedSlot }
}
</script>
