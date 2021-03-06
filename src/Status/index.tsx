import React, { FC } from 'react';
import './style/index.less';

export interface StatusProps {
  /**
   * @description 颜色类型
   */
  color: 'all' | 'red' | 'green' | 'yellow' | 'blue' | 'gray';
  /**
   * @description 文本
   */
  text?: string;
}

const SopStatus: FC<StatusProps> = (props) => {
  const { color, text } = props;

  const iconClassName = `sop-status__icon sop-status__icon--${color}`;

  return (
    <span className="sop-status">
      <i className={iconClassName} />
      { text === undefined
        ? null
        : <em className="sop-status__text">
          {text}
        </em>
      }
    </span>
  );
}

export default SopStatus;
