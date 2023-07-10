import assets from '@assets/index';
import Image from 'next/image';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type BackgroundProps = DefaultPageProps & {
  className?: string;
};

function Background(props: BackgroundProps): JSX.Element {
  return (
    <div className={`${styles.page_container} ${props.className}`}>
      <Image
        sourceType="upload"
        className={styles.image_30}
        src={assets('1683519697539-pngtree-gold-party-background-light-image-389751-jpg')}
        alt="Image30"
      />
    </div>
  );
}

export default Background;
