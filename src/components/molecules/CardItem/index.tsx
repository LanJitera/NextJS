import Image from 'next/image';
import { Text } from '@components/atoms/Text';
import { Button } from '@components/atoms/Button';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type CardItemProps = DefaultPageProps & {
  className?: string;
  nameParty: string;
  partystarttime: string;
  partyLocation: string;
  decribe: string;
  img: string;
  label: string;
  onPress: (Id: number) => void;
  Id: number;
};

function CardItem(props: CardItemProps): JSX.Element {
  const handleText29 = () => {
    const { onPress } = props;
    return onPress && onPress();
  };
  return (
    <div className={`${styles.custom_component_container} ${props.className}`}>
      <div className={styles.box_3}>
        <Image
          sourceType="network"
          className={styles.image_1}
          width="288"
          height="242"
          src={''}
          alt="image_1"
        />
        <div className={styles.box_4}>
          <div className={styles.box_5}>
            <div className={styles.box_6}>
              <Text textType="Text" className={styles.text_1}>
                {props.nameParty}
              </Text>
              <Text textType="Text" className={styles.text_2}>
                {props.partystarttime}
              </Text>
            </div>
            <Text textType="Text" className={styles.text_3}>
              {props.decribe}
            </Text>
          </div>
          <Button buttonType="primary" className={styles.button_0}>
            <Text textType="Text" className={styles.text_29} onClick={handleText29}>
              {props.label}
            </Text>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
