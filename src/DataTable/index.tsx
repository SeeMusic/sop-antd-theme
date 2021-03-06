import React, { FC } from 'react';
import ColsContext from './colsContext';
import './style/index.less';

export interface DataTableProps {
  /**
   * @description 标题
   */
  title?: string;
  /**
   * @description 列数
   * @default 2
   */
  cols?: number;
  /**
   * @description 标题位置
   */
  labelPosition?: 'top' | 'left'
}

const DataTableHeader: FC<DataTableProps> = (props)  => {
  if (props.title === '') {
    return null;
  }

  return (
    <div className="sop-data-table__title">
      {props.title}
    </div>
  )
}

const DataTable: FC<DataTableProps> = (props) => {
  const { title, labelPosition, cols } = props;

  const globalClassName = `sop-data-table sop-data-table--${labelPosition}`;

  return (
    <div className={globalClassName}>
      <DataTableHeader
        title={title}
      />

      <div className="sop-data-table__content">
        <ColsContext.Provider value={{
          cols: cols || 2,
        }}>
          {props.children}
        </ColsContext.Provider>
      </div>

    </div>
  )
};

DataTable.defaultProps = {
  title: '',
  labelPosition: 'top',
  cols: 2,
};

export default DataTable;
