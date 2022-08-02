# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

http://docs.thingspanel.io/

2.0搭建  查看在package.json  
    @docusaurus/core": "2.0.0-rc.1",

左脚上面logo  
  docusaurus.config.js 文件
    themeConfig {
      navbar：{
         logo: {
          alt: 'ThingsPanel',
          src: 'img/logo.svg',
        },
      }
    }
域名绑定 
   docusaurus.config.js 文件
      url: 'http://docs.thingspanel.io',
      baseUrl: '/',


版本构建  根据版本切换文档
versioned_docs 版本列表
  version-v2  //版本文件夹 v2是版本号
    hollow.md  //版本文件
  version-v3  //版本文件夹 v3是版本号
    hollow.md  //版本文件
versioned_sidebars 版本左侧列表
  version-v2-sidebars  //版本侧边栏
  version-v3-sidebars  //版本侧边栏
versions.json   版本管理器  最新版本在最前面 ['0.4','0.3','0.2','0.1']
                                            最新   次级  ---    ---

翻译命令 需要购买token 路径  crowdin.yml 这个文件 
  api_token_env: "我的令牌"   //我的令牌就是需要替换的地方
  npm run write-translations 生成 npm run crowdin upload 上传  npm run crowdin download 下载  
自动化翻译脚本   设置 CROWDIN_PERSONAL_TOKEN 环境变量
在构建 Docusaurus 站点之前，在 CI 中调用 npm run crowdin:sync 脚本
  "crowdin:sync": "docusaurus write-translations && crowdin upload && crowdin download"

链接到代码库
    docusaurus.config.js 文件
    themeConfig {
      navbar：{
         items: [
          {
            href: 'https://github.com/ThingsPanel', //链接到代码库的链接
            label: 'GitHub',
            position: 'right',
          },
         ]
      }
    }

菜单配置
     {
      type: 'doc',
      docId: 'intro',
      position: 'left',
      label: 'Docs',
    },
    { to: '/blog', label: 'Blog', position: 'left' },



<!-- 目录项目说明 -->
.docusaurus  运行时自动生成文件
blog 菜单博客里面的内容  
  命名规则  
    文件夹
      日期-名称  2021-08-26-welcome
          index.md 是文章内容
    文件
      名称-
      文件内部决定页面显示 
      slug: text   ---url 
      title: text Post  --- 名称
      authors:  ---作者信息
        name: Gao Website
        title: Docusaurus Core Team 
        url: https://github.com/wgao19
        image_url: https://github.com/wgao19.png
      tags: [hola, docusaurus]
build
  打包文件  npm run build
docs  最新版本
  文档文件
    文件名称就是路由
      sidebar_position 列表位置
      # Tutorial Intro 左侧显示的名称
    文件加 就是可以下拉菜单
      里面的内容和文件命名一样
i18n 不用管 
  翻译文件目录  自动打包 自动生成 
src 
  首页页面内容显示
static 
  静态文件夹
versioned_docs
  版本管理文件夹
    version-v2 就是v2版本 可以随意修改 v2 或者 0.02
    里面的文件 同docs一样 只不过版本切换显示
versioned_sidebars
  版本侧边栏显示
    version-v2-sidebars.json   每个版本都需要复制 
    中间的v2需要和 versioned_docs version-v2 的 v2一致
crowdin.yml  
  翻译配置文件 需要修改的
    project_id: "359747"  crowdin网址创建项目  复制出项目的ID
    api_token: "我的令牌" crowdin网址创建的token 
docusaurus.config.js
  配置文件 可配置顶导航和底部
sidebars.js
  Docs 的侧边栏配置
versions.json
  版本号排序 
  把 docs/ 文件夹整个复制到新的 versioned_docs/version-[版本名]/ 文件夹。
  根据你当前的侧边栏配置（如果存在的话），创建一个版本化的侧边栏文件，并将它保存为 versioned_sidebars/version-[版本名]-sidebars.json。
  把新版本号添加到 versions.json 开头。



如何写文档 或者 Blog
blog 就去对应的blog文件夹下面  规则按照上面查看
docs 就去对应的 docs 或者 对应的 versioned_docs  规则按照上面查看


运行打包 先翻译 这个不是实时的  npm run crowdin:sync
然后打包 npm run build 
让后登陆服务器
http://104.156.140.42:8888/3c1c1b1a

username: e5gqnzdj
password: c2e9910c

网址域名下 更换文件