import {defineUserConfig} from 'vuepress'
import {searchPlugin} from '@vuepress/plugin-search'
import {defaultTheme} from "@vuepress/theme-default";
import {registerComponentsPlugin} from '@vuepress/plugin-register-components';
import {getDirname, path} from 'vuepress/utils'
import viteBundler from "@vuepress/bundler-vite";

import navbar from './config/navbar.js';
import sidebar from './config/sidebar.js';
const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
    base: '/docs/',
    lang: 'zh-CN',
    title: '文档中心',
    description: '文档中心',
    theme: defaultTheme({
        logo: 'logo.png',
        sidebarDepth: 6,
        navbar: navbar,
        sidebar: sidebar,
        notFound: ['页面找不到了噢~'],
        backToHome: '去主页看看~',

    }),
    plugins: [
        searchPlugin({
            maxSuggestions: 10,
            locales: {
                '/': {
                    placeholder: 'Search',
                },
                '/zh/': {
                    placeholder: '搜索',
                },
            },
        }),
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components')
        })
    ],
    bundler: viteBundler({
        viteOptions: {},
        vuePluginOptions: {},
    })
})
