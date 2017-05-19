# React App Starter

A React starter repo, featuring:

- React
- Redux
- React Router 4
- Webpack 2 with route chunking, vendor chunking
- Offline support and caching with sw-precache
- SASS compilation to static file, loading in head of HTML
- Sentry.io reporting with Raven
- Google Analytics
- Async actions using fetch and redux-thunk

## To Install

```
npm install
```

## To Run Dev Mode

```
npm start
```

## To Build and Run Production 

```
npm run prod
```



# Config

## Titles and Metadata
Be sure to update the following locations

- Metadata and titles in `webpack/template.html`
- swPrecache names and details in `webpack/webpackConfigProd.js`
- Titles and repos in `package.json`
- Details in `static/manifest.json`


## Raven

Raven is useful for capturing client-side errors.

*To configure:* Set the Raven-URI in app/index.js

*To remove:* Remove the Raven-URI line in `app/index.js` and remove the script import in `webpack/template.html`

## Google Analytics

*To configure:* Set the id on BrowserRouter in `app/index.js` with your GA id

*To remove:* Uninstall react-g-analytics from npm packages. Use `{ BrowserRouter } from 'react-router-dom'`, rather than `from 'react-g-analytics'`. Remove the id parameter from BrowserRouter component in `app/index.js`
