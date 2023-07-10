import { Text } from '@components/atoms/Text';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type VariantContainedSizeLargeIconLeftFalseIconRightFalseProps = DefaultPageProps & {
  className?: string;
};

function VariantContainedSizeLargeIconLeftFalseIconRightFalse(
  props: VariantContainedSizeLargeIconLeftFalseIconRightFalseProps,
): JSX.Element {
  return (
    <div className={`${styles.page_container} ${props.className}`}>
      <Text className={styles.text_324}>{'Large'}</Text>
    </div>
  );
}

export default VariantContainedSizeLargeIconLeftFalseIconRightFalse;
