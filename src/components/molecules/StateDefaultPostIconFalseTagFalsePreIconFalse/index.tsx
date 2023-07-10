import { Text } from '@components/atoms/Text';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type StateDefaultPostIconFalseTagFalsePreIconFalseProps = DefaultPageProps & {
  className?: string;
};

function StateDefaultPostIconFalseTagFalsePreIconFalse(
  props: StateDefaultPostIconFalseTagFalsePreIconFalseProps,
): JSX.Element {
  return (
    <div className={`${styles.page_container} ${props.className}`}>
      <Text textType="Text" className={styles.text_14}>
        {'入力してください'}
      </Text>
    </div>
  );
}

export default StateDefaultPostIconFalseTagFalsePreIconFalse;
