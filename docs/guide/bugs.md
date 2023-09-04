# 常见报错
::: warning
注意：文档仅供参考，以实际情况为准。
:::

#### 高频限制：两次提问间隔需** 大于 5秒**
```txt
您发送太快啦，请稍后重试
```

#### 模型名称不存在：模型名称更新，请刷新页面或清除缓存
```json
{
  "code": 10300,
  "message": "model name not exists",
  "cnMessage": null,
  "data": null
}
```

#### 空回复/超时/饱和：点击重试按钮重新获取结果

```txt
当前分组负载已饱和，请稍后再试
```

```json
{
  "error": true,
  "message": "empty response"
}
```

```json
{
  "code": 10300,
  "message": "request remote api  error: Read timed out",
  "data": null
}
```

#### 分组无渠道可用/令牌无效：AI Ultra配置问题，请联系管理员
```json
{
  "error": {
    "message": "当前分组 default 下对于模型 *** 无可用渠道",
    "type": “one_api_error"
  }
}
```

```txt
invalid character '<' looking for beginning of value
```
