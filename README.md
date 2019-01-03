<p align="center"><img width="220" src="https://github.com/coderitual/react-direct/blob/master/media/logo-7@3x.png"></p>

<p align="center">UI Interactions for React</p>

![](https://img.shields.io/github/license/coderitual/react-direct.svg)
![](https://img.shields.io/badge/Project-Work%20In%20Progress-ff69b4.svg)

## Introduction

A collection of UI concepts packed into one fully functional react applications. The idea behind is to leverage the latest community practices to provide useful patterns for your real-world project. It covers basic areas such as: __routing, data fetching, animations & transitions, shared state__ but also more specific __UI elements__. All these topics are grouped into easy to follow folder structure.

## Features
Principles which drive this project are as follows:

##### 🎯 *Direct*
Embraces explicit and co-located code which is easy to delete and move from one place to another. This is an optimization for change as the change is the thing which will eventually happen. The code is direct and specific which makes it easy to copy and adapt for your needs.
##### 🍏 *Simple*
Following [The Rise of "Worse is Better"](https://www.jwz.org/doc/worse-is-better.html)
> The design must be simple, both in implementation and interface. It is more important for the interface to be simple than the implementation.
##### 🍆 *No classes*
Only functional components.
##### ❣️ *Hooks*
Uses hooks all the way (available as of react 16.7.0-alpha).
##### 🖖 *Code splitting*
Uses `React.lazy` along with `import()` and let the webpack do the job.
##### ⏱️ *Suspense*
React suspense for all things except data (code splitting, media loading).
##### 👗 *CSS-in-JS*
It's based on styled components for the look and feel.
##### 🛠 *Promote defaults*
As little configuration as possible. Uses defaults wherever it can.

## How to Use
There are 2 ways to use this project:

- Just copy & paste whatever you need.
- Be inspired. Find UI solution you like and adapt it to your environment.

## Dependencies

Application uses modern libraries for the core things:
- `Reach Router` Because it's straighforward, composable and does directly what it should. Nothing more.
- `Styled Components` Simply CSS in JS with great documentation. Why not `emotion`? I don't know. If there is a reason I should know about, let me know!
- `React Spring` As the modern UI is often built upon meaningful animations, everything that encourages using them is great. The library lately offers a nice hooks API which plays directly with the DOM for better performance.

## Legal
MIT License Copyright © 2018-present, Mike Skowronek 
