import React, { useMemo, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import assets from '@assets/index';
import { useTranslation } from 'next-i18next';
import CardItem from '@components/molecules/CardItem';
import HeroSection from '@components/molecules/HeroSection';
import Image from 'next/image';
import { Text } from '@components/atoms/Text';
import { ControlledInput } from '@components/atoms/ControlledInput';
import { ControlledDateTimePicker } from '@components/atoms/ControlledDateTimePicker';
import { Button } from '@components/atoms/Button';
import { List } from '@components/atoms/List';
import { useFilterPartyQuery, FilterPartyRequestBody, fetchFilterParty } from '@services/party';
import { useQueryClient } from 'react-query';
import { useNavigateService } from '@services/navigate';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type HomeProps = DefaultPageProps & {
  className?: string;
};
interface Form0FormData {
  input_SearchName: string;
  input_SearchAddress: string;
  datetimepicker_1: string;
}
function Home(props: HomeProps): JSX.Element {
  const formForm0 = useForm0();
  const { t } = useTranslation('web');
  const queryClient = useQueryClient();
  const [filterPartyParams, setFilterPartyParams] = useState<Partial<FilterPartyRequestBody>>({
    parties: { isstatus: 'Public' },
  });
  const filterPartyQuery = useFilterPartyQuery(filterPartyParams);
  const navigation = useNavigateService();

  const handleButton1 = async (values: Form0FormData) => {
    const filterPartyQuery = await fetchFilterParty(queryClient, {
      parties: {
        nameparty: values.input_SearchName,
        partylocation: values.input_SearchAddress,
        partystarttime: values.datetimepicker_1,
      },
    });
  };
  const handleButton3 = async () => {
    const filterPartyQuery = await fetchFilterParty(queryClient, {});
  };
  const handleButton4 = async () => {
    const filterPartyQuery = await fetchFilterParty(queryClient, {});
  };
  const handleOnPressList1Item = (Id: number) => {
    navigation.navigate('/User/party-detail/:id', { id: filterPartyQuery.data?.parties?.describe });
  };
  return (
    <div className={styles.page_container}>
      <div className={styles.box_2}>
        <HeroSection className={styles.herosection_1} />
        <div className={styles.box_12}>
          <Image
            sourceType="upload"
            className={styles.image_4}
            src={assets('1686621805569-png')}
            alt="image_4"
          />
          <Image
            sourceType="upload"
            className={styles.image_5}
            src={assets('1686621806021-png')}
            alt="image_5"
          />
          <div className={styles.box_13}>
            <div className={styles.box_14}>
              <Text textType="Text" className={styles.text_4}>
                {t('screen.home.text_4')}
              </Text>
              <Text textType="Text" className={styles.text_5}>
                {'Find the best destinations and the most popular stays!'}
              </Text>
            </div>
            <div className={styles.box_1}>
              <form className={styles.form_0}>
                <div className={styles.box_76}>
                  <ControlledInput
                    placeholder={t('screen.home.input_1')}
                    className={styles.input_search_name}
                    control={formForm0.control}
                    formField="input_SearchName"
                    inputStyle={{
                      backgroundColor: 'rgb(255, 255, 255)',
                      width: '305px',
                      fontWeight: '500',
                      height: '56px',
                      border: '1px solid rgb(217, 217, 217)',
                    }}
                  />
                </div>
                <div className={styles.box_77}>
                  <ControlledInput
                    placeholder={t('screen.home.input_0')}
                    className={styles.input_search_name}
                    control={formForm0.control}
                    formField="input_SearchAddress"
                    inputStyle={{
                      backgroundColor: 'rgb(255, 255, 255)',
                      width: '305px',
                      fontWeight: '500',
                      height: '56px',
                      border: '1px solid rgb(217, 217, 217)',
                    }}
                  />
                </div>
                <div className={styles.box_78}>
                  <div className={styles.datetimepicker_1_container}>
                    <ControlledDateTimePicker
                      picker="date"
                      showTime={false}
                      format="yyyy-MM-dd"
                      className={styles.datetimepicker_1}
                      control={formForm0.control}
                      formField="datetimepicker_1"
                    />
                  </div>
                </div>
                <Button
                  buttonType="primary"
                  className={styles.button_1}
                  onClick={formForm0.handleSubmit(handleButton1)}
                >
                  {'Search'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.box_41}>
        <div className={styles.box_55}>
          <div className={styles.box_56}>
            <div className={styles.box_57}>
              <Button buttonType="primary" className={styles.button_3} onClick={handleButton3}>
                <Text textType="Text" className={styles.button_3_text_0}>
                  {t('screen.home.button_3_text_0')}
                </Text>
              </Button>
              <Button buttonType="primary" className={styles.button_3} onClick={handleButton4}>
                <Text textType="Text" className={styles.button_3_text_0}>
                  {t('screen.home.button_4_text_0')}
                </Text>
              </Button>
            </div>
          </div>
          <div className={styles.box_59}>
            <div className={styles.box_72}>
              <Image
                sourceType="upload"
                className={styles.image_17}
                src={assets('1686621806872-png')}
                alt="image_17"
              />
              <div className={styles.box_73}>
                <div className={styles.box_74}>
                  <div className={styles.box_75}>
                    <Text textType="Text" className={styles.text_40}>
                      {t('screen.home.text_40')}
                    </Text>
                    <Text textType="Text" className={styles.text_41}>
                      {'4D3N'}
                    </Text>
                  </div>
                  <Text textType="Text" className={styles.text_42}>
                    {'$789'}
                  </Text>
                </div>
              </div>
            </div>
            <List
              dataSource={''}
              grid={{ md: 3, xl: 4, xs: 2, gutter: 48 }}
              renderItem={useCallback(
                (item: unknown) => (
                  <CardItem
                    nameParty={filterPartyQuery.data?.parties?.nameparty}
                    partystarttime={filterPartyQuery.data?.parties?.partystarttime}
                    partyLocation={filterPartyQuery.data?.parties?.partylocation}
                    decribe={filterPartyQuery.data?.parties?.describe}
                    img={filterPartyQuery.data?.parties?.describe}
                    label={'Booking'}
                    onPress={handleOnPressList1Item}
                    Id={filterPartyQuery.data?.parties?.id}
                  />
                ),
                [],
              )}
              className={styles.list_1}
              rowKey={useCallback(
                (item: Record<string, unknown>) => `${item.id}_${item.created_at}`,
                [],
              )}
            />
          </div>
        </div>
        <div className={styles.box_33}>
          <div className={styles.box_3}>
            <div className={styles.box_4}>
              <Text textType="Text" className={styles.text_1}>
                {t('screen.home.text_1')}
              </Text>
            </div>
          </div>
          <div className={styles.box_38}>
            <div className={styles.box_39}>
              <div className={styles.box_40}>
                <Image
                  sourceType="upload"
                  className={styles.image_9}
                  src={assets('1686621806353-png')}
                  alt="image_9"
                />
                <div className={styles.box_41}>
                  <Text textType="Text" className={styles.text_17}>
                    {'Paris'}
                  </Text>
                  <div className={styles.box_42}>
                    <Text textType="Text" className={styles.text_18}>
                      {'$699'}
                    </Text>
                    <Text textType="Text" className={styles.text_19}>
                      {'from'}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.box_39}>
              <div className={styles.box_40}>
                <Image
                  sourceType="upload"
                  className={styles.image_9}
                  src={assets('1686621806424-png')}
                  alt="image_10"
                />
                <div className={styles.box_41}>
                  <Text textType="Text" className={styles.text_20}>
                    {'Greece'}
                  </Text>
                  <div className={styles.box_46}>
                    <Text textType="Text" className={styles.text_21}>
                      {'$1079'}
                    </Text>
                    <Text textType="Text" className={styles.text_22}>
                      {'from'}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.box_39}>
              <div className={styles.box_40}>
                <Image
                  sourceType="upload"
                  className={styles.image_9}
                  src={assets('1686621806490-png')}
                  alt="image_11"
                />
                <div className={styles.box_41}>
                  <Text textType="Text" className={styles.text_23}>
                    {'Norway'}
                  </Text>
                  <div className={styles.box_42}>
                    <Text textType="Text" className={styles.text_21}>
                      {'$895'}
                    </Text>
                    <Text textType="Text" className={styles.text_25}>
                      {'from'}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.box_39}>
              <div className={styles.box_40}>
                <Image
                  sourceType="upload"
                  className={styles.image_9}
                  src={assets('1686621806559-png')}
                  alt="image_12"
                />
                <div className={styles.box_41}>
                  <Text textType="Text" className={styles.text_23}>
                    {'Tuscany'}
                  </Text>
                  <div className={styles.box_54}>
                    <Text textType="Text" className={styles.text_21}>
                      {'$1245'}
                    </Text>
                    <Text textType="Text" className={styles.text_28}>
                      {'from'}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.box_106}>
        <div className={styles.box_14}>
          <div className={styles.box_15}>
            <div className={styles.box_16}>
              <Image
                sourceType="upload"
                className={styles.image_0}
                src={assets('1686630477484-logo-gmo-png')}
                alt="image_0"
              />
            </div>
            <Text textType="Text" className={styles.text_5}>
              {
                'Fickle Flight is your one-stop travel portal. We offer hassle free flight and hotel bookings. We also have all your flight needs in you online shop.'
              }
            </Text>
            <div className={styles.box_17}>
              <div className={styles.box_18}>
                <Image
                  sourceType="upload"
                  className={styles.image_4}
                  src={assets('1686621807407-svg')}
                  alt="image_2"
                />
              </div>
              <div className={styles.box_19}>
                <Image
                  sourceType="upload"
                  className={styles.image_4}
                  src={assets('1686621807409-svg')}
                  alt="image_3"
                />
              </div>
              <div className={styles.box_20}>
                <Image
                  sourceType="upload"
                  className={styles.image_4}
                  src={assets('1686621807413-svg')}
                  alt="image_4"
                />
              </div>
            </div>
          </div>
          <div className={styles.box_21} />
          <div className={styles.box_22}>
            <div className={styles.box_23}>
              <Text textType="Text" className={styles.text_6}>
                {'About Us'}
              </Text>
              <Text textType="Text" className={styles.text_17}>
                {'Company'}
              </Text>
              <Text textType="Text" className={styles.text_18}>
                {'News'}
              </Text>
              <Text textType="Text" className={styles.text_19}>
                {'Careers'}
              </Text>
              <Text textType="Text" className={styles.text_20}>
                {'How we work'}
              </Text>
            </div>
            <div className={styles.box_23}>
              <Text textType="Text" className={styles.text_6}>
                {'Account'}
              </Text>
              <Text textType="Text" className={styles.text_17}>
                {'Support'}
              </Text>
              <Text textType="Text" className={styles.text_18}>
                {'Support Center'}
              </Text>
              <Text textType="Text" className={styles.text_19}>
                {'FAQ'}
              </Text>
              <Text textType="Text" className={styles.text_20}>
                {'Accessibility'}
              </Text>
            </div>
            <div className={styles.box_23}>
              <Text textType="Text" className={styles.text_6}>
                {'Covid Advisory'}
              </Text>
              <Text textType="Text" className={styles.text_17}>
                {'More'}
              </Text>
              <Text textType="Text" className={styles.text_18}>
                {'Airline Fees'}
              </Text>
              <Text textType="Text" className={styles.text_19}>
                {'Tips'}
              </Text>
              <Text textType="Text" className={styles.text_20}>
                {'Quarantine Rules'}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const useForm0 = () => {
  const validationScheme = useMemo(
    () =>
      yup.object().shape({
        input_SearchName: yup.string().notRequired(),
        input_SearchAddress: yup.string().notRequired(),
        datetimepicker_1: yup.string().notRequired(),
      }),
    [],
  );
  return useForm<Form0FormData>({
    resolver: yupResolver(validationScheme),
    shouldFocusError: true,
    mode: 'onChange',
    reValidateMode: 'onChange',
  });
};
export default Home;
