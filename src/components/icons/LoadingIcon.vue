<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
    <circle cx="20" cy="20" r="15.9154943092" stroke-width="1" fill="none"/>
  </svg>
</template>
<style scoped>
@keyframes a {
  from {
    stroke-dasharray: 100 0;
  }
  50% {
    stroke-dasharray: 0 100;
  }
  to {
    stroke-dasharray: 100 0;
  }
}
@keyframes o {
  from {
    stroke-dashoffset: 75;
  }
  to {
    stroke-dashoffset: 375;
  }
}
circle {
  transform: rotateY(180deg);
  transform-origin: center;
  animation:
    4s a infinite linear,
    3s o infinite linear;
  stroke: var(--color-foreground);
}
</style>
