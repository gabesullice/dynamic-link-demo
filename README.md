# Dynamic Linking Demo

This demo shows how JSON:API links can be used to dynamically direct
client-side actions and behaviors. [Try
it here](https://dynamic-link-demo.netlify.com/). 

* `index.html`: this is the HTML scaffold in which the demo exists.
* `server.js`: this emulates a server providing a link, it reacts to any form
  state changes and updates the JSON:API link accordingly.
* `client.js`: this emulates a client-side component that parses and process the 
  JSON:API link, it renders the buttons. It doesn't access the form, only the
  raw JSON.

Learn more about it in [this blog post](https://www.sullice.com/posts/2019/09/16/a-new-era-for-drupals-jsonapi/).
