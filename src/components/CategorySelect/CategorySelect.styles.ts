import styled from 'styled-components'
import { BreakpointsEnum } from '../../enums/viewport.enums'

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${BreakpointsEnum.Small}) {
    display: block;
  }
`

export const SelectLabel = styled.label`
  margin-right: 15px;

  @media (max-width: ${BreakpointsEnum.Small}) {
    display: block;
    margin-right: 0;
    margin-bottom: 8px;
  }
`

export const Select = styled.select`
  -webkit-appearance: none;
  color: #000;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: center right 10px;
  background-size: 16px;
  border-color: #999;
  padding: 10px 32px 10px 10px;
  width: 100%;
  max-width: 225px;
  transition: 250ms border-color linear, 250ms background-color linear;

  &:hover,
  &:focus {
    outline: none;
    border-color: #333;
  }

  &:disabled {
    background-color: #f6f6f6;
    border-color: #bababa;
  }

  @media (max-width: ${BreakpointsEnum.Small}) {
    max-width: 100%;
    margin-bottom: 15px;
  }
`

export const Option = styled.option`
  padding: 5px;
`
