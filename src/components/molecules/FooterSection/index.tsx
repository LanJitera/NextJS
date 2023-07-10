import assets from '@assets/index';
import Image from 'next/image';
import { Text } from '@components/atoms/Text';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type FooterSectionProps = DefaultPageProps & {
  className?: string;
};

function FooterSection(props: FooterSectionProps): JSX.Element {
  return (
    <div className={`${styles.page_container} ${props.className}`}>
      <div className={styles.page_container}>
        <div className={styles.footer_53}>
          <div className={styles.fickle_flight_bio_33}>
            <div className={styles.logo_25}>
              <Image
                sourceType="upload"
                className={styles.image_25}
                src={assets('1686630477484-logo-gmo-png')}
                alt="Image25"
              />
            </div>
            <div className={styles.social_icons_33}>
              <div className={styles.facebook_icon_29}>
                <Image
                  sourceType="upload"
                  className={styles.image_29}
                  src={assets('1686625910040-svg')}
                  alt="Image29"
                />
              </div>
              <div className={styles.twitter_icon_31}>
                <Image
                  sourceType="upload"
                  className={styles.image_29}
                  src={assets('1686625910042-svg')}
                  alt="Image31"
                />
              </div>
              <div className={styles.instagram_icon_33}>
                <Image
                  sourceType="upload"
                  className={styles.image_29}
                  src={assets('1686625910044-svg')}
                  alt="Image33"
                />
              </div>
            </div>
          </div>
          <div className={styles.seperator_34} />
          <div className={styles.footer_links_53}>
            <div className={styles.company_41}>
              <Text textType="Text" className={styles.text_37}>
                {'About Us'}
              </Text>
              <Text textType="Text" className={styles.text_38}>
                {'Company'}
              </Text>
              <Text textType="Text" className={styles.text_39}>
                {'News'}
              </Text>
              <Text textType="Text" className={styles.text_40}>
                {'Careers'}
              </Text>
              <Text textType="Text" className={styles.text_41}>
                {'How we work'}
              </Text>
            </div>
            <div className={styles.company_41}>
              <Text textType="Text" className={styles.text_37}>
                {'Account'}
              </Text>
              <Text textType="Text" className={styles.text_38}>
                {'Support'}
              </Text>
              <Text textType="Text" className={styles.text_39}>
                {'Support Center'}
              </Text>
              <Text textType="Text" className={styles.text_40}>
                {'FAQ'}
              </Text>
              <Text textType="Text" className={styles.text_41}>
                {'Accessibility'}
              </Text>
            </div>
            <div className={styles.company_41}>
              <Text textType="Text" className={styles.text_37}>
                {'Covid Advisory'}
              </Text>
              <Text textType="Text" className={styles.text_38}>
                {'More'}
              </Text>
              <Text textType="Text" className={styles.text_39}>
                {'Airline Fees'}
              </Text>
              <Text textType="Text" className={styles.text_40}>
                {'Tips'}
              </Text>
              <Text textType="Text" className={styles.text_41}>
                {'Quarantine Rules'}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
