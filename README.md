# jest-api-test-boilerplate

A boilerplate project that uses jest, node-fetch, typescript for api testing.
This project is useful not only as an example of api testing in Node.js, but it also includes examples of the Service Object pattern, JSON Schema Validation (using [jest-json-schema](https://github.com/americanexpress/jest-json-schema)) and some practical examples for using Request to build an automated test suite with jest.

This covers testing of all methods of request like GET, POST, PUT, PATCH and DELETE. There are multiple user friendly reporters integrated to easily analyse the test results.

Not just that, it also provides the debugging support in VSCode.

## Prerequisites

- Nodejs 8.x [Install Nodejs 8.x or later version using [nvm](https://github.com/creationix/nvm) or [Node.js](https://nodejs.org/en/)]
- [Java 1.8](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) (required for allure report generation)

## Setup Tests

\> git clone git@github.com:a5g/jest-api-test-boilerplate.git <br />
\> cd jest-api-test-boilerplate <br />
\> npm install <br/>
\> npm install -g gulp-cli jest-cli allure-commandline

## Run tests

\> gulp test

## Why TypeScript

TypeScript offers the benefit of types, but you won't find them in this project. I have found TypeScript to be great because of the IDE intellisense and support for the latest JavaScript features:

![typescript](https://github.com/a5g/jest-api-test-boilerplate/blob/master/assets/typescript.jpg)

## Gulp

[gulp](https://gulpjs.com/) has been integrated to simplify the task execution.

## JSONPlaceholder

[JSONPlaceholder](https://jsonplaceholder.typicode.com) provides a set of apis that can be used for testing. Examples in this test refers to some of the APIs from JSONPlaceholder.

## Service Objects

Service Objects are a really good abstraction for the api endpoints that you interact with your tests. Create methods for GET, POST, PUT and DELETE requests for a given API.

##### `src/api/PostsAPI.ts`

##### `src/api/TodosAPI.ts`

## Test Reports

To view the HTML Test reports <br />
allure: <br />
\> gulp report

jest-stare: <br />
\> open results/jest-stare/index.html

jest-html-reporter: <br />
\> open results/jest-html-reporter/report.html

## Test Reports - Sample Screenshots

![report-01](https://github.com/a5g/jest-api-test-boilerplate/blob/master/assets/report-01.jpg)
<br />
![report-02](https://github.com/a5g/jest-api-test-boilerplate/blob/master/assets/report-02.jpg)
<br />
![report-03](https://github.com/a5g/jest-api-test-boilerplate/blob/master/assets/report-03.jpg)
<br />
![report-04](https://github.com/a5g/jest-api-test-boilerplate/blob/master/assets/report-04.jpg)
<br />
![report-05](https://github.com/a5g/jest-api-test-boilerplate/blob/master/assets/report-05.jpg)
<br />
![report-06](https://github.com/a5g/jest-api-test-boilerplate/blob/master/assets/report-06.jpg)
<br />
![report-07](https://github.com/a5g/jest-api-test-boilerplate/blob/master/assets/report-07.jpg)
<br />
![report-08](https://github.com/a5g/jest-api-test-boilerplate/blob/master/assets/report-08.jpg)
<br />
![report-09](https://github.com/a5g/jest-api-test-boilerplate/blob/master/assets/report-09.jpg)

## Preferred Editor

[VSCode](https://code.visualstudio.com/download) with extensions

- Prettier - Code Formatter

## Support

For any support feel free to reach out to me at gani.anand@gmail.com.
I can provide full assitance to setup API tests

https://github.com/s3anand/api-test-jest-boilerplate.git
