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
  FilterPartyRequestBody,
  FilterPartyResponseBody,
  filterPartyApi,
  DefaultFilterPartyQueryKey,
  ShowPartyRequestBody,
  ShowPartyResponseBody,
  showPartyApi,
  DefaultShowPartyQueryKey,
  CreatePartyRequestBody,
  CreatePartyResponseBody,
  createPartyApi,
  UpdatePartyRequestBody,
  UpdatePartyResponseBody,
  updatePartyApi,
  DeletePartyRequestBody,
  DeletePartyResponseBody,
  deletePartyApi,
  TestPartyRequestBody,
  TestPartyResponseBody,
  testPartyApi,
  DefaultTestPartyQueryKey,
} from './request';

export const useFilterPartyQuery = (
  params?: Partial<FilterPartyRequestBody>,
  options: UseQueryOptions<
    FilterPartyResponseBody,
    unknown,
    FilterPartyResponseBody,
    DefaultQueryKey<Partial<FilterPartyRequestBody> | undefined>
  > = {},
) => {
  return useQuery([...DefaultFilterPartyQueryKey, params], filterPartyApi, {
    ...DEFAULT_QUERY_OPTIONS,
    enabled: !!params,
    ...options,
  });
};

export const fetchFilterParty = async (
  queryClient: QueryClient,
  params?: Partial<FilterPartyRequestBody>,
) => {
  return queryClient.fetchQuery({
    queryKey: [...DefaultFilterPartyQueryKey, params],
    queryFn: filterPartyApi,
  });
};

export const useShowPartyQuery = (
  params: ShowPartyRequestBody,
  options: UseQueryOptions<
    ShowPartyResponseBody,
    unknown,
    ShowPartyResponseBody,
    DefaultQueryKey<ShowPartyRequestBody | undefined>
  > = {},
) => {
  return useQuery([...DefaultShowPartyQueryKey, params], showPartyApi, {
    ...DEFAULT_QUERY_OPTIONS,
    enabled: !!params,
    ...options,
  });
};

export const fetchShowParty = async (queryClient: QueryClient, params: ShowPartyRequestBody) => {
  return queryClient.fetchQuery({
    queryKey: [...DefaultShowPartyQueryKey, params],
    queryFn: showPartyApi,
  });
};

export const useCreatePartyMutation = (
  options: MutateOptions<CreatePartyResponseBody, unknown, CreatePartyRequestBody, unknown> = {},
) => {
  const queryClient = useQueryClient();
  return useMutation(createPartyApi, {
    ...options,
    onSuccess: (data, variables, context) => {
      options.onSuccess && options.onSuccess(data, variables, context);
      queryClient.invalidateQueries('Party');
    },
  });
};

export const useUpdatePartyMutation = (
  options: MutateOptions<UpdatePartyResponseBody, unknown, UpdatePartyRequestBody, unknown> = {},
) => {
  const queryClient = useQueryClient();
  return useMutation(updatePartyApi, {
    ...options,
    onSuccess: (data, variables, context) => {
      options.onSuccess && options.onSuccess(data, variables, context);
      queryClient.invalidateQueries('Party');
    },
  });
};

export const useDeletePartyMutation = (
  options: MutateOptions<DeletePartyResponseBody, unknown, DeletePartyRequestBody, unknown> = {},
) => {
  const queryClient = useQueryClient();
  return useMutation(deletePartyApi, {
    ...options,
    onSuccess: (data, variables, context) => {
      options.onSuccess && options.onSuccess(data, variables, context);
      queryClient.invalidateQueries('Party');
    },
  });
};

export const useTestPartyQuery = (
  params?: Partial<TestPartyRequestBody>,
  options: UseQueryOptions<
    TestPartyResponseBody,
    unknown,
    TestPartyResponseBody,
    DefaultQueryKey<Partial<TestPartyRequestBody> | undefined>
  > = {},
) => {
  return useQuery([...DefaultTestPartyQueryKey, params], testPartyApi, {
    ...DEFAULT_QUERY_OPTIONS,
    enabled: !!params,
    ...options,
  });
};

export const fetchTestParty = async (
  queryClient: QueryClient,
  params?: Partial<TestPartyRequestBody>,
) => {
  return queryClient.fetchQuery({
    queryKey: [...DefaultTestPartyQueryKey, params],
    queryFn: testPartyApi,
  });
};

export * from './request';
