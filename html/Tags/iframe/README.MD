## `Tag` : `<iframe>` :

* The `<iframe>` tag specifies an inline frame.
* An inline frame is used to embed another document within the current `HTML` document.

---

## `Tip` :
* Use CSS to style the` <iframe>` (see example below). 
* It is a good practice to always include a title attribute for the `<iframe>`. This is used by screen readers to read out what the content of the `<iframe>` is.

---

## `Attributes` : 
* `src` - value: `url`
  * Specifies the address of the document to embed in the `<iframe>`.
  
`Example` :
```html
  src="https://google.com/"    <!-- Sets the address of the document to embed --> 
```

---

## `Attributes` :
* `srcdoc` - value: `HTML codes`
    * Specifies the HTML content of the page to show in the `<iframe>`.

`Example` :
```html
 srcdoc="<p>Some html</p>"    <!--Sets the HTML content of the page to display--> 
```

---

## `Attributes` :
* `height/weidth` - value: `px`
    * Specifies the HTML content of the page to show in the `<iframe>`.

`Example` :
```html
 height/width="100px"        
```

---

## `Attributes` :
* `height/weidth` - value: `text`
    * Sets the name of the iframe (mainly used to reference an element in JavaScript.

`Example` :
```html
 name="my-iframe"      
```

---

## `Attributes` :
* `height/weidth` - value: `text`
    * Sets the object policy for an iframe

`Example` :
```html
 allow="fullscreen"     
```

---

## `Attributes` :
* `height/weidth` - value:
  * no-referrer
  * no-referrer-when-downgrade
  * origin
  * origin-when-cross-origin
  * same-origin
  * strict-origin-when-cross-origin
  * unsafe-url
    
* Specifies which referrer information to send when fetching the iframe
        

`Example` :
```html
referrerpolicy="no-referrer"     <!-- Set up referrer to send when receiving iframe content --> 
```

---

## `Attributes` :
* `height/weidth` - value:
    * allow-forms
    * allow-pointer-lock
    * allow-popups
    * allow-same-origin
    * allow-scripts
    * allow-top-navigation
    * 

* Enables an extra set of restrictions for the content in an <iframe>


`Example` :
```html
 sandbox="allow-same-origin"     <!-- Sets iframe constraints --> 
```

---



