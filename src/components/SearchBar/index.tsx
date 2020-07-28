import React, { useState } from 'react'
import { Root, Button, Input } from './styles'
import { FaSearch as SearchIcon } from 'react-icons/fa'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'round' | 'regular'
}

const SearchBar: React.FC<Props> = ({ variant = 'regular', ...rest }) => {
  const [search, setSearch] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(search)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <Root borderRadius={5} padding={2} onSubmit={handleSubmit}>
      <Input
        {...rest}
        placeholder="Search..."
        value={search}
        onChange={handleChange}
      />
      <Button>
        <SearchIcon />
      </Button>
    </Root>
  )
}

export default SearchBar
