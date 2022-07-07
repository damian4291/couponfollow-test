import { ReactElement, memo } from 'react'
import ResultsList from '../ResultsList'
import { iApiResponeEntries } from '../../interfaces/api.interfaces'
import { TRANSLATIONS } from '../../constants/translations.constants'
import { GenericMessage, Heading } from './Results.styles'

export interface ResultsProps {
  results: iApiResponeEntries | null
  isLoading?: boolean
  error?: Error
  maxEntriesPerPage?: number
}

const Results = ({ results, isLoading, error, maxEntriesPerPage }: ResultsProps): ReactElement => {
  if (error) {
    return <GenericMessage>{error.message}</GenericMessage>
  }

  if (isLoading) {
    return <GenericMessage>{TRANSLATIONS.LOADING}</GenericMessage>
  }

  if (!results) {
    return <GenericMessage>{TRANSLATIONS.EMPTY_FORM_MESSAGE}</GenericMessage>
  }

  if (results && !results.count) {
    return <GenericMessage>{TRANSLATIONS.NO_RESULTS_MESSAGE}</GenericMessage>
  }

  return (
    <>
      <Heading>{TRANSLATIONS.RESULTS_HEADING}</Heading>
      {results.entries && (
        <ResultsList results={results.entries} maxEntriesPerPage={maxEntriesPerPage} />
      )}
    </>
  )
}

export default memo(Results)
