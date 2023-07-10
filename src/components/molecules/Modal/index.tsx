import { useTranslation } from 'next-i18next';
import assets from '@assets/index';
import { Text } from '@components/atoms/Text';
import { Button } from '@components/atoms/Button';
import Image from 'next/image';
import { useDeletePartyMutation } from '@services/party';
import { Toast } from '@components/atoms/Toast';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type ModalProps = DefaultPageProps & {
  className?: string;
  onYes: () => void;
  onNo: () => void;
  labelMain: string;
  labelDec: string;
  id: number;
};

function Modal(props: ModalProps): JSX.Element {
  const { t } = useTranslation('web');
  const deletePartyMutation = useDeletePartyMutation();

  const handleBox4 = () => {
    const { onYes } = props;
    return onYes && onYes();
  };
  const handleBox0 = () => {
    const { onNo } = props;
    return onNo && onNo();
  };
  const handleButton1 = async () => {
    try {
      await deletePartyMutation.mutateAsync({ id: props.id });
      Toast.success('Xoá thành công');
    } catch (error: unknown) {
      Toast.error('Xoá thất bại ');
    }
  };
  return (
    <div className={`${styles.custom_component_container} ${props.className}`}>
      <div className={styles.box_1}>
        <div className={styles.box_2}>
          <Text textType="Text" className={styles.text_1}>
            {props.onYes}
          </Text>
          <Text textType="Text" className={styles.text_2}>
            {props.labelDec}
          </Text>
        </div>
        <div className={styles.box_3}>
          <div className={styles.box_4} onClick={handleBox4}>
            <Text textType="Text" className={styles.text_3}>
              {t('molecule.modal.text_3')}
            </Text>
          </div>
          <div className={styles.box_0} onClick={handleBox0}>
            <Text textType="Text" className={styles.text_0}>
              {t('molecule.modal.text_3')}
            </Text>
          </div>
        </div>
        <Button buttonType="primary" className={styles.button_1} onClick={handleButton1}>
          <Text textType="Text" className={styles.button_1_text_0}>
            {'[Text]'}
          </Text>
        </Button>
      </div>
      <div className={styles.box_6}>
        <Image
          sourceType="upload"
          className={styles.image_1}
          src={assets('1687671995128-p-9-jxw-3-tbg-90-zyayptr-9-zwq-2-w-7-rgu-svg')}
          alt="image_1"
        />
      </div>
    </div>
  );
}

export default Modal;
