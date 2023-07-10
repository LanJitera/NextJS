import { Text } from '@components/atoms/Text';
import CommonButton2 from '@components/molecules/CommonButton2';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type ModalConfirmDeleteProps = DefaultPageProps & {
  className?: string;
  yes: () => void;
  No: () => void;
};

function ModalConfirmDelete(props: ModalConfirmDeleteProps): JSX.Element {
  const handleOnPress = () => {
    const { yes } = props;
    return yes && yes();
  };
  const handleOnPress = () => {
    const { No } = props;
    return No && No();
  };
  return (
    <div className={`${styles.page_container} ${props.className}`}>
      <Text textType="Text" className={styles.text_2}>
        {'Are you sure to delete this note ? '}
      </Text>
      <div className={styles.button_wrapper_3}>
        <CommonButton2 className={styles.common_button_1} onPress={handleOnPress} label={'Yes'} />
        <CommonButton2 className={styles.common_button_2} onPress={handleOnPress} label={'No'} />
      </div>
    </div>
  );
}

export default ModalConfirmDelete;
