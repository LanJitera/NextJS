import assets from '@assets/index';
import Image from 'next/image';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type ArrowProps = DefaultPageProps & {
  className?: string;
};

function Arrow(props: ArrowProps): JSX.Element {
  return (
    <div className={`${styles.page_container} ${props.className}`}>
      <div className={styles.arrow_drop_down_329}>
        <Image
          sourceType="upload"
          className={styles.image_329}
          src={assets('1686621807430-svg')}
          alt="Image329"
        />
      </div>
    </div>
  );
}

export default Arrow;
