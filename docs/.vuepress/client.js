import * as Icons from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import {defineClientConfig} from "vuepress/client";
import 'element-plus/dist/index.css'

export default defineClientConfig ({
    enhance({ app, router, siteData }) {
        // app 是由 createApp 创建的 Vue 应用实例
        app.use(ElementPlus)
        for (const icon in Icons) {
            // eslint-disable-next-line import/namespace
            app.component('ElIcon' + icon, Icons[icon])
        }
    }
})