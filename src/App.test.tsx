import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import App from './App'
import { TRANSLATIONS } from './constants/translations.constants'

describe('App', () => {
  it('should display an error message when a form with empty input text is submitted', () => {
    render(<App />)

    fireEvent.click(screen.getByText(TRANSLATIONS.SEARCH))
    expect(screen.getByText(TRANSLATIONS.SEARCH)).toBeDisabled()
    expect(screen.getByText(TRANSLATIONS.EMPTY_INPUT_MESSAGE)).toBeInTheDocument()
  })

  it('should hide the error message when the text input is no longer empty', () => {
    render(<App />)

    fireEvent.click(screen.getByText(TRANSLATIONS.SEARCH))
    expect(screen.getByText(TRANSLATIONS.SEARCH)).toHaveAttribute('disabled')
    expect(screen.getByText(TRANSLATIONS.EMPTY_INPUT_MESSAGE)).toBeInTheDocument()

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Dog' } })
    expect(screen.getByText(TRANSLATIONS.SEARCH)).not.toBeDisabled()
    expect(screen.queryByText(TRANSLATIONS.EMPTY_INPUT_MESSAGE)).not.toBeInTheDocument()
  })
})
