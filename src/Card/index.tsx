import React, { FC } from 'react';
import './style/index.less';

export interface CardProps {
  /**
   * @description 标题
   */
  title?: string;
  /**
   * @description 页脚 Slot
   */
  footer?: object | null
  /**
   * @description 操作区 Slot
   */
  opt?: object | null
}

const SopCardHeader: FC<CardProps> = (props)  => {
  if (props.title === '') {
    return null;
  }

  return (
    <div className="sop-card__hd">
      <span className="sop-card__hd-title">
        {props.title}
      </span>

      <SopCardOpt opt={props.opt} />
    </div>
  )
}

const SopCardOpt: FC<CardProps> = (props) => {
  if (props.opt === null) {
    return null;
  }

  return (
    <span
      className="sop-card__hd-opt"
    >
      {props.opt}
    </span>
  )
}

const SopCardFooter: FC<CardProps> = (props) => {
  if (props.footer === null) {
    return null;
  }

  return (
    <div
      className="sop-card__ft"
    >
      {props.footer}
    </div>
  )
}

const Card: FC<CardProps> = (props) => {
  return (
    <div className="sop-card">
      <SopCardHeader
        title={props.title}
        opt={props.opt}
      />

      <div className="sop-card__bd">
        {props.children}
      </div>

      <SopCardFooter footer={props.footer} />
    </div>
  )
};

Card.defaultProps = {
  title: '',
  footer: null,
  opt: null,
};

export default Card;
