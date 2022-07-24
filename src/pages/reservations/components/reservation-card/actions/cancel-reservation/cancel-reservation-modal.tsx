import { useContext } from 'react';
import { Button, ModalBody, ModalFooter, Text } from '@chakra-ui/react';

import { CancelReservationContext } from '..';
import { queryClient } from 'services/query-client';
import { useReservationCardCtx } from 'pages/reservations/hooks';
import { useCancelReservation } from 'pages/reservations/hooks';

export function CancelReservationModal() {
  const { id } = useReservationCardCtx();
  const { onToggle } = useContext(CancelReservationContext);

  useCancelReservation();

  function handleClick() {
    queryClient.fetchQuery(`cancel-reservation-${id}`);
  }

  return (
    <>
      <ModalBody>
        <Text fontSize='lg' fontWeight='500'>
          Are you sure you want to cancel the reservation?
        </Text>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme='gray' size='md' onClick={onToggle}>
          No, I don&apos;t
        </Button>

        <Button colorScheme='red' size='md' ml={3} onClick={handleClick}>
          Yes, I do
        </Button>
      </ModalFooter>
    </>
  );
}