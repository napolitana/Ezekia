<template>
  <div :class="$style.loader"></div>
</template>

<script>
  export default {}
</script>

<style lang="scss" module>
  .loader {
    border: 16px solid $grey;
    border-radius: 50%;
    border-top: 16px solid $primary-color;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
