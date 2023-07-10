import assets from '@assets/index';
import Image from 'next/image';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type RadioButtonUncheckedProps = DefaultPageProps & {
  className?: string;
};

function RadioButtonUnchecked(props: RadioButtonUncheckedProps): JSX.Element {
  return (
    <div
      source={undefined}
      sourceType="upload"
      className={`${styles.page_container} ${props.className}`}
    >
      <Image
        sourceType="upload"
        className={styles.image_325}
        src={assets('1686621807427-svg')}
        alt="Image325"
      />
    </div>
  );
}

export default RadioButtonUnchecked;
