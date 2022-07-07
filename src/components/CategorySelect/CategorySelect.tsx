import React, { ReactElement, SelectHTMLAttributes, memo } from 'react'
import { SelectContainer, Select, SelectLabel, Option } from './CategorySelect.styles'

export interface CategorySelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  labelText?: string
  categories: string[] | null
}

const CategorySelect = React.forwardRef<HTMLSelectElement, CategorySelectProps>(
  ({ categories, labelText, ...props }: CategorySelectProps, ref): ReactElement => (
    <SelectContainer>
      {labelText && <SelectLabel>{labelText}:</SelectLabel>}
      {categories && (
        <Select ref={ref} {...props} defaultValue="">
          <Option value="">All</Option>
          {categories.map((category) => (
            <Option key={category} value={category}>
              {category}
            </Option>
          ))}
        </Select>
      )}
    </SelectContainer>
  )
)

export default memo(CategorySelect)
