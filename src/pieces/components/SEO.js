/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { usePageContext } from 'pieces/utils/context';
import thumbnail from 'images/seo/thumbnail.png';
import favicon32 from 'images/seo/favicon32.png';
import favicon64 from 'images/seo/favicon64.png';
import favicon16 from 'images/seo/favicon16.png';

export function SEO({
  description,
  meta,
  title,
  shortTitle,
  shortDescription,
  url,
}) {
  const { locale } = usePageContext();
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
            shortTitle
            shortDescription
            locales {
              default
            }
          }
        }
      }
    `
  );

  const pageLang = locale ? locale : site.siteMetadata.locales.default;
  const metaDescription = description || site.siteMetadata.description;
  // eslint-disable-next-line operator-linebreak
  const metaShortDescription =
    shortDescription || site.siteMetadata.shortDescription;
  const metaTitle = title || site.siteMetadata.title;
  const metaShortTitle = shortTitle || site.siteMetadata.shortTitle;
  const metaUrl = url || site.siteMetadata.url;

  return (
    <Helmet
      htmlAttributes={{
        pageLang,
      }}
      title={metaTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: metaShortTitle,
        },
        {
          property: 'og:description',
          content: metaShortDescription,
        },
        {
          property: 'og:url',
          content: metaUrl,
        },
        {
          property: 'og:image',
          content: `${thumbnail}`,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
      link={[
        { rel: 'image_src', type: 'image/png', href: `${thumbnail}` },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: `${favicon32}`,
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: `${favicon16}`,
        },
        {
          rel: 'shortcut icon',
          type: 'image/png',
          href: `${favicon64}`,
        },
      ]}
    />
  );
}

SEO.defaultProps = {
  meta: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};
