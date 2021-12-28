import { useRef } from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';

import { AlertDialogFooter } from './AlertDialogFooter';
import { AlertDialogBody } from './AlertDialogBody';
import { AlertDialogHeader } from './AlertDialogHeader';

interface CancelReservationAlertProps {
  isOpen: boolean;
  onToggle(): void;
  onClick(): void;
}

export function CancelReservationAlert(props: CancelReservationAlertProps) {
  const { isOpen, onToggle, onClick } = props;

  const cancelRef = useRef(null);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onToggle}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader />

          <AlertDialogBody />

          <AlertDialogFooter
            onClick={onClick}
            onToggle={onToggle}
            cancelRef={cancelRef}
          />
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
