<template>
  <header id="header" class="py-1rem">
    <div class="container d-grid">
      <div class="col-4">
        <img src="/logo-horizontal.png" alt="Logo Web" class="logo-web">
      </div>
      <div class="col-4"></div>
      <div class="col-4"></div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
#header {
  background-color: white;
  box-shadow: 10px 0 20px rgba($color: #000000, $alpha: 0.20);
  position: sticky;
  top: 0;
  left: 0;
  .logo-web {
    height: 50px;
  }
}
</style>