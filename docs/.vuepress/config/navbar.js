const navbar = [
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
];

export default navbar;