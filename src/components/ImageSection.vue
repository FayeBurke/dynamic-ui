<template>
  <div class="image-section">
    <img
      :src="imageImport"
      :alt="image.alt"
      class="background">
    <div class="content-container">
      <div class="content">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageSection',
  components: {
  },
  props: {
    content: {
      type: String,
      default: '',
    },
    image: {
      type: Object,
      default: () => {},
    }
  },
  computed: {
    imageImport: function() {
      if (!this.image) return '';
      return require(`../assets/${this.image.src}`)
    }
  }
}
</script>

<style scoped>
.image-section {
  overflow: hidden;
  position: relative;
  height: 350px;
}
.background {
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 100%;
  background-size: cover;
}
.content-container {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
}
.content {
  margin: 0 0 0 150px;
  vertical-align: middle;
  position: absolute;
  z-index: 1;
}
</style>
