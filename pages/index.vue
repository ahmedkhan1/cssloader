<template>
  <Header/>
</template>

<script>
const Header = () => import("../components/Header.vue");

export default {
  layout: 'newsfeed',
  name: 'Home',
  components: {
    Header,
  },
}
</script>
