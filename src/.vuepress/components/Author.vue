<template>
  <a v-bind:href="link">@{{ name }}</a>
</template>

<script>
export default {
  props: ['name', 'link'],
  data() {
    return {
      name: props.name,
      link: props.link,
    };
  },
};
</script>
