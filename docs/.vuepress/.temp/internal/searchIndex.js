export const searchIndex = [
  {
    "title": "",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "前言",
    "headers": [
      {
        "level": 2,
        "title": "为什么写这个文档",
        "slug": "为什么写这个文档",
        "link": "#为什么写这个文档",
        "children": []
      },
      {
        "level": 2,
        "title": "写了准备做什么",
        "slug": "写了准备做什么",
        "link": "#写了准备做什么",
        "children": []
      }
    ],
    "path": "/preface/preface.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Git相关操作",
    "headers": [
      {
        "level": 2,
        "title": "查看用户名和邮箱地址",
        "slug": "查看用户名和邮箱地址",
        "link": "#查看用户名和邮箱地址",
        "children": []
      },
      {
        "level": 2,
        "title": "修改用户名和邮箱地址",
        "slug": "修改用户名和邮箱地址",
        "link": "#修改用户名和邮箱地址",
        "children": []
      }
    ],
    "path": "/linux/git/git.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Springboot在Linux下以服务方式启动",
    "headers": [
      {
        "level": 2,
        "title": "1、创建service",
        "slug": "_1、创建service",
        "link": "#_1、创建service",
        "children": []
      },
      {
        "level": 2,
        "title": "2、编辑service",
        "slug": "_2、编辑service",
        "link": "#_2、编辑service",
        "children": []
      },
      {
        "level": 2,
        "title": "3、启动服务",
        "slug": "_3、启动服务",
        "link": "#_3、启动服务",
        "children": []
      },
      {
        "level": 2,
        "title": "4、设置开机自动启动",
        "slug": "_4、设置开机自动启动",
        "link": "#_4、设置开机自动启动",
        "children": []
      },
      {
        "level": 2,
        "title": "5、停止服务",
        "slug": "_5、停止服务",
        "link": "#_5、停止服务",
        "children": []
      },
      {
        "level": 2,
        "title": "6、查看服务状态",
        "slug": "_6、查看服务状态",
        "link": "#_6、查看服务状态",
        "children": []
      }
    ],
    "path": "/linux/linux-springboot/linux-springboot.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Maven相关操作",
    "headers": [
      {
        "level": 2,
        "title": "maven打包绕过test测试",
        "slug": "maven打包绕过test测试",
        "link": "#maven打包绕过test测试",
        "children": []
      }
    ],
    "path": "/linux/maven/maven.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Nacos相关",
    "headers": [
      {
        "level": 2,
        "title": "Windows下启动命令",
        "slug": "windows下启动命令",
        "link": "#windows下启动命令",
        "children": []
      }
    ],
    "path": "/linux/nacos/nacos.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
