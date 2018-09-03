const environments = {};

environments.development = {
    port: 3000,
    mode: 'development'
};

environments.staging = {
    port: 5000,
    mode: 'staging'
};

const NODE_ENV = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV.toLowerCase() : '';

const currentEnvironment = typeof(environments[NODE_ENV]) === 'object' ? environments.staging : environments.development;

module.exports = currentEnvironment;