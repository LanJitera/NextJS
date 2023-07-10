import { Text } from '@components/atoms/Text';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type TextFieldTitleProps = DefaultPageProps & {
  className?: string;
};

function TextFieldTitle(props: TextFieldTitleProps): JSX.Element {
  return (
    <div className={`${styles.page_container} ${props.className}`}>
      <Text textType="Text" className={styles.text_5}>
        {'FORM NAME'}
      </Text>
      <div className={styles.tagmust_8}>
        <Text textType="Text" className={styles.text_8}>
          {'必須'}
        </Text>
      </div>
    </div>
  );
}

export default TextFieldTitle;
