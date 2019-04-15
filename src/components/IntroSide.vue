<template>
  <div id="intro-side">
    <div class="intro-top">
      <h1>{{ name }}</h1>
      <p>{{ describe }}</p>
      <a class="intro-github" :href="homepage">
        <i class="iconfont icon-github"></i>
        <span>GitHub</span>
      </a>
    </div>
    <div class="intro-bottom">
      <p>&copy;&nbsp;2019&nbsp;-&nbsp;present&nbsp;escX</p>
    </div>
  </div>
</template>

<script>
import { name, describe, homepage } from "../config";

export default {
  data() {
    return {
      name,
      describe,
      homepage
    };
  }
};
</script>

<style lang="less">
#intro-side {
  width: 38.2%;
  height: 100%;
  float: left;
  position: relative;
  .intro-top {
    width: 250px;
    float: right;
    padding-top: 20px;
    .intro-github {
      display: block;
      margin-top: 10px;
      span {
        margin-left: 5px;
      }
    }
  }
  .intro-bottom {
    position: absolute;
    width: 250px;
    right: 0;
    bottom: 0;
    padding-bottom: 20px;
    color: #999;
  }
}
</style>
