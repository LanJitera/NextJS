import assets from '@assets/index';
import Image from 'next/image';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type DashboardImageWrapperProps = DefaultPageProps & {
  className?: string;
};

function DashboardImageWrapper(props: DashboardImageWrapperProps): JSX.Element {
  return (
    <div className={`${styles.molecule} ${props.className}`}>
      <div className={styles.box_2}>
        <Image
          sourceType="upload"
          className={styles.image_2}
          src={assets('1686630477484-logo-gmo-png')}
          alt="image_2"
        />
      </div>
    </div>
  );
}

export default DashboardImageWrapper;
