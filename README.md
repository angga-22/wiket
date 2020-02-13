# Clone this to kickstart a new Concierge client website

1. Create new client repo on GitLab

Naming : `client__<name_of_client>`
don't initialize a README.md

2. Clone the `client-base` repo locally

```
$ git clone git@gitlab.com:theconcierge-org/client-base.git client__<name_of_client>
$ cd client__<name_of_client>
```

3. Rewire it to new gitlab repo:

```
$ git remote rm origin
$ git remote add origin git@gitlab.com:theconcierge-org/client__<name_of_client>.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

## ToDos after initial setup

- Change Site Details in `gatsby-config.js`. Set title, description, etc.

## How to start the project

Run Gatsby:
`gatsby develop`
