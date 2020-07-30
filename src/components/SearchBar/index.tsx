import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Root, Button, Input } from './styles'
import { FaSearch as SearchIcon } from 'react-icons/fa'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'round' | 'regular'
}

const SearchBar: React.FC<Props> = ({ variant = 'round', ...rest }) => {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (search) {
      router.push({ pathname: '/search', query: { q: search } })
      setSearch('')
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const borderRadius = variant === 'regular' ? 1.5 : 5
  const width = variant === 'regular' ? 9 : undefined

  return (
    <Root borderRadius={borderRadius} padding={2} onSubmit={handleSubmit}>
      <Input
        {...rest}
        placeholder="Search..."
        value={search}
        onChange={handleChange}
      />
      <Button borderRadius={borderRadius} width={width}>
        <SearchIcon />
      </Button>
    </Root>
  )
}

export default SearchBar
