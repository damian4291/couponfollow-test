import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import styled from 'styled-components'
import useRequest from './hooks/useRequest'
import { fetchCategories, fetchEntries } from './services/api.service'
import CategorySelect from './components/CategorySelect'
import Button from './components/Button'
import { BreakpointsEnum } from './enums/viewport.enums'
import Input from './components/Input'
import Results from './components/Results'
import formEntriesToObject from './utils/formEntriesToObject'
import { TRANSLATIONS } from './constants/translations.constants'

const Container = styled.div`
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
`

const FormActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 15px;

  @media (max-width: ${BreakpointsEnum.Small}) {
    display: block;
  }
`

const ErrorMessage = styled.div`
  color: red;
  margin-top: -10px;
  margin-bottom: 15px;
`

function App() {
  const [isValid, setIsValid] = useState<boolean>(true)
  const [categories, setCategories] = useState<string[] | null>(null)

  const [getEntries, response, isLoading, error] = useRequest(fetchEntries)

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setIsValid(true)

    const { title, category } = formEntriesToObject(event.target as HTMLFormElement)
    const isTextInputEmpty = !title.trim().length

    if (isTextInputEmpty) {
      setIsValid(false)
    } else {
      getEntries({
        body: {
          cors: 'yes',
          title,
          category,
        },
      })
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isValid && event.target.value.trim().length) {
      setIsValid(true)
    }
  }

  const getCategories = async () => {
    const { categories: cats } = await fetchCategories()
    setCategories(cats)
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <Container>
      <h1>{TRANSLATIONS.PAGE_HEADING}</h1>
      <form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          name="title"
          placeholder={TRANSLATIONS.INPUT_PLACEHOLDER}
          onChange={handleInputChange}
        />
        {!isValid && <ErrorMessage>{TRANSLATIONS.EMPTY_INPUT_MESSAGE}</ErrorMessage>}
        <FormActions>
          <CategorySelect
            name="category"
            labelText="Category"
            categories={categories}
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading || !isValid}>
            {TRANSLATIONS[isLoading ? 'LOADING' : 'SEARCH']}
          </Button>
        </FormActions>
      </form>
      <Results results={response} isLoading={isLoading} error={error} maxEntriesPerPage={5} />
    </Container>
  )
}

export default App
