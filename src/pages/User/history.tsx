import type { NextPageContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { dehydrate } from 'react-query';
import { initServerInfo, errorHandler } from '@utils/serverSide';
import { fetchFilterPartybooking } from '@services/partybooking';
import { useAuthenticatedData } from '@services/authentication';
import HistoryPage from '@components/pages/History';

export async function getServerSideProps(context: NextPageContext) {
  const { locale = 'en', query } = context;
  const options: {
    props?: Record<string, unknown>;
    redirect?: Record<string, unknown>;
  } = {};
  const { session, queryClient } = await initServerInfo(context);

  if (!session?.user?.accessToken) {
    return {
      redirect: {
        destination: '/User/login',
        permanent: false,
      },
    };
  }

  try {
    await fetchFilterPartybooking(queryClient, {
      partybookings: { user_id: authenticatedData?.id },
      pagination_page: Number(1),
    });
  } catch (error: unknown) {
    return errorHandler(error);
  }
  return {
    ...options,
    props: {
      query: query || null,
      session,
      dehydratedState: dehydrate(queryClient),
      seo: {
        title: 'Party_Booking_App',
        description: '',
      },
      ...(await serverSideTranslations(locale)),
      ...(options.props || {}),
    },
  };
}

export default HistoryPage;
