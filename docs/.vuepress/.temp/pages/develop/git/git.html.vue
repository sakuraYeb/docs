<template><div><h1 id="git相关操作" tabindex="-1"><a class="header-anchor" href="#git相关操作" aria-hidden="true">#</a> Git相关操作</h1>
<h2 id="查看用户名和邮箱地址" tabindex="-1"><a class="header-anchor" href="#查看用户名和邮箱地址" aria-hidden="true">#</a> 查看用户名和邮箱地址</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config user.name
<span class="token function">git</span> config user.email
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改用户名和邮箱地址" tabindex="-1"><a class="header-anchor" href="#修改用户名和邮箱地址" aria-hidden="true">#</a> 修改用户名和邮箱地址</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">"淮竹"</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">"sakuraYeb@163.com"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git回退操作" tabindex="-1"><a class="header-anchor" href="#git回退操作" aria-hidden="true">#</a> Git回退操作</h2>
<h3 id="回退上一次的commit" tabindex="-1"><a class="header-anchor" href="#回退上一次的commit" aria-hidden="true">#</a> 回退上一次的Commit</h3>
<h4 id="git-reset" tabindex="-1"><a class="header-anchor" href="#git-reset" aria-hidden="true">#</a> Git reset</h4>
<ul>
<li>使用Git reset 命令来取消上一次提交</li>
<li>这会把 HEAD 指针移回上一个提交（HEAD~1），并清除最后一次提交的内容。</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> reset HEAD~1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>效果同上</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> reset HEAD^
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>撤回两次或者n次</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> reset HEAD~2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="回退上一次的push" tabindex="-1"><a class="header-anchor" href="#回退上一次的push" aria-hidden="true">#</a> 回退上一次的push</h3>
<ul>
<li>如果你已经push了代码，并且想要撤回这个commit，可以通过以下步骤实现</li>
</ul>
<h4 id="git-push-force" tabindex="-1"><a class="header-anchor" href="#git-push-force" aria-hidden="true">#</a> git push --force</h4>
<ul>
<li>首先，在使用git push命令时，需要加上--force参数，强制覆盖远程仓库上已经存在的commit。命令如下：</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> push <span class="token parameter variable">--force</span> origin <span class="token operator">&lt;</span>branch_name<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>其中，&lt;branch_name&gt;表示你要撤销的分支名称。</li>
</ul>
<h4 id="git-reflog" tabindex="-1"><a class="header-anchor" href="#git-reflog" aria-hidden="true">#</a> git reflog</h4>
<ul>
<li>如果在本地仓库没有回到该commit的上一个状态，需要使用git reflog命令找到该commit的SHA-1值。命令如下：</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>该命令会列出整个Git仓库的提交历史记录，包括HEAD指针所指向的提交和已经被废弃的提交。</li>
</ul>
<h4 id="git-reset-1" tabindex="-1"><a class="header-anchor" href="#git-reset-1" aria-hidden="true">#</a> git reset</h4>
<ul>
<li>找到要回到的某个commit的SHA-1值，然后使用如下命令回到该commit的状态：</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token operator">&lt;</span>commit_SHA-<span class="token operator"><span class="token file-descriptor important">1</span>></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>其中，&lt;commit_SHA-1&gt;表示要回到的commit的SHA-1值。</li>
</ul>
<h4 id="git-push-force-1" tabindex="-1"><a class="header-anchor" href="#git-push-force-1" aria-hidden="true">#</a> git push --force</h4>
<ul>
<li>然后使用之前的推送命令进行推送，添加--force参数，覆盖远程仓库的历史提交记录。命令如下：</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> push <span class="token parameter variable">--force</span> origin <span class="token operator">&lt;</span>branch_name<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>提醒：使用git push --force命令可能会导致远程仓库、其他成员的仓库和历史版本产生不可逆的影响，因此操作时需要谨慎。一般情况下，在工作流中使用git revert命令回滚某个commit，以保证版本控制的完整性和可维护性。</li>
</ul>
</div></template>


