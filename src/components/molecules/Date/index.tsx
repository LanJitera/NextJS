import assets from '@assets/index';
import Image from 'next/image';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type DateProps = DefaultPageProps & {
  className?: string;
};

function Date(props: DateProps): JSX.Element {
  return (
    <div
      source={undefined}
      sourceType="upload"
      className={`${styles.page_container} ${props.className}`}
    >
      <Image
        sourceType="upload"
        className={styles.image_327}
        src={assets('1686621807428-svg')}
        alt="Image327"
      />
    </div>
  );
}

export default Date;
