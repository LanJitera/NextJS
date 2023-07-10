import assets from '@assets/index';
import { useTranslation } from 'next-i18next';
import { useAuthenticatedData, useLogoutMutation } from '@services/authentication';
import Image from 'next/image';
import { Text } from '@components/atoms/Text';
import { useQueryClient } from 'react-query';
import { fetchFilterUser } from '@services/user';
import { useNavigateService } from '@services/navigate';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type HeroSectionProps = DefaultPageProps & {
  className?: string;
};

function HeroSection(props: HeroSectionProps): JSX.Element {
  const { t } = useTranslation('web');
  const authenticatedData = useAuthenticatedData();
  const queryClient = useQueryClient();
  const navigation = useNavigateService();
  const logoutMutation = useLogoutMutation();

  const handleTopHeader20 = async () => {
    const filterUserQuery = await fetchFilterUser(queryClient, {});
  };
  const handleWebscreen8 = () => {
    navigation.navigate('/User/home');
  };
  const handleText0 = async () => {
    await logoutMutation.mutateAsync();
  };
  return (
    <div className={`${styles.page_container} ${props.className}`}>
      <div className={styles.top_header_20} onClick={handleTopHeader20}>
        <div className={styles.top_container_20}>
          <div className={styles.fickleflight_logo_8}>
            <div className={styles.symbols_8}>
              <div className={styles.symbols_8} onClick={handleWebscreen8}>
                <Image
                  sourceType="upload"
                  className={styles.image_8}
                  src={assets('1686625755503-logo-gmo-png')}
                  alt="Image8"
                />
              </div>
            </div>
          </div>
          <div className={styles.navigationright_20}>
            <div className={styles.navigation_menu_14}>
              <Text textType="Text" className={styles.text_11}>
                {t('molecule.hero_section.text11')}
              </Text>
              <Text textType="Text" className={styles.text_12}>
                {t('molecule.hero_section.text12')}
              </Text>
              <Text textType="Text" className={styles.text_12}>
                {t('molecule.hero_section.text13')}
              </Text>
              <Text textType="Text" className={styles.text_12}>
                {t('molecule.hero_section.text14')}
              </Text>
              <Text href={'/User/login'} textType="Link" className={styles.login}>
                {t('molecule.molecule_herosection')}
              </Text>
              <Text
                href={'https://jitera.com'}
                textType="Link"
                className={styles.login}
                onClick={handleText0}
              >
                {t('molecule.hero_section.text_0')}
              </Text>
              <Text textType="Text" className={styles.login}>
                {authenticatedData?.username}
              </Text>
            </div>
            <div className={styles.accountsection_20}>
              <div className={styles.notificationbell_19}>
                <Image
                  sourceType="upload"
                  className={styles.image_17}
                  src={assets('1686622898324-svg')}
                  alt="Image17"
                />
                <Image
                  sourceType="upload"
                  className={styles.image_18}
                  src={assets('1686622898327-svg')}
                  alt="Image18"
                />
                <div className={styles.ellipse_5319} />
              </div>
              <Image
                sourceType="upload"
                className={styles.image_20}
                src={assets('1686622898330-png')}
                alt="Image20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
