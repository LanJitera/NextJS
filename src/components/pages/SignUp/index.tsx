import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import assets from '@assets/index';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Text } from '@components/atoms/Text';
import { ControlledInput } from '@components/atoms/ControlledInput';
import { ControlledDateTimePicker } from '@components/atoms/ControlledDateTimePicker';
import { Button } from '@components/atoms/Button';
import { useSignupWithEmailMutation } from '@services/authentication';
import { useNavigateService } from '@services/navigate';
import { Toast } from '@components/atoms/Toast';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type SignUpProps = DefaultPageProps & {
  className?: string;
};
interface Form2FormData {
  input_username: string;
  input_email: string;
  input_password: string;
  datetimepicker_1: string;
}
function SignUp(props: SignUpProps): JSX.Element {
  const formForm2 = useForm2();
  const { t } = useTranslation('web');
  const { errors: formForm2Error } = formForm2.formState;
  const signupWithEmailMutation = useSignupWithEmailMutation();
  const navigation = useNavigateService();

  const handleButton0 = async (values: Form2FormData) => {
    try {
      await signupWithEmailMutation.mutateAsync({ table: 'users' });
      navigation.navigate('/User/login');
    } catch (error: unknown) {
      Toast.error('Registration failed');
    }
  };
  return (
    <div className={styles.page_container}>
      <div className={styles.box_1}>
        <Image
          sourceType="upload"
          className={styles.image_0}
          src={assets('1686711835107-1-i-0-i-3-jhzu-13-af-58-qoc-1-bzf-4-xl-9-ph-png')}
          alt="image_0"
        />
        <div className={styles.box_0}>
          <form className={styles.form_2}>
            <Text textType="Text" className={styles.text_0}>
              {t('screen.sign_up.text_0')}
            </Text>
            <div className={styles.box_2}>
              <div className={styles.box_4}>
                <Text textType="Text" className={styles.text_1}>
                  {t('screen.signup.text_1')}
                </Text>
                <Text textType="Text" className={styles.text_2}>
                  {'*'}
                </Text>
              </div>
              <ControlledInput
                placeholder={t('screen.sign_up.input_0')}
                className={styles.input_username}
                control={formForm2.control}
                formField="input_username"
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
                  {formForm2Error.input_username?.message}
                </Text>
              </div>
            </div>
            <div className={styles.box_2}>
              <div className={styles.box_4}>
                <Text textType="Text" className={styles.text_1}>
                  {t('screen.sign_up.text_5')}
                </Text>
                <Text textType="Text" className={styles.text_2}>
                  {'*'}
                </Text>
              </div>
              <ControlledInput
                placeholder={t('screen.sign_up.input_1')}
                className={styles.input_username}
                control={formForm2.control}
                formField="input_email"
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
                  {formForm2Error.input_email?.message}
                </Text>
              </div>
            </div>
            <div className={styles.box_2}>
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
                className={styles.input_username}
                control={formForm2.control}
                formField="input_password"
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
                  {formForm2Error.input_password?.message}
                </Text>
              </div>
            </div>
            <div className={styles.box_2}>
              <div className={styles.datetimepicker_1_container}>
                <div className={styles.datetimepicker_1_inner}>
                  <Text textType="Text" className={styles.text_1}>
                    {t('screen.signup.datetimepicker_1_label')}
                  </Text>
                  <Text textType="Text" className={styles.text_2}>
                    {'*'}
                  </Text>
                </div>
                <ControlledDateTimePicker
                  picker="date"
                  format="yyyy-MM-dd"
                  className={styles.datetimepicker_1}
                  control={formForm2.control}
                  formField="datetimepicker_1"
                />
              </div>
              <div className={styles.box_5}>
                <Text textType="Text" className={styles.text_2}>
                  {formForm2Error.datetimepicker_1?.message}
                </Text>
              </div>
            </div>
            <Button
              buttonType="primary"
              className={styles.button_0}
              onClick={formForm2.handleSubmit(handleButton0)}
            >
              <Text textType="Text" className={styles.text_13}>
                {t('screen.sign_up.text_13')}
              </Text>
            </Button>
            <div className={styles.box_14}>
              <Text textType="Text" className={styles.text_14}>
                {t('screen.sign_up.text_14')}
              </Text>
              <Text href={'/NewUser/login'} textType="Link" className={styles.text_15}>
                {t('screen.sign_up.text_15')}
              </Text>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const useForm2 = () => {
  const validationScheme = useMemo(
    () =>
      yup.object().shape({
        input_username: yup.string(),
        input_email: yup.string().email(),
        input_password: yup.string(),
        datetimepicker_1: yup.string().notRequired(),
      }),
    [],
  );
  return useForm<Form2FormData>({
    resolver: yupResolver(validationScheme),
    shouldFocusError: true,
    mode: 'onChange',
    reValidateMode: 'onChange',
  });
};
export default SignUp;
