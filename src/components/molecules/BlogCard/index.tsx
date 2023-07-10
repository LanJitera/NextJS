import Image from 'next/image';
import { Text } from '@components/atoms/Text';
import { Button } from '@components/atoms/Button';
import { useDeletePartybookingMutation } from '@services/partybooking';
import { Toast } from '@components/atoms/Toast';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type BlogCardProps = DefaultPageProps & {
  className?: string;
  nameParty: string;
  partystarttime: string;
  partyLocation: string;
  decribe: string;
  img: string;
  label: string;
  onPress: (Id: number) => void;
  IdPartyBooking: number;
  numberofpeople: number;
  IdParty: number;
};

function BlogCard(props: BlogCardProps): JSX.Element {
  const deletePartybookingMutation = useDeletePartybookingMutation();

  const handleButton1 = async () => {
    try {
      await deletePartybookingMutation.mutateAsync({ id: props.IdPartyBooking });
      Toast.success('Huỷ thành công');
    } catch (error: unknown) {
      Toast.error('Huỷ thất bại');
    }
  };
  return (
    <div className={`${styles.custom_component_container} ${props.className}`}>
      <div className={styles.box_8}>
        <Image
          className={styles.image_1}
          width="258"
          height="188"
          src="https://picsum.photos/600/600"
          alt="image_1"
        />
        <div className={styles.box_1}>
          <div className={styles.box_3}>
            <Text textType="Text" className={styles.text_3}>
              {props.nameParty}
            </Text>
          </div>
          <div className={styles.box_2}>
            <Text textType="Text" className={styles.text_1}>
              {props.partyLocation}
            </Text>
            <Text textType="Text" className={styles.text_1}>
              {props.partystarttime}
            </Text>
          </div>
          <div className={styles.box_4}>
            <div className={styles.box_5}>
              <Text textType="Text" className={styles.text_4}>
                {props.numberofpeople}
              </Text>
            </div>
            <div className={styles.box_6}>
              <Button buttonType="primary" className={styles.button_1} onClick={handleButton1}>
                <Text textType="Text" className={styles.button_1_text_0}>
                  {props.label}
                </Text>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
