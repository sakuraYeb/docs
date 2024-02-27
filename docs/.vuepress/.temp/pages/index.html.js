import comp from "E:/Github/docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":null,\"heroText\":\"文档中心\",\"actions\":[{\"text\":\"快速开始\",\"link\":\"/document/preface/preface.md\",\"type\":\"primary\"}],\"features\":[{\"title\":\"一致性 Consistency\",\"details\":\"与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念\"},{\"title\":\"反馈 x\",\"details\":\"通过界面样式和交互动效让用户可以清晰的感知自己的操作\"}],\"footer\":\"MIT Licensed | Copyright (c) 2024\"},\"headers\":[],\"git\":{\"updatedTime\":1708409296000,\"contributors\":[{\"name\":\"桜岛麻衣\",\"email\":\"sakuraYeb@163.com\",\"commits\":2}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
