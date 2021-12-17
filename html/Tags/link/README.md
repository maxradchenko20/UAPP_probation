### Tag  `<a>`

---

#### About `<a>` :

* #### The `<a>` tag is paired, the closing tag `</a>` is required.
* #### The `<a>` `HTML` element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a `URL` can address.

####

### `Examples` :

```html
<a href="https://developer.mozilla.org">MDN</a>
```

---

### Attributes  `href` :

* #### `value - URL`
    * Specifies the address of the document to go to. Since a document of any type can be used as the link `address`,
      the result of following the link depends on the final file. So, archives (files with zip or rar extension) will be
      saved to the _local disk_.
    * By default, a new document is loaded into the current browser window, however this property can be changed using
      the `target` attribute.
  ---
        * Sections of a page with fragment URLs
        * Pieces of media files with media fragments
        * Telephone numbers with tel: URLs
        * Email addresses with mailto: URLs
        * While web browsers may not support other URL schemes, web sites can with registerProtocolHandler()

`Default value`: By default, this attribute is off.

####

### `Examples` :

```html
<a href="image/xxx.jpg">Open file in browser</a>

<a href="mailto:maxradchenko20@gmail.com">Email</a>

<a href="tel:+11111111111">Tell</a>
```

___

### Attributes `hreflang` :

* #### `value - language_code`
    * Hints at the human language of the linked URL. No built-in functionality. Allowed values are the same as the
      global lang attribute.

####

### `Examples` :

```html
<a href="https://www.google.co.uk" hreflang="en">Google</a>
```

---

### Attributes `download` :

* #### `value - filename`
    * Indicates to the browser that the material from the link should be downloaded.
    * If a file name is specified, the download dialog box will offer to save the file under this name instead of the
      file name from the site.

`Default value`: By default, this attribute is off.

####

### `Examples` :

```html
<a href="image/xxx.jpg">Open file in browser</a>

<a href="image/xxx.jpg" download>Download file</a>
```

---

### Attributes `target` :

* By default, when you click on a link, the document opens in the current browser tab. This behavior can be changed
  using the _target_ attribute of the `<a>` element.

####

* The value is the name of the frame, specified by the _name_ attribute of the `<iframe>` element, or a reserved
  keyword. If you specify a frame name, the link will open in a frame.
  `Value`: By default, this attribute is off.

---
### `Value` :
---

* #### `_blank`:
    * Loads the page into a new browser tab.

### `Examples` :

```html
<a href="google.com" target="_blank">google</a>
```

---

####

* `_self` :
    * Loads the page to the current tab.

### `Examples` :

```html
<a href="google.com" target="_self">google</a>
```

---

####

* `_parent` :
    * Loads the page to the parent frame; if there are no frames, then this value works like `_self`.

### `Examples` :

####

```html
<a href="google.com" target="_parent">google</a>
```  

---

####

* `_top` :
    * Cancels all frames and loads the page in a full browser window; if there are no frames, then this value works
      like `_self`.

### `Examples` :

```html
<a href="google.com" target="_top">google</a>
```

---

### Attributes `rel` :

* Defines the relationship between the current document and the referenced document. Indicates what the referenced
  document is for the current one.

---

### `Value` :

* `alternate` :
    * Alternate representations of the current document.

---

### `Exampels` :

```html
<!-- a persistent style sheet -->
<link rel="stylesheet" href="default.css">
<!-- alternate style sheets -->
<link rel="alternate stylesheet" href="highcontrast.css" title="High contrast">
```

### `Allowed in these elements` :

* #### ` <a>, <area>, <link>`

### `Not allowed in these elements` : `<form>`

---

### `Value` :

* `author` :
    * Defines a hyperlink to a page describing the author or providing a way to contact the author.

---

### `Exampels` :

```html
<a href="https://github.com/maxradchenko20" hreflang="en" rel="author">My GitHub</a>
```

### `Allowed in these elements` :

* #### ` <a>, <area>, <link>`

### `Not allowed in these elements` : `<form>`

---

### `Value` :

* `bookmark` :
    * Indicates that the hyperlink is a permalink for the nearest ancestor <article> element. If none, it is a permalink
      for the section that the element is most closely associated to.
    * This allows for bookmarking a single article in a page containing multiple articles, such as on a monthly summary
      blog page, or a blog aggregator.

---

### `Allowed in these elements` :

* #### ` <a>, <area>, `

### `Not allowed in these elements` : `<form>, <link>`

---

### `Value` :

* `external` :
  Indicates that the hyperlink leads to a resource outside the site of the current page; that is, following the link
  will make the user leave the site.*

---

### `Example` :

```html
<a href="https://github.com/maxradchenko20" hreflang="en" rel="author external">My GitHub, You will leave our site</a>
```

---

### `Allowed in these elements` :

* #### ` <a>, <area>, <form>`

### `Not allowed in these elements` : `<link>`

---

### `Value` :

* `help` :
    * Relevant to `<form>`, `<link>`, `<a>`, and `<area>,` the help keyword indicates that the linked to content
      provides context-sensitive help, providing information for the parent of the element defining the hyperlink, and
      its children. When used within `<link>`, the help is for the whole document. When included with `<a>` and <area>
      and supported, the default cursor will be help instead of pointer.

---

### `Allowed in these elements` :

* #### ` <a>, <area>,<form>, <link> `

### `Not allowed in these elements` : `none`

---

### `Example` :

```html
<a href="http://www.htmlcodes.ws" rel="help">HTML codes</a>
```

---

### `Value` :

* `license` :
    * Indicates that the main content of the current document is covered by the copyright license described by the
      referenced document.---
        * Note: Although recognized, the synonym copyright is incorrect and must be avoided.

---

### `Allowed in these elements` :

* #### ` <a>, <area>,<form>, <link> `

### `Not allowed in these elements` : `none`

---

### `Example` :

```html
Our Accounting Products fall under the
<a rel="license" target="_blank"
   href="http://www.apache.org/licenses/LICENSE-2.0">Apache 2.0 License</a>
```

---

### `Value` :

* `next/prev` :
    * You can use the `rel = "next"` and `rel = "prev"` HTML attributes to indicate the relationship between individual
      URLs. Thanks to this markup, Google can determine that the content of these pages is linked in a logical sequence.

---

### `Allowed in these elements` :

* #### ` <a>, <area>,<form>, <link> `

### `Not allowed in these elements` : `none`

---

### `Example` :

Suppose you have paginated content with the following URLs :

```text
 http://www.example.com/article-part1.html
 http://www.example.com/article-part2.html
 http://www.example.com/article-part3.html
 http://www.example.com/article-part4.html
```

Add a tag to the head section of the first page` (http://www.example.com/article-part1.html)` that points to the next
page, as shown below:

```html

<link rel="next" href="http://www.example.com/article-part2.html">
```

---
Since this is the home page, you do not need to provide the `rel = "prev"` attribute. On pages two and three, add links
pointing to the previous and next URL. For example, on the second page, you can add the following lines:

```html

<link rel="prev" href="http://www.example.com/article-part1.html">
<link rel="next" href="http://www.example.com/article-part3.html">
```

---
Add a link to the last page `(http://www.example.com/article-part4.html)` that points to the previous URL:

```html

<link rel="prev" href="http://www.example.com/article-part3.html">  
```

Since this is the last URL, you do not need to add the `rel = "next"` attribute.

---

### `Value` :

* `noopener` :
    * Instructs the browser to open the link without granting the new browsing context access to the document that
      opened it — by not setting the Window.opener property on the opened window (it returns null).
    * This is especially useful when opening untrusted links, in order to ensure they cannot tamper with the originating
      document via the Window.opener property (see About rel=noopener for more details), while still providing the
      Referer HTTP header (unless noreferrer is used as well).
    * Note that when noopener is used, nonempty target names other than _top, _self, and _parent are all treated like _
      blank in terms of deciding whether to open a new window/tab.

--- 

### `Allowed in these elements` :

* #### ` <a>, <area>,<form>, `

### `Not allowed in these elements` : `<link>`

---

### `Example` :

```html
<a class="user-generated" href="malicious.html" target="_blank"><b>Click me!!1 (same-origin)</b></a>
```

---

### `Value` :

* `prefetch` :
  *Specifies that the user agent should preemptively fetch and cache the target resource as it is likely to be required
  for a followup navigation.

---

### `Allowed in these elements` :

* #### ` <a>, <area>,<form>,  `

### `Not allowed in these elements` : `<link>`

---

### `Example` :

```html
<a rel="nofollow" target="_blank"
   href="https://yousician.com/">
    <mark><strong>paid subscription!!!</strong></mark>
</a>
```

---

### `Value` :

* `search` :
    * Gives a link to a resource that can be used to search through the current document and its related pages.

---

### `Allowed in these elements` :

* #### ` <a>, <area>,<form>,<link>  `

### `Not allowed in these elements` : `none`

---

### `Example` :

```html

<link rel="search" type="application/opensearchdescription+xml" title="Stack Overflow" href="/opensearch.xml">
```

---

### `Value` :

* `tag` :
    * Indicates that the hyperlink refers to a document describing a tag that applies to this document.
    * Note: This link type should not be set on links to a member of a tag cloud as these do not apply to a single
      document but to a set of pages.

---

### `Allowed in these elements` :

* #### ` <a>, <area>`

### `Not allowed in these elements` : `<link>, <form>`

---

### `Example` :

```html
<a href="http://technorati.com/tag/tech" rel="tag">tech</a>
```

---

