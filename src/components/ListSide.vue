<template>
  <div id="list-side">
    <div class="list-box">
      <div class="list-item">
        <h2>
          <a href="">vue-colorful-background</a>
        </h2>
        <p class="describe">test</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="less">
#list-side {
  width: 61.8%;
  height: 100%;
  padding: 20px;
  float: left;
  overflow-x: hidden;
  overflow-y: auto;
  .list-box {
    width: 400px;
    .list-item {
      background-color: #fff;
      padding: 15px 25px;
      margin: 20px 0;
      h2 {
        font-size: 20px;
        margin-top: 0;
        margin-bottom: 10px;
        a, &:hover {
          color: #333;
          text-decoration: none;
        }
      }
      .describe {
        color: #999;
        word-break: break-all;
      }
    }
  }
}
</style>
