import { Text } from '@components/atoms/Text';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type WrapperProps = DefaultPageProps & {
  className?: string;
};

function Wrapper(props: WrapperProps): JSX.Element {
  return (
    <div className={`${styles.page_container} ${props.className}`}>
      <div className={styles.title_27}>
        <Text textType="Text" className={styles.text_27}>
          {'Label'}
        </Text>
      </div>
      <div className={styles.input_29}>
        <Text textType="Text" className={styles.text_29}>
          {'Placeholder'}
        </Text>
      </div>
    </div>
  );
}

export default Wrapper;
