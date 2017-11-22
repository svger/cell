# Cell
表单列表组件，单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。eg：联系人列表

## API

### Cell

| 属性        | 说明                          | 类型            | 默认值         |
| --------- | --------------------------- | ------------- | ----------- |
| prefixCls | 样式前缀，如：`cefc-cell`，可用于自定义样式 | String        | `cefc-cell` |
| children  | 子元素                         | React.Element | 无           |



### Cell.Title

| 属性        | 说明                          | 类型            | 默认值         |
| --------- | --------------------------- | ------------- | ----------- |
| prefixCls | 样式前缀，如：`cefc-cell`，可用于自定义样式 | String        | `cefc-cell` |
| children  | 子元素                         | React.Element | 无           |



### Cell.Item

| 属性        | 说明                          | 类型            | 默认值         |
| --------- | --------------------------- | ------------- | ----------- |
| prefixCls | 样式前缀，如：`cefc-cell`，可用于自定义样式 | String        | `cefc-cell` |
| label     | 用于表单元素，点击整行获取焦点             | Boolean       | 无           |
| onClick   | 点击事件的回调函数                   | Function      | 空函数         |
| children  | 子元素                         | React.Element | 无           |



### Cell.Left

| 属性        | 说明                          | 类型            | 默认值         |
| --------- | --------------------------- | ------------- | ----------- |
| prefixCls | 样式前缀，如：`cefc-cell`，可用于自定义样式 | String        | `cefc-cell` |
| text      | 必选，字段描述                     | String        | 无           |
| icon      | 字段描述前的图标                    | React.Element | 无           |



### Cell.Right

| 属性        | 说明                          | 类型            | 默认值         |
| --------- | --------------------------- | ------------- | ----------- |
| prefixCls | 样式前缀，如：`cefc-cell`，可用于自定义样式 | String        | `cefc-cell` |
| arrow     | 是否需要右箭头                     | Boolean       | 无           |
| children  | 子元素                         | React.Element | 无           |

