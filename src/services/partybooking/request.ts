import { serviceFetch } from '@utils/service';
import { getRoute } from '@utils/route';
import { QueryFunctionContext } from 'react-query';
import { DefaultQueryKey } from '@interfaces/query';
import { PartybookingModel } from '@models/partybooking';
import { UserModel } from '@models/user';
import { PartyModel } from '@models/party';

export const DefaultFilterPartybookingQueryKey: [string, string, string] = [
  'Partybooking',
  'filter',
  '/api/partybookings',
];

export type FilterPartybookingRequestBody = {
  pagination_page?: number;
  pagination_limit?: number;
  partybookings: {
    user_id?: number;
    party_id?: number;
    status?: string;
  };
};

export type FilterPartybookingResponseBody = {
  total_pages: number;
  partybookings: (PartybookingModel & {
    user: Omit<
      UserModel,
      | 'isactive'
      | 'username'
      | 'password'
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
    > & { name: UserModel['username'] };
    party: Omit<PartyModel, 'created_at' | 'updated_at'>;
  })[];
  message: any;
};

export const filterPartybookingApi = async (
  context: QueryFunctionContext<
    DefaultQueryKey<Partial<FilterPartybookingRequestBody> | undefined>
  >,
): Promise<FilterPartybookingResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/partybookings', context.queryKey[3]),
    params: context.queryKey[3] || {},
    method: 'GET',
  });
};

export const DefaultShowPartybookingQueryKey: [string, string, string] = [
  'Partybooking',
  'show',
  '/api/partybookings/:id',
];

export type ShowPartybookingRequestBody = {
  id: string;
};

export type ShowPartybookingResponseBody = {
  partybooking: PartybookingModel & {
    user: Omit<
      UserModel,
      | 'isactive'
      | 'username'
      | 'password'
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
    > & { name: UserModel['username'] };
    party: Omit<PartyModel, 'admin_id' | 'describe' | 'requiredage' | 'img'>;
  };
  message: any;
};

export const showPartybookingApi = async (
  context: QueryFunctionContext<DefaultQueryKey<ShowPartybookingRequestBody | undefined>>,
): Promise<ShowPartybookingResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/partybookings/:id', context.queryKey[3]),
    params: context.queryKey[3] || {},
    method: 'GET',
  });
};

export type CreatePartybookingRequestBody = {
  partybookings: {
    user_id?: number;
    party_id?: number;
    status?: string;
  };
};

export type CreatePartybookingResponseBody = {
  partybooking: PartybookingModel & {
    user: Omit<
      UserModel,
      | 'isactive'
      | 'username'
      | 'password'
      | 'dateofbirth'
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
      | 'password_confirmation'
      | 'locked_at'
      | 'failed_attempts'
      | 'unlock_token'
      | 'confirmation_token'
      | 'unconfirmed_email'
      | 'confirmed_at'
      | 'confirmation_sent_at'
    >;
    party: Omit<PartyModel, 'admin_id' | 'describe' | 'requiredage' | 'img'>;
  };
  error_object: any;
};

export const createPartybookingApi = async (
  body: CreatePartybookingRequestBody,
): Promise<CreatePartybookingResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/partybookings', body),
    method: 'POST',
    data: body,
  });
};

export type UpdatePartybookingRequestBody = {
  id: string;
  partybookings: {
    user_id?: number;
    party_id?: number;
    status?: string;
  };
};

export type UpdatePartybookingResponseBody = {
  partybooking: PartybookingModel & {
    user: Omit<
      UserModel,
      | 'isactive'
      | 'username'
      | 'password'
      | 'dateofbirth'
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
      | 'password_confirmation'
      | 'locked_at'
      | 'failed_attempts'
      | 'unlock_token'
      | 'confirmation_token'
      | 'unconfirmed_email'
      | 'confirmed_at'
      | 'confirmation_sent_at'
    >;
    party: Omit<PartyModel, 'admin_id' | 'describe' | 'requiredage' | 'img'>;
  };
  error_object: any;
};

export const updatePartybookingApi = async (
  body: UpdatePartybookingRequestBody,
): Promise<UpdatePartybookingResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/partybookings/:id', body),
    method: 'PUT',
    data: body,
  });
};

export type DeletePartybookingRequestBody = {
  id: string;
};

export type DeletePartybookingResponseBody = {
  message: any;
};

export const deletePartybookingApi = async (
  body: DeletePartybookingRequestBody,
): Promise<DeletePartybookingResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/partybookings/:id', body),
    method: 'DELETE',
    data: body,
  });
};
