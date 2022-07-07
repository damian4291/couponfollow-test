import styled from 'styled-components'

export const ListItem = styled.li`
  padding: 15px 0;
  border-bottom: 1px solid #000;

  &:last-child {
    border-bottom: 0;
  }
`

export const ItemHeading = styled.h3`
  margin-top: 0;
  margin-bottom: 10px;
`

export const ItemDescription = styled.div`
  color: #555;
`

export const ItemLink = styled.a`
  color: #000;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`
