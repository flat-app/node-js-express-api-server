# Node Express Server

Building a Node js APIs using Node.js, Express, and Mongoose to handle multiple API


# WriteUp

I was able to get clarification that the API will always respond the same way for each input. The temporal data is just there to provide multiple inputs. If we have called these apis many times, we can determine about the reputation of each APIs over time by looking over these data.
The "true" deductible, stop_loss, and oop_max could be as simple as getting the values that are in consensus.

[
    {
        "name": "api1",
        "deductible": 1000,
        "stop_loss": 10000,
        "oop_max": 5000
    },
    {
        "name": "api2",
        "deductible": 1200,
        "stop_loss": 13000,
        "oop_max": 6000
    },
    {
        "name": "api3",
        "deductible": 1000,
        "stop_loss": 10000,
        "oop_max": 6000
    }
]

Method 1:

We can also use statistical analysis and identify the consensus "true" value by finding what is not the outlier for each category. If we can have a large sample size for our temporal data, let’s say more than 100+ data entries, then we can analyze these data and measure the consensus by means and standard deviation.  We can calculate the mean of each category, then we use the standard deviation, and if it is +3 or -3 standard deviation from the mean. Then we can know which data is outlier and which data is consistent, and therefore it has a good reputation.

Method 2:
We can also simply find the most frequent value inside each category. The most frequent values would be  the "true" value for "deductible", "stop_loss", and "oop_max".

## Features

- **Testing**: unit tests using Mocha
- **Error handling**: centralized error handling mechanism
- **Dependency management**: with [NPM](https://npm.com)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv)
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
- **Linting**: with [ESLint](https://eslint.org) and [Prettier](https://prettier.io)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

### Commands

Running in production:

```bash
npm start
```

Testing:

```bash


## Project Structure

```
server.js           # Express app
app\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--models\         # Mongoose models (data layer)
 |--routes\         # Routes
 |--test\           # Unit Testing


```

**User routes**:\
`GET /` - get all the APIs request
`GET /` - get user\



## Feature implementation


# Error Handling
The app has a centralized error handling mechanism.

Controllers should try to catch the errors and forward them to the error handling middleware (by calling `next(error)`). For convenience, you can also wrap the controller inside the catchAsync utility wrapper, which forwards the error.


```


## Linting

Linting is done using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io).

In this app, ESLint is configured to follow the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) with some modifications. It also extends [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to turn off all rules that are unnecessary or might conflict with Prettier.

To modify the ESLint configuration, update the `.eslintrc.json` file. To modify the Prettier configuration, update the `.prettierrc.json` file.

To prevent a certain file or directory from being linted, add it to `.eslintignore` and `.prettierignore`.


## Inspirations
- [hagopj13/node-express-mongoose-boilerplate](node-express-mongoose-boilerplate)
- [danielfsousa/express-rest-es2017-boilerplate](https://github.com/danielfsousa/express-rest-es2017-boilerplate)

## License

[MIT](LICENSE)
