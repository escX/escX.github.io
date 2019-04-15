<template>
  <div id="list-side">
    <div class="list-box">
      <div
        class="list-item"
        v-for="(project, index) in projects"
        :key="index"
        v-loading="!project.loaded"
      >
        <h2>
          <a :href="project.homepage">{{ project.name }}</a>
        </h2>
        <p class="describe" v-if="project.describe">{{ project.describe }}</p>
        <div class="website">
          <a
            class="project-website"
            :href="project.homepage"
            v-if="project.homepage"
          >
            <i class="iconfont icon-github"></i>
            <span>GitHub</span>
          </a>
          <a
            class="project-website"
            :href="project.examplepage"
            v-if="project.examplepage"
          >
            <i class="iconfont icon-example"></i>
            <span>Example</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { projects } from "../config";
import { getProjectInfo } from "../api";

export default {
  data() {
    return {
      projects
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      this.projects.forEach(project => {
        getProjectInfo(project.name).then(response => {
          if (response.status === 200 && response.statusText === "OK") {
            Object.assign(project, { loaded: true }, response.data);
            this.$forceUpdate();
          }
        });
      });
    }
  }
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
      min-height: 127.6px;
      h2 {
        font-size: 20px;
        margin-top: 0;
        margin-bottom: 0;
        a,
        &:hover,
        &:focus,
        &:active {
          color: #333;
        }
      }
      .describe {
        margin-top: 10px;
        color: #999;
        word-break: break-word;
      }
      .website {
        margin-top: 10px;
        .project-website {
          & + .project-website {
            margin-left: 20px;
          }
          span {
            margin-left: 5px;
          }
        }
      }
    }
  }
}
</style>
