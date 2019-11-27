# adminweb-vue

![](http://www.coderops.net/media/image/active/20180830index.png)

![](http://www.coderops.net/media/image/active/20180830login.png)


### 安装nodejs

nodejs下载地址： https://nodejs.org/zh-cn/

建议下载8.x版本

#### 在windows上安装nodejs

下载  `node-v8.xx.msi`文件，然后双击运行，下一步、下一步即可安装成功，安装完成后需要将nodejs安装路径加入到系统环境变量里即可

在`cmd`下运行node命令，检查是否安装成功

```
C:\>node -v
v8.11.3
```



### 部署

#### 下载源码

```
git clone https://github.com/syklinux/adminweb-vue.git
```



#### 安装b相关依赖包

```
cd adminweb-vue
npm install --registry=https://registry.npm.taobao.org
```

#### 修改配置

开发环境的配置文件为： adminweb-vue/config/dev.env.js

只需要配置下后端的API域名就可以了

```
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://127.0.0.1:8080/"'
})
```


#### 起动服务

```
npm run dev
```


然后就可通过浏览器访问：`http://127.0.0.1:8081`


This is an [demo](http://admin.coderops.net/)

用户：guest   
密码: guest_8126123

