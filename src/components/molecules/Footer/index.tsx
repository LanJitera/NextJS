import assets from '@assets/index';
import Image from 'next/image';
import { Text } from '@components/atoms/Text';
import Arrow from '@components/molecules/Arrow';
import VariantContainedSizeLargeIconLeftFalseIconRightFalse from '@components/molecules/VariantContainedSizeLargeIconLeftFalseIconRightFalse';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type FooterProps = DefaultPageProps & {
  className?: string;
};

function Footer(props: FooterProps): JSX.Element {
  return (
    <div className={`${styles.page_container} ${props.className}`}>
      <div className={styles.page_container}>
        <div className={styles.newsletter_form_section_21}>
          <Image
            sourceType="upload"
            className={styles.image_4}
            src={assets('1686626885199-png')}
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
        <div className={styles.footer_53}>
          <div className={styles.fickle_flight_bio_33}>
            <div className={styles.logo_25}>
              <Image
                sourceType="upload"
                className={styles.image_25}
                src={assets('1686626885275-svg')}
                alt="Image25"
              />
            </div>
            <Text textType="Text" className={styles.text_26}>
              {
                'Fickle Flight is your one-stop travel portal. We offer hassle free flight and hotel bookings. We also have all your flight needs in you online shop.'
              }
            </Text>
            <div className={styles.social_icons_33}>
              <div className={styles.facebook_icon_29}>
                <Image
                  sourceType="upload"
                  className={styles.image_29}
                  src={assets('1686626885279-svg')}
                  alt="Image29"
                />
              </div>
              <div className={styles.twitter_icon_31}>
                <Image
                  sourceType="upload"
                  className={styles.image_29}
                  src={assets('1686626885281-svg')}
                  alt="Image31"
                />
              </div>
              <div className={styles.instagram_icon_33}>
                <Image
                  sourceType="upload"
                  className={styles.image_29}
                  src={assets('1686626885283-svg')}
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

export default Footer;
