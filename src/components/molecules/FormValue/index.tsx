import assets from '@assets/index';
import Image from 'next/image';
import { Text } from '@components/atoms/Text';
import Arrow from '@components/molecules/Arrow';
import VariantContainedSizeLargeIconLeftFalseIconRightFalse from '@components/molecules/VariantContainedSizeLargeIconLeftFalseIconRightFalse';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type FormValueProps = DefaultPageProps & {
  className?: string;
};

function FormValue(props: FormValueProps): JSX.Element {
  return (
    <div className={`${styles.page_container} ${props.className}`}>
      <div className={styles.newsletter_form_section_21}>
        <Image
          sourceType="upload"
          className={styles.image_4}
          src={assets('1686625909972-png')}
          alt="Image4"
        />
        <div className={styles.subscribe_form_21}>
          <div className={styles.form_header_8}>
            <Text textType="Text" className={styles.text_7}>
              {'subscribe to our newsletter'}
            </Text>
            <Text textType="Text" className={styles.text_8}>
              {'Get weekly updates'}
            </Text>
          </div>
          <div className={styles.form_21}>
            <div className={styles.form_text_11}>
              <Text textType="Text" className={styles.text_11}>
                {'Fill in your details to join the party!'}
              </Text>
            </div>
            <div className={styles.form_fields_20}>
              <div className={styles.destination_name_input_16}>
                <div className={styles.input_16}>
                  <div className={styles.inactive_16}>
                    <Text textType="Text" className={styles.text_16}>
                      {'Your name'}
                    </Text>
                    <Arrow className={styles.arrow_1} />
                  </div>
                </div>
              </div>
              <div className={styles.destination_name_input_16}>
                <div className={styles.input_16}>
                  <div className={styles.inactive_16}>
                    <Text textType="Text" className={styles.text_16}>
                      {'Email address'}
                    </Text>
                    <Arrow className={styles.arrow_1} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.button_21}>
              <VariantContainedSizeLargeIconLeftFalseIconRightFalse
                className={styles.unstyled_button_1}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.page_container} />
    </div>
  );
}

export default FormValue;
