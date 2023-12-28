export const themeData = JSON.parse("{\"logo\":\"logo.png\",\"sidebarDepth\":6,\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"路在何方\",\"children\":[{\"text\":\"堕入魔道\",\"children\":[{\"text\":\"九淵\",\"link\":\"https://cn.vuejs.org/\"}]},{\"text\":\"仙人指路\",\"children\":[{\"text\":\"南天門\",\"link\":\"https://ys.mihoyo.com/\"}]}]},{\"text\":\"Github\",\"link\":\"https://github.com/sakuraYeb/docs\"}],\"sidebar\":[{\"text\":\"前言\",\"link\":\"/preface/preface.md\"},{\"text\":\"服务相关\",\"link\":\"/linux/git/git.md\",\"collapsible\":true,\"children\":[\"/linux/git/git.md\",\"/linux/maven/maven.md\",\"/linux/nacos/nacos.md\",\"/linux/linux-springboot/linux-springboot.md\"]}],\"notFound\":[\"页面找不到了噢~\"],\"backToHome\":\"去主页看看~\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
