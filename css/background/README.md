## `BACKGROUND` :
### The background property is a shorthand property for:

* `background-color`
* `background-image`
* `background-position`
* `background-size`
* `background-repeat`
* `background-origin`
* `background-clip`
* `background-attachment`

## `Examples:`
```css
.topbanner {
  background: url("starsolid.gif") #99f repeat-y fixed;
}
```
---
## `background-color:`
  * The background-color CSS property sets the background color of an element.
### `Examples` :
  ```css
.exampleone { background-color: transparent; }
```
---
## `background-color:`
* The background-image CSS property sets one or more background images on an element.
### `Examples` :
  ```css
div {
   background-image: url('img_girl.jpg');
}
```
---
## `background-position:`
* The background-position property sets the starting position of a background image.
* Tip: By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.
### `Examples` :
  ```css
div {
   /* Keyword values */
   background-position: top;
   background-position: bottom;
   background-position: left;
   background-position: right;
   background-position: center;
   background-position: left top;

   /* <percentage> values */
   background-position: 25% 75%;
}
```
---
## `background-position:`
* The background-size property specifies the size of the background images.
###
## `Values`: 
* ###  `length` :
  * Sets the width and height of the background image. The first value specifies the width, the second value specifies the height. If only one value is specified, the second parameter is set to "Auto"
    ```css
    div {
      background-size:200px;
      background-size:75px 75px;
      background-size:100% 100%;
    }
    ```
* ### `cover` :
  * Scales the image as large as possible to fill the container, stretching the image if necessary. If the proportions of the image differ from the element, it is cropped either vertically or horizontally so that no empty space remains.
   ```css
    div {
    background-size:cover;
  }
   ```
* ### `contain` :
  * Scales the image as large as possible within its container without cropping or stretching the image. If the container is larger than the image, this will result in image tiling, unless the background-repeat property is set to no-repeat.
  
 ```css
div {
   background-size:contain;
}
```
---
## `background-repeat:`
* The background-repeat CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.
  * `repeat` - 	The background image is repeated both vertically and horizontally.  The last image will be clipped if it does not fit. This is default
  * `repeat-x` - 	The background image is repeated only horizontally
  * `repeat-y` - 	The background image is repeated only vertically
  * `no-repeat` - 	The background-image is not repeated. The image will only be shown once
  * `space` - 	The background-image is repeated as much as possible without clipping. The first and last image is pinned to either side of the element, and whitespace is distributed evenly between the images
  * `round` - 	The background-image is repeated and squished or stretched to fill the space (no gaps)
  * `initial`	- Sets this property to its default value. Read about initial
  * `inherit` - 	Inherits this property from its parent element. Read about inherit
  
```css
div {
  background-repeat:no-repeat;
}
```
---
## `background-position:`
* The background-origin property specifies the origin position (the background positioning area) of a background image.
### Value: 
* `padding-box` - Default value. The background image starts from the upper left corner of the padding edge
* `border-box` - The background image starts from the upper left corner of the border
* `content-box` - The background image starts from the upper left corner of the content
* `initial` - Sets this property to its default value. Read about initial
* `inherit` - Inherits this property from its parent element. Read about inherit

```css
#myDIV {
  padding:25px;
  border:10px dotted #000000;
  background-image:url('paper.gif');
  background-origin:padding-box;
  background-repeat:no-repeat;
}
```
---
## `background-clip:`
* The background-clip property defines how far the background (color or image) should extend within an element.
* `Value :`
  * border-box - Default value. The background extends behind the border
  * padding-box - The background extends to the inside edge of the border
  * content-box - The background extends to the edge of the content box
  * initial - Sets this property to its default value. Read about initial
  * inherit - Inherits this property from its parent element. Read about inherit
```css
div {
  padding: 15px;
  border: 10px dotted #000000;
  background-color: yellow;
  background-clip:padding-box;
}
```
---
## `background-attachment` :
 * The background-attachment CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block. or is fixed.
## `Value`:
* `fixed`
The background is fixed relative to the viewport. Even if an element has a scrolling mechanism, the background doesn't move with the element. (This is not compatible with background-clip: text.)

* `local`
The background is fixed relative to the element's contents. If the element has a scrolling mechanism, the background scrolls with the element's contents, and the background painting area and background positioning area are relative to the scrollable area of the element rather than to the border framing them.

* `scroll`
The background is fixed relative to the element itself and does not scroll with its contents. (It is effectively attached to the element's border.)
---
## `background-blend-mode` :
background-blend-mode: normal | multiply | screen | overlay | darken | lighten
| color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue
| saturation | color | luminosity

* normal	This is default. Sets the blending mode to normal
* multiply	Sets the blending mode to multiply
* screen	Sets the blending mode to screen
* overlay	Sets the blending mode to overlay
* darken	Sets the blending mode to darken
* lighten	Sets the blending mode to lighten
* color-dodge	Sets the blending mode to color-dodge
* saturation	Sets the blending mode to saturation
* color	Sets the blending mode to color
* luminosity	Sets the blending mode to luminosity
---
##`mix-blend-mode` :
* The mix-blend-mode property specifies how an element's content should blend with its direct parent background.
  mix-blend-mode: normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|difference|exclusion|hue|saturation|color|luminosity;
### `Value :`
* normal	This is default. Sets the blending mode to normal
* multiply	Sets the blending mode to multiply
* screen	Sets the blending mode to screen
* overlay	Sets the blending mode to overlay
* darken	Sets the blending mode to darken
* lighten	Sets the blending mode to lighten
* color-dodge	Sets the blending mode to color-dodge
* color-burn	Sets the blending mode to color-burn
* difference	Sets the blending mode to difference
* exclusion	Sets the blending mode to exclusion
* hue	Sets the blending mode to hue
* saturation	Sets the blending mode to saturation
* color	Sets the blending mode to color
* luminosity	Sets the blending mode to luminosity