import TextFieldTitle from '@components/molecules/TextFieldTitle';
import StateDefaultPostIconFalseTagFalsePreIconFalse from '@components/molecules/StateDefaultPostIconFalseTagFalsePreIconFalse';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type TextFieldProps = DefaultPageProps & {
  className?: string;
};

function TextField(props: TextFieldProps): JSX.Element {
  return (
    <div className={`${styles.page_container} ${props.className}`}>
      <div className={styles.wrapper_2}>
        <TextFieldTitle className={styles.title_1} />
        <StateDefaultPostIconFalseTagFalsePreIconFalse className={styles.input_1} />
      </div>
    </div>
  );
}

export default TextField;
