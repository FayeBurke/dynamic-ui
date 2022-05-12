<template>
  <div class="footer">
    <div class="nav-items">
      <div
        class="link"
        v-for="(nav, i) in items"
        :key="i"
        @click="toggleNav(nav)">
        {{ nav.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    items: {
      type: Array,
      default: () => {}
    }
  },
  methods: {
    toggleNav: function(evt) {
      this.$emit('navChanged', evt)
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: var(--primary);
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
}
.link {
  cursor: pointer;
}
</style>
