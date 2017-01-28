// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  movies:
  {
      API_BASE_URL: 'https://api.themoviedb.org/3/search/movie?',
      API_KEY: 'af708b4d3ed724d2d43f01c3eb56291d',
      IMAGE_URL: 'https://image.tmdb.org/t/p/w500'
  }
};
