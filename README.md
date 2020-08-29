# Clone this to kickstart a new Concierge client website

1. Create new client repo on GitLab

Naming : `<unique_id>__<name_of_client>`
don't initialize a README.md
The unique id should be a number with 7 digits.

2. Clone the `client-boilerplate` repo locally

```
$ git clone git@gitlab.com:thepuzzlers-org/websites/client-boilerplate.git <unique_id>__<name_of_client>
$ cd <unique_id>__<name_of_client>
```

3. Rewire it to new gitlab repo:

```
$ git remote rm origin
$ git remote add origin git@gitlab.com:thepuzzlers-org/websites/<unique_id>__<name_of_client>.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

## How to start the project

Run Gatsby:
`gatsby develop`

## ToDos after initial setup

- Change Site Details in `gatsby-config.js`. Set title, description, etc.
- Set default locale in `gatsby-config.js` (important for Seo)
- Set secondary locales and their according prefixes in `gatsby-config.js` (important for Seo)
- Replace favicons in `images/seo/` with correct icons.
- Remove all legal pages and legal jsons that are not needed:

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

## Setup deployment pipeline:

### Prerequisites:

- Have a fully registered domain name.

### 1. Setup an A and AAAA record to point to the hosting server.

To host the website on the default server `thepuzzlers.io` setup the following records:

- A record pointing to: `158.181.50.48`
- AAAA record pointing to: `2a03:b0c0:3:d0::b7d:c001`
- CNAME with the name `www`, redirecting to your domain.

### 2. Update `DOMAIN` variable in .gitlab-ci.yml file.

This is very important, otherwise the deploy step of the ci pipeline will never get triggered.

```
deploy_public_folder:
  ...
  variables:
    DOMAIN: example.com
  ...
```

### 3. Log in to hosting server and add a new server block to nginx

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

#### Disclaimer:

The server block setup instructions are heavily influenced by: https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04#step-5-%E2%80%93-setting-up-server-blocks-(recommended)
