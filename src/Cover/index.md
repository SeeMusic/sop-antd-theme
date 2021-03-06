
## Cover

Demo:

### 无图片 ICON 占位

```tsx
import React from 'react';
import { Cover } from 'sop-antd-theme';

export default () => {
  return (
    <Cover
      type="cp"
      size={72}
    />
  );
};
```

### 无图片 自定义 placeholder

```tsx
import React from 'react';
import { Cover } from 'sop-antd-theme';

export default () => {
  return (
    <Cover
      type="cp"
      size={72}
      placeholder="文本"
    />
  );
};
```

### 有图片

```tsx
import React from 'react';
import { Cover } from 'sop-antd-theme';

export default () => {
  return (
    <Cover
      type="cp"
      size={72}
      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
    />
  );
};
```

<API />
