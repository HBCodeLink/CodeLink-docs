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
