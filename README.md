# Containerization

This project has docker enabled - it contains all docker scripts (`Dockerfile` and `docker-compose`) to run this application as docker container.

# Static assets

In order to serve static assets, files have to be put in `public` directory of the project. During build process, they will be picked up and served as usual.

One caveat is that we have locale (language) parameter in URL and custom middleware to handle that, which breaks routing for static files. So the name of the file needs to be included in URL pattern for the middleware to match (so custom middleware excludes route for the static file - see `middleware.ts` file).

# Search Engine Optimization

In order for the page to be indexed by Google, there are common steps (add `robots.txt` file, correctly create `manifest.json` file, icons - correct sizes, maskable icon, etc.). Also, we need to request indexing from google by going to Search Console. One way of doing that is to search `site:[URL of the page]` in google to see, if it has been indexed yet (and if not, there's link to help doing that).

# Standard README for Next.js project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Command used to bootstrap the project: `npx create-next-app@latest`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Internationalization

To add i18n to this page, it has been long way of trials and errors. Firstly, I have used [this template](https://github.com/lauriahlfors/nextjs14-i18n.git), but this was "home grown" solution missing many features from widely known Next.js libraries.

So, as another last resort, I started over and followed this article (among others, but this one finally got me there): [i18n with Next.js 13/14 and app directory / App Router](https://locize.com/blog/next-app-dir-i18n/).
