<template>
  <modal-factory />
  <router-view />
</template>

<script>
import modalFactory from './components/modalFactory'

export default {
  components: { modalFactory }
}
</script>
