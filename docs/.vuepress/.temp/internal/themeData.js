export const themeData = JSON.parse("{\"logo\":\"logo.png\",\"sidebarDepth\":6,\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"路在何方\",\"children\":[{\"text\":\"堕入魔道\",\"children\":[{\"text\":\"九淵\",\"link\":\"https://cn.vuejs.org/\"}]},{\"text\":\"仙人指路\",\"children\":[{\"text\":\"南天門\",\"link\":\"https://ys.mihoyo.com/\"}]}]},{\"text\":\"Github\",\"link\":\"https://github.com/sakuraYeb/docs\"}],\"sidebar\":[{\"text\":\"前言\",\"collapsable\":true,\"link\":\"/document/preface/preface\"},{\"text\":\"工具\",\"collapsible\":true,\"children\":[\"/document/develop/tool/developTool\",\"/document/develop/vue/vue\",\"/document/develop/vue/Button\",\"/document/vpnTool/vpn\"]},{\"text\":\"开发环境\",\"collapsible\":true,\"children\":[\"/document/develop/git/Git相关操作\",\"/document/develop/maven/maven\",\"/document/develop/nacos/nacos\",\"/document/develop/linux/SpringBoot\"]},{\"text\":\"Windows相关\",\"link\":\"/document/windows/windowsRelated\"}],\"notFound\":[\"页面找不到了噢~\"],\"backToHome\":\"去主页看看~\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
