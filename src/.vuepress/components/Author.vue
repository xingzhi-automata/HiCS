<template>
  <a v-bind:href="link">@{{ name }}</a>
</template>

<script>
export default {
  props: ['name', 'link'],
  data() {
    return {
      name: this.name,
      link: this.link,
    };
  },
};
</script>
