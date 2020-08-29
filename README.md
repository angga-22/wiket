# Boilerplate code to start a new The Puzzlers website

- [How to clone this repo](#clone)
- [How to start the project](#start)
- [Todos after initial setup](#initial-setup)
- [Configure deployment pipeline](#deployment)

<a name="clone"></a>
## How to clone this repo
### 1. Create new client repo on GitLab
- Create repo in `thepuzzlers-org/websites`-Group (https://gitlab.com/thepuzzlers-org/websites)
- Naming : `<unique_id>__<name_of_client>`
- Don't initialize a README.md
- The unique id should be a number with 7 digits.

### 2. Clone the `client-boilerplate` repo locally

```
$ git clone git@gitlab.com:thepuzzlers-org/websites/client-boilerplate.git <unique_id>__<name_of_client>
$ cd <unique_id>__<name_of_client>
```

### 3. Rewire it to new gitlab repo:

```
$ git remote rm origin
$ git remote add origin git@gitlab.com:thepuzzlers-org/websites/<unique_id>__<name_of_client>.git
$ git add .
$ git commit -m "Initial commit"
$ git push -u origin master
```

<a name="start"></a>
## How to start the project

Install dependencies:

```
$ yarn
```

Run Gatsby:

```
$ gatsby develop
```

<a name="initial-setup"></a>
## ToDos after initial setup

#### - Update `siteMetadata` in `gatsby-config.js`. Set title, description, etc.
  This is extremely important for SEO.
  ```
  module.exports = {
    siteMetadata: {
      title: '', # long title
      description: '', # long description
      author: '@ThePuzzlers',
      shortTitle: '', # short title
      shortDescription: '', # short description
      url: 'https://www.example.com/', # url of website
    },
  ...
  }
  ```
#### - Update default locale in `gatsby-config.js` (important for SEO)
  Set any secondary languages as well.
  ```   
  module.exports = {
    siteMetadata: {
      ...
      locales: {
        default: 'en',
        locales: [
          # add any additional locales here. And define pathPrefix for that language.
          # leave empty if website has only one language
          { code: 'de', pathPrefix: 'de' }
        ],
      },
    },
  ...
  }
  ```
  Gatsby will generate a set of new pages for secondary languages under the specified pathPrefix.
  If e.g. default locale is `en` and we specified the german secondary locale like this `{ code: 'de', pathPrefix: 'de' }`, we will have the english landingpage under `https://example.com/` and the german landingpage at `https://example.com/de`.

  **For any questions regarding multi-locale websites:** Ask Caro.


#### - Replace favicons and other SEO related images in `images/seo/` with correct icons:
  - `src/images/seo/favicon16.png` (16x16px favicon)
  - `src/images/seo/favicon32.png` (32x32px favicon)
  - `src/images/seo/favicon64.png` (64x64px favicon)
  - `src/images/seo/thumbnail.png` (Thumbnail for e.g. twitter card)


#### - Remove all legal pages and legal jsons that are not needed:

  If a language is not needed, remove all related files. If both are needed, move pages in according subfolder.
  e.g. if german is the secondary locale, put pages in `pages/de/datenschutz.js` and `pages/de/impressum.js`
  (Json files don't need to be moved.)

  English:

  - `pages/privacy-policy.js`
  - `pages/legal.js`
  - `data/legalPage.json`
  - `data/privacyPolicy.json`

  German:

  - `pages/datenschutz.js`
  - `pages/impressum.js`
  - `data/datenschutzPage.json`
  - `data/impressumPage.json`

#### - Update legal information in  `businessInfo.json`
  This is very important, as it is needed by the data-privacy and legal pages.

  ```
  [
    {
      "legal": {
        "company": "Rainbow GmbH",
        "headOfCompany": "Unicorn Start",
        "address": {
          "street": "Sunshine Road 9",
          "city": "123134 FantasyCity"
        },
        "tel": "",
        "ustid": "",
        "email": "optional@mail.de",
        "commercialRegister": {
          "court": "",
          "number": ""
        }
      },
      ...
    }
  ]
  ```

  **Optional:** Add social media links in `businessInfo.json`
  This step is only necessary if you later want to query for the businesse's social media links in e.g. the footer.
  ```
  [
    {
      ...
      "socialMedia": {
        "twitter": "",
        "facebook": "",
        "instagram": ""
      }
    }
  ]
  ```



<a name="deployment"></a>
## Setup deployment pipeline:

### Prerequisites:

- Have a fully registered domain name.

### 1. Setup an A and AAAA record to point to the hosting server.

To host the website on the default server `thepuzzlers.io` setup the following records:

- A record pointing to: `158.181.50.48`
- AAAA record pointing to: `2a00:6140:117:161::1`
- CNAME with the name `www`, redirecting to your domain.


### 2. Log in to hosting server and add a new server block to nginx

In the following example we setup a domain called `example.com`, but you should replace this with your own domain name.

Create the directory for example.com as follows, using the -p flag to create any necessary parent directories:

```
$ sudo mkdir -p /var/www/example.com/html
```

Next, create a sample index.html page

```
$ vi /var/www/example.com/html/index.html
```

Add the following sample HTML:

```
  <html>
    <head>
      <title>Welcome to Example.com!</title>
    </head>
    <body>
      <h1>Success!  The example.com server block is working!</h1>
    </body>
  </html>
```

Save and close the file when you are finished.

--- 

**Change Group ownership of directory**

Change ownership of `/var/www/example.com/` directory and all files within to www-data group  
```
$ chgrp -R www-data /var/www/example.com/
```

Add write permission to group owners of `/var/www/example.com/` and all files within
```
$ chmod g+w -R /var/www/example.com/
```

Inspect the final result:
```
$ ls -l /var/www/

# It should look like this:
drwxrwxr-x 3 root www-data 4096 Aug 29 13:32 example.com
```

This step is necessary, because the ci pipeline logs in as the `ci`-User, who is a member of the `www-data` group.
It needs write permission, to successfully execute the delivery pipeline.

---

In order for Nginx to serve this content, it’s necessary to create a server block with the correct directives. Let’s make a new one at /etc/nginx/sites-available/example.com:

```
$ sudo vi /etc/nginx/sites-available/example.com
```

Paste in the following configuration (but change out any mentions of example.com with our new domain name):

```
server {
    listen 80;
    listen [::]:80;

    root /var/www/example.com/html;
    index index.html index.htm index.nginx-debian.html;

    server_name example.com www.example.com;

    location / {
            try_files $uri $uri/ =404;
    }
}
```

Next, let’s enable the file by creating a link from it to the sites-enabled directory, which Nginx reads from during startup:

```
$ sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```

Next, test to make sure that there are no syntax errors in any of your Nginx files:

```
$ sudo nginx -t
```

If there aren’t any problems, restart Nginx to enable your changes:

```
$ sudo systemctl restart nginx
```

Nginx should now be serving your domain name. You can test this by navigating to http://example.com, where you should see the index.html file we created earlier.

---

Finally, to obtain an SSL certificate for our newly added domain, we have to ask certbot to generate a new cert:

```
$ sudo certbot --nginx -d example.com -d www.example.com --non-interactive --redirect --email tech@thepuzzlers.io --agree-tos --no-eff-email
```

The redirect flag makes sure every incoming http request will be redirected to https.
As you can see, we need to always state the domain names that the cert will be valid for. (the `-d`-flag)

Luckily, the certbot nginx plugin automatically creates a cron job to regularily update the certificates. So we don't have to worry about them expiring.


### 3. Update `DOMAIN` variable in .gitlab-ci.yml file.

This is very important, otherwise the deploy step of the ci pipeline will never get triggered.

```
deploy_public_folder:
  ...
  variables:
    DOMAIN: example.com
  ...
```


### 4. Push to changes to master

This will trigger a Gatsby build and will deploy the results to your server. 
It should be live within >5min.


#### Disclaimer:

The server block setup instructions are heavily influenced by: https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04#step-5-%E2%80%93-setting-up-server-blocks-(recommended)
