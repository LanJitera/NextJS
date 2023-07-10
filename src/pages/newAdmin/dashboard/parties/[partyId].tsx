import type { NextPageContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { dehydrate } from 'react-query';
import { initServerInfo, errorHandler } from '@utils/serverSide';
import { fetchShowParty } from '@services/party';
import DashboardPartiesDetailPage from '@components/pages/DashboardPartiesDetail';

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
        destination: 'newAdmin/loginAdmin',
        permanent: false,
      },
    };
  }

  try {
    await fetchShowParty(queryClient, { id: query?.IdParty });
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

export default DashboardPartiesDetailPage;
