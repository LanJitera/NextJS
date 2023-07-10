import {
  useQuery,
  UseQueryOptions,
  QueryClient,
  useMutation,
  MutateOptions,
  useQueryClient,
} from 'react-query';
import { DefaultQueryKey } from '@interfaces/query';
import { DEFAULT_QUERY_OPTIONS } from '@constants/query';
import {
  FilterAdminRequestBody,
  FilterAdminResponseBody,
  filterAdminApi,
  DefaultFilterAdminQueryKey,
  ShowAdminRequestBody,
  ShowAdminResponseBody,
  showAdminApi,
  DefaultShowAdminQueryKey,
  CreateAdminRequestBody,
  CreateAdminResponseBody,
  createAdminApi,
  UpdateAdminRequestBody,
  UpdateAdminResponseBody,
  updateAdminApi,
  DeleteAdminRequestBody,
  DeleteAdminResponseBody,
  deleteAdminApi,
} from './request';

export const useFilterAdminQuery = (
  params?: Partial<FilterAdminRequestBody>,
  options: UseQueryOptions<
    FilterAdminResponseBody,
    unknown,
    FilterAdminResponseBody,
    DefaultQueryKey<Partial<FilterAdminRequestBody> | undefined>
  > = {},
) => {
  return useQuery([...DefaultFilterAdminQueryKey, params], filterAdminApi, {
    ...DEFAULT_QUERY_OPTIONS,
    enabled: !!params,
    ...options,
  });
};

export const fetchFilterAdmin = async (
  queryClient: QueryClient,
  params?: Partial<FilterAdminRequestBody>,
) => {
  return queryClient.fetchQuery({
    queryKey: [...DefaultFilterAdminQueryKey, params],
    queryFn: filterAdminApi,
  });
};

export const useShowAdminQuery = (
  params: ShowAdminRequestBody,
  options: UseQueryOptions<
    ShowAdminResponseBody,
    unknown,
    ShowAdminResponseBody,
    DefaultQueryKey<ShowAdminRequestBody | undefined>
  > = {},
) => {
  return useQuery([...DefaultShowAdminQueryKey, params], showAdminApi, {
    ...DEFAULT_QUERY_OPTIONS,
    enabled: !!params,
    ...options,
  });
};

export const fetchShowAdmin = async (queryClient: QueryClient, params: ShowAdminRequestBody) => {
  return queryClient.fetchQuery({
    queryKey: [...DefaultShowAdminQueryKey, params],
    queryFn: showAdminApi,
  });
};

export const useCreateAdminMutation = (
  options: MutateOptions<CreateAdminResponseBody, unknown, CreateAdminRequestBody, unknown> = {},
) => {
  const queryClient = useQueryClient();
  return useMutation(createAdminApi, {
    ...options,
    onSuccess: (data, variables, context) => {
      options.onSuccess && options.onSuccess(data, variables, context);
      queryClient.invalidateQueries('Admin');
    },
  });
};

export const useUpdateAdminMutation = (
  options: MutateOptions<UpdateAdminResponseBody, unknown, UpdateAdminRequestBody, unknown> = {},
) => {
  const queryClient = useQueryClient();
  return useMutation(updateAdminApi, {
    ...options,
    onSuccess: (data, variables, context) => {
      options.onSuccess && options.onSuccess(data, variables, context);
      queryClient.invalidateQueries('Admin');
    },
  });
};

export const useDeleteAdminMutation = (
  options: MutateOptions<DeleteAdminResponseBody, unknown, DeleteAdminRequestBody, unknown> = {},
) => {
  const queryClient = useQueryClient();
  return useMutation(deleteAdminApi, {
    ...options,
    onSuccess: (data, variables, context) => {
      options.onSuccess && options.onSuccess(data, variables, context);
      queryClient.invalidateQueries('Admin');
    },
  });
};

export * from './request';
