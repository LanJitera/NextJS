import { useTranslation } from 'next-i18next';
import React, { useCallback, useState } from 'react';
import BlogCard from '@components/molecules/BlogCard';
import HeroSection from '@components/molecules/HeroSection';
import { Text } from '@components/atoms/Text';
import { List } from '@components/atoms/List';
import FooterSection from '@components/molecules/FooterSection';
import { useAuthenticatedData } from '@services/authentication';
import { useFilterPartybookingQuery, FilterPartybookingRequestBody } from '@services/partybooking';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type HistoryProps = DefaultPageProps & {
  className?: string;
};

function History(props: HistoryProps): JSX.Element {
  const { t } = useTranslation('web');
  const authenticatedData = useAuthenticatedData();
  const [filterPartybookingParams, setFilterPartybookingParams] = useState<
    Partial<FilterPartybookingRequestBody>
  >({ partybookings: { user_id: authenticatedData?.id }, pagination_page: Number(1) });
  const filterPartybookingQuery = useFilterPartybookingQuery(filterPartybookingParams);

  return (
    <div className={styles.page_container}>
      <HeroSection className={styles.herosection_1} />
      <div className={styles.box_1}>
        <div className={styles.box_2}>
          <div className={styles.box_10}>
            <div className={styles.box_11}>
              <Text textType="Text" className={styles.text_5}>
                {t('screen.history.text_5')}
              </Text>
            </div>
          </div>
          <div className={styles.box_5}>
            <List
              dataSource={''}
              grid={{ md: 2, xl: 4, xs: 1, gutter: 48 }}
              renderItem={useCallback(
                (item: unknown) => (
                  <BlogCard
                    nameParty={filterPartybookingQuery.data?.party?.nameparty}
                    partystarttime={filterPartybookingQuery.data?.party?.partystarttime}
                    partyLocation={filterPartybookingQuery.data?.party?.partylocation}
                    decribe={filterPartybookingQuery.data?.party?.describe}
                    img={filterPartybookingQuery.data?.party?.nameparty}
                    label={'Hủy đặt vé '}
                    IdPartyBooking={filterPartybookingQuery.data?.partybookings?.id}
                    numberofpeople={filterPartybookingQuery.data?.party?.numberofpeople}
                    IdParty={filterPartybookingQuery.data?.party?.id}
                  />
                ),
                [],
              )}
              className={styles.list_0}
              rowKey={useCallback(
                (item: Record<string, unknown>) => `${item.id}_${item.created_at}`,
                [],
              )}
            />
          </div>
        </div>
      </div>
      <FooterSection className={styles.footersection_1} />
    </div>
  );
}

export default History;
