import Hero from '@widgets/Hero'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>devbook - home</title>
      </Head>
      <Hero margin={2} />
    </>
  )
}
