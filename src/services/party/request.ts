import { serviceFetch } from '@utils/service';
import { getRoute } from '@utils/route';
import { QueryFunctionContext } from 'react-query';
import { DefaultQueryKey } from '@interfaces/query';
import { PartyModel } from '@models/party';
import { PartybookingModel } from '@models/partybooking';
import { AdminModel } from '@models/admin';

export const DefaultFilterPartyQueryKey: [string, string, string] = [
  'Party',
  'filter',
  '/api/parties',
];

export type FilterPartyRequestBody = {
  pagination_page?: number;
  pagination_limit?: number;
  parties: {
    nameparty?: string;
    partystarttime?: Date;
    partylocation?: string;
    numberofpeople?: number;
    isstatus?: string;
    admin_id?: number;
    describe?: string;
    requiredage?: number;
    img?: string;
  };
};

export type FilterPartyResponseBody = {
  total_pages: number;
  parties: (PartyModel & {
    partybookings: Omit<PartybookingModel, 'status'>[];
    admin: Omit<
      AdminModel,
      | 'name'
      | 'encrypted_password'
      | 'email'
      | 'reset_password_token'
      | 'reset_password_sent_at'
      | 'remember_created_at'
      | 'current_sign_in_at'
      | 'last_sign_in_at'
      | 'current_sign_in_ip'
      | 'last_sign_in_ip'
      | 'sign_in_count'
      | 'password'
      | 'password_confirmation'
      | 'locked_at'
      | 'failed_attempts'
      | 'unlock_token'
      | 'confirmation_token'
      | 'unconfirmed_email'
      | 'confirmed_at'
      | 'confirmation_sent_at'
    >;
  })[];
  message: any;
};

export const filterPartyApi = async (
  context: QueryFunctionContext<DefaultQueryKey<Partial<FilterPartyRequestBody> | undefined>>,
): Promise<FilterPartyResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/parties', context.queryKey[3]),
    params: context.queryKey[3] || {},
    method: 'GET',
  });
};

export const DefaultShowPartyQueryKey: [string, string, string] = [
  'Party',
  'show',
  '/api/parties/:id',
];

export type ShowPartyRequestBody = {
  id: string;
};

export type ShowPartyResponseBody = {
  party: PartyModel & {
    partybookings: Omit<PartybookingModel, 'status'>[];
    admin: Omit<
      AdminModel,
      | 'name'
      | 'encrypted_password'
      | 'email'
      | 'reset_password_token'
      | 'reset_password_sent_at'
      | 'remember_created_at'
      | 'current_sign_in_at'
      | 'last_sign_in_at'
      | 'current_sign_in_ip'
      | 'last_sign_in_ip'
      | 'sign_in_count'
      | 'password'
      | 'password_confirmation'
      | 'locked_at'
      | 'failed_attempts'
      | 'unlock_token'
      | 'confirmation_token'
      | 'unconfirmed_email'
      | 'confirmed_at'
      | 'confirmation_sent_at'
    >;
  };
  message: any;
};

export const showPartyApi = async (
  context: QueryFunctionContext<DefaultQueryKey<ShowPartyRequestBody | undefined>>,
): Promise<ShowPartyResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/parties/:id', context.queryKey[3]),
    params: context.queryKey[3] || {},
    method: 'GET',
  });
};

export type CreatePartyRequestBody = {
  parties: {
    nameparty?: string;
    partystarttime?: Date;
    partylocation?: string;
    numberofpeople?: number;
    isstatus?: string;
    admin_id?: number;
    describe?: string;
    requiredage?: number;
    img?: string;
  };
};

export type CreatePartyResponseBody = {
  party: PartyModel & {
    partybookings: Omit<PartybookingModel, 'status'>[];
    admin: Omit<
      AdminModel,
      | 'name'
      | 'encrypted_password'
      | 'email'
      | 'reset_password_token'
      | 'reset_password_sent_at'
      | 'remember_created_at'
      | 'current_sign_in_at'
      | 'last_sign_in_at'
      | 'current_sign_in_ip'
      | 'last_sign_in_ip'
      | 'sign_in_count'
      | 'password'
      | 'password_confirmation'
      | 'locked_at'
      | 'failed_attempts'
      | 'unlock_token'
      | 'confirmation_token'
      | 'unconfirmed_email'
      | 'confirmed_at'
      | 'confirmation_sent_at'
    >;
  };
  error_object: any;
};

export const createPartyApi = async (
  body: CreatePartyRequestBody,
): Promise<CreatePartyResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/parties', body),
    method: 'POST',
    data: body,
  });
};

export type UpdatePartyRequestBody = {
  id: string;
  parties: {
    nameparty?: string;
    partystarttime?: Date;
    partylocation?: string;
    numberofpeople?: number;
    isstatus?: string;
    admin_id?: number;
    describe?: string;
    requiredage?: number;
    img?: string;
  };
};

export type UpdatePartyResponseBody = {
  party: PartyModel & {
    partybookings: Omit<PartybookingModel, 'status'>[];
    admin: Omit<
      AdminModel,
      | 'name'
      | 'encrypted_password'
      | 'email'
      | 'reset_password_token'
      | 'reset_password_sent_at'
      | 'remember_created_at'
      | 'current_sign_in_at'
      | 'last_sign_in_at'
      | 'current_sign_in_ip'
      | 'last_sign_in_ip'
      | 'sign_in_count'
      | 'password'
      | 'password_confirmation'
      | 'locked_at'
      | 'failed_attempts'
      | 'unlock_token'
      | 'confirmation_token'
      | 'unconfirmed_email'
      | 'confirmed_at'
      | 'confirmation_sent_at'
    >;
  };
  error_object: any;
};

export const updatePartyApi = async (
  body: UpdatePartyRequestBody,
): Promise<UpdatePartyResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/parties/:id', body),
    method: 'PUT',
    data: body,
  });
};

export type DeletePartyRequestBody = {
  id: string;
};

export type DeletePartyResponseBody = {
  message: any;
};

export const deletePartyApi = async (
  body: DeletePartyRequestBody,
): Promise<DeletePartyResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/parties/:id', body),
    method: 'DELETE',
    data: body,
  });
};

export const DefaultTestPartyQueryKey: [string, string, string] = [
  'Party',
  'test',
  '/api/parties/BookingHistory',
];

export type TestPartyRequestBody = {
  pagination_page?: number;
  pagination_limit?: number;
  useid?: number;
};

export type TestPartyResponseBody = {
  total_pages: number;
  parties: (PartyModel & { partybookings: PartybookingModel[] })[];
  message: any;
};

export const testPartyApi = async (
  context: QueryFunctionContext<DefaultQueryKey<Partial<TestPartyRequestBody> | undefined>>,
): Promise<TestPartyResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/parties/BookingHistory', context.queryKey[3]),
    params: context.queryKey[3] || {},
    method: 'GET',
  });
};
