# New Document# Strapi Nuxt Js Blog
This blog is built in 16/1/2021

Creating a blog with Strapi Headless Cms for BackEnd and Nuxt js for Frontend

- Strapi
- Nuxt js
- Created from this template


## Features

- 2 Content types: Article, Category
- 2 Created articles
- 3 Created categories
- Permissions set to `true` for article and category
- Responsive design using UIkit

Pages:

- "/" display every articles
- "/article/:id" display one article
- "/category/:id" display articles depending on the category

## Getting started

This repo contain two subfolder
- backend for strapi cms
- frontend for nuxt js
Each folder will be deployed seperate.
Backend will be deployed to heroku
Frontend will be deployed to netlify

### Backend

Create a Strapi project named `backend` using the [blog template](https://github.com/strapi/strapi-template-blog):

```
# Using Yarn
yarn create strapi-app backend --template https://github.com/strapi/strapi-template-blog

# Or using NPM
npx create-strapi-app backend --template https://github.com/strapi/strapi-template-blog
```

The Strapi server will automatically start and import sample seed data.

### Frontend

Leave the Strapi backend running in the background. Open another terminal tab, and make sure you're in the `frontend` directory:

```bash
cd frontend
```

Install dependencies and start the Nuxt server:

```bash
# Using yarn
yarn install
yarn develop

# Using npm
npm install
npm run develop
```


If you want to change the default environment variables, create a `.env` file like this:

```sh
cp .env.example .env
```

The Nuxt server will run here => [http://localhost:3000](http://localhost:3000)

## Deploy
After few day testing and research i have some issue to deal with:
1. I want to manage and deploy from subfolder not from root, so heroku and netlify must be target to each subfolder they need (backend || frontend).
2. I want to auto deploy whenever this repo have change
3. I want to deploy from develop branch only.
4. Because i want to manage backend && frontend in one repo only, so i choose not to auto deploy.

### Backend
Follow instruction belo
https://strapi.io/documentation/developer-docs/latest/deployment/heroku.html#heroku-postgres

So, there are few thing we need to notice here
- We not use sqlite3 on heroku because it's not support, so, basically, choose other. In this case, i choose postgree. Follow intruction above or u can config direct from heroku website to choose postgree add on
- We create env folder for production that have in the intruction above.
- Ignored yarn.lock
- Disabled gzip, because bad performance, slow.
- We need to deploy from subDirectory (backend) so we need config:
To deal with this i follow: https://stackoverflow.com/a/53221996

Notice: Sometime the build is stuck for long time, to cancel or stop building stuck, i follow:
Stop building stuck https://stackoverflow.com/a/54312389

### Frontend
Deploy nuxt js to netlify is easy.
But we need to choose what mode we want to use
Well, netlfy host static web. So almost searching return the command `nuxt generate`. Yeah, it work well, it generate all the page you have to html. So basicaly, just connect github to netlify, choose repo then fill the command generate then done.
But, is this oke, well, there are some case we need to cover here.
First, if i have hundreds page, it could be, with 100 articles, i will have 100 pages. Yeah, the long i use the more pages i have. The more page i have the more generate i need to be done, then it will slow when i scale bigger enough.
Second, i relize, when i update content in strapi cms from heroku, my frontend, didn't update. Right!, because it already generate to html in netlify. If i'm not deploy agian, the current page will not updated.
For ex, in home, i have 5 article, i add one more from cms, but, it's not trigger re deploy in frontend, so, in frontend, it still show 5, not 6. It only rerender when i router to home from another router.

Well it's not what i want.
Right now, i find a solutions for that, this is webhook
I follow the instruction here: https://www.netlify.com/blog/2020/08/11/deploy-a-strapi-and-react-blog-on-netlify/
But again, everytime i publish a new post, my frontend will be redeploy to get new content. Once i have enough page, this solution will not the good choice anymore, because i need to generate many page.
So i thing spa is a good choice.
But when i run `yarn build`. There is no `dist` folder, how can i deploy without dist folder.
Well, after few day, i see the command `nuxt build --spa`. It's what i need, i have one folder dist, one html file, and it's a spa, it load data when mount, my content always updated.
So fill netlify command deploy with this `yarn build --spa` for `yarn` or `npm build --spa` for `npm`. All done!

Notice: we need to config nuxt js to spa mode, and deal with reload page, or user go from url, not router in spa. (it could be https:.../article/abc-xyz). It will return to 404 because of netlify. 

```srr: false```
```
generate: {
  fallback: true,
}
```

Enjoy this starter!
