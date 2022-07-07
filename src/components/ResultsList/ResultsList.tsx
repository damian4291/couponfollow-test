import { memo, ReactElement, useMemo } from 'react'
import { IApiResponseEntry } from '../../interfaces/api.interfaces'
import { ResultsItem } from '../ResultsItem'
import { StyledList } from './ResultsList.styles'

interface ResultsListProps {
  results: IApiResponseEntry[]
  maxEntriesPerPage?: number
}

const ResultsList = ({ results, maxEntriesPerPage }: ResultsListProps): ReactElement => {
  const filteredEntries = useMemo(
    () => results.filter(({ Description }) => Description.length < 100),
    [results]
  )

  const limitEntriesVisibility = (entries: IApiResponseEntry[]): IApiResponseEntry[] => {
    if (!maxEntriesPerPage) return entries
    return [...entries].splice(0, maxEntriesPerPage)
  }

  return (
    <StyledList>
      {limitEntriesVisibility(filteredEntries).map((entry) => (
        <ResultsItem key={entry.Link} {...entry} />
      ))}
    </StyledList>
  )
}

export default memo(ResultsList)
