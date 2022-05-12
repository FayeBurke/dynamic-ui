<template>
  <div class="contact">
    <component
      class="standard"
      v-for="(comp, i) in sections"
      :key="i"
      :is="comp.type"
      v-bind="{...comp.props}" />
  </div>
</template>

<script>

export default {
  name: 'Contact',
  components: {
  },
  props: {
    sections: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.contact {

}
</style>
