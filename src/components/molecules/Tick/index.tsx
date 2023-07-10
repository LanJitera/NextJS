import assets from '@assets/index';
import Image from 'next/image';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type TickProps = DefaultPageProps & {
  className?: string;
  tick: () => void;
  not_tick: () => void;
};

function Tick(props: TickProps): JSX.Element {
  const handleBox1 = () => {
    const { tick } = props;
    return tick && tick();
  };
  const handleBox0 = () => {
    const { not_tick } = props;
    return not_tick && not_tick();
  };
  return (
    <div className={`${styles.custom_component_container} ${props.className}`}>
      <div className={styles.box_1} onClick={handleBox1}>
        <Image
          sourceType="upload"
          className={styles.image_2}
          src={assets('1683537343659-file-png')}
          alt="image_2"
        />
      </div>
      <div className={styles.box_1} onClick={handleBox0}>
        <Image
          sourceType="upload"
          className={styles.image_2}
          src={assets('1683554521045-remove-png')}
          alt="image_3"
        />
      </div>
    </div>
  );
}

export default Tick;
