<template>
  <div class="navigation">
    <div class="bar">
      <div
        v-for="(nav, i) in items"
        :key="i"
        class="nav-item"
        :class="{'active' : currentView === nav.component}"
        @click="toggleNav(nav)">
        {{ nav.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    items: {
      type: Array,
      default: () => {}
    },
    currentView: {
      type: String,
      default: 'Landing'
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
.navigation {
  display: flex;
  justify-content: center;
  padding: 20px;
  border-bottom: 1px solid var(--secondary);
}
.bar {
  width: 400px;
  display: flex;
  justify-content: center
}
.nav-item {
  cursor: pointer;
  min-width: 140px;
  text-align: center;
  padding: 5px;
  border-bottom: 2px solid transparent;
  margin: 3px;
  transition: border-color 0.6s linear;
}
.nav-item:hover {
  border-bottom-color: var(--primary);
}
.active {
  border-bottom-color: var(--tertiary);
}
</style>
