import assets from '@assets/index';
import Image from 'next/image';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type RadioButtonCheckedProps = DefaultPageProps & {
  className?: string;
};

function RadioButtonChecked(props: RadioButtonCheckedProps): JSX.Element {
  return (
    <div
      source={undefined}
      sourceType="upload"
      className={`${styles.page_container} ${props.className}`}
    >
      <Image
        sourceType="upload"
        className={styles.image_326}
        src={assets('1686621807428-svg')}
        alt="Image326"
      />
    </div>
  );
}

export default RadioButtonChecked;
