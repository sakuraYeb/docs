# Windows相关

## Win11右键菜单展开
cmd输入以下，之后重启电脑即可
```shell
reg add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve
```

