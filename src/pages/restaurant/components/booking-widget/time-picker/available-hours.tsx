import { Button, Flex } from '@chakra-ui/react';

import { Hour } from 'types';

interface AvailableHoursProps {
  availableHours: Hour[];
  handleClickSelectedTime: (i: number) => void;
  handleIsTimeSelected: (i: number) => boolean;
}

export function AvailableHours(props: AvailableHoursProps) {
  const { availableHours, handleClickSelectedTime, handleIsTimeSelected } =
    props;

  return (
    <Flex gridGap='3' flexFlow='wrap' width={334}>
      {availableHours?.map((availableHour, i) => (
        <Button
          key={i}
          width={100}
          rounded='lg'
          bg={handleIsTimeSelected(i) ? 'red.300' : 'gray.100'}
          color={handleIsTimeSelected(i) ? 'white' : 'inherit'}
          _hover={{ bg: handleIsTimeSelected(i) ? 'red.300' : 'gray.300' }}
          onClick={() => handleClickSelectedTime(i)}
        >
          {availableHour.hour}
        </Button>
      ))}
    </Flex>
  );
}