import styled from 'styled-components'
import { BreakpointsEnum } from '../../enums/viewport.enums'

export const StyledButton = styled.button`
  color: #fff;
  padding: 10px 15px;
  font-size: 14px;
  line-height: 20px;
  border-radius: 0;
  border: 0;
  background: #2f99db;
  min-width: 115px;

  &:hover,
  &:focus {
  }

  &:disabled {
    opacity: 0.5;
  }

  @media (max-width: ${BreakpointsEnum.Small}) {
    display: block;
    width: 100%;
  }
`
