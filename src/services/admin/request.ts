import { serviceFetch } from '@utils/service';
import { getRoute } from '@utils/route';
import { QueryFunctionContext } from 'react-query';
import { DefaultQueryKey } from '@interfaces/query';
import { AdminModel } from '@models/admin';
import { PartyModel } from '@models/party';

export const DefaultFilterAdminQueryKey: [string, string, string] = [
  'Admin',
  'filter',
  '/api/admins',
];

export type FilterAdminRequestBody = {
  pagination_page?: number;
  pagination_limit?: number;
  admins: {
    name?: string;
    email?: string;
  };
};

export type FilterAdminResponseBody = {
  total_pages: number;
  admins: (Omit<
    AdminModel,
    | 'encrypted_password'
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
  > & { parties: Omit<PartyModel, 'describe' | 'requiredage' | 'img'>[] })[];
  message: any;
};

export const filterAdminApi = async (
  context: QueryFunctionContext<DefaultQueryKey<Partial<FilterAdminRequestBody> | undefined>>,
): Promise<FilterAdminResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/admins', context.queryKey[3]),
    params: context.queryKey[3] || {},
    method: 'GET',
  });
};

export const DefaultShowAdminQueryKey: [string, string, string] = [
  'Admin',
  'show',
  '/api/admins/:id',
];

export type ShowAdminRequestBody = {
  id: string;
};

export type ShowAdminResponseBody = {
  admin: Omit<
    AdminModel,
    | 'encrypted_password'
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
  > & { parties: Omit<PartyModel, 'describe' | 'requiredage' | 'img'>[] };
  message: any;
};

export const showAdminApi = async (
  context: QueryFunctionContext<DefaultQueryKey<ShowAdminRequestBody | undefined>>,
): Promise<ShowAdminResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/admins/:id', context.queryKey[3]),
    params: context.queryKey[3] || {},
    method: 'GET',
  });
};

export type CreateAdminRequestBody = {
  admins: {
    name?: string;
    email?: string;
  };
};

export type CreateAdminResponseBody = {
  admin: Omit<
    AdminModel,
    | 'encrypted_password'
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
  > & { parties: Omit<PartyModel, 'describe' | 'requiredage' | 'img'>[] };
  error_object: any;
};

export const createAdminApi = async (
  body: CreateAdminRequestBody,
): Promise<CreateAdminResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/admins', body),
    method: 'POST',
    data: body,
  });
};

export type UpdateAdminRequestBody = {
  id: string;
  admins: {
    name?: string;
    email?: string;
  };
};

export type UpdateAdminResponseBody = {
  admin: Omit<
    AdminModel,
    | 'encrypted_password'
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
  > & { parties: Omit<PartyModel, 'describe' | 'requiredage' | 'img'>[] };
  error_object: any;
};

export const updateAdminApi = async (
  body: UpdateAdminRequestBody,
): Promise<UpdateAdminResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/admins/:id', body),
    method: 'PUT',
    data: body,
  });
};

export type DeleteAdminRequestBody = {
  id: string;
};

export type DeleteAdminResponseBody = {
  message: any;
};

export const deleteAdminApi = async (
  body: DeleteAdminRequestBody,
): Promise<DeleteAdminResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/admins/:id', body),
    method: 'DELETE',
    data: body,
  });
};
