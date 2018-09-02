# coding-challenge

## Idea of the app
  The task is to implement an app that lists news, and a single page with swiping feature.
  
  ![alt](https://i.imgur.com/JWCBF6Q.png)

## Features
  Show navbar list based on the json feed here: http://femme.nextmedia.ma/api/menus/get_menu/?menu_id=7
  Show recent posts based on the json feed here: http://femme.nextmedia.ma/api/get_recent_posts
  Load more recent posts button (next page ex: http://femme.nextmedia.ma/api/get_recent_posts/?page=2)
  Show single page based on the json feed here: http://femme.nextmedia.ma/api/get_post/?id=178
  Swipe between articles (you may just swipe into 10 of the recent posts

## Technologies used
  * `Vue`: A framework for developing awesome web apps.
  * `Nuxt.js`: For server-side rendering benefits.
  * `Vue-awesome-swiper`: For swipe between articles.
  * `Sass`: Preprocessor scripting language that is interpreted or compiled into `css`

## How to install

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```
