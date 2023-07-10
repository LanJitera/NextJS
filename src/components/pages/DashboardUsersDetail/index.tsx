import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'next-i18next';
import DashboardNavbar from '@components/molecules/DashboardNavbar';
import { Row } from '@components/atoms/Row';
import { Col } from '@components/atoms/Col';
import { Text } from '@components/atoms/Text';
import { ControlledInput } from '@components/atoms/ControlledInput';
import { ControlledDateTimePicker } from '@components/atoms/ControlledDateTimePicker';
import { Button } from '@components/atoms/Button';
import DashboardFooter from '@components/molecules/DashboardFooter';
import { useSignupWithEmailMutation } from '@services/authentication';
import { Toast } from '@components/atoms/Toast';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type DashboardUsersDetailProps = DefaultPageProps & {
  className?: string;
};
interface Form1FormData {
  input_userName: string;
  input_Email: string;
  input_Password: string;
  datetimepicker_1: string;
}
function DashboardUsersDetail(props: DashboardUsersDetailProps): JSX.Element {
  const formForm1 = useForm1();
  const { t } = useTranslation('web');
  const { errors: formForm1Error } = formForm1.formState;
  const signupWithEmailMutation = useSignupWithEmailMutation();

  const handleButton1 = async (values: Form1FormData) => {
    try {
      await signupWithEmailMutation.mutateAsync({ table: 'admins' });
      Toast.success('Sign Up Success');
    } catch (error: unknown) {
      Toast.error('Registration failed');
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
                    {'Users Detail'}
                  </Text>
                </div>
                <div className={styles.dashboard_content_filter_table}>
                  <div className={styles.box_1}>
                    <form className={styles.form_1}>
                      <div className={styles.box_3}>
                        <div className={styles.box_4}>
                          <Text textType="Text" className={styles.text_1}>
                            {t('screen.dashboard_users_detail.text_1')}
                          </Text>
                          <Text textType="Text" className={styles.text_2}>
                            {'*'}
                          </Text>
                        </div>
                        <ControlledInput
                          placeholder={t('screen.dashboard_users_detail.input_username')}
                          className={styles.input_user_name}
                          control={formForm1.control}
                          formField="input_userName"
                          inputStyle={{
                            backgroundColor: 'rgb(255, 255, 255)',
                            width: '376px',
                            fontWeight: '500',
                            height: '48px',
                            border: '1px solid rgb(217, 217, 217)',
                          }}
                        />
                        <div className={styles.box_5}>
                          <Text textType="Text" className={styles.text_2}>
                            {formForm1Error.input_userName?.message}
                          </Text>
                        </div>
                      </div>
                      <div className={styles.box_3}>
                        <div className={styles.box_4}>
                          <Text textType="Text" className={styles.text_1}>
                            {t('screen.dashboard_users_detail.text_4')}
                          </Text>
                          <Text textType="Text" className={styles.text_2}>
                            {'*'}
                          </Text>
                        </div>
                        <ControlledInput
                          placeholder={t('screen.dashboard_users_detail.input_0')}
                          className={styles.input_user_name}
                          control={formForm1.control}
                          formField="input_Email"
                          inputStyle={{
                            backgroundColor: 'rgb(255, 255, 255)',
                            width: '376px',
                            fontWeight: '500',
                            height: '48px',
                            border: '1px solid rgb(217, 217, 217)',
                          }}
                        />
                        <div className={styles.box_5}>
                          <Text textType="Text" className={styles.text_2}>
                            {formForm1Error.input_Email?.message}
                          </Text>
                        </div>
                      </div>
                      <div className={styles.box_3}>
                        <div className={styles.box_4}>
                          <Text textType="Text" className={styles.text_1}>
                            {t('screen.sign_up.text_10')}
                          </Text>
                          <Text textType="Text" className={styles.text_2}>
                            {'*'}
                          </Text>
                        </div>
                        <ControlledInput
                          placeholder={t('screen.sign_up.input_2')}
                          isPasswordField
                          className={styles.input_user_name}
                          control={formForm1.control}
                          formField="input_Password"
                          inputStyle={{
                            backgroundColor: 'rgb(255, 255, 255)',
                            width: '376px',
                            fontWeight: '500',
                            height: '48px',
                            border: '1px solid rgb(217, 217, 217)',
                          }}
                        />
                        <div className={styles.box_5}>
                          <Text textType="Text" className={styles.text_2}>
                            {formForm1Error.input_Password?.message}
                          </Text>
                        </div>
                      </div>
                      <div className={styles.box_3}>
                        <div className={styles.dashboardnavbar_1}>
                          <div className={styles.box_14}>
                            <Text textType="Text" className={styles.text_1}>
                              {t('screen.signup.datetimepicker_1_label')}
                            </Text>
                            <Text textType="Text" className={styles.text_2}>
                              {'*'}
                            </Text>
                          </div>
                          <ControlledDateTimePicker
                            picker="date"
                            format="dd/MM/yyyy"
                            className={styles.datetimepicker_1}
                            control={formForm1.control}
                            formField="datetimepicker_1"
                          />
                        </div>
                        <div className={styles.box_5}>
                          <Text textType="Text" className={styles.text_2}>
                            {formForm1Error.datetimepicker_1?.message}
                          </Text>
                        </div>
                      </div>
                      <Button
                        buttonType="primary"
                        className={styles.button_1}
                        onClick={formForm1.handleSubmit(handleButton1)}
                      >
                        <Text textType="Text" className={styles.text_14}>
                          {t('screen.sign_up.text_13')}
                        </Text>
                      </Button>
                    </form>
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
        input_userName: yup.string(),
        input_Email: yup.string().email(),
        input_Password: yup.string(),
        datetimepicker_1: yup.string().notRequired(),
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
export default DashboardUsersDetail;
