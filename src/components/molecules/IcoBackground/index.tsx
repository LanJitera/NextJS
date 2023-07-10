import assets from '@assets/index';
import Image from 'next/image';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type IcoBackgroundProps = DefaultPageProps & {
  className?: string;
};

function IcoBackground(props: IcoBackgroundProps): JSX.Element {
  return (
    <div
      source={undefined}
      sourceType="upload"
      className={`${styles.page_container} ${props.className}`}
    >
      <Image
        sourceType="upload"
        className={styles.image_1}
        src={assets('1683261192898-png')}
        alt="Image1"
      />
    </div>
  );
}

export default IcoBackground;
