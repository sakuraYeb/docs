import{_ as e,o as a,c as n,e as s}from"./app-DTHAHgiM.js";const t={},i=s(`<h1 id="windows相关" tabindex="-1"><a class="header-anchor" href="#windows相关"><span>Windows相关</span></a></h1><h2 id="win11右键菜单展开" tabindex="-1"><a class="header-anchor" href="#win11右键菜单展开"><span>Win11右键菜单展开</span></a></h2><p>cmd输入以下，之后重启电脑即可</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>reg <span class="token function">add</span> <span class="token string">&quot;HKCU\\Software\\Classes\\CLSID\\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\\InprocServer32&quot;</span> /f /ve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),d=[i];function o(c,r){return a(),n("div",null,d)}const h=e(t,[["render",o],["__file","windowsRelated.html.vue"]]),m=JSON.parse('{"path":"/document/windows/windowsRelated.html","title":"Windows相关","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Win11右键菜单展开","slug":"win11右键菜单展开","link":"#win11右键菜单展开","children":[]}],"git":{"updatedTime":1709018216000,"contributors":[{"name":"桜島麻衣","email":"97507266+sakuraYeb@users.noreply.github.com","commits":1}]},"filePathRelative":"document/windows/windowsRelated.md"}');export{h as comp,m as data};