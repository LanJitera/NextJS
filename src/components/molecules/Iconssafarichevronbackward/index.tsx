import assets from '@assets/index';
import Image from 'next/image';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type IconssafarichevronbackwardProps = DefaultPageProps & {
  className?: string;
};

function Iconssafarichevronbackward(props: IconssafarichevronbackwardProps): JSX.Element {
  return (
    <div
      source={undefined}
      sourceType="upload"
      className={`${styles.page_container} ${props.className}`}
    >
      <Image
        sourceType="upload"
        className={styles.image_20}
        src={assets('1683261192698-png')}
        alt="Image20"
      />
    </div>
  );
}

export default Iconssafarichevronbackward;
