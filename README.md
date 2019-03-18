# Stan Coding Challenge

Coding challenge based on: [https://github.com/StreamCo/react-coding-challenge](https://github.com/StreamCo/react-coding-challenge)

## Q & A

Q: How did you decide which technologies to use as part of your solution?
A: This is a straightforward React project with only `react-router-dom` for React-based routing and not much else. I used Webpack Dev Server w/ hot reloading for the development environment and Webpack for the build. Eslint with prettier provides a reasonable default to code styling, and Enzyme and Jest for testing React components with ease. I have also decided to use plain CSS imports to keep it simple, a project larger than this I would preferably organise my CSS using a CSS in JS library.

Q: Are there any improvements you could make to your submission?
A: Add more tests cases for components especially async testing with the Shows component. Implement state management such as React Context API or redux and caching data between routes. The grid implementation of the show tiles and responsiveness can also be further polished.

Q: What would you do differently if you were allocated more time?
A: Organise CSS with a CSS in JS library, an example would be [Emotion](https://emotion.sh) or [Styled components](https://www.styled-components.com). Since this project is rich with images, I would try to demonstrate lazy loading, and perhaps using Intersection Observer API to delay the loading of images, which will have a big impact on performance and cost reduction.

## Development Quick Start

#### Prerequisites

- node >= 8
- yarn

#### Install Dependencies

```sh
yarn
```

#### Run It

```sh
yarn dev
```

and open http://localhost:3000 in your browser

#### Build It

```sh
yarn build
```

#### Test It

```sh
yarn test
```
