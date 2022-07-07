import React, { ButtonHTMLAttributes, ReactElement, memo } from 'react'
import { StyledButton } from './Button.styles'

const Button = React.forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>, ref): ReactElement => (
    <StyledButton ref={ref} {...props}>
      {children}
    </StyledButton>
  )
)

export default memo(Button)
