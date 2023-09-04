import{_ as a,o as e,c as i,Q as l}from"./chunks/framework.385ac4c3.js";const b=JSON.parse('{"title":"绘图教程","description":"","frontmatter":{},"headers":[],"relativePath":"guide/midjourney.md","filePath":"guide/midjourney.md"}'),t={name:"guide/midjourney.md"},r=l('<h1 id="绘图教程" tabindex="-1">绘图教程 <a class="header-anchor" href="#绘图教程" aria-label="Permalink to &quot;绘图教程&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>更新日期：2023年9月3日</p></div><h2 id="midjourney-prompt-基本结构" tabindex="-1">Midjourney Prompt 基本结构 <a class="header-anchor" href="#midjourney-prompt-基本结构" aria-label="Permalink to &quot;Midjourney Prompt 基本结构&quot;">​</a></h2><h3 id="imageurl-text-prompt-parameters" tabindex="-1">ImageURL+Text Prompt+Parameters <a class="header-anchor" href="#imageurl-text-prompt-parameters" aria-label="Permalink to &quot;ImageURL+Text Prompt+Parameters&quot;">​</a></h3><p><img src="https://tuchuang111025.oss-cn-shenzhen.aliyuncs.com/WeChat52978d24cb630fb8254d00192e93244e.jpg" alt=""></p><h4 id="image-prompts-用于blend混图模式" tabindex="-1">Image Prompts（用于blend混图模式） <a class="header-anchor" href="#image-prompts-用于blend混图模式" aria-label="Permalink to &quot;Image Prompts（用于blend混图模式）&quot;">​</a></h4><ul><li>图片的 URL地址且可公开可访问</li><li>图片格式仅支持 png、gif 和 jpg</li><li>可放两张图的URL/一张图的 URL+一段话</li></ul><h4 id="text-prompts-描述希望ai生成的图片" tabindex="-1">Text Prompts（描述希望AI生成的图片） <a class="header-anchor" href="#text-prompts-描述希望ai生成的图片" aria-label="Permalink to &quot;Text Prompts（描述希望AI生成的图片）&quot;">​</a></h4><ul><li>无法理解句子结构和语法</li><li>不像ChatGPT能明白你说的话</li><li>存在违禁词，部分词语无法输入</li></ul><h4 id="parameters-prompts-设置生成图片的参数" tabindex="-1">Parameters Prompts（设置生成图片的参数） <a class="header-anchor" href="#parameters-prompts-设置生成图片的参数" aria-label="Permalink to &quot;Parameters Prompts（设置生成图片的参数）&quot;">​</a></h4><h5 id="version-版本" tabindex="-1">Version（版本） <a class="header-anchor" href="#version-版本" aria-label="Permalink to &quot;Version（版本）&quot;">​</a></h5><ul><li>有效值：1、2、3、4、5（默认）</li><li>使用案例：/imagine cat --v 5</li></ul><h5 id="aspect-ratios-长宽比" tabindex="-1">Aspect Ratios（长宽比） <a class="header-anchor" href="#aspect-ratios-长宽比" aria-label="Permalink to &quot;Aspect Ratios（长宽比）&quot;">​</a></h5><ul><li>默认值：1:1</li><li>有效范围：任意，但不宜2:1以上（V5）</li><li>使用案例：/imagine cat -- ar 9:16</li></ul><h5 id="no-拒绝出现" tabindex="-1">No（拒绝出现） <a class="header-anchor" href="#no-拒绝出现" aria-label="Permalink to &quot;No（拒绝出现）&quot;">​</a></h5><ul><li>使用案例：/imagine cat -- no dogs</li></ul><h5 id="chaos-随机性" tabindex="-1">Chaos（随机性） <a class="header-anchor" href="#chaos-随机性" aria-label="Permalink to &quot;Chaos（随机性）&quot;">​</a></h5><ul><li>默认值：0</li><li>有效范围：0-100（越大随机性越强）</li><li>使用案例：/imagine cat -- c 50</li></ul><h5 id="stylize-风格化程度" tabindex="-1">Stylize（风格化程度） <a class="header-anchor" href="#stylize-风格化程度" aria-label="Permalink to &quot;Stylize（风格化程度）&quot;">​</a></h5><ul><li>默认值：100</li><li>有效范围：0-1000</li><li>使用案例：/imagine cat -- s 50</li></ul><h5 id="niji-动漫模型" tabindex="-1">Niji（动漫模型） <a class="header-anchor" href="#niji-动漫模型" aria-label="Permalink to &quot;Niji（动漫模型）&quot;">​</a></h5><ul><li>对比：</li><li>使用案例：/imagine cat -- niji</li></ul><h5 id="quality-图片质量" tabindex="-1">Quality（图片质量） <a class="header-anchor" href="#quality-图片质量" aria-label="Permalink to &quot;Quality（图片质量）&quot;">​</a></h5><ul><li>注意：改变质量不会改变分辨率</li><li>有效值：.25、.5、1、2</li><li>使用案例：/imagine cat -- q 2</li></ul><h5 id="seed-图片编号" tabindex="-1">Seed（图片编号） <a class="header-anchor" href="#seed-图片编号" aria-label="Permalink to &quot;Seed（图片编号）&quot;">​</a></h5><ul><li>不稳定</li></ul><h5 id="image-weight-图片权重" tabindex="-1">Image Weight（图片权重） <a class="header-anchor" href="#image-weight-图片权重" aria-label="Permalink to &quot;Image Weight（图片权重）&quot;">​</a></h5><ul><li>解释：同时用imaage prompt和text prompt时，通过该参数设置生成的图片更像图片还是更像文字（参数越大，生成的图片越像原图）</li><li>默认值：1</li><li>有效范围：0.5-2</li><li>使用案例：/imagine cat -- iw 2</li></ul><h4 id="midjourney中英对照辞典-立即查看" tabindex="-1">Midjourney中英对照辞典：<a href="https://ssw9noe1h6.feishu.cn/docx/Iw3ddmGtfovhh7xa15Lcr21anFd" target="_blank" rel="noreferrer">立即查看</a> <a class="header-anchor" href="#midjourney中英对照辞典-立即查看" aria-label="Permalink to &quot;Midjourney中英对照辞典：[立即查看](https://ssw9noe1h6.feishu.cn/docx/Iw3ddmGtfovhh7xa15Lcr21anFd)&quot;">​</a></h4><h2 id="重要元素" tabindex="-1">重要元素 <a class="header-anchor" href="#重要元素" aria-label="Permalink to &quot;重要元素&quot;">​</a></h2><h3 id="类型、主体" tabindex="-1">类型、主体 <a class="header-anchor" href="#类型、主体" aria-label="Permalink to &quot;类型、主体&quot;">​</a></h3><ul><li>类型：水彩画、插画</li><li>主体：人物（性别、样貌、表情、神态、衣着）</li></ul><h3 id="细节、背景" tabindex="-1">细节、背景 <a class="header-anchor" href="#细节、背景" aria-label="Permalink to &quot;细节、背景&quot;">​</a></h3><ul><li>细节：动作、材质、颜色、构图（焦点）</li><li>背景：背景颜色（纯色/主色/风格）、天气</li></ul><h3 id="风格、媒介" tabindex="-1">风格、媒介 <a class="header-anchor" href="#风格、媒介" aria-label="Permalink to &quot;风格、媒介&quot;">​</a></h3><ul><li>风格：时间、人物、艺术风格、国家风格</li><li>媒介：相机型号、相机设置（曝光、光圈）</li></ul><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li>见Parameters Prompts</li></ul><h2 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h2><h3 id="_4k、hd-等所谓的rendering词有用吗" tabindex="-1">4K、HD 等所谓的Rendering词有用吗？ <a class="header-anchor" href="#_4k、hd-等所谓的rendering词有用吗" aria-label="Permalink to &quot;4K、HD 等所谓的Rendering词有用吗？&quot;">​</a></h3><ul><li><p>有一定作用，但弊大于利</p></li><li><p>加入这些词，可能会破坏prompt，特别是一些摄影场景（如用到背景虚化等效果时，4K可能会破坏背景虚化）</p></li></ul><h3 id="prompt-里的词语顺序会影响结果吗" tabindex="-1">Prompt 里的词语顺序会影响结果吗？ <a class="header-anchor" href="#prompt-里的词语顺序会影响结果吗" aria-label="Permalink to &quot;Prompt 里的词语顺序会影响结果吗？&quot;">​</a></h3><ul><li><p>会，越早出现的词，对结果影响越大</p></li><li><p>1.避免列举词语：不要在 prompt 里写多个同义词</p></li><li><p>2.使用具体词语：越具体生成的图片越符合 prompt</p></li><li><p>3.多使用短的句子：不要使用定语从句、长难句等，将这些词切开</p></li><li></li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>教程针对Midjourney模型，仅供参考</p></div>',44),o=[r];function h(n,s,d,u,m,c){return e(),i("div",null,o)}const q=a(t,[["render",h]]);export{b as __pageData,q as default};
