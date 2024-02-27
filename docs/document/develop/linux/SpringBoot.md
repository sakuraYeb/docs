# SpringBoot在Linux下相关操作

##  Springboot在Linux下以服务方式启动

### 1、创建service
```shell
touch xxxx.service
```
### 2、编辑service
```shell
[Unit]
Description=xxx服务/应用
After=syslog.target

[Service]
User=你的用户名
ExecStart=/usr/bin/java -jar /目标路径/xxxx(serverName).jar --server.port=9090（prot）
SuccessExitStatus=143
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
```

### 3、启动服务
```
sudo systemctl start serverName
```

### 4、设置开机自动启动
```
sudo systemctl enable serverName
```

### 5、停止服务
```
sudo systemctl stop serverName
```

### 6、查看服务状态
```
sudo systemctl status serverName
```
## 脚本方式打包部署启动
```shell
#!/bin/sh

# 获取项目根目录的绝对路径
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"

# 获取模块的target目录的绝对路径
TARGET_DIR="${PROJECT_DIR}/target"

# 获取jar包的绝对路径
JAR_PATH=$(find "${TARGET_DIR}" -maxdepth 1 -name '*.jar' -print -quit)

# 创建输出文件的目录
LOGS_DIR="${PROJECT_DIR}/logs"
mkdir -p "${LOGS_DIR}"

# 输出文件路径
OUTPUT_FILE="${LOGS_DIR}/nohup.out"

function start()
{
  echo 'Start application...'

  # 检查是否找到了jar包
  if [ ! -f "${JAR_PATH}" ]; then
    echo "Error: No jar file found in the target directory."
    exit 1
  fi

  rm -f tpid

  echo "Running: nohup java -server -Xms16G -Xmx16G ..."
  nohup java -server -Xms512M -Xmx512M -Xmn512M -XX:MetaspaceSize=512M -Xss512K -XX:+DisableExplicitGC -XX:SurvivorRatio=1 -XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:+CMSParallelRemarkEnabled -XX:+UseCMSCompactAtFullCollection -XX:CMSFullGCsBeforeCompaction=0 -XX:+CMSClassUnloadingEnabled -XX:LargePageSizeInBytes=256M -XX:+UseFastAccessorMethods -XX:+UseCMSInitiatingOccupancyOnly -XX:CMSInitiatingOccupancyFraction=80 -XX:SoftRefLRUPolicyMSPerMB=0 -XX:+PrintClassHistogram -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+PrintHeapAtGC -XX:+HeapDumpOnOutOfMemoryError -jar "${JAR_PATH}"  > "${OUTPUT_FILE}" 2>&1 &

  echo $! > tpid
  
  echo 'Start application done.'
}

function stop()
{
  tpid=$(ps -ef | grep "$(basename "${JAR_PATH}")" | grep -v grep | grep -v kill | awk '{print $2}')
  if [ -n "${tpid}" ]; then
    echo 'Stop application...'
    kill -15 "${tpid}"
  fi

  sleep 5
  tpid=$(ps -ef | grep "$(basename "${JAR_PATH}")" | grep -v grep | grep -v kill | awk '{print $2}')

  if [ -n "${tpid}" ]; then
    echo 'Kill application.'
    kill -9 "${tpid}"
  else
    echo 'Stop success!'
  fi
}

function status()
{
  tpid=$(ps -ef | grep "$(basename "${JAR_PATH}")" | grep -v grep | grep -v kill | awk '{print $2}')
  if [ -n "${tpid}" ]; then
    echo 'Application is running.'
    return 1
  else
    echo 'Application is not running.'
    return 0
  fi
}

function forcekill()
{
  tpid=$(ps -ef | grep "$(basename "${JAR_PATH}")" | grep -v grep | grep -v kill | awk '{print $2}')

  if [ -n "${tpid}" ]; then
    echo 'Kill application.'
    kill -9 "${tpid}"
  fi
}

function build()
{
  # 更新最新代码
  echo 'Updating latest code from repository...'
  GIT_LOG="${LOGS_DIR}/git.log"
  REPO_DIR="${PROJECT_DIR}/scjd"
  # 这一步操作是为了拉取最新代码下来打包，省的自己还要上传项目
  REPO_URL="xxxx"

  # 尝试克隆仓库，如果仓库已经存在，则在那个目录下进行git pull
  git clone "${REPO_URL}" "${REPO_DIR}" > "${GIT_LOG}" 2>&1 || (cd "${REPO_DIR}" && git pull >> "${GIT_LOG}" 2>&1)

  EXIT_CODE=$?
  if [ ${EXIT_CODE} -ne 0 ]; then
    echo "Git operation failed with exit code ${EXIT_CODE}, see ${GIT_LOG} for details."
    exit ${EXIT_CODE}
  fi

  echo "Git operation success, log available at ${GIT_LOG}"

  # 使用 Maven 打包项目
  echo 'Building the project...'
  mvn clean install -DskipTests >> "${GIT_LOG}" 2>&1

  EXIT_CODE=$?
  if [ ${EXIT_CODE} -ne 0 ]; then
    echo "=== Build failed with exit code ${EXIT_CODE}, see ${GIT_LOG} for details."
    exit ${EXIT_CODE}
  fi

  # 获取目录名称作为jar包名称
  APP_NAME=$(basename "${PROJECT_DIR}").jar
  JAR_PATH="${TARGET_DIR}/${APP_NAME}"

  echo "=== Build success! Jar file path: ${JAR_PATH}, details in ${GIT_LOG}"
}


# 处理传入的命令
command=$1

if [ "${command}" ==  "start" ]; then
    start

elif [ "${command}" ==  "stop" ]; then
    stop

elif [ "${command}" ==  "status" ]; then
    status

elif [ "${command}" ==  "kill" ]; then
    forcekill

elif [ "${command}" ==  "build" ]; then
    build

else
    start
fi

```
