
## types
- String
- Float
- Boolean
- DateTime
- Enum
- Json
- ID
- List

## decorators
- unique 唯一
- default 默认
- ! 必填
- relation

## 自带
- createdAt
- updatedAt

## api
- updateManyXXX
- 

```ts
export class AuthAccessToken {
    @unique()
    id: number;

    @unique()
    id: number;
}
```