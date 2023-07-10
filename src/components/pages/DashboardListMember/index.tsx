import React, { useMemo, useState } from 'react';
import { TableColumnDefinition, Table } from '@components/atoms/Table';
import DashboardButton from '@components/molecules/DashboardButton';
import DashboardNavbar from '@components/molecules/DashboardNavbar';
import { Row } from '@components/atoms/Row';
import { Col } from '@components/atoms/Col';
import DashboardSidebar from '@components/molecules/DashboardSidebar';
import { Text } from '@components/atoms/Text';
import DashboardFooter from '@components/molecules/DashboardFooter';
import { useFilterPartybookingQuery, FilterPartybookingRequestBody } from '@services/partybooking';
import { useNavigateService } from '@services/navigate';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type DashboardListMemberProps = DefaultPageProps & {
  className?: string;
};

function DashboardListMember(props: DashboardListMemberProps): JSX.Element {
  const [filterPartybookingParams, setFilterPartybookingParams] = useState<
    Partial<FilterPartybookingRequestBody>
  >({});
  const filterPartybookingQuery = useFilterPartybookingQuery(filterPartybookingParams);
  const columnsTable1 = useMemo<TableColumnDefinition<unknown>[]>(
    () => [
      { name: 'Name', path: 'undefined', sortable: false },
      { name: 'Id', path: 'undefined', sortable: false },
      { name: 'Status', path: 'undefined', sortable: false },
      { name: 'Email', path: 'undefined', sortable: false },
      { name: 'Dateofbirth', path: 'undefined', sortable: false },
      { name: 'Created At', path: 'undefined', sortable: false },
      { name: 'Updated At', path: 'undefined', sortable: false },
      { name: 'User Id', path: 'undefined', sortable: false },
      { name: 'Nameparty', path: 'undefined', sortable: false },
      { name: 'Partystarttime', path: 'undefined', sortable: false },
      { name: 'Partylocation', path: 'undefined', sortable: false },
      { name: 'Numberofpeople', path: 'undefined', sortable: false },
      { name: 'Isstatus', path: 'undefined', sortable: false },
      { name: 'Party Id', path: 'undefined', sortable: false },
      { name: 'Img', path: 'undefined', sortable: false },
      { name: 'Describe', path: 'undefined', sortable: false },
      { name: 'Requiredage', path: 'undefined', sortable: false },
      { name: 'Admin Id', path: 'undefined', sortable: false },
    ],
    [],
  );
  const actionsTable1 = useMemo<TableColumnDefinition<unknown>[]>(
    () => [
      {
        name: 'Delete',
        renderColumn: (innerProps) => <DashboardButton label={''} {...innerProps.row.original} />,
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

  const handleTable1PageChange = (pageIndex: number, pageSize: number) => {
    setFilterPartybookingParams({ pagination_page: pageIndex, pagination_limit: pageSize });
  };
  const handleOnClickTable1Edit = () => {};
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
                <div className={styles.dashboard_content_title}>
                  <Text textType="Text" className={styles.text_9}>
                    {showPartybookingQuery.data?.party?.nameparty}
                  </Text>
                </div>
                <div className={styles.dashboard_content_filter_table}>
                  <div className={styles.box_1}>
                    <Table
                      data={filterPartybookingQuery.data?.party}
                      totalPage={filterPartybookingQuery.data?.total_pages}
                      onPaginationChange={handleTable1PageChange}
                      isHeaderVisible
                      isFooterVisible={false}
                      isDataSortable={false}
                      isPaginationEnabled
                      paginationPosition="left"
                      pageSize={20}
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
                      paginationWrapperStyle={{ margin: '12px 0px 0px 0px' }}
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

export default DashboardListMember;
