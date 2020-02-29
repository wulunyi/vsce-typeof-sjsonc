# vsce-typeof-sjsonc

将剪切板中的 json/jsonc/jsonLick 文本转换为 TypeScript interface

## commands

命令： typeof from clipboard

剪贴板内容

```text
{
    // 123
    "a": 123,
    /** true */
    b: true,
    c: [{d: 'test'}]
}
```

输入结果

```typescript
export interface Root {
    /** 123 */
    a: number;
    /** true */
    b: boolean;
    c: Array<{
        d: string;
    }>;
}
```

## 快捷键

+ `ctrl+alt+V` 普通模式，将输入转换为一整个 interface
+ `ctrl+alt+S` 分割模式，将输入中对象分割为多个 interface

复制完毕后进入粘贴的位置执行快捷键  
