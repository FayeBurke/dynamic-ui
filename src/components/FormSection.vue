<template>
  <div class="form">
    <div class="content">
      {{ content }}
    </div>
    <vue-form-generator
      :schema="schema"
      :model="model"
      :options="options" />
  </div>
</template>

<script>
export default {
  name: 'FormSection',
  props: {
    content: {
      type: String,
      default: () => {}
    },
    schema: {
      type: Object,
      default: () => {}
    },
    options: {
      type: Object,
      default: () => {}
    },
    model: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
  .form {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 450px;
  }
  .vue-form-generator {
    width: 60%;
  }
  .left {
    flex-direction: row-reverse;
  }
  .form-control {
    resize: none !important;
  }
</style>
