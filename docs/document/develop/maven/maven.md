# Maven相关操作
## maven打包绕过test测试

* -P prod是指激活prod环境配置文件，一般用于多环境如果单环境去掉即可
* 如果是在Idea里面执行，需要给：-Dmaven.test.skip=true 加上单引号

```shell
mvn clean package -P prod -Dmaven.test.skip=true
mvn clean install -DskipTests
```

解释：
* mvn clean package：这个命令会清理之前的构建结果，然后编译、测试代码，最后打包。它会在你的项目目录中生成一个可分发的包（例如，一个JAR文件），但是这个包不会被安装到你本地的Maven仓库。  
* mvn clean install：这个命令会执行所有mvn clean package的步骤，然后它还会把这个包安装到你本地的Maven仓库，这样其他的项目就可以引用和使用它了。
