import revertPathToDefaultLocale from '../revertPathToDefaultLocale';

const locales = [{ code: 'deDE', pathPrefix: 'de' }];
const translatedPaths = [
  {
    default: 'privacy-policy',
    deDE: 'datenschutz',
  },
  {
    default: 'legal',
    deDE: 'impressum',
  },
];

it('Should strip locale code from path', () => {
  const result = revertPathToDefaultLocale(
    '/de/process',
    locales,
    translatedPaths
  );

  expect(result).toEqual('/process');
});

it('Should return path if it is not prefixed with locale code', () => {
  const result = revertPathToDefaultLocale(
    '/process',
    locales,
    translatedPaths
  );

  expect(result).toEqual('/process');
});

it('If path is translated, return pathname for default locale', () => {
  const result = revertPathToDefaultLocale(
    '/de/impressum',
    locales,
    translatedPaths
  );

  expect(result).toEqual('/legal');
});

// eslint-disable-next-line max-len
it('If path is translated, return pathname for default locale, also with trailing slash', () => {
  const result = revertPathToDefaultLocale(
    '/de/datenschutz/',
    locales,
    translatedPaths
  );

  expect(result).toEqual('/privacy-policy');
});
