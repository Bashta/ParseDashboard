# Ready to deploy Parse Dashboardv for AWS and Heroku.
Do not forget that parse dashboard support only https, but you can bypass it by adding ```PARSE_DASHBOARD_ALLOW_INSECURE_HTTP = 1``` as an environment var in AWS/Heroku. 
APP_ID, APP_NAME, MASTER_KEY, SERVER_URL can also be added as EnvVars in order to obscure sensitive keys from code.