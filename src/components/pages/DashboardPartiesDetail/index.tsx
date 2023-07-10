import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'next-i18next';
import DashboardNavbar from '@components/molecules/DashboardNavbar';
import { Row } from '@components/atoms/Row';
import { Col } from '@components/atoms/Col';
import { Text } from '@components/atoms/Text';
import { Button } from '@components/atoms/Button';
import { ControlledInput } from '@components/atoms/ControlledInput';
import { ControlledDateTimePicker } from '@components/atoms/ControlledDateTimePicker';
import { ControlledImagePicker } from '@components/atoms/ControlledImagePicker';
import { ControlledRadio } from '@components/atoms/ControlledRadio';
import CommonButton2 from '@components/molecules/CommonButton2';
import DashboardFooter from '@components/molecules/DashboardFooter';
import { useShowPartyQuery, useUpdatePartyMutation } from '@services/party';
import { useNavigateService } from '@services/navigate';
import { Modal } from '@components/atoms/Modal';
import Modal from '@components/molecules/Modal';
import { Toast } from '@components/atoms/Toast';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type DashboardPartiesDetailProps = DefaultPageProps & {
  className?: string;
};
interface Form1FormData {
  input_NameParty: string;
  Input_Desc: string;
  datetimepicker_1: string;
  input_PartyLocation: string;
  input_NumberOfPeople: string;
  input_Age: string;
  imagepicker_1: unknown;
  radio_0: string;
}
function DashboardPartiesDetail(props: DashboardPartiesDetailProps): JSX.Element {
  const formForm1 = useForm1();
  const { t } = useTranslation('web');
  const { errors: formForm1Error } = formForm1.formState;
  const showPartyQuery = useShowPartyQuery({ id: props.query?.IdParty });
  const navigation = useNavigateService();
  const updatePartyMutation = useUpdatePartyMutation();

  const handleButton2 = () => {
    navigation.goBack();
  };
  const handleButton3 = () => {
    Modal.show(<Modal labelMain={'Bạn có muốn xoá ?'} labelDec={''} id={''} />);
  };
  const handleImagepicker1 = (values: Form1FormData) => {};
  const handleImagepicker1Text0 = (values: Form1FormData) => {};
  const handleOnPress = async () => {
    try {
      await updatePartyMutation.mutateAsync({
        id: props.query?.IdParty,
        parties: {
          nameparty: formForm1.getValues('input_NameParty'),
          describe: formForm1.getValues('Input_Desc'),
          partystarttime: formForm1.getValues('datetimepicker_1'),
          partylocation: formForm1.getValues('input_PartyLocation'),
          numberofpeople: formForm1.getValues('input_NumberOfPeople'),
          requiredage: formForm1.getValues('input_Age'),
          isstatus: formForm1.getValues('radio_0'),
          img: formForm1.getValues('imagepicker_1'),
        },
      });
      navigation.navigate('/newAdmin/dashboard/parties');
    } catch (error: unknown) {
      Toast.error('Cập nhật thất bại');
    }
  };
  return (
    <div className={styles.page_container}>
      <DashboardNavbar className={styles.dashboardnavbar_1} />
      <div className={styles.dashboard_main}>
        <div className={styles.dashboard_main_wrapper}>
          <Row gutter={[30, 30]} justify="start" align="top" className={styles.row_1}>
            <Col xs={24} md={24} xl={24} className={styles.col_2}>
              <div className={styles.dashboard_content}>
                <div className={styles.dashboard_content_title}>
                  <Text textType="Text" className={styles.text_9}>
                    {'Parties Detail'}
                  </Text>
                  <div className={styles.box_29}>
                    <Button
                      buttonType="primary"
                      className={styles.button_2}
                      onClick={handleButton2}
                    >
                      {'Back'}
                    </Button>
                    <Button
                      buttonType="primary"
                      className={styles.button_2}
                      onClick={handleButton3}
                    >
                      {'Delete'}
                    </Button>
                  </div>
                </div>
                <div className={styles.dashboard_content_filter_table}>
                  <div className={styles.box_1}>
                    <div className={styles.box_4}>
                      <Row gutter={[30, 30]} justify="start" align="top" className={styles.row_0}>
                        <Col xs={24} md={24} xl={24} className={styles.col_0}>
                          <form className={styles.form_1}>
                            <div className={styles.box_5}>
                              <div className={styles.box_6}>
                                <Text textType="Text" className={styles.text_name_party}>
                                  {t('screen.dashboard_parties_detail.text_nameparty')}
                                </Text>
                                <Text textType="Text" className={styles.text_2}>
                                  {'*'}
                                </Text>
                              </div>
                              <ControlledInput
                                placeholder={'Plase input party'}
                                className={styles.box_5}
                                control={formForm1.control}
                                formField="input_NameParty"
                                inputStyle={{
                                  backgroundColor: 'rgb(255, 255, 255)',
                                  width: '100%',
                                  fontWeight: '500',
                                  border: '1px solid rgb(217, 217, 217)',
                                }}
                              />
                              <div className={styles.box_7}>
                                <Text textType="Text" className={styles.text_2}>
                                  {formForm1Error.input_NameParty?.message}
                                </Text>
                              </div>
                            </div>
                            <div className={styles.box_5}>
                              <div className={styles.box_6}>
                                <Text textType="Text" className={styles.text_name_party}>
                                  {t('screen.dashboard_parties_detail.text_4')}
                                </Text>
                              </div>
                              <ControlledInput
                                placeholder={t('screen.dashboard_parties_detail.input_desc')}
                                className={styles.box_5}
                                control={formForm1.control}
                                formField="Input_Desc"
                                inputStyle={{
                                  backgroundColor: 'rgb(255, 255, 255)',
                                  width: '100%',
                                  fontWeight: '500',
                                  border: '1px solid rgb(217, 217, 217)',
                                }}
                              />
                              <div className={styles.box_7}>
                                <Text textType="Text" className={styles.text_2}>
                                  {formForm1Error.Input_Desc?.message}
                                </Text>
                              </div>
                            </div>
                            <div className={styles.box_5}>
                              <div className={styles.box_6}>
                                <div className={styles.dashboardnavbar_1}>
                                  <div className={styles.box_14}>
                                    <Text textType="Text" className={styles.text_name_party}>
                                      {t('screen.dashboard_parties_detail.text_6')}
                                    </Text>
                                    <Text textType="Text" className={styles.text_2}>
                                      {'*'}
                                    </Text>
                                  </div>
                                  <ControlledDateTimePicker
                                    defaultValue={''}
                                    picker="date"
                                    showTime
                                    format="MM/dd/yyyy"
                                    className={styles.datetimepicker_1}
                                    control={formForm1.control}
                                    formField="datetimepicker_1"
                                  />
                                </div>
                              </div>
                              <div className={styles.box_7}>
                                <Text textType="Text" className={styles.text_2}>
                                  {formForm1Error.datetimepicker_1?.message}
                                </Text>
                              </div>
                            </div>
                            <div className={styles.box_5}>
                              <div className={styles.box_6}>
                                <Text textType="Text" className={styles.text_name_party}>
                                  {'Party location'}
                                </Text>
                                <Text textType="Text" className={styles.text_2}>
                                  {'*'}
                                </Text>
                              </div>
                              <ControlledInput
                                placeholder={'Plase input location'}
                                className={styles.box_5}
                                control={formForm1.control}
                                formField="input_PartyLocation"
                                inputStyle={{
                                  backgroundColor: 'rgb(255, 255, 255)',
                                  width: '100%',
                                  fontWeight: '500',
                                  border: '1px solid rgb(217, 217, 217)',
                                }}
                              />
                              <div className={styles.box_7}>
                                <Text textType="Text" className={styles.text_2}>
                                  {formForm1Error.input_PartyLocation?.message}
                                </Text>
                              </div>
                            </div>
                            <div className={styles.box_5}>
                              <div className={styles.box_6}>
                                <Text textType="Text" className={styles.text_name_party}>
                                  {'Number of people'}
                                </Text>
                              </div>
                              <ControlledInput
                                placeholder={t('screen.dashboard_parties_detail.input_3')}
                                className={styles.box_5}
                                control={formForm1.control}
                                formField="input_NumberOfPeople"
                                inputStyle={{
                                  backgroundColor: 'rgb(255, 255, 255)',
                                  width: '100%',
                                  fontWeight: '500',
                                  border: '1px solid rgb(217, 217, 217)',
                                }}
                              />
                              <div className={styles.box_7}>
                                <Text textType="Text" className={styles.text_2}>
                                  {formForm1Error.input_NumberOfPeople?.message}
                                </Text>
                              </div>
                            </div>
                            <div className={styles.box_5}>
                              <div className={styles.box_6}>
                                <Text textType="Text" className={styles.text_name_party}>
                                  {'Required age'}
                                </Text>
                              </div>
                              <ControlledInput
                                placeholder={'Plase input age'}
                                className={styles.box_5}
                                control={formForm1.control}
                                formField="input_Age"
                                inputStyle={{
                                  backgroundColor: 'rgb(255, 255, 255)',
                                  width: '100%',
                                  fontWeight: '500',
                                  border: '1px solid rgb(217, 217, 217)',
                                }}
                              />
                              <Text textType="Text" className={styles.text_2}>
                                {formForm1Error.input_Age?.message}
                              </Text>
                            </div>
                            <div className={styles.box_5}>
                              <div className={styles.dashboardnavbar_1}>
                                <div className={styles.box_6}>
                                  <Text textType="Text" className={styles.text_name_party}>
                                    {t('screen.dashboard_parties_detail.imagepicker_1_label')}
                                  </Text>
                                  <Text textType="Text" className={styles.text_2}>
                                    {'*'}
                                  </Text>
                                </div>
                                <ControlledImagePicker
                                  multiple={false}
                                  maxCount={1}
                                  className={styles.imagepicker_1}
                                  onClick={formForm1.handleSubmit(handleImagepicker1)}
                                  control={formForm1.control}
                                  formField="imagepicker_1"
                                >
                                  <Button
                                    buttonType="primary"
                                    className={styles.imagepicker_1_button}
                                  >
                                    <Text
                                      textType="Text"
                                      className={styles.imagepicker_1_text_0}
                                      onClick={formForm1.handleSubmit(handleImagepicker1Text0)}
                                    >
                                      {'[ImagePicker]'}
                                    </Text>
                                  </Button>
                                </ControlledImagePicker>
                              </div>
                            </div>
                            <div className={styles.box_5}>
                              <div className={styles.dashboardnavbar_1}>
                                <div className={styles.box_28}>
                                  <Text textType="Text" className={styles.text_name_party}>
                                    {'Status'}
                                  </Text>
                                  <Text textType="Text" className={styles.text_2}>
                                    {'*'}
                                  </Text>
                                </div>
                              </div>
                              <ControlledRadio
                                data={[
                                  { value: 'public', label: 'Public' },
                                  { value: 'private', label: 'Private' },
                                  { value: 'daft', label: 'Daft' },
                                  { value: 'close', label: 'Close' },
                                ]}
                                defaultValue={showPartyQuery.data?.party?.describe}
                                direction="horizontal"
                                className={styles.radio_0}
                                control={formForm1.control}
                                formField="radio_0"
                                labelStyle={{ color: 'rgb(0, 0, 0)', fontWeight: '500' }}
                                activeColor="#1890ff"
                                inactiveColor="#1890ff"
                              />
                            </div>
                            <CommonButton2
                              className={styles.molecule_0}
                              onPress={handleOnPress}
                              label={'Booking'}
                            />
                          </form>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <DashboardFooter className={styles.dashboardnavbar_1} />
    </div>
  );
}

const useForm1 = () => {
  const validationScheme = useMemo(
    () =>
      yup.object().shape({
        input_NameParty: yup.string(),
        Input_Desc: yup.string(),
        datetimepicker_1: yup.string().notRequired(),
        input_PartyLocation: yup.string(),
        input_NumberOfPeople: yup.number(),
        input_Age: yup.number(),
        imagepicker_1: yup.string().notRequired(),
        radio_0: yup.string().notRequired(),
      }),
    [],
  );
  return useForm<Form1FormData>({
    resolver: yupResolver(validationScheme),
    shouldFocusError: true,
    mode: 'onChange',
    reValidateMode: 'onChange',
  });
};
export default DashboardPartiesDetail;
