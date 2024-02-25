(function(window) {
  window["env"] = window["env"] || {};

  // BackEnd Environment variables
  window["env"]["fineractApiUrls"] = 'https://lmsapi.thegrowfi.com';
  window["env"]["fineractApiUrl"]  = 'https://lmsapi.thegrowfi.com';

  window["env"]["apiProvider"] = '/fineract-provider/api';
  window["env"]["apiVersion"]  = '/v1';

  window["env"]["fineractPlatformTenantId"]  = 'default';
  window["env"]["fineractPlatformTenantIds"]  = 'default';

  // Language Environment variables
  window["env"]["defaultLanguage"] = 'en-US';
  window["env"]["supportedLanguages"] = 'en-US,fr-FR';

  window['env']['preloadClients'] = 'true';

  // Char delimiter to Export CSV options: ',' ';' '|' ' '
  window['env']['defaultCharDelimiter'] = ',';

  // Display or not the BackEnd Info
  window['env']['displayBackEndInfo'] = '';

})(this);
