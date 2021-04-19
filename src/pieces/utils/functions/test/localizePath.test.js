import localizePath from '../localizePath';

const testGatsbyConfig = {
  siteMetadata: {
    locales: {
      default: 'en',
      locales: [
        { code: 'deDE', pathPrefix: 'de' },
        { code: 'enUK', pathPrefix: 'uk' },
      ],
    },
    translatedPaths: [
      {
        default: 'privacy-policy',
        deDE: 'datenschutz',
      },
      {
        default: 'legal',
        deDE: 'impressum',
      },
    ],
  },
};

jest.mock('../../../../../gatsby-config', () => ({
  __esModule: true, // this property makes it work
  default: testGatsbyConfig,
  siteMetadata: testGatsbyConfig.siteMetadata,
}));

it('Should not prefix path for default locale', () => {
  expect(localizePath('/', 'en')).toEqual('/');
});

it('Should prefix path for locale that is not the default', () => {
  expect(localizePath('/', 'deDE')).toEqual('/de/');
});

it('Should translate path if configured in gatsby.config', () => {
  expect(localizePath('/legal', 'deDE')).toEqual('/de/impressum');
});

it('Should translate path, even if had slash at the end', () => {
  expect(localizePath('/privacy-policy/', 'deDE')).toEqual('/de/datenschutz');
});

it('Should take default path of no translation for locale is given', () => {
  expect(localizePath('/legal/', 'enUK')).toEqual('/uk/legal/');
});
