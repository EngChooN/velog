<template>
  <!-- 부트스트랩 연습 -->
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">VueLogProject</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- 글 리스트 컴포넌트 (더미데이터) -->
  <div class="Explanation">
    <h5>React 유저의 Vue3로 블로그 만들기 프로젝트..</h5>
    <p>- Products by aimZero -</p>
  </div>

  <ListComponent :blogData="blogData" />
</template>

<script>
import ListComponent from "./components/List.vue";
import blogData from "./assets/data/blog";

export default {
  name: "App",
  components: {
    ListComponent: ListComponent,
  },
  data() {
    return {
      blogData: blogData,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

.Explanation {
  text-align: center;
  margin-bottom: 50px;
  padding-top: 30px;
  padding-bottom: 10px;
  background-color: rgb(223, 223, 223);
}
</style>
