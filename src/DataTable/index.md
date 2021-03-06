
## DataTable

Demo:

### 常规
```tsx
import React from 'react';
import { DataTable, DataTableItem } from 'sop-antd-theme';

export default () => {
  return (
    <DataTable>
      <DataTableItem label="列 1">
        文本
      </DataTableItem>
      <DataTableItem label="列 2">
        文本
      </DataTableItem>
      <DataTableItem label="列 3">
        文本
      </DataTableItem>
    </DataTable>
  );
};
```

### 有标题
```tsx
import React from 'react';
import { DataTable, DataTableItem } from 'sop-antd-theme';

export default () => {
  return (
    <DataTable
      title="标题"
    >
      <DataTableItem label="列 1">
        文本
      </DataTableItem>
      <DataTableItem label="列 2">
        现在项目需要开发一个卡片组件，如下图所示，卡片可以指定标题，然后卡片内容可以用户自定义，这时候对于卡片内容来说，就可以使用插槽来实现，下面我们就分别使用 Vue 和 React 来实现这个功能
      </DataTableItem>
      <DataTableItem label="列 3">
        单元区 3
      </DataTableItem>
    </DataTable>
  );
};
```

### 自定义单行列数
```tsx
import React from 'react';
import { DataTable, DataTableItem } from 'sop-antd-theme';

export default () => {
  return (
    <DataTable
      cols={3}
    >
      <DataTableItem label="列 1">
        文本 <br />
        换行
      </DataTableItem>
      <DataTableItem label="列 2">
        现在项目需要开发一个卡片组件，如下图所示，卡片可以指定标题，然后卡片内容可以用户自定义，这时候对于卡片内容来说，就可以使用插槽来实现，下面我们就分别使用 Vue 和 React 来实现这个功能
      </DataTableItem>
      <DataTableItem label="列 3">
        单元区 3
      </DataTableItem>
    </DataTable>
  );
};
```

### DataTable 配置
<API />

### DataTableItem 配置
<API src="./item.tsx" />
