<template>
  <div class="listWrapper">
    <div v-for="(el, index) in blogData" :key="index" class="list">
      <h4>{{ el.title }}</h4>
      <p>{{ el.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListComponent",
  props: {
    blogData: Array,
  },
};
</script>

<style>
.listWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.list {
  max-width: 500px;
  width: 100%;
  margin-bottom: 50px;
  border: 1px solid rgb(173, 173, 173);
  padding: 30px;
}
</style>
