import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import assets from '@assets/index';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Text } from '@components/atoms/Text';
import { ControlledInput } from '@components/atoms/ControlledInput';
import { Button } from '@components/atoms/Button';
import { useLoginWithEmailMutation } from '@services/authentication';
import { useNavigateService } from '@services/navigate';
import { Toast } from '@components/atoms/Toast';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type LoginUserProps = DefaultPageProps & {
  className?: string;
};
interface Form1FormData {
  input_email: string;
  input_password: string;
}
function LoginUser(props: LoginUserProps): JSX.Element {
  const formForm1 = useForm1();
  const { t } = useTranslation('web');
  const { errors: formForm1Error } = formForm1.formState;
  const loginWithEmailMutation = useLoginWithEmailMutation();
  const navigation = useNavigateService();

  const handleForm1Button = async (values: Form1FormData) => {
    try {
      await loginWithEmailMutation.mutateAsync({
        table: 'users',
        email: values.input_email,
        password: values.input_password,
      });
      navigation.navigate('/User/home');
    } catch (error: unknown) {
      Toast.error('Account password is not correct');
    }
  };
  return (
    <div className={styles.page_container}>
      <div className={styles.header_11}>
        <Image
          sourceType="upload"
          className={styles.image_1}
          src={assets('1686711835107-1-i-0-i-3-jhzu-13-af-58-qoc-1-bzf-4-xl-9-ph-png')}
          alt="image_1"
        />
        <div className={styles.box_3}>
          <form className={styles.form_1}>
            <Text textType="Text" className={styles.form_1_name}>
              {t('screen.login_user.form_1_name')}
            </Text>
            <div className={styles.input_1_container}>
              <div className={styles.box_1}>
                <Text textType="Text" className={styles.text_1}>
                  {t('screen.login_user.text_1')}
                </Text>
                <Text textType="Text" className={styles.text_2}>
                  {'*'}
                </Text>
              </div>
              <ControlledInput
                placeholder={t('screen.login_user.input_1')}
                className={styles.input_email}
                control={formForm1.control}
                formField="input_email"
                inputStyle={{
                  backgroundColor: 'rgb(255, 255, 255)',
                  width: '376px',
                  fontWeight: '500',
                  height: '48px',
                  border: '1px solid rgb(217, 217, 217)',
                }}
              />
              <div className={styles.input_1_error_message_container}>
                <Text textType="Text" className={styles.text_2}>
                  {formForm1Error.input_email?.message}
                </Text>
              </div>
            </div>
            <div className={styles.input_1_container}>
              <div className={styles.box_1}>
                <Text textType="Text" className={styles.text_1}>
                  {t('screen.login_user.text_3')}
                </Text>
                <Text textType="Text" className={styles.text_2}>
                  {'*'}
                </Text>
              </div>
              <ControlledInput
                placeholder={t('screen.login_user.input_2')}
                isPasswordField
                className={styles.input_email}
                control={formForm1.control}
                formField="input_password"
                inputStyle={{
                  backgroundColor: 'rgb(255, 255, 255)',
                  width: '376px',
                  fontWeight: '500',
                  height: '48px',
                  border: '1px solid rgb(217, 217, 217)',
                }}
              />
              <div className={styles.input_1_error_message_container}>
                <Text textType="Text" className={styles.text_2}>
                  {formForm1Error.input_password?.message}
                </Text>
              </div>
            </div>
            <Button
              buttonType="primary"
              className={styles.form_1_button}
              onClick={formForm1.handleSubmit(handleForm1Button)}
            >
              <Text textType="Text" className={styles.form_1_text_0}>
                {t('screen.login_user.form_1_text_0')}
              </Text>
            </Button>
            <div className={styles.box_7}>
              <Text textType="Text" className={styles.text_5}>
                {t('screen.login_user.text_5')}
              </Text>
              <Text href={'/NewUser/sign-up'} textType="Link" className={styles.text_register}>
                {t('screen.login_user.text_6')}
              </Text>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const useForm1 = () => {
  const validationScheme = useMemo(
    () =>
      yup.object().shape({
        input_email: yup.string(),
        input_password: yup.string().notRequired(),
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
export default LoginUser;
