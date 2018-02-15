<h1 align="center">
  <br>
  <a href="https://tipe.io"><img src="https://cdn.tipe.io/tipe/tgn.png?w=800" alt="Tipe + GraphQL + Vue"></a>
  <br>
  Tipe + GraphQL + Vue
  <br>
</h1>


> :tada: Starter repo for [Vue]() and [Nuxt](), together with [GraphQL]() and [Tipe](https://tipe.io) :100:

## What is Tipe
[Tipe](https://tipe.io), pronounced *type*, is a content backend for all your apps. If you have any non-user generated content in your apps, you should use Tipe to manange it. You and content creators can use our web app to create and publish content, then consume that same content with our **REST** and **GraphQL** API's. 

## What is this repo
This repo is a solid starting point for anyone looking to build a universal, SPA, or static site with Vue and Tipe. The repo consists of a simple blog application that consumes content from Tipe via GraphQL.

## Tech in this repo
* [Nuxt]() and [Vue] ()
* [GraphQL]() and [Apollo]()
* [Bulma]()


## Things you'll need
* Node *(version is whatever Nuxt needs)*
* An account on [Tipe](https://tipe.io)
	* **Tipe is free right now!**

## Getting started
* Clone this repo
* Install dependences
	* `yarn` or `npm i`
* Create a `.env` file on the **root** of this repo. Copy over the contents from `.sample.env`.
* Replace the env values with your API Key and Org ID from the Tipe dashboard.
* Run `yarn dev` or `npm dev`'
	* this will start Nuxt dev Universal mode

## Things to notice
Apollo will fetch the content from your **tutorial** folder on your Tipe account. Becuase Nuxt is running un universal mode, the content is rendered with the App and then cached and transfered the client side.

Most of the content you see on the app is from Tipe. Take a look at the `/apollo/query/` folder. Notice the quries and how they relate to your content on the Tipe dashboard in the `tutorial` folder. There's no reason why all the content on this starter app couldn't be stored in Tipe. It's non-user generated, and as a developer, you shouldn't have to be tasked to delpoy a typo fix.

## Contributing
* Fork and cut a PR, we'll check it out :sunglasses:
