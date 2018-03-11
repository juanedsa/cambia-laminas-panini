// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCzP9wzuXojgmESlDoWvTrtNrrT6l544_c',
    authDomain: 'cambia-laminas-panini.firebaseapp.com',
    databaseURL: 'https://cambia-laminas-panini.firebaseio.com',
    projectId: 'cambia-laminas-panini',
    storageBucket: 'cambia-laminas-panini.appspot.com',
    messagingSenderId: '221165433192'
  },
  coinHive: { key: 'PBuD4j9mfjTbZw4mLtXLS4gwrTxxmFd2' }
};
