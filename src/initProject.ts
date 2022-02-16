export const initCommandFlags = [
  {
    label: 'Admin secret for Hasura GraphQL engine',
    value: '--admin-secret',
  },
  {
    label: 'http(s) endpoint for Hasura GraphQL engine',
    value: '--endpoint',
  },
  {
    value: '--install-manifest',
    label: 'Install manifest to be cloned',
  },
  {
    label: 'Config version to be used (default 2)',
    value: '--version',
  },
  {
    label: '.env filename to load ENV vars from (default ".env")',
    value: '--envfile',
  },
  {
    label: 'Log level (DEBUG, INFO, WARN, ERROR, FATAL) (default "INFO")',
    value: '--log-level',
  },
];
