import { memo, ReactElement } from 'react'
import { IApiResponseEntry } from '../../interfaces/api.interfaces'
import { ListItem, ItemHeading, ItemLink, ItemDescription } from './ResultsItem.styles'

const ResultItem = ({ API, Category, Description, Link }: IApiResponseEntry): ReactElement => {
  return (
    <ListItem>
      <ItemHeading>
        <ItemLink href={Link} target="_blank">
          {API}
        </ItemLink>
      </ItemHeading>
      <ItemDescription>{Description}</ItemDescription>
    </ListItem>
  )
}

export default memo(ResultItem)
