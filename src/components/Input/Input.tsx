import React, { InputHTMLAttributes, ReactElement } from 'react'
import { StyledInput } from './Input.styles'

const Input = React.forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ children, ...props }: InputHTMLAttributes<HTMLInputElement>, ref): ReactElement => (
    <StyledInput ref={ref} {...props} />
  )
)

export default Input
