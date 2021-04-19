// the path might be translated.
// This function will return the path for the default language
function revertToDefaultTranslation(path, locale, translatedPaths) {
  let result = path;
  translatedPaths.forEach((translatedPath) => {
    if (
      `/${translatedPath[locale.code]}` === path ||
      `/${translatedPath[locale.code]}/` === path
    ) {
      result = `/${translatedPath.default}`;
    }
  });
  return result;
}

export default function revertPathToDefaultLocale(
  path,
  locales,
  translatedPaths
) {
  let result = path;
  locales.forEach((locale) => {
    if (path.startsWith(`/${locale.pathPrefix}`)) {
      // first strip locale prefix
      // e.g. /de/process -> /process
      const pathWithoutPrefix = path.slice(locale.pathPrefix.length + 1);
      // revert any translated paths to default language
      // e.g. /datenschutz -> /privacy-policy
      result = revertToDefaultTranslation(
        pathWithoutPrefix,
        locale,
        translatedPaths
      );
    }
  });

  return result;
}
