<p align="center"><img width="100%" src="https://github.com/coderitual/react-direct/blob/master/media/logo.png"></p>

<p align="center">UI Inspirations for React</p>

![](https://img.shields.io/github/license/coderitual/react-ui-interactions.svg?style=flat-square)
![](https://img.shields.io/badge/Project-Work%20In%20Progress-ff69b4.svg?style=flat-square)

## Introduction

A collection of UI concepts packed into one fully functional react application. The idea behind is to leverage the latest community practices to provide useful patterns for your real-world project. By presenting specific __UI elements__ you will learn basic and advanced solutions covering: __navigation, data fetching, animations & transitions, shared state, responsiveness__.

## Motivation
Building web application requires solving many UI problems. There are a ton of libraries that help to solve a prticular case but very often you would come up with your own solution. In that case this repository allows you to discover useful patterns for typical challenges while working on user interfaces. As you probably have noticed, project is written in react. I just feel comfortable using it. However, I think that the solutions presented here can be successfully used in other component based frameworks.

## Principles

* 🎯 **Direct** - Embraces explicit and co-located code which is **easy to delete** and move from one place to another. This is an [optimization for change](https://overreacted.io/optimized-for-change/) as the change is the thing which will eventually happen. The code is direct and specific which makes it easy to copy and adapt for your needs.
* 🍏 **Simple** - Following [The Rise of "Worse is Better"](https://www.jwz.org/doc/worse-is-better.html)
  > The design must be simple, both in implementation and interface. It is more important for the interface to be simple than the implementation.
* 🍆 **No classes** - Only functional components.
* ❣️ **Hooks** - Uses hooks all the way (available as of react 16.7.0-alpha).
* 🖖 **Code splitting** - Uses `React.lazy` along with `import()` and let the webpack do the job.
* ⏱️ **Suspense** - React suspense for code splitting.
* 💅 **CSS-in-JS** - It's based on styled components for the look and feel.
* 📦 **Promote defaults** - As little configuration as possible. Uses defaults wherever it can.

## How to Use

- Just copy & paste whatever you need.
- Be inspired. Find UI solution you like and adapt it to your environment.

## Dependencies

It's important to note that some low level tasks still needs a libraries to allow focusing on more important aspects. All dependencies in this project were picked very carefully considering the principles mentioned earlier.

- `Reach Router` Because it's straighforward, composable and does directly what it should. Nothing more.
- `Styled Components` Simply CSS in JS with great documentation. Why not `emotion`? I don't know. If there is a reason I should know about, let me know!
- `React Spring` As the modern UI is often built upon meaningful animations, everything that encourages using them is great. The library lately offers a nice hooks API which plays directly with the DOM for better performance.

## Legal
MIT License Copyright © 2019-present, Mike Skowronek 
