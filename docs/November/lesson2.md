# Lesson 2: HTML and CSS Basics

> This self-study guide will go over the basics of HTML and CSS. These technologies are important to structure and style your application. In the next lesson we will learn how to add JavaScript to make your website interactive

## Day 1

The only thing you need to install is the "Live Server" extension on VSCode

This will allow you to run your code in the browser

- Now create a HTML file in VSCode with the extension .html
- Type the "!" symbol and press enter. This will create some starter code.
- You must be using Visual Studio Code for this to work. If you are using any other ide please copy the code below

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

### Running the Code

To run this code click "Go live on the bottom of VSCode"

This will open a new webpage at `localhost:5500`

This looks very complicated but lets go step by step

Before we even look at the code we need to know what a tag is.

### Element

- An element in HTML component is a is displayed on the browser. For example there is a Heading element, Button element and Link element.

- Each element has two tags, an opening and closing tag

To define an element use this syntax

```html
<tag-name>Content</tag-name>
```

The `<tag-name>` is the opening tag. The `tag-name` is the name of the tag such as `input` `button` or `ul`. The closing tag is the same as the opening tag, but has a backslash at the beginning after the `<`.

The content is in the middle which is displayed to the user. For example this is a button tag

```html
<button>Click Me</button>
```

This will display a button that says "Click Me"

Now lets get back to the code.

- The `<!DOCTYPE html>` is a special tag that tells the browser that version of HTML it is. By writing `html` we assume it is the latest version
- The `html` tag defines the entire HTML code.
  - There is a "prop" called lang which is pased on to the tag
  - The current value is "en" which means the language is set to english
- The `head` tag defines data sent to the browser such as the name on the tab and the device width. We will mostly ignore this.
- The main part of HTML we will be using is the `body` tag.
  - Currently it is empty, but this is where we add all the elements
  - All elements seen in the browser will be here

## Day 2

Lets add something to the body!

```html
<body>
  <h1>Hello!</h1>
</body>
```

Now what is an h1 tag. Is that offbrand f1? Nice try, but no.

### `h1` elements

- `h` tags are heading elements.
- Each heading tag has a number after the `h`
  - For example `h1` `h2`
  - The smaller the number, the larger the heading

Here is a diagram comparing the sizes

<h1>h1</h1>
<h2>h2</h2>
<h3>h3</h3>
<h4>h4</h4>
<h5>h5</h5>
<h6>h6</h6>

Is there an `h7` tag, maybe when GTA6 comes out, but not now. The maximum is an `h6` tag. If you want any smaller then that you can use CSS.

### `p` elements

p tags are simple paragraph elements

to define them just do this

```html
<p>
  YAP YAP YAP YAP YAP YAP YAP YAP YAP YAP YAP YAP YAP YAP YAP YAP YAP YAP YAP
  YAP YAP
</p>
```

Output

<p>YAP YAP YAP YAP YAP YAP YAP YAP YAP YAP YAP YAP YAP YAP YAP YAP YAP YAP YAP
  YAP YAP</p>

### `ul` and `li` elements

These elements are used to make a list in HTMl

- First create a `ul` element

```html
<ul></ul>
```

Right now you see nothing. That is because there is no element inside the list

- Add li elements which are the elements you want to show in your list

Now your list is this

```html
<ul>
  <li>Yap Point 1</li>
  <li>Yap Point 2</li>
  <li>Yap Point 3</li>
</ul>
```

Output:

<ul>
  <li>Yap Point 1</li>
  <li>Yap Point 2</li>
  <li>Yap Point 3</li>
</ul>

## Day 3

### Challenge

Create a full resume with only HTML. Use headings, paragraph and list tags to create an appealing portfolio of your skills.

Example

<h1>Nimay Desai</h1>
<h3>Full Stack Developer and History Buff</h3>

<h3>Objective: </h3>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis risus augue. Fusce quis odio ut tortor faucibus vulputate. Ut dapibus, quam eu tincidunt tristique, massa risus vestibulum nibh, finibus suscipit massa augue in sem. Suspendisse rhoncus tortor dui. Maecenas neque ante, fringilla et sem et, ullamcorper fringilla massa. Sed auctor quis ante quis sagittis. Praesent turpis justo, ultricies nec venenatis vel, varius ac risus. In ornare, ipsum sed suscipit euismod, enim felis porttitor ex, at pharetra dui magna a dolor. Donec eleifend sit amet dui nec tempus. </p>

<ul>
  <li>Morbi sollicitudin, mauris quis rutrum tempor, diam urna euismod</li>
  <li>lorem, semper malesuada ligula turpis in arcu. In bibendum aliquet turpis, ut sagittis quam ornare sit amet. Fusce pharetra massa ut condimentum mollis.</li>
  <li>Curabitur mattis turpis vel porta hendrerit. Phasellus faucibus, tellus ac placerat aliquam, mi metus fringilla tellus, in malesuada. </li>
</ul>

## Day 4

### CSS Basics

Now right now our resume looks ugly. If somewhere saw this resume you would turn from accepted to rejected. We need to make it look better, but how you say. CSS! A tool sent from the heavens to style your website!

Steps

- First, create a CSS file with the extension `.css` ex. `styles.css`
- Now go back to your HTML file
- Add this inside the `head` tag of your code

```html
<link rel="stylesheet" type="text/css" href="styles.css"></link>
```

Remember to make the href the same as the name of your CSS file.

<details>
<summary>Do you notice anything?</summary>
The content of the link tag is empty! That means it is useless. We can use a self closing tag if the tag has no content and only props.
</details>

```html
<link rel="stylesheet" type="text/css" href="styles.css" />
```

Wow so cool!

### Using CSS

Lets start by making the heading orange (because why not!)

- Go on the `.css` file
- First, what do we need to modify (the `h1` element)
- Type the name of the element you want to modify
- Also add curly brackets (Like JS)

Ex.

```css
h1 {
}
```

- Now we need to set some attributes
- This is just like a dictionary/object with a key-value pair
- In this we will modify the `color` key
- We will set this value to `orange`

```css
h1 {
  color: orange;
}
```

Voila! the heading is now orange.

### Exercise

Set every single part of our resume to orange

## Day 5

We have a list of bullet points in the form of `ul` and `li`. With out current setup we cannot set different colors for each bullet point as setting `li` to one color sets **ALL** lis.

Lets fix that!

We need to identify each element with a class so we HTML knows what to change

To do this add the class prop to anything

Ex.

```html
<ul>
  <li class="yap-1">Yap point 1</li>
  <li class="yap-2">Yap point 2</li>
  <li class="yap-3">Yap point 3</li>
</ul>
```

Now in your CSS add a field for `.class-name`
in this example it is `.yap-1`

```css
.yap-1 {
  color: red;
}
```

<details>
<summary>Is `.h1` and `h1` the same?</summary>
No .h1 refers to the class "h1" while h1 refers to the HTML element
</details>

## Foreword

This lesson only went through the basic HTML tags and props. If you want to learn more about them please consult the resources to learn all the props available.

In this next lesson we are going to learn how to make this interactive.
