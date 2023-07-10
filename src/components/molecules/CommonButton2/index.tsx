import { Text } from '@components/atoms/Text';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type CommonButton2Props = DefaultPageProps & {
  className?: string;
  label: string;
  onPress: () => void;
};

function CommonButton2(props: CommonButton2Props): JSX.Element {
  const handleText26 = () => {
    const { onPress } = props;
    return onPress && onPress();
  };
  return (
    <div className={`${styles.page_container} ${props.className}`}>
      <div className={styles.box_1}>
        <Text textType="Text" className={styles.text_26} onClick={handleText26}>
          {props.label}
        </Text>
      </div>
    </div>
  );
}

export default CommonButton2;
