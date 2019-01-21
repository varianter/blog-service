# Variant Blog API

Wrapper around Medium for getting latest posts without parsing the RSS feed.

Running on now.sh: https://api.variant.blog

## Running locally

Clone repo and install dependencies:

```sh
npm install
```

Run using npm:

```sh
npm start
```

Open url http://localhost:3000 to see result.

## Deploy

It's auto deployed on push through GitHub, but you could also deploy manually:

```sh
# Run from project root
now
```

(requires `now` cli. Install through `npm i -g now`)

This will create a new instance of the server you can use. If you want to deploy
to blog.variant.blog you can alias the new instance at the same time:

```sh
# Run from project root
now && now alias
```
