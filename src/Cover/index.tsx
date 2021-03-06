import React, { FC } from 'react';
import './style/index.less';

// TODO 约束不生效
export interface CoverProps {
  /**
   * @description 类型
   * @default 'album'
   */
  type?: 'album' | 'track' | 'cp' | 'contract' | 'dsp' | 'customer' | 'playlist' | 'playlist-project';

  /**
   * @description 有效图片地址
   */
  src?: string;

  /**
   * @description 无 src 时的提示文本
   */
  placeholder?: string;

  /**
   * @description 展示大小(宽高)
   * @default 240
   */
  size?: number;
}

// TODO 默认值传递问题，上层FC定义了默认，但是这里必须重复设置
const getBackgroundStyle = (size: number = 240, type: string = 'album') => {
  const coverTypeList = [
    'album',
    'track',
    'cp',
    'customer',
    'contract',
    'dsp',
    'playlist-project',
    'playlist',
  ];

  return {
    backgroundPosition: `0 -${size * coverTypeList.indexOf(type)}px`,
    backgroundSize: `${size}px auto`,
  };
};

const CoverPlaceholder: FC<CoverProps> = (props) => {
  const { type , placeholder, size } = props;

  if (placeholder !== '') {
    return (
      <span>
        {placeholder}
      </span>
    );
  }

  return (
    <span
      className="default-cover"
      style={getBackgroundStyle(size, type)}
    />
  );
}

const Cover: FC<CoverProps> = (props) => {
  const { src, type, placeholder, size } = props;

  const className = `sop-cover sop-cover--${type}`;

  const sizeStyle = {
    width: size,
    height: size,
  };

  return (
    <div
      className={className}
      style={sizeStyle}
    >
      {
        src !== '' && <img
          src={src}
          width={size}
          height={size}
        />
      }
      {
        src === '' && <CoverPlaceholder
          type={type}
          size={size}
          placeholder={placeholder}
        />
      }
    </div>
  );
}

Cover.defaultProps = {
  type: 'album',
  size: 240,
  src: '',
  placeholder: '',
};

export default Cover;
