import { Text } from '@components/atoms/Text';
import IcLinedelete from '@components/molecules/IcLinedelete';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type NoteItemProps = DefaultPageProps & {
  className?: string;
  content: string;
  onPressDetail: (id: number) => void;
  id: number;
};

function NoteItem(props: NoteItemProps): JSX.Element {
  const handleWrapperNote13 = () => {
    const { onPressDetail } = props;
    return onPressDetail && onPressDetail();
  };
  return (
    <div className={`${styles.page_container} ${props.className}`}>
      <div className={styles.wrapper_note_13} onClick={handleWrapperNote13}>
        <Text textType="Text" className={styles.text_3}>
          {props.content}
        </Text>
      </div>
      <IcLinedelete className={styles.ic_linedelete_1} />
    </div>
  );
}

export default NoteItem;
