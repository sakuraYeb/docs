const sidebar = [
    {
        text: '前言',
        collapsable: true,
        link: '/document/preface/preface'
    },
    {
        text: '工具',
        collapsible: true,
        children: [
            '/document/develop/tool/developTool',
            '/document/develop/vue/vue',
            '/document/develop/vue/Button',
            '/document/vpnTool/vpn'
        ]
    },
    {
        text: '开发环境',
        collapsible: true,
        children: [
            '/document/develop/git/Git相关操作',
            '/document/develop/maven/maven',
            '/document/develop/nacos/nacos',
            '/document/develop/linux/SpringBoot'
        ]
    },
    {
        text: 'Windows相关',
        link: '/document/windows/windowsRelated',
    }
];

export default sidebar;