# Clone this to kickstart a new Concierge client website

1. Create new client repo on GitLab

Naming : `client__<name_of_client>`
don't initialize a README.md

2. Clone the `client-boilerplate` repo locally

```
$ git clone git@gitlab.com:thepuzzlers-org/client-boilerplate.git client__<name_of_client>
$ cd client__<name_of_client>
```

3. Rewire it to new gitlab repo:

```
$ git remote rm origin
$ git remote add origin git@gitlab.com:thepuzzlers-org/client__<name_of_client>.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

## ToDos after initial setup

- Change Site Details in `gatsby-config.js`. Set title, description, etc.
- Set default locale in `gatsby-config.js` (important for Seo)
- Set secondary locales and their according prefixes in `gatsby-config.js` (important for Seo)
- Replace favicons in `images/seo/` with correct icons.
- Remove all legal pages and legal jsons that are not needed:

  English:

  - `pages/privacy-policy.js`
  - `pages/legaljs`
  - `data/legalPage.json`
  - `data/privacyPolicy.json`

  German:

  - `pages/datenschutz.js`
  - `pages/impressum.js`
  - `data/datenschutzPage.json`
  - `data/impressumPage.json`

  If a language is not needed, remove all related files. If both are needed, move pages in according subfolder.
  e.g. if german is the secondary locale, put pages in `pages/de/datenschutz.js` and `pages/de/impressum.js`
  (Json files don't need to be moved.)

## How to start the project

Run Gatsby:
`gatsby develop`
