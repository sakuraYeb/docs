# Springboot在Linux下以服务方式启动

## 1、创建service
```shell
touch xxxx.service
```
## 2、编辑service
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

## 3、启动服务
```
sudo systemctl start serverName
```

## 4、设置开机自动启动
```
sudo systemctl enable serverName
```

## 5、停止服务
```
sudo systemctl stop serverName
```

## 6、查看服务状态
```
sudo systemctl status serverName
```
