import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Row } from '@components/atoms/Row';
import { Col } from '@components/atoms/Col';
import { Text } from '@components/atoms/Text';
import { Button } from '@components/atoms/Button';
import { useAuthenticatedData } from '@services/authentication';
import { useCreatePartybookingMutation } from '@services/partybooking';
import { useNavigateService } from '@services/navigate';
import { Toast } from '@components/atoms/Toast';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type DetailBookingPartyProps = DefaultPageProps & {
  className?: string;
  nameParty: string;
  partyStartTime: string;
  partyLocation: string;
  numberOfPeople: number;
  describe: string;
  img: string;
};

function DetailBookingParty(props: DetailBookingPartyProps): JSX.Element {
  const { t } = useTranslation('web');
  const authenticatedData = useAuthenticatedData();
  const createPartybookingMutation = useCreatePartybookingMutation();
  const navigation = useNavigateService();

  const handleButton1 = async () => {
    try {
      await createPartybookingMutation.mutateAsync({
        partybookings: { user_id: authenticatedData?.id, party_id: undefined },
      });
      navigation.navigate('/User/home');
    } catch (error: unknown) {
      Toast.error('Thất bại');
    }
  };
  return (
    <div className={`${styles.page_container} ${props.className}`}>
      <Image sourceType="network" className={styles.image_3} fill alt="Image3" />
      <Row gutter={[32, 32]} justify="start" align="top" className={styles.row_1}>
        <Col xs={24} md={12} xl={8} className={styles.col_1}>
          <div className={styles.images_4}>
            <Image
              sourceType="network"
              className={styles.image_4}
              width="360"
              height="380"
              src={''}
              alt="Image4"
            />
          </div>
        </Col>
        <Col xs={24} md={12} xl={15} className={styles.col_2}>
          <div className={styles.content_8}>
            <div className={styles.text_8}>
              <Text textType="Text" className={styles.text_7}>
                {props.nameParty}
              </Text>
              <div className={styles.box_4}>
                <Text textType="Text" className={styles.text_7}>
                  {t('molecule.detail_booking_party.text_7')}
                </Text>
                <Text textType="Text" className={styles.text_8}>
                  {props.nameParty}
                </Text>
              </div>
              <div className={styles.box_4}>
                <Text textType="Text" className={styles.text_8}>
                  {t('molecule.detail_booking_party.text8')}
                </Text>
                <Text textType="Text" className={styles.text_9}>
                  {props.partyStartTime}
                </Text>
              </div>
              <div className={styles.box_4}>
                <Text textType="Text" className={styles.text_7}>
                  {t('molecule.detail_booking_party.text_5')}
                </Text>
                <Text textType="Text" className={styles.text_10}>
                  {'[Text]'}
                </Text>
              </div>
              <div className={styles.box_4}>
                <Text textType="Text" className={styles.text_7}>
                  {t('molecule.detail_booking_party.text_6')}
                </Text>
                <Text textType="Text" className={styles.text_10}>
                  {'[Text]'}
                </Text>
              </div>
            </div>
            <div className={styles.box_8}>
              <Button buttonType="primary" className={styles.button_1} onClick={handleButton1}>
                <Text textType="Text" className={styles.button_1_text_0}>
                  {t('molecule.detail_booking_party.button_1_text_0')}
                </Text>
              </Button>
              <Button buttonType="primary" className={styles.button_2}>
                <Text textType="Text" className={styles.button_2_text_0}>
                  {t('molecule.detail_booking_party.button_2_text_0')}
                </Text>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default DetailBookingParty;
