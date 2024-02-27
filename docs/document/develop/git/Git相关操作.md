# Git相关操作
## 查看用户名和邮箱地址
```shell
git config user.name
git config user.email
```

## 修改用户名和邮箱地址
```shell
git config --global user.name "桜島麻衣"
git config --global user.email "sakuraYeb@163.com"
```

## Git回退操作
### 回退上一次的Commit
#### Git reset
* 使用Git reset 命令来取消上一次提交
* 这会把 HEAD 指针移回上一个提交（HEAD~1），并清除最后一次提交的内容。
```shell
git reset HEAD~1
```

* 效果同上
```shell
git reset HEAD^
```

* 撤回两次或者n次
```shell
git reset HEAD~2
```

### 回退上一次的push
* 如果你已经push了代码，并且想要撤回这个commit，可以通过以下步骤实现

#### git push --force
* 首先，在使用git push命令时，需要加上--force参数，强制覆盖远程仓库上已经存在的commit。命令如下：
```shell
git push --force origin <branch_name>
```
* 其中，<branch_name>表示你要撤销的分支名称。


#### git reflog
* 如果在本地仓库没有回到该commit的上一个状态，需要使用git reflog命令找到该commit的SHA-1值。命令如下：
```shell
git reflog
```
* 该命令会列出整个Git仓库的提交历史记录，包括HEAD指针所指向的提交和已经被废弃的提交。

#### git reset
* 找到要回到的某个commit的SHA-1值，然后使用如下命令回到该commit的状态：
```shell
git reset --hard <commit_SHA-1>
```
* 其中，<commit_SHA-1>表示要回到的commit的SHA-1值。

#### git push --force
* 然后使用之前的推送命令进行推送，添加--force参数，覆盖远程仓库的历史提交记录。命令如下：

```shell
git push --force origin <branch_name>
```
* 提醒：使用git push --force命令可能会导致远程仓库、其他成员的仓库和历史版本产生不可逆的影响，因此操作时需要谨慎。一般情况下，在工作流中使用git revert命令回滚某个commit，以保证版本控制的完整性和可维护性。
