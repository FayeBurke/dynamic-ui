<template>
  <div class="info-section" :class="orientation">
    <div class="content">
      <h1 v-if="!!header.length">
        {{ header }}
      </h1>
      <div
        v-for="(line, i) in content"
        :key="i">
        {{ line }}
      </div>
    </div>
    <div v-if="!!injectables.length">
      <component
        v-for="(injectable, i) in injectables"
        :key="i"
        :is="injectable.component"
        v-bind="injectable" />
    </div>

    <img
      v-if="decal"
      :src="imageImport"
      :alt="decal.alt"
      class="background">
  </div>
</template>

<script>
export default {
  name: 'InfoSection',
  props: {
    orientation: {
      type: String,
      default: 'center'
    },
    header: {
      type: String,
      default: ''
    },
    content: {
      type: Array,
      default: () => {}
    },
    injectables: {
      type: Array,
      default: () => [],
    },
    decal: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    imageImport: function() {
      if (!this.decal) return '';
      return require(`../assets/${this.decal.src}`)
    }
  }
}
</script>

<style scoped>
  .info-section {
    display: flex;
    align-items: center;
    height: 450px;
    background-color: var(--light-grey);
  }
  .content {
    padding: 0 10% 0 10%;
    max-width: 50%;
    font-family: regularFont;
  }
  .left {
    flex-direction: row-reverse;
  }
  .center {
    justify-content: center;
  }
  .background {
    position: absolute;
    right: 0;
    min-width: 100%;
    height: 450px;
    background-size: cover;
  }
</style>
