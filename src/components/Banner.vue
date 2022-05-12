<template>
  <div class="banner">
    This is very important information. Please listen to this. i bet it has something to do with cookies... Or even COVID-19.
  </div>
</template>

<script>
export default {
  name: 'Banner',
}
</script>

<style scoped>
.banner {
  background-color: var(--primary);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  height: calc(var(--header-height)/2);
  display: flex;
  align-items: center;
  padding: 0px 20px 0px 20px;
}
</style>
