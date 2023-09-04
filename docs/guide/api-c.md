# 调用接口
### 1.接口地址：**https://api.aiutra.com**
### 2.调用说明
- 计费规则：与官网完全一致
- 调用方式：与官网完全一致 
- 可用地区：中国境内可直接使用 
- 支持并发：默认限制300次/分
- 余额查询：登录平台或使用OPENAI协议查询 
### 3.示例代码
#### Curl：
 ```json
-H "Content-Type: application/json" \
-H "Authorization: Bearer sk-***************" \
-d '{
    "model": "gpt-4",
    "messages": [{"role": "system", "content": "You are a helpful assistant."}, {"role": "user", "content": "鲁迅为什么打周树人"}]
    }'
 ```
#### Python：
 ```python
import openai
openai.api_key = "sk-***************"
openai.api_base = "https://api.aiutra.com/v1"
response = openai.ChatCompletion.create(
    model='gpt-4',
    messages=[
        {'role': 'user', 'content': "鲁迅为什么打周树人"},
    ],
    stream=True
)
for chunk in response:
    print(chunk.choices[0].delta.content, end="", flush=True)
 ```
#### 其他
请查阅OPENAI官方文档