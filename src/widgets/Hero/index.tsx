import React from 'react'
import SearchBar from '@components/SearchBar'
import { Root, Illustration, HeadlineContainer } from './styles'

interface Props {
  margin?: number
}

const Hero: React.FC<Props> = ({ margin = 0 }) => {
  return (
    <Root margin={margin}>
      <HeadlineContainer>
        <h1>Stalk people on github!</h1>
        <SearchBar variant="regular" autoFocus />
      </HeadlineContainer>
      <Illustration src="/assets/octocat.png" alt="octocat" />
    </Root>
  )
}

export default Hero
