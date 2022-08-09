<template>
  <div class="detailWrapper">
    <div class="detail">
      <h4 class="menuTitle">상세 페이지</h4>
      <h5>{{ blogData[$route.params.id].title }}</h5>
      <p>{{ blogData[$route.params.id].content }}</p>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "DetailView",
  props: {
    blogData: Array,
  },
};
</script>

<style>
.detailWrapper {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
}

.detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
}

.menuTitle {
  margin-bottom: 50px;
}
</style>
