// config.js

const config = {
  development: {
    URL: process.env.DEVELOPMENT,
  },
  production: {
    URL: process.env.REACT_APP_BASE_URL_PROD,
  },
};

export const BASE_URL = config["production"].URL;
