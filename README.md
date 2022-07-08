# PortfolioTemplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Install
Run `npm i` to install required packages locally. This may take some time.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/project-name` directory.<br />

## GitHub

Follow [this guide](https://code.ssnc.dev/cloud/developer-onboarding/wiki/2-Tools#ssh-key) to connect your local machine to GitHub.<br />
Create a new public repository with the lowercase name of 'githubusername.github.io' on GitHub.<br />
Run the following commands in your base project directory:<br />
`git init`<br />
`git remote add origin git@github.com:GitHubUserName/githubusername.github.io.git`<br />
`git add .`<br />
`git commit -m "Initial Commit`<br />
`git push`<br />
You should now see this README at https://githubusername.github.io. Continue to Deployment.

#### Useful Links

- https://github.com/settings/keys
- https://www.youtube.com/watch?v=iYwboA7CVlE

## Deploy

Run `npm i angular-cli-ghpages --save-dev` to download the GitHub Pages CLI. Then run `npx angular-cli-ghpages --dir=dist/project-name` with your project name instead of project-name.
The default name for this project is 'project-template'. Navigate to your repository settings. Select the 'Pages' tab. Under 'Source', select the 'gh-pages' branch and click 'Save'.

*Tip: You can watch this deployment happen under the 'Actions' tab of your repository.*
