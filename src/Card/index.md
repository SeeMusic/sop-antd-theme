
## Card

Demo:

### 有标题
```tsx
import React from 'react';
import { Card } from 'sop-antd-theme';

export default () => {
  return (
    <Card
      title="标题"
    >
      内容区
    </Card>
  );
};
```

### 无标题
```tsx
import React from 'react';
import { Card } from 'sop-antd-theme';

export default () => {
  return (
    <Card>
      内容区
    </Card>
  );
};
```

### 操作区插槽
```tsx
import React from 'react';
import { Card } from 'sop-antd-theme';

export default () => {
  return (
    <Card
      title="标题"
      opt={
        <a href="">操作链接</a>
      }
    >
      内容区
    </Card>
  );
};
```

### 底部插槽
```tsx
import React from 'react';
import { Card } from 'sop-antd-theme';

export default () => {
  return (
    <Card
      footer={
        <span>底部内容</span>
      }
    >
      内容区
    </Card>
  );
};
```

      
<API />
