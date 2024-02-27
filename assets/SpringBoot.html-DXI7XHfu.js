import{_ as s,o as n,c as a,e}from"./app-DTHAHgiM.js";const t={},l=e(`<h1 id="springboot在linux下相关操作" tabindex="-1"><a class="header-anchor" href="#springboot在linux下相关操作"><span>SpringBoot在Linux下相关操作</span></a></h1><h2 id="springboot在linux下以服务方式启动" tabindex="-1"><a class="header-anchor" href="#springboot在linux下以服务方式启动"><span>Springboot在Linux下以服务方式启动</span></a></h2><h3 id="_1、创建service" tabindex="-1"><a class="header-anchor" href="#_1、创建service"><span>1、创建service</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">touch</span> xxxx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2、编辑service" tabindex="-1"><a class="header-anchor" href="#_2、编辑service"><span>2、编辑service</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、启动服务" tabindex="-1"><a class="header-anchor" href="#_3、启动服务"><span>3、启动服务</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo systemctl start serverName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4、设置开机自动启动" tabindex="-1"><a class="header-anchor" href="#_4、设置开机自动启动"><span>4、设置开机自动启动</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo systemctl enable serverName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5、停止服务" tabindex="-1"><a class="header-anchor" href="#_5、停止服务"><span>5、停止服务</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo systemctl stop serverName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6、查看服务状态" tabindex="-1"><a class="header-anchor" href="#_6、查看服务状态"><span>6、查看服务状态</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo systemctl status serverName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="脚本方式打包部署启动" tabindex="-1"><a class="header-anchor" href="#脚本方式打包部署启动"><span>脚本方式打包部署启动</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>

<span class="token comment"># 获取项目根目录的绝对路径</span>
<span class="token assign-left variable">PROJECT_DIR</span><span class="token operator">=</span><span class="token string">&quot;$(cd &quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> <span class="token string">&quot;<span class="token variable">$0</span>&quot;</span><span class="token variable">)</span></span>&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">pwd</span><span class="token punctuation">)</span><span class="token string">&quot;

# 获取模块的target目录的绝对路径
TARGET_DIR=&quot;</span><span class="token variable">\${PROJECT_DIR}</span>/target<span class="token string">&quot;

# 获取jar包的绝对路径
JAR_PATH=<span class="token variable"><span class="token variable">$(</span><span class="token function">find</span> <span class="token string">&quot;<span class="token variable">\${TARGET_DIR}</span>&quot;</span> <span class="token parameter variable">-maxdepth</span> <span class="token number">1</span> <span class="token parameter variable">-name</span> <span class="token string">&#39;*.jar&#39;</span> <span class="token parameter variable">-print</span> <span class="token parameter variable">-quit</span><span class="token variable">)</span></span>

# 创建输出文件的目录
LOGS_DIR=&quot;</span><span class="token variable">\${PROJECT_DIR}</span>/logs<span class="token string">&quot;
mkdir -p &quot;</span><span class="token variable">\${LOGS_DIR}</span><span class="token string">&quot;

# 输出文件路径
OUTPUT_FILE=&quot;</span><span class="token variable">\${LOGS_DIR}</span>/nohup.out<span class="token string">&quot;

function start()
{
  echo &#39;Start application...&#39;

  # 检查是否找到了jar包
  if [ ! -f &quot;</span><span class="token variable">\${JAR_PATH}</span><span class="token string">&quot; ]; then
    echo &quot;</span>Error: No jar <span class="token function">file</span> found <span class="token keyword">in</span> the target directory.<span class="token string">&quot;
    exit 1
  fi

  rm -f tpid

  echo &quot;</span>Running: <span class="token function">nohup</span> <span class="token function">java</span> <span class="token parameter variable">-server</span> <span class="token parameter variable">-Xms16G</span> <span class="token parameter variable">-Xmx16G</span> <span class="token punctuation">..</span>.<span class="token string">&quot;
  nohup java -server -Xms512M -Xmx512M -Xmn512M -XX:MetaspaceSize=512M -Xss512K -XX:+DisableExplicitGC -XX:SurvivorRatio=1 -XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:+CMSParallelRemarkEnabled -XX:+UseCMSCompactAtFullCollection -XX:CMSFullGCsBeforeCompaction=0 -XX:+CMSClassUnloadingEnabled -XX:LargePageSizeInBytes=256M -XX:+UseFastAccessorMethods -XX:+UseCMSInitiatingOccupancyOnly -XX:CMSInitiatingOccupancyFraction=80 -XX:SoftRefLRUPolicyMSPerMB=0 -XX:+PrintClassHistogram -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+PrintHeapAtGC -XX:+HeapDumpOnOutOfMemoryError -jar &quot;</span><span class="token variable">\${JAR_PATH}</span><span class="token string">&quot;  &gt; &quot;</span><span class="token variable">\${OUTPUT_FILE}</span><span class="token string">&quot; 2&gt;&amp;1 &amp;

  echo <span class="token variable">$!</span> &gt; tpid
  
  echo &#39;Start application done.&#39;
}

function stop()
{
  tpid=$(ps -ef | grep &quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> <span class="token string">&quot;<span class="token variable">\${JAR_PATH}</span>&quot;</span><span class="token variable">)</span></span>&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">kill</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">\${tpid}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;Stop application...&#39;</span>
    <span class="token function">kill</span> <span class="token parameter variable">-15</span> <span class="token string">&quot;<span class="token variable">\${tpid}</span>&quot;</span>
  <span class="token keyword">fi</span>

  <span class="token function">sleep</span> <span class="token number">5</span>
  <span class="token assign-left variable">tpid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> <span class="token string">&quot;<span class="token variable">\${JAR_PATH}</span>&quot;</span><span class="token variable">)</span></span>&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">kill</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">)</span></span>

  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">\${tpid}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;Kill application.&#39;</span>
    <span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token string">&quot;<span class="token variable">\${tpid}</span>&quot;</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;Stop success!&#39;</span>
  <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token assign-left variable">tpid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> <span class="token string">&quot;<span class="token variable">\${JAR_PATH}</span>&quot;</span><span class="token variable">)</span></span>&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">kill</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">)</span></span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">\${tpid}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;Application is running.&#39;</span>
    <span class="token builtin class-name">return</span> <span class="token number">1</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;Application is not running.&#39;</span>
    <span class="token builtin class-name">return</span> <span class="token number">0</span>
  <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">forcekill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token assign-left variable">tpid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> <span class="token string">&quot;<span class="token variable">\${JAR_PATH}</span>&quot;</span><span class="token variable">)</span></span>&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">kill</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">)</span></span>

  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">\${tpid}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;Kill application.&#39;</span>
    <span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token string">&quot;<span class="token variable">\${tpid}</span>&quot;</span>
  <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token comment"># 更新最新代码</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&#39;Updating latest code from repository...&#39;</span>
  <span class="token assign-left variable">GIT_LOG</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${LOGS_DIR}</span>/git.log&quot;</span>
  <span class="token assign-left variable">REPO_DIR</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${PROJECT_DIR}</span>/scjd&quot;</span>
  <span class="token comment"># 这一步操作是为了拉取最新代码下来打包，省的自己还要上传项目</span>
  <span class="token assign-left variable">REPO_URL</span><span class="token operator">=</span><span class="token string">&quot;xxxx&quot;</span>

  <span class="token comment"># 尝试克隆仓库，如果仓库已经存在，则在那个目录下进行git pull</span>
  <span class="token function">git</span> clone <span class="token string">&quot;<span class="token variable">\${REPO_URL}</span>&quot;</span> <span class="token string">&quot;<span class="token variable">\${REPO_DIR}</span>&quot;</span> <span class="token operator">&gt;</span> <span class="token string">&quot;<span class="token variable">\${GIT_LOG}</span>&quot;</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">||</span> <span class="token punctuation">(</span>cd <span class="token string">&quot;<span class="token variable">\${REPO_DIR}</span>&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> pull <span class="token operator">&gt;&gt;</span> <span class="token string">&quot;<span class="token variable">\${GIT_LOG}</span>&quot;</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span><span class="token punctuation">)</span>

  <span class="token assign-left variable">EXIT_CODE</span><span class="token operator">=</span><span class="token variable">$?</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${EXIT_CODE}</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Git operation failed with exit code <span class="token variable">\${EXIT_CODE}</span>, see <span class="token variable">\${GIT_LOG}</span> for details.&quot;</span>
    <span class="token builtin class-name">exit</span> <span class="token variable">\${EXIT_CODE}</span>
  <span class="token keyword">fi</span>

  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Git operation success, log available at <span class="token variable">\${GIT_LOG}</span>&quot;</span>

  <span class="token comment"># 使用 Maven 打包项目</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&#39;Building the project...&#39;</span>
  mvn clean <span class="token function">install</span> <span class="token parameter variable">-DskipTests</span> <span class="token operator">&gt;&gt;</span> <span class="token string">&quot;<span class="token variable">\${GIT_LOG}</span>&quot;</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>

  <span class="token assign-left variable">EXIT_CODE</span><span class="token operator">=</span><span class="token variable">$?</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${EXIT_CODE}</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;=== Build failed with exit code <span class="token variable">\${EXIT_CODE}</span>, see <span class="token variable">\${GIT_LOG}</span> for details.&quot;</span>
    <span class="token builtin class-name">exit</span> <span class="token variable">\${EXIT_CODE}</span>
  <span class="token keyword">fi</span>

  <span class="token comment"># 获取目录名称作为jar包名称</span>
  <span class="token assign-left variable">APP_NAME</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> <span class="token string">&quot;<span class="token variable">\${PROJECT_DIR}</span>&quot;</span><span class="token variable">)</span></span>.jar
  <span class="token assign-left variable">JAR_PATH</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${TARGET_DIR}</span>/<span class="token variable">\${APP_NAME}</span>&quot;</span>

  <span class="token builtin class-name">echo</span> <span class="token string">&quot;=== Build success! Jar file path: <span class="token variable">\${JAR_PATH}</span>, details in <span class="token variable">\${GIT_LOG}</span>&quot;</span>
<span class="token punctuation">}</span>


<span class="token comment"># 处理传入的命令</span>
<span class="token assign-left variable">command</span><span class="token operator">=</span><span class="token variable">$1</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${command}</span>&quot;</span> <span class="token operator">==</span>  <span class="token string">&quot;start&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    start

<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${command}</span>&quot;</span> <span class="token operator">==</span>  <span class="token string">&quot;stop&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    stop

<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${command}</span>&quot;</span> <span class="token operator">==</span>  <span class="token string">&quot;status&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    status

<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${command}</span>&quot;</span> <span class="token operator">==</span>  <span class="token string">&quot;kill&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    forcekill

<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${command}</span>&quot;</span> <span class="token operator">==</span>  <span class="token string">&quot;build&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    build

<span class="token keyword">else</span>
    start
<span class="token keyword">fi</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),p=[l];function i(o,c){return n(),a("div",null,p)}const u=s(t,[["render",i],["__file","SpringBoot.html.vue"]]),d=JSON.parse('{"path":"/document/develop/linux/SpringBoot.html","title":"SpringBoot在Linux下相关操作","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Springboot在Linux下以服务方式启动","slug":"springboot在linux下以服务方式启动","link":"#springboot在linux下以服务方式启动","children":[{"level":3,"title":"1、创建service","slug":"_1、创建service","link":"#_1、创建service","children":[]},{"level":3,"title":"2、编辑service","slug":"_2、编辑service","link":"#_2、编辑service","children":[]},{"level":3,"title":"3、启动服务","slug":"_3、启动服务","link":"#_3、启动服务","children":[]},{"level":3,"title":"4、设置开机自动启动","slug":"_4、设置开机自动启动","link":"#_4、设置开机自动启动","children":[]},{"level":3,"title":"5、停止服务","slug":"_5、停止服务","link":"#_5、停止服务","children":[]},{"level":3,"title":"6、查看服务状态","slug":"_6、查看服务状态","link":"#_6、查看服务状态","children":[]}]},{"level":2,"title":"脚本方式打包部署启动","slug":"脚本方式打包部署启动","link":"#脚本方式打包部署启动","children":[]}],"git":{"updatedTime":1709018216000,"contributors":[{"name":"桜島麻衣","email":"97507266+sakuraYeb@users.noreply.github.com","commits":1}]},"filePathRelative":"document/develop/linux/SpringBoot.md"}');export{u as comp,d as data};
