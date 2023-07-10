import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FilterPartyResponseBody, useFilterPartyQuery, FilterPartyRequestBody, fetchFilterParty } from "@services/party";
import { TableColumnDefinition, Table } from "@components/atoms/Table";
import DashboardButton from "@components/molecules/DashboardButton";
import DashboardNavbar from "@components/molecules/DashboardNavbar";
import { Row } from "@components/atoms/Row";
import { Col } from "@components/atoms/Col";
import DashboardSidebar from "@components/molecules/DashboardSidebar";
import { Text } from "@components/atoms/Text";
import { Button } from "@components/atoms/Button";
import { ControlledSelect } from "@components/atoms/ControlledSelect";
import { ControlledInput } from "@components/atoms/ControlledInput";
import DashboardFooter from "@components/molecules/DashboardFooter";
import { useNavigateService } from "@services/navigate";
import { useQueryClient } from "react-query";
import { Modal } from "@components/atoms/Modal";
import { DefaultPageProps } from "@interfaces/page";

import styles from './index.module.css';

type DashboardPartiesProps = DefaultPageProps & {
  className?: string;
  }
interface Form1FormData {
select_status: string
input_nameParty: string
input_location: string
}
function DashboardParties (props: DashboardPartiesProps): JSX.Element {
  const formForm1 = useForm1()
  const queryClient = useQueryClient()
const [filterPartyParams, setFilterPartyParams] = useState<Partial<FilterPartyRequestBody>>({ pagination_limit: Number(20)})
const filterPartyQuery = useFilterPartyQuery(filterPartyParams)
const navigation = useNavigateService()

const columnsTable1 = useMemo<TableColumnDefinition<FilterPartyResponseBody['parties'][number]>[]>(() => [{ name: 'Img', path: "img", sortable: false},
{ name: 'Id', path: "id", sortable: false},
{ name: 'Created At', path: "created_at", sortable: false},
{ name: 'Updated At', path: "updated_at", sortable: false},
{ name: 'Nameparty', path: "nameparty", sortable: false},
{ name: 'Partystarttime', path: "partystarttime", sortable: false},
{ name: 'Partylocation', path: "partylocation", sortable: false},
{ name: 'Numberofpeople', path: "numberofpeople", sortable: false},
{ name: 'Isstatus', path: "isstatus", sortable: false},
{ name: 'User Id', path: "user_id", sortable: false},
{ name: 'Party Id', path: "party_id", sortable: false},
{ name: 'Admin Id', path: "admin_id", sortable: false},
{ name: 'Describe', path: "describe", sortable: false},
{ name: 'Requiredage', path: "requiredage", sortable: false}], [])
const actionsTable1 = useMemo<TableColumnDefinition<FilterPartyResponseBody['parties'][number]>[]>(() => [{ name: 'Delete', renderColumn: (innerProps) => (<DashboardButton label={'Delete'} onClick={handleOnClickTable1Delete} {...innerProps.row.original} />) },{ name: 'Edit', renderColumn: (innerProps) => (<DashboardButton label={'Edit'} onClick={handleOnClickTable1Edit} {...innerProps.row.original} />) },{ name: 'List member', renderColumn: (innerProps) => (<DashboardButton label={'List member'} onClick={handleOnClickTable1List member} {...innerProps.row.original} />) }], [])
  
  const handleButton0 = () => {
  navigation.navigate('/newAdmin/dashboard/parties/:partyId')
}
const handleButton1 = async (values: Form1FormData) => {
  const filterPartyQuery = await fetchFilterParty(queryClient, { parties: { nameparty: values.input_nameParty, partylocation: values.input_location, isstatus: values.select_status}})
}
const handleTable1PageChange = (pageIndex: number,pageSize: number) => {
  setFilterPartyParams({ pagination_page: pageIndex, pagination_limit: pageSize})
}
const handleOnClickTable1Delete = () => {
  Modal.show(<div />);  
}
const handleOnClickTable1Edit = () => {
  navigation.navigate('/newAdmin/dashboard/parties/:partyId', { IdParty: '1' })
}
const handleOnClickTable1List member = () => {
  navigation.navigate('/newAdmin/dashboard/users/:userId')
}
  return (<div className={styles.page_container} ><DashboardNavbar className={styles.dashboardnavbar_1} />
<div className={styles.dashboard_main} ><div className={styles.dashboard_main_wrapper} ><Row gutter={[30,30]} justify='start' align='top' className={styles.row_1} ><Col xs={24} md={24} xl={6} className={styles.col_1} ><DashboardSidebar className={styles.dashboardnavbar_1} /></Col>
<Col xs={24} md={24} xl={18} className={styles.col_2} ><div className={styles.dashboard_content} ><div className={styles.dashboard_content_title} ><div className={styles.box_7} ><Text textType='Text' className={styles.text_9} >{'Parties'}</Text>
<Button buttonType='primary' className={styles.button_0} onClick={handleButton0} >{'Create new party'}</Button></div>
<form className={styles.form_1} ><div className={styles.select_1_container} ><ControlledSelect placeholder={'Placeholder'} data={[{ value: 'public', label: 'Public' }, { value: 'private', label: 'Private' }, { value: 'daft', label: 'Daft' }, { value: 'close', label: 'Close' }]} defaultValue={''} className={styles.select_status} control={formForm1.control} formField='select_status' iconProps={{ iconName: "FaChevronDown", color: "\"#000\"", activeColor: "null", inactiveColor: "null", checkColor: "null", size: "16"}} containerStyle={{ height: "auto", border: "3px solid rgb(23, 125, 220)"}} /></div>
<ControlledInput placeholder={'Input name party'} className={styles.input_name_party} control={formForm1.control} formField='input_nameParty' inputStyle={{ backgroundColor: "rgb(255, 255, 255)", width: "auto", fontWeight: "500", border: "1px solid rgb(217, 217, 217)"}} />
<ControlledInput placeholder={'Input location'} className={styles.input_name_party} control={formForm1.control} formField='input_location' inputStyle={{ backgroundColor: "rgb(255, 255, 255)", width: "auto", fontWeight: "500", border: "1px solid rgb(217, 217, 217)"}} />
<Button buttonType='primary' className={styles.button_1} onClick={formForm1.handleSubmit(handleButton1)} >{'Search'}</Button></form></div>
<div className={styles.dashboard_content_filter_table} ><div className={styles.box_8} ><Table data={filterPartyQuery.data?.parties} totalPage={filterPartyQuery.data?.total_pages} onPaginationChange={handleTable1PageChange} isHeaderVisible isFooterVisible={false} isPaginationEnabled paginationPosition='left' pageSize={20} className={styles.table_1} columns={columnsTable1} actions={actionsTable1} wrapperStyle={{ width: "100%", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 0, 0)", overflowX: "auto"}} tableStyle={{ backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 0, 0)", width: "100%", border: "1px solid rgb(0, 0, 0)"}} headerColumnStyle={{ backgroundColor: "rgb(0, 21, 41)", color: "rgb(255, 255, 255)", fontSize: "16px", textAlign: "center", fontWeight: "bold", border: "1px solid rgb(0, 0, 0)", padding: "8px 16px 8px 16px"}} bodyColumnStyle={{ backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 0, 0)", fontSize: "14px", whiteSpace: "nowrap", textAlign: "left", border: "1px solid rgb(0, 0, 0)", padding: "4px 8px 4px 8px"}} footerColumnStyle={{ backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 0, 0)", fontSize: "16px", textAlign: "center", fontWeight: "bold", border: "1px solid rgb(0, 0, 0)", padding: "8px 16px 8px 16px"}} paginationWrapperStyle={{ margin: "12px 0px 0px 0px"}} /></div></div></div></Col></Row></div></div>
<DashboardFooter className={styles.dashboardnavbar_1} /></div>);
}

    const useForm1 = () => {
      const validationScheme = useMemo(() => (
yup.object().shape({
select_status: yup.string().notRequired(),
input_nameParty: yup.string().notRequired(),
input_location: yup.string().notRequired(),
})), [])
      return useForm<Form1FormData>({
      resolver: yupResolver(validationScheme),
      shouldFocusError: true,
      mode: 'onChange',
      reValidateMode: 'onChange',
    });
    }
export default DashboardParties;
