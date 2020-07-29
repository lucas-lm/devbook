import { NextPage, GetServerSideProps } from 'next'
import Text from '@components/Text'
import Root, { UsersContainer } from '@layouts/Results'
import api from '@services/api'

interface User {
  login: string
  avatar_url: string
}

interface Props {
  search: string
  totalCount: number
  users: User[]
}

interface DataFetch {
  data: {
    total_count: number
    items: User[]
  }
}

const Search: NextPage<Props> = ({ totalCount, users, search }) => {
  return (
    <Root>
      <Text size={3} weight={200} as="h1">
        Found {totalCount} result{totalCount > 1 ? 's' : null} for {search}
      </Text>
      <UsersContainer>
        {users.map((user) => (
          <>
            <img width={'100px'} src={user.avatar_url} />
            <div style={{ margin: 16 }}>@{user.login}</div>
          </>
        ))}
      </UsersContainer>
    </Root>
  )
}

const parseQuerySearch = (queryParam: string | string[] | undefined) => {
  if (!queryParam) return 'octocat'
  return Array.isArray(queryParam) ? queryParam.join(' ') : queryParam
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const search = parseQuerySearch(query.q)
  const { data }: DataFetch = await api.get(`/search/users`, {
    params: {
      q: search,
    },
  })
  const { total_count: totalCount, items } = data
  return { props: { search, totalCount, users: items } }
}

export default Search
