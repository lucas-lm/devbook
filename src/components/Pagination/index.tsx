import React from 'react'
import Link from 'next/link'
import { Root, Count } from './styles'

interface Props {
  limit: number
  count?: number
  page?: number
  linkMap: (index: number) => string
}

const Pagination: React.FC<Props> = ({
  limit,
  count = 5,
  page = 1,
  linkMap = (i) => '/',
}) => {
  page = Number(page)
  const pageCount = Array.from({ length: count }, (v, i) => {
    const halfCount = Math.floor(count / 2)
    const inStart = page - halfCount < 1
    const inEnd = page + halfCount >= limit
    if (inStart) {
      return i + 1
    }
    if (inEnd) {
      return i + 1 + limit - count
    }
    return i + page - halfCount
  })
  return (
    <Root>
      {!pageCount.includes(1) && (
        <Link href={linkMap(1)} passHref>
          <Count>First</Count>
        </Link>
      )}
      {pageCount
        .filter((i) => i <= limit && i > 0)
        .map((i) => (
          <Link href={linkMap(i)} passHref>
            <Count current={i === page}>{i}</Count>
          </Link>
        ))}
      {!pageCount.includes(limit) && (
        <Link href={linkMap(limit)} passHref>
          <Count>Last</Count>
        </Link>
      )}
    </Root>
  )
}

export default Pagination
