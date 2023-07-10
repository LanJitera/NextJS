import { Text } from '@components/atoms/Text';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type DashboardMenuItemProps = DefaultPageProps & {
  className?: string;
  label: string;
  onClick: () => void;
};

function DashboardMenuItem(props: DashboardMenuItemProps): JSX.Element {
  const handleBox2 = () => {
    const { onClick } = props;
    return onClick && onClick();
  };
  return (
    <div className={`${styles.molecule} ${props.className}`}>
      <div className={styles.box_2} onClick={handleBox2}>
        <Text textType="Text" className={styles.text_2}>
          {props.label}
        </Text>
      </div>
    </div>
  );
}

export default DashboardMenuItem;
