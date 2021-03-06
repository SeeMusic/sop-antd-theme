import React, { FC } from 'react';
import ColsContext from './colsContext';
import './style/index.less';

export interface DataTableItemProps {
  /**
   * @description 单元标题
   */
  label: string;
}

const DataTableItem: FC<DataTableItemProps> = (props) => {
  const { label } = props;

  function getStyles(cols: number) {
    const percentage = 100 / cols;

    // 单列
    let width = '100%';

    if (cols !== 1) {
      width = `calc(${percentage}% - 8px)`;
    }

    return {
      width,
    }
  }

  return (
    <ColsContext.Consumer>
      {
        context => {
          return (
            <div
              className="sop-data-table-item"
              style={getStyles(context.cols)}
            >
              <div
                className="sop-data-table-item__label"
              >
                {label}
              </div>

              <div className="sop-data-table-item__content">
                {props.children}
              </div>

            </div>
          )
        }
      }

    </ColsContext.Consumer>
  )
};

export default DataTableItem;
