import React, { FC, ReactElement } from 'react'
import { getPost, getSortedPostsData } from '../../src/lib/posts'
import { PostData } from '../../src/types/posts'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import marked from 'marked'
import Head from 'next/head'
import Link from 'next/link'

type Props = { postData: PostData; nextPath: NextPostInfo }

const Slug: FC<Props> = ({ postData, nextPath }): ReactElement => {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta title="description" content={postData.description} />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: marked(postData.content) }} />
      <Link href={`/blog/${nextPath.path}`}>
        <a>{nextPath.title}</a>
      </Link>
    </>
  )
}

type StaticPaths = { paths: { params: { slug: string } }[]; fallback: boolean }
type NextPostInfo = { path: string; title: string }

export const getStaticProps = async ({
  params: { slug },
}: GetStaticPropsContext<{ slug: string }>): Promise<
  GetStaticPropsResult<{
    postData: PostData
    nextPath: NextPostInfo
  }>
> => {
  const postData = getPost(slug, true)

  const paths = getSortedPostsData().map(({ id, title }) => {
    return { path: id, title }
  })

  const nextPath = paths.reduce(
    (prev, curr, i) => (curr.path === slug && i >= 1 ? paths[i - 1] : curr),
    paths[paths.length - 1],
  )

  return {
    props: {
      postData,
      nextPath,
    },
  }
}

export const getStaticPaths = async (): Promise<StaticPaths> => {
  const paths = getSortedPostsData().map(({ id }) => ({
    params: {
      slug: id,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default Slug
