import React from 'react';
import {
  Container,
  ButtonContainer,
  SchedulerButton,
} from './scheduleVisit.css';

export function ScheduleVisit({ children, ...props }) {
  return (
    <Container>
      <ButtonContainer>
        <SchedulerButton {...props}>{children}</SchedulerButton>
      </ButtonContainer>
    </Container>
  );
}
