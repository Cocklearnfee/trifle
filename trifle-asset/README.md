## 项目说明

该项目为前端开发模板，提供资源文件模板以及开发规范。
项目使用了 nodejs 为开发环境，gulp 作为主要的构建工具，bower 作为项目以来管理。

#### 如何使用该项目
- 安装 nodejs。 使用 ` node -v ` 能正常返回 nodejs 的版本表示安装成功。
- 根据项目中的 `package.json` 执行命令 `npm install` 安装项目构建依赖（超级管理员权限）。 
	在此安装过程中，可能会安装失败，有些错误可能是需要运行安装脚本，此时需要超级管理员权限。
	如果安装过程很慢或者停住不动，可能是网关原因导致，可以切换到 taobao 的 npm 服务器上。
	`npm install -g cnpm --registry=https://registry.npm.taobao.org //安装 cnpm`
	之后所有用到 npm 的，可以替换为 cnpm 执行。
- 根据项目中的 `bower.json` 执行命令 `bower install` 安装项目开发依赖。

#### 文件结构说明
- app - 开发文件夹，包括各种源资源文件
- tmp - 临时文件夹，主要是各种插件处理过程中的文件，如果有必要的话。
- dist - 发布文件夹，用于发布的文件，通过压缩合并之后的文件
- html - 模板生成的 html 文件。
- libs - 开发库文件夹，包含自定义和 bower 安装的文件。

#### 使用过程中可能遇到的问题（主要针对 IDEA）
* IDEA 中始终提示 require/gulp/pipe 等方法未定义

	> 在插件管理中，找到 nodejs 的整合插件。在 Settings > Languages & Framework > NodeJs and NPM 中，
	定义 NodeJs 解析器的位置，然后 Enable Coding Assist 即可。
	
* 如何查看任务及依赖

	> 在 IDEA 中，定位到 gulpfile.js 文件，右键 Show Gulp Tasks 即可显示任务，每个任务后灰色显示的为依赖任务。



##### 相关插件文档。

* [Gulp](http://gulpjs.org/) 官方网站，包括文档和介绍
* [BrowserSync](https://www.browsersync.io/docs) 多浏览器同步文件变更