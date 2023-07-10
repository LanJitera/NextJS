import assets from '@assets/index';
import Image from 'next/image';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type IcLinedeleteProps = DefaultPageProps & {
  className?: string;
};

function IcLinedelete(props: IcLinedeleteProps): JSX.Element {
  return (
    <div
      source={undefined}
      sourceType="upload"
      className={`${styles.page_container} ${props.className}`}
    >
      <Image
        sourceType="upload"
        className={styles.image_26}
        src={assets('1683261286543-png')}
        alt="Image26"
      />
    </div>
  );
}

export default IcLinedelete;
