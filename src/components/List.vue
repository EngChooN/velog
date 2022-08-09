<template>
  <div class="listWrapper">
    <div v-for="(el, index) in blogData" :key="index" class="list">
      <!-- 페이지 이동 라우터 -->
      <router-link :to="'/detail/' + el.number">{{ el.title }}</router-link>
      <p>{{ el.date }}</p>
    </div>
  </div>
  <router-view :el="el"></router-view>
</template>

<script>
export default {
  name: "ListComponent",
  props: {
    blogData: Array,
  },
  data() {
    return {};
  },
};
</script>

<style>
.listWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
}

.list {
  max-width: 500px;
  width: 100%;
  margin-bottom: 60px;
  border: 1px solid rgb(173, 173, 173);
  padding: 30px;
}
</style>
