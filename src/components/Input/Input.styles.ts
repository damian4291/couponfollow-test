import styled from 'styled-components'

export const StyledInput = styled.input`
  width: 100%;
  display: block;
  font-size: 16px;
  line-height: 16px;
  padding: 10px;
  border-radius: 0;
  background-color: #fff;
  border: 1px solid #999;
  margin-bottom: 15px;
  transition: 250ms border-color linear, 250ms background-color linear;

  &:hover,
  &:focus {
    outline: none;
    border-color: #333;
  }

  &:focus {
    background-color: #f6f6f6;
  }

  &:disabled {
    background-color: #f6f6f6;
    border-color: #bababa;
  }
`
