import global from './global';
import * as languages from './languages/index';
import languagesToOverrides from './utils/languages-to-overrides';

const config = {
  ...global,
  overrides: [...languagesToOverrides(languages)],
};

export default config;
