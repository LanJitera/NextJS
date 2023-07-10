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
  FilterPartybookingRequestBody,
  FilterPartybookingResponseBody,
  filterPartybookingApi,
  DefaultFilterPartybookingQueryKey,
  ShowPartybookingRequestBody,
  ShowPartybookingResponseBody,
  showPartybookingApi,
  DefaultShowPartybookingQueryKey,
  CreatePartybookingRequestBody,
  CreatePartybookingResponseBody,
  createPartybookingApi,
  UpdatePartybookingRequestBody,
  UpdatePartybookingResponseBody,
  updatePartybookingApi,
  DeletePartybookingRequestBody,
  DeletePartybookingResponseBody,
  deletePartybookingApi,
} from './request';

export const useFilterPartybookingQuery = (
  params?: Partial<FilterPartybookingRequestBody>,
  options: UseQueryOptions<
    FilterPartybookingResponseBody,
    unknown,
    FilterPartybookingResponseBody,
    DefaultQueryKey<Partial<FilterPartybookingRequestBody> | undefined>
  > = {},
) => {
  return useQuery([...DefaultFilterPartybookingQueryKey, params], filterPartybookingApi, {
    ...DEFAULT_QUERY_OPTIONS,
    enabled: !!params,
    ...options,
  });
};

export const fetchFilterPartybooking = async (
  queryClient: QueryClient,
  params?: Partial<FilterPartybookingRequestBody>,
) => {
  return queryClient.fetchQuery({
    queryKey: [...DefaultFilterPartybookingQueryKey, params],
    queryFn: filterPartybookingApi,
  });
};

export const useShowPartybookingQuery = (
  params: ShowPartybookingRequestBody,
  options: UseQueryOptions<
    ShowPartybookingResponseBody,
    unknown,
    ShowPartybookingResponseBody,
    DefaultQueryKey<ShowPartybookingRequestBody | undefined>
  > = {},
) => {
  return useQuery([...DefaultShowPartybookingQueryKey, params], showPartybookingApi, {
    ...DEFAULT_QUERY_OPTIONS,
    enabled: !!params,
    ...options,
  });
};

export const fetchShowPartybooking = async (
  queryClient: QueryClient,
  params: ShowPartybookingRequestBody,
) => {
  return queryClient.fetchQuery({
    queryKey: [...DefaultShowPartybookingQueryKey, params],
    queryFn: showPartybookingApi,
  });
};

export const useCreatePartybookingMutation = (
  options: MutateOptions<
    CreatePartybookingResponseBody,
    unknown,
    CreatePartybookingRequestBody,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();
  return useMutation(createPartybookingApi, {
    ...options,
    onSuccess: (data, variables, context) => {
      options.onSuccess && options.onSuccess(data, variables, context);
      queryClient.invalidateQueries('Partybooking');
    },
  });
};

export const useUpdatePartybookingMutation = (
  options: MutateOptions<
    UpdatePartybookingResponseBody,
    unknown,
    UpdatePartybookingRequestBody,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();
  return useMutation(updatePartybookingApi, {
    ...options,
    onSuccess: (data, variables, context) => {
      options.onSuccess && options.onSuccess(data, variables, context);
      queryClient.invalidateQueries('Partybooking');
    },
  });
};

export const useDeletePartybookingMutation = (
  options: MutateOptions<
    DeletePartybookingResponseBody,
    unknown,
    DeletePartybookingRequestBody,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();
  return useMutation(deletePartybookingApi, {
    ...options,
    onSuccess: (data, variables, context) => {
      options.onSuccess && options.onSuccess(data, variables, context);
      queryClient.invalidateQueries('Partybooking');
    },
  });
};

export * from './request';
