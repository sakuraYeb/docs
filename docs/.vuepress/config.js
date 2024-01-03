import {defaultTheme, defineUserConfig} from 'vuepress'
import {searchPlugin} from '@vuepress/plugin-search'

export default defineUserConfig({
    base: '/docs/',
    lang: 'zh-CN',
    title: '文档中心',
    description: '文档中心',
    theme: defaultTheme({
        logo: 'logo.png',
        sidebarDepth: 6,
        navbar: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '路在何方',
                children:
                    [
                        {

                            text: '堕入魔道',
                            children: [
                                {
                                    text: '九淵',
                                    link: 'https://cn.vuejs.org/'
                                }
                            ]
                        },
                        {
                            text: '仙人指路',
                            children: [
                                {
                                    text: '南天門',
                                    link: 'https://ys.mihoyo.com/'
                                }
                            ]
                        }
                    ],
            },
            {
                text: 'Github',
                link: 'https://github.com/sakuraYeb/docs'
            }
        ],
        sidebar: [
            {
                text: '前言',
                link: '/preface/preface.md'
            },
            {
                text: '开发工具',
                link: '/tool/address.md'
            },
            {
                text: '开发环境',
                link: '/develop/git/git.md',
                collapsible: true,
                children: [
                    '/develop/git/git.md',
                    '/develop/maven/maven.md',
                    '/develop/nacos/nacos.md',
                    '/develop/linux-springboot/linux-springboot.md'
                ]
            },
            {
                text: 'Windows相关',
                link: '/windows/windowsRelated.md',
            }
        ],
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
    ]
})
