import assets from '@assets/index';
import Image from 'next/image';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type VideoProps = DefaultPageProps & {
  className?: string;
};

function Video(props: VideoProps): JSX.Element {
  return (
    <div
      source={undefined}
      sourceType="upload"
      className={`${styles.page_container} ${props.className}`}
    >
      <Image
        sourceType="upload"
        className={styles.image_207}
        src={assets('1686619839538-svg')}
        alt="Image207"
      />
    </div>
  );
}

export default Video;
