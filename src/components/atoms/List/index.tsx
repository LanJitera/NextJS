import React, { CSSProperties, forwardRef, useMemo } from 'react';
import clsx from 'clsx';

import styles from './index.module.css';

export type ColumnCount = number;

export interface ListStateGrid {
  gutter?: number;
  column?: ColumnCount;
  xs?: ColumnCount;
  md?: ColumnCount;
  xl?: ColumnCount;
}

export interface ListProps<ItemType extends Record<string, unknown>> {
  grid?: ListStateGrid;
  dataSource: ItemType[];
  renderItem: (item: ItemType) => React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const List = forwardRef<HTMLDivElement, ListProps<any>>((props, ref) => {
  const { style, className, dataSource, renderItem, grid, header, footer } = props;

  const listGridStyle = useMemo<CSSProperties>(() => {
    return {
      '--column': grid?.column || 1,
      '--xs': grid?.xs || 1,
      '--md': grid?.md || 1,
      '--xl': grid?.xl || 1,
    } as CSSProperties;
  }, [grid?.column, grid?.xs, grid?.md, grid?.xl]);

  const gutterStyle = grid?.gutter ? { gap: `${grid?.gutter}px` } : {};

  return (
    <ul
      ref={ref}
      style={{ ...style, ...gutterStyle, ...listGridStyle }}
      className={clsx(className, grid && styles.grid, grid && styles.list)}
    >
      {header || undefined}
      {dataSource?.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
      {footer || undefined}
    </ul>
  );
});

export { List };
