// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyCwKxpTiCjY2269hVGchoLxaynvJ1PgRtE",
    authDomain: "my-elephant-cea2e.firebaseapp.com",
    databaseURL: "https://my-elephant-cea2e.firebaseio.com",
    projectId: "my-elephant-cea2e",
    storageBucket: "my-elephant-cea2e.appspot.com",
    messagingSenderId: "270273701731",
  }
};
