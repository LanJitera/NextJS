import { serviceFetch } from '@utils/service';
import { getRoute } from '@utils/route';
import { QueryFunctionContext } from 'react-query';
import { DefaultQueryKey } from '@interfaces/query';
import { UserModel } from '@models/user';
import { PartybookingModel } from '@models/partybooking';

export const DefaultFilterUserQueryKey: [string, string, string] = ['User', 'filter', '/api/users'];

export type FilterUserRequestBody = {
  pagination_page?: number;
  pagination_limit?: number;
  users: {
    isactive?: boolean;
    username?: string;
    dateofbirth?: Date;
    email?: string;
    password?: string;
  };
};

export type FilterUserResponseBody = {
  total_pages: number;
  users: (Omit<
    UserModel,
    | 'encrypted_password'
    | 'reset_password_token'
    | 'reset_password_sent_at'
    | 'remember_created_at'
    | 'current_sign_in_at'
    | 'last_sign_in_at'
    | 'current_sign_in_ip'
    | 'last_sign_in_ip'
    | 'sign_in_count'
    | 'password_confirmation'
    | 'locked_at'
    | 'failed_attempts'
    | 'unlock_token'
    | 'confirmation_token'
    | 'unconfirmed_email'
    | 'confirmed_at'
    | 'confirmation_sent_at'
  > & { partybookings: Omit<PartybookingModel, 'party_id' | 'status'>[] })[];
  message: any;
};

export const filterUserApi = async (
  context: QueryFunctionContext<DefaultQueryKey<Partial<FilterUserRequestBody> | undefined>>,
): Promise<FilterUserResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/users', context.queryKey[3]),
    params: context.queryKey[3] || {},
    method: 'GET',
  });
};

export const DefaultShowUserQueryKey: [string, string, string] = ['User', 'show', '/api/users/:id'];

export type ShowUserRequestBody = {
  id: string;
};

export type ShowUserResponseBody = {
  user: Omit<
    UserModel,
    | 'encrypted_password'
    | 'reset_password_token'
    | 'reset_password_sent_at'
    | 'remember_created_at'
    | 'current_sign_in_at'
    | 'last_sign_in_at'
    | 'current_sign_in_ip'
    | 'last_sign_in_ip'
    | 'sign_in_count'
    | 'password_confirmation'
    | 'locked_at'
    | 'failed_attempts'
    | 'unlock_token'
    | 'confirmation_token'
    | 'unconfirmed_email'
    | 'confirmed_at'
    | 'confirmation_sent_at'
  > & { partybookings: Omit<PartybookingModel, 'party_id' | 'status'>[] };
  message: any;
};

export const showUserApi = async (
  context: QueryFunctionContext<DefaultQueryKey<ShowUserRequestBody | undefined>>,
): Promise<ShowUserResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/users/:id', context.queryKey[3]),
    params: context.queryKey[3] || {},
    method: 'GET',
  });
};

export type CreateUserRequestBody = {
  users: {
    isactive?: boolean;
    username?: string;
    dateofbirth?: Date;
    email?: string;
    password?: string;
  };
};

export type CreateUserResponseBody = {
  user: Omit<
    UserModel,
    | 'encrypted_password'
    | 'reset_password_token'
    | 'reset_password_sent_at'
    | 'remember_created_at'
    | 'current_sign_in_at'
    | 'last_sign_in_at'
    | 'current_sign_in_ip'
    | 'last_sign_in_ip'
    | 'sign_in_count'
    | 'password_confirmation'
    | 'locked_at'
    | 'failed_attempts'
    | 'unlock_token'
    | 'confirmation_token'
    | 'unconfirmed_email'
    | 'confirmed_at'
    | 'confirmation_sent_at'
  > & { partybookings: Omit<PartybookingModel, 'party_id' | 'status'>[] };
  error_object: any;
};

export const createUserApi = async (
  body: CreateUserRequestBody,
): Promise<CreateUserResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/users', body),
    method: 'POST',
    data: body,
  });
};

export type UpdateUserRequestBody = {
  id: string;
  users: {
    isactive?: boolean;
    username?: string;
    dateofbirth?: Date;
    email?: string;
    password?: string;
  };
};

export type UpdateUserResponseBody = {
  user: Omit<
    UserModel,
    | 'encrypted_password'
    | 'reset_password_token'
    | 'reset_password_sent_at'
    | 'remember_created_at'
    | 'current_sign_in_at'
    | 'last_sign_in_at'
    | 'current_sign_in_ip'
    | 'last_sign_in_ip'
    | 'sign_in_count'
    | 'password_confirmation'
    | 'locked_at'
    | 'failed_attempts'
    | 'unlock_token'
    | 'confirmation_token'
    | 'unconfirmed_email'
    | 'confirmed_at'
    | 'confirmation_sent_at'
  > & { partybookings: Omit<PartybookingModel, 'party_id' | 'status'>[] };
  error_object: any;
};

export const updateUserApi = async (
  body: UpdateUserRequestBody,
): Promise<UpdateUserResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/users/:id', body),
    method: 'PUT',
    data: body,
  });
};

export type DeleteUserRequestBody = {
  id: string;
};

export type DeleteUserResponseBody = {
  message: any;
};

export const deleteUserApi = async (
  body: DeleteUserRequestBody,
): Promise<DeleteUserResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/users/:id', body),
    method: 'DELETE',
    data: body,
  });
};
