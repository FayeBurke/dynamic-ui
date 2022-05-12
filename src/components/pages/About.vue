<template>
  <div class="about">
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
  name: 'About',
  components: {
  },
  data: function() {
    return {
    }
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
.about {

}
</style>
