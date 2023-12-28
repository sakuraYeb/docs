<template><div><h1 id="springboot在linux下以服务方式启动" tabindex="-1"><a class="header-anchor" href="#springboot在linux下以服务方式启动" aria-hidden="true">#</a> Springboot在Linux下以服务方式启动</h1>
<h2 id="_1、创建service" tabindex="-1"><a class="header-anchor" href="#_1、创建service" aria-hidden="true">#</a> 1、创建service</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">touch</span> xxxx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2、编辑service" tabindex="-1"><a class="header-anchor" href="#_2、编辑service" aria-hidden="true">#</a> 2、编辑service</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>xxx服务/应用
<span class="token assign-left variable">After</span><span class="token operator">=</span>syslog.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">User</span><span class="token operator">=</span>你的用户名
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/java <span class="token parameter variable">-jar</span> /目标路径/xxxx<span class="token punctuation">(</span>serverName<span class="token punctuation">)</span>.jar <span class="token parameter variable">--server.port</span><span class="token operator">=</span><span class="token number">9090</span>（prot）
<span class="token assign-left variable">SuccessExitStatus</span><span class="token operator">=</span><span class="token number">143</span>
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure
<span class="token assign-left variable">RestartSec</span><span class="token operator">=</span><span class="token number">5</span>

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、启动服务" tabindex="-1"><a class="header-anchor" href="#_3、启动服务" aria-hidden="true">#</a> 3、启动服务</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sudo systemctl start serverName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4、设置开机自动启动" tabindex="-1"><a class="header-anchor" href="#_4、设置开机自动启动" aria-hidden="true">#</a> 4、设置开机自动启动</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sudo systemctl enable serverName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5、停止服务" tabindex="-1"><a class="header-anchor" href="#_5、停止服务" aria-hidden="true">#</a> 5、停止服务</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sudo systemctl stop serverName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6、查看服务状态" tabindex="-1"><a class="header-anchor" href="#_6、查看服务状态" aria-hidden="true">#</a> 6、查看服务状态</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sudo systemctl status serverName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


