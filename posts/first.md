---
title: FAQ
description: "Frequently Asked Questions Frequently Frequently Asked Questions Frequently Frequently Asked Questions Frequently Questions Asked Questions Frequently Asked Questions Asked Questions Frequently Asked Questions"
date: '2020-06-30'
featured: false
topics: Golang,React,GraphQL,Next JS
---

# What keyboard do you use?

[Das keyboard with brown switches](https://www.daskeyboard.com/daskeyboard-4-professional/)

# How do you code so fast?

- Vim: https://www.youtube.com/watch?v=IiwGbcd8S7I
- VSCode shortcuts: https://www.youtube.com/watch?v=t9kSTiqhUfg

## How do you get autocompletion in your terminal?

[Fish shell](https://fishshell.com/)

## What theme do you use?

- VSCode: default dark theme with [bracket-pair-colorizer-2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)

- iTerm2: [gruvbox](https://github.com/morhetz/gruvbox-contrib)

If you want to see all my VSCode settings/extensions: https://gist.github.com/benawad/1e9dd01994f78489306fbfd6f7b01cd3

```typescript
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
```
- Vim: https://www.youtube.com/watch?v=IiwGbcd8S7I
- VSCode shortcuts: https://www.youtube.com/watch?v=t9kSTiqhUfg

## How do you get autocompletion in your terminal?

[Fish shell](https://fishshell.com/)

## What theme do you use?

- VSCode: default dark theme with [bracket-pair-colorizer-2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)

- iTerm2: [gruvbox](https://github.com/morhetz/gruvbox-contrib)

If you want to see all my VSCode settings/extensions: https://gist.github.com/benawad/1e9dd01994f78489306fbfd6f7b01cd3

```typescript
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
```