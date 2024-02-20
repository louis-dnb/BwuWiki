# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation
This project requires that you  have [NPM 18+](https://nodejs.org/en/blog/release/v18.12.0) installed.

Once NPM is installed, make sure to install yarn, the package manager for this project.
```
$ npm install --global yarn
```
Then, to install this projects dependencies:
```
$ yarn
```

### Local Development
```
$ yarn start
```

This command starts a local development server and opens up a browser window. When you save changes in the files (like the markdown files for the wiki, they should reflect automatically in your local browser)

### Build

```
$ yarn build
```
This command generates static content into the `build` directory and can be served using any static contents hosting service. You dont really need this to contribute, its relevant to hosting the wiki.

### Contributing

In order to contribute to our wiki, please either fork our repo or create a branc, and make a pull request to the master branch of this repo. Once we review and approve it, the changes will go live to the site in minutes.