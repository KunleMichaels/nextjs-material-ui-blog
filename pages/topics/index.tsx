import { GetStaticPropsResult } from 'next'
import { getSortedTopics } from '../../src/lib/posts'

import React, { ReactElement } from 'react'
import TopicsDisplay from '../../src/components/TopicsDisplay'
import { Grid, Typography } from '@material-ui/core'
import styles from '../../styles/Home.module.css'
import Box from '@material-ui/core/Box'

const Topics = ({ topics }: { topics: string[] }): ReactElement => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} className={styles.headings}>
          <Box p={5}>
            <Typography variant="h3">The most popular tech topics</Typography>
          </Box>
        </Grid>
      </Grid>
      <TopicsDisplay topics={topics} n={1000} />
    </>
  )
}

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<{
    topics: string[]
  }>
> => {
  const sortedTopics = getSortedTopics()

  return {
    props: {
      topics: sortedTopics,
    },
  }
}

export default Topics
