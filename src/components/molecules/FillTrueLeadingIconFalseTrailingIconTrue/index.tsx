import assets from '@assets/index';
import { Text } from '@components/atoms/Text';
import Image from 'next/image';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type FillTrueLeadingIconFalseTrailingIconTrueProps = DefaultPageProps & {
  className?: string;
};

function FillTrueLeadingIconFalseTrailingIconTrue(
  props: FillTrueLeadingIconFalseTrailingIconTrueProps,
): JSX.Element {
  return (
    <div className={`${styles.page_container} ${props.className}`}>
      <Text textType="Text" className={styles.text_10}>
        {'Button'}
      </Text>
      <div className={styles.icons_arrow_13}>
        <Image
          sourceType="upload"
          className={styles.image_12}
          src={assets('1686668131148-png')}
          alt="Image12"
        />
        <Image
          sourceType="upload"
          className={styles.image_13}
          src={assets('1686668131166-svg')}
          alt="Image13"
        />
      </div>
    </div>
  );
}

export default FillTrueLeadingIconFalseTrailingIconTrue;
