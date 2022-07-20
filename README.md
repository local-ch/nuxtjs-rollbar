# nuxtjs-rollbar

Rollbar module for NuxtJs

## Setup

1. Add `@localsearch/nuxtjs-rollbar` dependency to your project

```bash
npm install @localsearch/nuxtjs-rollbar
```

2. Add `@localsearch/nuxtjs-rollbar` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@localsearch/nuxtjs-rollbar',

    // With options
    ['@localsearch/nuxtjs-rollbar', { /* module options */ }]
  ]
}
```

### Available Options

| Option      | Default                    | Description                             |
|-------------|----------------------------|-----------------------------------------|
| accessToken | ROLLBAR_ACCESS_TOKEN (ENV) | Rollbar access token (post_server_item) |


## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`
