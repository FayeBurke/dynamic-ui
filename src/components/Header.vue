<template>
  <div class="header">
    <div class="title">
      <div class="logo">
        <img src="../assets/bulb.png" alt="Bulb">
      </div>
      <div>
        H E A D E R Goes Here!
      </div>
    </div>
    <div class="title right">
      Outlook in Location- Light and Bright
      <span class="sun">
        <img src="../assets/sun.png" alt="Bulb">
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.header {
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
}
.title {
  display: flex;
  align-items: center;
  height: 70px;
  font-size: 18px;
}
.logo, .sun {
  padding: 0 15px 0 15px;
}
.logo > img,  .sun > img{
  height: 50px;
}
.right {
  font-family: lightFont;
  font-size: 16px;
}
</style>
