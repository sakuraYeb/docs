<template><div><h1 id="windows相关" tabindex="-1"><a class="header-anchor" href="#windows相关" aria-hidden="true">#</a> Windows相关</h1>
<h2 id="win11右键菜单展开" tabindex="-1"><a class="header-anchor" href="#win11右键菜单展开" aria-hidden="true">#</a> Win11右键菜单展开</h2>
<p>cmd输入以下，之后重启电脑即可</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>reg <span class="token function">add</span> <span class="token string">"HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32"</span> /f /ve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


