import { Text } from '@components/atoms/Text';
import DashboardButton from '@components/molecules/DashboardButton';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type DashboardDialogProps = DefaultPageProps & {
  className?: string;
  label: string;
  onCancel: () => void;
  onConfirm: () => void;
};

function DashboardDialog(props: DashboardDialogProps): JSX.Element {
  const handleOnClick = () => {
    const { onCancel } = props;
    return onCancel && onCancel();
  };
  const handleOnClick = () => {
    const { onConfirm } = props;
    return onConfirm && onConfirm();
  };
  return (
    <div className={`${styles.molecule_container} ${props.className}`}>
      <div className={styles.dialog_wrapper}>
        <div className={styles.dialog_content}>
          <Text textType="Text" className={styles.text_1}>
            {props.label}
          </Text>
        </div>
        <div className={styles.dialog_footer}>
          <div className={styles.box_4}>
            <DashboardButton className={styles.button_1} onClick={handleOnClick} label={'Cancel'} />
            <DashboardButton
              className={styles.button_2}
              onClick={handleOnClick}
              label={'Confirm'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardDialog;
