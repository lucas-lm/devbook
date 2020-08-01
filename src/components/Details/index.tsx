import React from 'react'
import { Root, Summary } from './styles'

interface Props {
  title?: string
  open?: boolean
  margin?: number | number[]
}

const Details: React.FC<Props> = ({
  title = 'Details',
  open = true,
  children,
  margin = 0
}) => {
  return (
    <Root open={open} margin={margin}>
      <Summary>{title}</Summary>
      {children}
    </Root>
  )
}

export default Details
