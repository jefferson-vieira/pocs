const fs = require('fs');
const path = require('path');

const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

const { ENV } = process.env;

if (!ENV) {
  throw new Error('ENVIRONMENT: The ENV environment variable is required');
}

const cwd = fs.realpathSync(process.cwd());

const envs = ['.env.local', `.env.${ENV}.local`, `.env.${ENV}`, '.env']
  .map(env => {
    const envPath = path.resolve(cwd, env);
    if (fs.existsSync(envPath)) {
      const result = dotenv.config({ path: envPath });
      if (result.error) throw result.error;
      dotenvExpand(result);
      return result.parsed;
    }
  })
  .reduce((prevEnvs, nextEnvs) => ({ ...prevEnvs, ...nextEnvs }), {});

module.exports = envs;
