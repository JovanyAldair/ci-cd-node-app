# Node.js APT do download a PDF

## Introduction

This project consists of an API made in Node.js, which will download a PDF file, called `file.pdf`
in which I set up a unit test using Node's `supertest` package and did continuous integration **CI** using `Github Actions`

## Tools used in this project

[Node.js](https://nodejs.org/en)
[Express.js](https://expressjs.com/)
[supertest.js](https://www.npmjs.com/package/supertest)
[Github Actions](https://github.com/features/actions)

## Usage

To use this project, firstly, download the project to your PC runing the command:

`git clone git@github.com:JovanyAldair/pdf-api-node.git`

make sure you have node.js installed on your machine, and running the command:

`npm install`

Run the tests firstly using the command:

`npm test`

Finally run the application running the command:

`npm start`

Test the application typing on your browser:

`localhost:3000/download`

It will dowdload the **file.pdf**
