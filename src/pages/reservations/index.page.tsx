import { GetServerSideProps } from 'next';
import { TabPanels, Tabs } from '@chakra-ui/react';
import { parseCookies } from 'nookies';

import { ReservationsTabPanel, TabList } from './components/tabs';
import { Footer } from 'core/footer';

import { Reservation } from 'types';
import { getReservationsSSR } from 'services/queries/get-reservations';

interface ReservationsProps {
  SSRFollowingReservations: Reservation[];
  SSRPastReservations: Reservation[];
}

export default function Reservations({
  SSRFollowingReservations,
  SSRPastReservations,
}: ReservationsProps) {
  return (
    <>
      <Tabs isFitted isLazy lazyBehavior='keepMounted' minH='100vh'>
        <TabList />

        <TabPanels>
          <ReservationsTabPanel
            SSRReservations={SSRFollowingReservations}
            type='following'
          />

          <ReservationsTabPanel
            SSRReservations={SSRPastReservations}
            type='past'
          />
        </TabPanels>
      </Tabs>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);

  if (!cookies['mesavip.token']) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    };
  }

  const SSRFollowingReservations = await getReservationsSSR({
    type: 'following',
    ctx,
  });

  const SSRPastReservations = await getReservationsSSR({
    type: 'past',
    ctx,
  });

  return {
    props: {
      SSRFollowingReservations,
      SSRPastReservations,
    },
  };
};
