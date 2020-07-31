import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Text from '@components/Text'
import Card from '@components/Card'
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
    <>
      <Head>
        <title>{search} - devbook</title>
      </Head>
      <Root>
        <Text size={2} weight={400} as="h1" color="#afafaf">
          Found {totalCount} result{totalCount > 1 ? 's' : null} for {search}
        </Text>
        <br />
        <UsersContainer>
          {users.map((user) => {
            const { avatar_url: avatarUrl, login: username } = user
            return (
              <Link key={username} href={`/dev/${username}`} passHref>
                <a>
                  <Card avatar={avatarUrl} username={username} />
                </a>
              </Link>
            )
          })}
        </UsersContainer>
      </Root>
    </>
  )
}

const parseQuerySearch = (queryParam: string | string[] | undefined) => {
  if (!queryParam) return 'octocat'
  return Array.isArray(queryParam) ? queryParam.join('+') : queryParam
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const search = parseQuerySearch(query.q)
  const { data }: DataFetch = await api.get(`/search/users`, {
    params: {
      q: `${search}`,
      per_page: 40,
    },
  })
  const { total_count: totalCount, items } = data
  return { props: { search, totalCount, users: items } }
}

export default Search
