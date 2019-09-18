# Dynamic Linking Demo

[Try it](https://dynamic-link-demo.netlify.com/). This demo shows how JSON:API
links can be used to dynamically direct client-side actions and behaviors.

* `index.html`: this is just the scaffold in which the demo exists
* `server.js`: this emulates a server providing a link, it only controls one
  half of the demo.
* `client.js`: this emulates a client-side component that parses and process a
  JSON:API link, it only controls the buttons and only has access the raw JSON
  output.
