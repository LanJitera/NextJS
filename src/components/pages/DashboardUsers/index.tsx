import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'next-i18next';
import {
  FilterUserResponseBody,
  useFilterUserQuery,
  FilterUserRequestBody,
  fetchFilterUser,
} from '@services/user';
import { TableColumnDefinition, Table } from '@components/atoms/Table';
import Modal from '@components/molecules/Modal';
import DashboardButton from '@components/molecules/DashboardButton';
import DashboardNavbar from '@components/molecules/DashboardNavbar';
import { Row } from '@components/atoms/Row';
import { Col } from '@components/atoms/Col';
import DashboardSidebar from '@components/molecules/DashboardSidebar';
import { Text } from '@components/atoms/Text';
import { Button } from '@components/atoms/Button';
import { ControlledInput } from '@components/atoms/ControlledInput';
import DashboardFooter from '@components/molecules/DashboardFooter';
import { useNavigateService } from '@services/navigate';
import { useQueryClient } from 'react-query';
import { Modal } from '@components/atoms/Modal';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type DashboardUsersProps = DefaultPageProps & {
  className?: string;
};
interface Form1FormData {
  input_userName: string;
}
function DashboardUsers(props: DashboardUsersProps): JSX.Element {
  const formForm1 = useForm1();
  const { t } = useTranslation('web');
  const queryClient = useQueryClient();
  const [filterUserParams, setFilterUserParams] = useState<Partial<FilterUserRequestBody>>({});
  const filterUserQuery = useFilterUserQuery(filterUserParams);
  const navigation = useNavigateService();

  const columnsTable1 = useMemo<TableColumnDefinition<FilterUserResponseBody['users'][number]>[]>(
    () => [
      { name: 'Id', path: 'id', sortable: false },
      { name: 'Username', path: 'username', sortable: false },
      { name: 'Created At', path: 'created_at', sortable: false },
      { name: 'Updated At', path: 'updated_at', sortable: false },
      { name: 'User Id', path: 'user_id', sortable: false },
      { name: 'Isactive', path: 'isactive', sortable: false },
      { name: 'Password', path: 'password', sortable: false },
      { name: 'Dateofbirth', path: 'dateofbirth', sortable: false },
      { name: 'Email', path: 'email', sortable: false },
    ],
    [],
  );
  const actionsTable1 = useMemo<TableColumnDefinition<FilterUserResponseBody['users'][number]>[]>(
    () => [
      {
        name: 'Delete',
        renderColumn: (innerProps) => (
          <Modal
            onYes={handleOnYesTable1Delete}
            onNo={handleOnNoTable1Delete}
            labelMain={'banj co muon xoa'}
            labelDec={''}
            id={''}
            {...innerProps.row.original}
          />
        ),
      },
      {
        name: 'Edit',
        renderColumn: (innerProps) => (
          <DashboardButton
            label={'Edit'}
            onClick={handleOnClickTable1Edit}
            {...innerProps.row.original}
          />
        ),
      },
    ],
    [],
  );

  const handleButton1 = () => {
    navigation.navigate('/newAdmin/dashboard/users/:userId');
  };
  const handleButton0 = async (values: Form1FormData) => {
    const filterUserQuery = await fetchFilterUser(queryClient, {
      users: { username: values.input_userName },
    });
  };
  const handleOnYesTable1Delete = () => {};
  const handleOnNoTable1Delete = () => {
    Modal.hide();
  };
  const handleOnClickTable1Edit = () => {
    navigation.navigate('/newAdmin/dashboard/users/:userId');
  };
  return (
    <div className={styles.page_container}>
      <DashboardNavbar className={styles.dashboardnavbar_1} />
      <div className={styles.dashboard_main}>
        <div className={styles.dashboard_main_wrapper}>
          <Row gutter={[30, 30]} justify="start" align="top" className={styles.row_1}>
            <Col xs={24} md={24} xl={6} className={styles.col_1}>
              <DashboardSidebar className={styles.dashboardnavbar_1} />
            </Col>
            <Col xs={24} md={24} xl={18} className={styles.col_2}>
              <div className={styles.dashboard_content}>
                <div className={styles.box_1}>
                  <div className={styles.box_3}>
                    <Text textType="Text" className={styles.text_0}>
                      {t('screen.dashboard_users.text_0')}
                    </Text>
                    <Button
                      buttonType="primary"
                      className={styles.button_1}
                      onClick={handleButton1}
                    >
                      {t('screen.dashboard_users.button_1')}
                    </Button>
                  </div>
                  <form className={styles.form_1}>
                    <ControlledInput
                      placeholder={t('screen.dashboardusers.input_1')}
                      className={styles.input_user_name}
                      control={formForm1.control}
                      formField="input_userName"
                      inputStyle={{
                        backgroundColor: 'rgb(255, 255, 255)',
                        width: 'auto',
                        fontWeight: '500',
                        border: '1px solid rgb(217, 217, 217)',
                      }}
                    />
                    <Button
                      buttonType="primary"
                      className={styles.button_0}
                      onClick={formForm1.handleSubmit(handleButton0)}
                    >
                      {'Search'}
                    </Button>
                  </form>
                </div>
                <div className={styles.dashboard_content_filter_table}>
                  <div className={styles.box_8}>
                    <Table
                      data={filterUserQuery.data?.users}
                      isHeaderVisible
                      isFooterVisible={false}
                      isDataSortable={false}
                      className={styles.table_1}
                      columns={columnsTable1}
                      actions={actionsTable1}
                      wrapperStyle={{
                        width: '100%',
                        backgroundColor: 'rgb(255, 255, 255)',
                        color: 'rgb(0, 0, 0)',
                        overflowX: 'auto',
                      }}
                      tableStyle={{
                        backgroundColor: 'rgb(255, 255, 255)',
                        color: 'rgb(0, 0, 0)',
                        width: '100%',
                        border: '1px solid rgb(0, 0, 0)',
                      }}
                      headerColumnStyle={{
                        backgroundColor: 'rgb(0, 21, 41)',
                        color: 'rgb(255, 255, 255)',
                        fontSize: '16px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        border: '1px solid rgb(0, 0, 0)',
                        padding: '8px 16px 8px 16px',
                      }}
                      bodyColumnStyle={{
                        backgroundColor: 'rgb(255, 255, 255)',
                        color: 'rgb(0, 0, 0)',
                        fontSize: '14px',
                        whiteSpace: 'nowrap',
                        textAlign: 'left',
                        border: '1px solid rgb(0, 0, 0)',
                        padding: '4px 8px 4px 8px',
                      }}
                      footerColumnStyle={{
                        backgroundColor: 'rgb(255, 255, 255)',
                        color: 'rgb(0, 0, 0)',
                        fontSize: '16px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        border: '1px solid rgb(0, 0, 0)',
                        padding: '8px 16px 8px 16px',
                      }}
                    />
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
        input_userName: yup.string().notRequired(),
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
export default DashboardUsers;
