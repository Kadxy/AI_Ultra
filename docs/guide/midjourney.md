# 绘图教程
::: info
更新日期：2023年9月3日
:::


## Midjourney Prompt 基本结构
### ImageURL+Text Prompt+Parameters
![](https://tuchuang111025.oss-cn-shenzhen.aliyuncs.com/WeChat52978d24cb630fb8254d00192e93244e.jpg)

#### Image Prompts（用于blend混图模式）
- 图片的 URL地址且可公开可访问
- 图片格式仅支持 png、gif 和 jpg
- 可放两张图的URL/一张图的 URL+一段话

#### Text Prompts（描述希望AI生成的图片）
- 无法理解句子结构和语法
- 不像ChatGPT能明白你说的话
- 存在违禁词，部分词语无法输入

#### Parameters Prompts（设置生成图片的参数）
##### Version（版本）
- 有效值：1、2、3、4、5（默认）
- 使用案例：/imagine cat --v 5
##### Aspect Ratios（长宽比）
- 默认值：1:1
- 有效范围：任意，但不宜2:1以上（V5）
- 使用案例：/imagine cat -- ar 9:16
##### No（拒绝出现）
- 使用案例：/imagine cat -- no dogs
##### Chaos（随机性）
- 默认值：0
- 有效范围：0-100（越大随机性越强）
- 使用案例：/imagine cat -- c 50
##### Stylize（风格化程度）
- 默认值：100
- 有效范围：0-1000
- 使用案例：/imagine cat -- s 50
#####  Niji（动漫模型）
- 对比：
- 使用案例：/imagine cat -- niji
##### Quality（图片质量）
- 注意：改变质量不会改变分辨率
- 有效值：.25、.5、1、2
- 使用案例：/imagine cat -- q 2
##### Seed（图片编号）
- 不稳定
##### Image Weight（图片权重）
- 解释：同时用imaage prompt和text prompt时，通过该参数设置生成的图片更像图片还是更像文字（参数越大，生成的图片越像原图）
- 默认值：1
- 有效范围：0.5-2
- 使用案例：/imagine cat -- iw 2
#### Midjourney中英对照辞典：[立即查看](https://ssw9noe1h6.feishu.cn/docx/Iw3ddmGtfovhh7xa15Lcr21anFd)  


## 重要元素
### 类型、主体
- 类型：水彩画、插画
- 主体：人物（性别、样貌、表情、神态、衣着）
### 细节、背景
- 细节：动作、材质、颜色、构图（焦点）
- 背景：背景颜色（纯色/主色/风格）、天气
### 风格、媒介
- 风格：时间、人物、艺术风格、国家风格
- 媒介：相机型号、相机设置（曝光、光圈）
### 参数
- 见Parameters Prompts    


## FAQ
### 4K、HD 等所谓的Rendering词有用吗？

- 有一定作用，但弊大于利

- 加入这些词，可能会破坏prompt，特别是一些摄影场景（如用到背景虚化等效果时，4K可能会破坏背景虚化）

### Prompt 里的词语顺序会影响结果吗？

- 会，越早出现的词，对结果影响越大

- 1.避免列举词语：不要在 prompt 里写多个同义词

- 2.使用具体词语：越具体生成的图片越符合 prompt

- 3.多使用短的句子：不要使用定语从句、长难句等，将这些词切开
- 


::: info
教程针对Midjourney模型，仅供参考
:::
