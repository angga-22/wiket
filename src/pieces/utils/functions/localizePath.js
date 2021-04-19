/* eslint-disable max-len */
import { siteMetadata } from '../../../../gatsby-config';

const {
  locales: { locales, default: defaultCode },
  translatedPaths,
} = siteMetadata;

export default function localizePath(path, localeCode) {
  if (!path) return null;
  // if we are linking to default locale, path doesn't need to be changed
  if (localeCode === defaultCode) {
    return path;
  }
  const { pathPrefix } = locales.find(
    ({ code: websiteLocaleCode }) => websiteLocaleCode === localeCode
  );

  // eslint-disable-next-line max-len
  if (!pathPrefix)
    throw Error(`Locale ${localeCode} can't be found in gatsby config.`);

  const translatedPathObject = translatedPaths.find(
    (translatedPath) =>
      `/${translatedPath.default}/` === path ||
      `/${translatedPath.default}` === path
  );

  const translatedPath =
    translatedPathObject && translatedPathObject[localeCode]
      ? translatedPathObject[localeCode]
      : null;

  if (translatedPath) return `/${pathPrefix}/${translatedPath}`;

  return `/${pathPrefix}${path}`;
}
