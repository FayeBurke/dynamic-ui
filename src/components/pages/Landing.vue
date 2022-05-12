<template>
  <div>
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
  name: 'Landing',
  props: {
    sections: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
