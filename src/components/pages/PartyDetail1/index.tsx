import assets from '@assets/index';
import HeroSection from '@components/molecules/HeroSection';
import Image from 'next/image';
import DetailBookingParty from '@components/molecules/DetailBookingParty';
import { Text } from '@components/atoms/Text';
import { useShowPartyQuery } from '@services/party';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type PartyDetail1Props = DefaultPageProps & {
  className?: string;
};

function PartyDetail1(props: PartyDetail1Props): JSX.Element {
  const showPartyQuery = useShowPartyQuery({ id: undefined });

  return (
    <div className={styles.page_container}>
      <HeroSection className={styles.herosection_1} />
      <div className={styles.box_2}>
        <Image
          sourceType="upload"
          className={styles.image_2}
          src={assets('1686621807256-png')}
          alt="image_2"
        />
        <DetailBookingParty
          className={styles.detailbookingparty_1}
          nameParty={''}
          partyStartTime={''}
          partyLocation={''}
          numberOfPeople={''}
          describe={''}
          img={''}
        />
      </div>
      <div className={styles.box_3}>
        <div className={styles.box_4}>
          <div className={styles.box_5}>
            <div className={styles.box_6}>
              <Image
                sourceType="upload"
                className={styles.image_1}
                src={assets('1686630477484-logo-gmo-png')}
                alt="image_1"
              />
            </div>
            <Text textType="Text" className={styles.text_1}>
              {
                'Fickle Flight is your one-stop travel portal. We offer hassle free flight and hotel bookings. We also have all your flight needs in you online shop.'
              }
            </Text>
            <div className={styles.box_7}>
              <div className={styles.box_8}>
                <Image
                  sourceType="upload"
                  className={styles.image_6}
                  src={assets('1686621807407-svg')}
                  alt="image_6"
                />
              </div>
              <div className={styles.box_9}>
                <Image
                  sourceType="upload"
                  className={styles.image_6}
                  src={assets('1686621807409-svg')}
                  alt="image_7"
                />
              </div>
              <div className={styles.box_10}>
                <Image
                  sourceType="upload"
                  className={styles.image_6}
                  src={assets('1686621807413-svg')}
                  alt="image_8"
                />
              </div>
            </div>
          </div>
          <div className={styles.box_11} />
          <div className={styles.box_26}>
            <div className={styles.box_27}>
              <Text textType="Text" className={styles.text_2}>
                {'About Us'}
              </Text>
              <Text textType="Text" className={styles.text_3}>
                {'Company'}
              </Text>
              <Text textType="Text" className={styles.text_29}>
                {'News'}
              </Text>
              <Text textType="Text" className={styles.text_30}>
                {'Careers'}
              </Text>
              <Text textType="Text" className={styles.text_31}>
                {'How we work'}
              </Text>
            </div>
            <div className={styles.box_27}>
              <Text textType="Text" className={styles.text_2}>
                {'Account'}
              </Text>
              <Text textType="Text" className={styles.text_3}>
                {'Support'}
              </Text>
              <Text textType="Text" className={styles.text_29}>
                {'Support Center'}
              </Text>
              <Text textType="Text" className={styles.text_30}>
                {'FAQ'}
              </Text>
              <Text textType="Text" className={styles.text_31}>
                {'Accessibility'}
              </Text>
            </div>
            <div className={styles.box_27}>
              <Text textType="Text" className={styles.text_2}>
                {'Covid Advisory'}
              </Text>
              <Text textType="Text" className={styles.text_3}>
                {'More'}
              </Text>
              <Text textType="Text" className={styles.text_29}>
                {'Airline Fees'}
              </Text>
              <Text textType="Text" className={styles.text_30}>
                {'Tips'}
              </Text>
              <Text textType="Text" className={styles.text_31}>
                {'Quarantine Rules'}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartyDetail1;
