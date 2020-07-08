/**
 * @description 虚拟列表
 * @author cq
 * @Date 2020-06-28 15:07:52
 * @LastEditTime 2020-07-08 15:17:03
 * @LastEditors cq
 */



import React, { FunctionComponent, useState, useEffect, useRef } from 'react';
import { Table, Modal } from 'antd';
import classNames from 'classnames';
import { VariableSizeGrid as Grid } from 'react-window';
import ResizeObserver from 'rc-resize-observer';
import columns from "./columns"

type VirtualTableProps = {
  isVisable: boolean
  onSubmit: () => void
  onClose: () => void
}
const dataSource = Array.from(
  {
    length: 100000,
  },
  (_, key) => ({
    key,
  }),
);
console.log(dataSource);
const scroll = {
  y: 300,
  x: '100vw',
}


const VirtualTable: FunctionComponent<VirtualTableProps> = ({ isVisable, onClose, onSubmit }) => {

  // const { scroll, className } = props;
  const [tableWidth, setTableWidth] = useState(0);

  const widthColumnCount = columns.filter(({ width }) => !width).length;

  const mergedColumns = columns.map(column => {
    if (column.width) {
      return column;
    }

    return {
      ...column,
      width: Math.floor(tableWidth / widthColumnCount),
    };
  });

  const gridRef = useRef<any>();
  const [connectObject] = useState(() => {
    const obj = {};
    Object.defineProperty(obj, 'scrollLeft', {
      get: () => null,
      set: (scrollLeft: number) => {
        if (gridRef.current) {
          gridRef.current.scrollTo({ scrollLeft });
        }
      },
    });

    return obj;
  });
  const resetVirtualGrid = () => {
    gridRef.current.resetAfterIndices({
      columnIndex: 0,
      shouldForceUpdate: false,
    });
  };

  useEffect(() => resetVirtualGrid, []);
  useEffect(() => resetVirtualGrid, [tableWidth]);

  const renderVirtualList = (rawData: any[], { scrollbarSize, ref, onScroll }: any) => {
    ref.current = connectObject;

    return (
      <Grid
        ref={gridRef}
        className="virtual-grid"
        columnCount={mergedColumns.length}
        columnWidth={index => {
          const { width } = mergedColumns[index];
          return index === mergedColumns.length - 1 ? width - scrollbarSize - 1 : width;
        }}
        height={scroll.y}
        rowCount={rawData.length}
        rowHeight={() => 54}
        width={tableWidth}
        onScroll={({ scrollLeft }) => {
          onScroll({ scrollLeft });
        }}
      >
        {({ columnIndex, rowIndex, style }) => {
          return (
            <div
              className={classNames('virtual-table-cell', {
                'virtual-table-cell-last': columnIndex === mergedColumns.length - 1,
              })}
              style={style}
            >
              {rawData[rowIndex][mergedColumns[columnIndex].dataIndex]}
            </div>
          )
        }
        }
      </Grid>
    );
  };

  return (
    <Modal
      title="tabel展开子项滑动"
      visible={isVisable}
      width={1250}
      maskClosable={true}
      onCancel={onClose}
      onOk={onSubmit}
    >
      <ResizeObserver
        onResize={({ width }) => {
          setTableWidth(width);
        }}
      >
        <Table
          scroll={scroll}
          dataSource={dataSource}
          className={classNames('virtual-table')}
          columns={mergedColumns}
          pagination={false}
          components={{
            body: renderVirtualList,
          }}
        />
      </ResizeObserver>
    </Modal>
  )
}


export default React.memo(VirtualTable)






// ReactDOM.render(
//   <VirtualTable
//     columns={columns}
//     dataSource={data}

//   />,
//   mountNode,
// );
