<template>
  <div class="table-section">
    <div class="table">
      <div
        v-for="(item, i) in content"
        :key="i">
        <div
          v-for="(part, k) in item"
          :key="k">
        {{ part }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactTable',
  props: {
    content: {
      type: Array,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.table-section {
  display: flex;
  align-items: center;
  height: 400px;
  justify-content: center;
  background-color: var(--light-grey);
}
.table {
  display: flex;
  max-width: 90%;
}
.table > div {
  border-left: 1px solid var(--tertiary);
  padding: 0 15px 0 15px;
  text-align: center;
}
.table > div:first-child {
  border-left: none;
}

.table > div > div:first-child {
  font-size: 22px;
  margin: 0 0 10px 0;
}
.table > div > div:last-child {
  font-family: regularFont;
}
</style>
