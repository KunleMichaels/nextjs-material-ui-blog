---
title: Setting up a Blog with Next.js, React, Material-UI and Typescript
description: "In this series of posts, I am going to describe how I implemented the blog you are looking at. This blog is based 
on the technologies mentioned in the title. This article will be all about getting them to work together smoothly."
date: '2020-11-22'
featured: true
topics: Next.js,React,Material-UI,Typescript
---

## My own Next.js blog – how it all started 

So finally, there it is – my own blog to write about the technologies I love and I work with everyday. And like many developers 
out there, I didn't want to choose a prebuilt solution for my blog. Instead, I wanted to build it on my own, so it will be possible
to really understand what it is doing under the hood. Of course, I wanted to make use of technologies that I was (partially) already familiar with and 
that make sense for this project. 


As I apply [React](https://reactjs.org/) almost daily at work, I chose this framework to be the core of my blog. And as this is a blog, and therefore it is 
serving static content, I chose [Next.js](https://nextjs.org/) as a solution for generating this content once. This is much different
from the usual client-side rendering taking place with apps based on React and other single-side frameworks, and provides a significant
performance-boost. On a side note: Next.js does not only allow for [static generation](https://nextjs.org/docs/basic-features/pages#static-generation-recommended)
as we are going to see it applied here, it also makes [server-side rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering)
possible, which means that the server generates the content at every request. This may be necessary for example to always access the most current
data from a database, but is nothing that we have to deal with for our purposes.

To have a solid basis for the blog UI, I chose [Material-UI](https://material-ui.com/). As it turned out, some configuration was necessary to 
make this framework play well together with Next.js. Integrating [Typescript](https://www.typescriptlang.org/) was very simple however, as Next.js
takes care of all the necessary steps.

## Setting up the Next.js blog project

### Next.js with Typescript

Starting a new Next.js is as easy as running ``npx create-next-app``. This command sets up the basic project structure to work with.
Just as the [create react app](https://create-react-app.dev/) project that you are probably familiar with, create-next-app automatically 
adds some scripts to your package.json to build your project or to run it in development mode. For running it, execute ``yarn dev``.
To integrate Typescript into your project, just create an empty _tsconfig.json_ (``touch tsconfig.json``). Next.js will detect 
this file and initialize it. 

Now, add _@types/node_ and _@types/react_ and of course _typescript_ to your dev-dependencies. The reason for the node types is 
that we are going to write server-side code for rendering, and there we will need modules such as ``fs`` and ``path``. 

### Integrating Material-UI with Next.js

It's a bit more involved to make Next.js integrate with Material-UI. 

The reason for this is that Material-UI makes heavy use of styled components. Styled components can be applied in [server-side rendering](https://styled-components.com/docs/advanced#server-side-rendering),
but this makes it necessary for the developer to perform some additional steps. Luckily, there exists a [babel plugin](https://styled-components.com/docs/tooling#babel-plugin) that does
most of the heavy lifting for us. And luckily, the Material-UI prepared a starter project that demonstrates 

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