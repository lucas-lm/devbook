/* eslint-disable camelcase */
import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import * as Yup from 'yup'
import Text from '@components/Text'
import Card from '@components/Card'
import Pagination from '@components/Pagination'
import Root, { UsersContainer } from '@layouts/Results'
import api from '@services/api'

interface User {
  login: string
  avatar_url: string
}

interface Props {
  search: string
  page: number
  totalCount: number
  users: User[]
}

interface DataFetch {
  data: {
    total_count: number
    items: User[]
  }
}

const currentPageSchema = Yup.number().min(1)

const perPage = 40
const GH_API_LIMIT = 1000

const Search: NextPage<Props> = ({ totalCount, users, search, page }) => {
  const getLinks = (i: number) => `/search?q=${search}&page=${i}`

  const limit = Math.ceil(Math.min(totalCount, GH_API_LIMIT) / perPage)

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
        <Pagination limit={limit} page={page} linkMap={getLinks} />
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
        <Pagination limit={limit} page={page} linkMap={getLinks} />
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

  let { page = 1 } = query
  currentPageSchema.validate(page).catch(() => {
    page = 1
  })

  const { data }: DataFetch = await api.get('/search/users', {
    params: {
      q: `${search}`,
      per_page: perPage,
      page
    }
  })
  const { total_count: totalCount, items } = data
  let users = items
  if (search.match(/michel|telo|teló/gi)) {
    const { data: telo } = await api.get('/users/filipedeschamps')
    users = [telo, ...items]
  }
  return { props: { search, page, totalCount, users } }
}

export default Search
