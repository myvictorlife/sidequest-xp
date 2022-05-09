# Sidequest Xp: [WEBSITE](https://sidequest-xp.web.app/)

![Build](https://github.com/myvictorlife/sidequest-xp/actions/workflows/build_v1.yml/badge.svg)
[![codecov](https://codecov.io/gh/myvictorlife/sidequest-xp/branch/master/graph/badge.svg)](https://codecov.io/gh/myvictorlife/sidequest-xp)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

The application should include the following features:

Flow listing:
Lists all products coming from the backend by category and it is possible to add the product to the cart.

Product Details:
Shows detailed product information.

Cart flow:
Shows the items in the cart, being able to increase or decrease the quantity and when it is confirmed, send the items to the backend.

## Config Environments

baseURL: 'https://us-central1-sidequest-xp.cloudfunctions.net'

## Configure psioniq File Header [LINK](https://marketplace.visualstudio.com/items?itemName=psioniq.psi-header)

The psioniq File Header VSCode Extension will insert a header into the current document - either at the start of the document or at the current cursor position. The header can be configured globally and/or per language. However, the configuration separates the comment syntax from the template body so it is likely that a single template will be able to cover most languages.

    $ Configuration File: root/psioniq.json

- File: header.component.ts
- Project: Sidequest XP
- Created: Tuesday, 3rd May 2022 7:36:28 am
- Last Modified: Tuesday, 4th May 2022 8:21:52 am
- Copyright © 2022 Sidequest XP

## Paths

    $ @sidequest-xp-store // Store
    $ @sidequest-xp-components // Components
    $ @sidequest-xp-core // Core
    $ @sidequest-xp-shared // Services / ...
    $ @environment // Configuration (project, languages, hosts, ...)

## Tools

    $ @ngrx/store // State Management
    $ @ngrx/effects // Side effect model for Store
    $ @ngrx/entity // Entity State adapter for managing record collections.
    $ @ngx-translate // Text Translations
    $ @angular/material // Material Design components for Angular
    $ @angular/flex-layout // Angular Flex Layout provides a sophisticated layout API using Flexbox CSS + mediaQuery.
    $ rxjs // RxJS is a library for reactive programming using Observables
    $ jest // Unit Tests
    $ Spectator // Spectator helps you get rid of all the boilerplate grunt work, leaving you with readable, sleek and streamlined unit tests.
    $ Prettier // Prettier is an opinionated code formatter that helps us beautify code in a standardized way every time we save the code.

## CI/CD

    $ build_v1.yml // Install, Build, Lint and Test
    $ codecov.yml // Running Test Coverage
    $ firebase-hosting-merge.yml // Deploy to Firebase Hosting on merge
    $ firebase-hosting-pull-request.yml // Deploy to Firebase Hosting on PR

## Installation

Install the dependencies and devDependencies and start the server.

    $ Node.js v14.15.0+ to run.

## Start project

Runs the app in the development mode. Open http://localhost:4200 to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## Running the project

    $ npm install
    $ npm start
    $ npm run test
    $ npm run test:coverage
    $ npm run lint

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
