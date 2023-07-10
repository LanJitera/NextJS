import { Text } from '@components/atoms/Text';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type TextProps = DefaultPageProps & {
  className?: string;
  Text: string;
  move: (Id: number) => void;
  Id: number;
};

function Text(props: TextProps): JSX.Element {
  const handleBox1 = () => {
    const { move } = props;
    return move && move();
  };
  const handleText1 = () => {
    const { move } = props;
    return move && move();
  };
  return (
    <div className={`${styles.custom_component_container} ${props.className}`}>
      <div className={styles.box_1} onClick={handleBox1}>
        <Text textType="Text" className={styles.text_1} onClick={handleText1}>
          {props.Text}
        </Text>
      </div>
    </div>
  );
}

export default Text;
