# Lesson 4: ReactJS Basics

> This self study guide will go over the basics of ReactJS and how to use it in integration with the other technologies we have mentioned including HTML, CSS and JS

## Day 1

### Create a ReactJS App

To create a ReactJS app, you need NodeJS installed. If not refer to the first lesson

Next, run this in the terminal

```
npx create-react-app@latest my-app
```

Replace my app with the name of your application

This will intialize a new react application

Now that you have opened the new folder created we need to go to our HTML.

Now you don't see any HTML files do you. ReactJS uses JSX which adds your HTML inside the JavaScript directly.

### JSX

JSX is a special technologies designed to integrate HTML into your JavaScript. The HTML is code is the result of the returned function. For example

```jsx
function MyApp() {
  return <div>Hello</div>;
}
```

In this example we are going to build a Singe Page app. If you want to learn how to do a multi page application with routes, please consult our resources section.

<details>
  <summary>Does JSX add JavaScript to HTML</summary>
  No! JSX adds HTML to JavaScript, thus the opposite. This is unlike Svelte which adds JS to Html with the .svelte extension.
</details>

### Start

Lets add some basic HTML code. We do not need to add the boiler plate code as that is already handled.

Lets just directly add a `div` element which is just a container and does not add anything along with `h1` and `p` tags
