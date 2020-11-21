import React, { FC, ReactElement } from 'react'
import { getPost, getSortedPostsData } from '../../src/lib/posts'
import { PostData } from '../../src/types/posts'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import marked from 'marked'
import Head from 'next/head'

type Props = { postData: PostData }

const Slug: FC<Props> = ({ postData }): ReactElement => {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta title="description" content={postData.description} />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: marked(postData.content) }} />
    </>
  )
}

type StaticPaths = { paths: { params: { slug: string } }[]; fallback: boolean }

export const getStaticProps = async ({
  params: { slug },
}: GetStaticPropsContext<{ slug: string }>): Promise<
  GetStaticPropsResult<{
    postData: PostData
  }>
> => {
  const postData = getPost(slug, true)

  return {
    props: {
      postData,
    },
  }
}

export const getStaticPaths = async (): Promise<StaticPaths> => {
  const paths = getSortedPostsData().map(({ id }) => ({
    params: {
      slug: id,
    },
  }))
  console.log('paths: ', paths)

  return {
    paths,
    fallback: false,
  }
}

export default Slug
