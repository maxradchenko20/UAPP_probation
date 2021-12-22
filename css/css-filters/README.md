## CSS Filters

---

```css
div {
   filter: blur(5px); /* blur (cannot be applied directly to body) */
   filter: brightness(150%); /* brightness, 100% default */
   filter: contrast(150%); /* contrast, 100% default */
   filter: grayscale(70%); /* black and white, 0% default */
   filter: hue-rotate(90deg); /* hue rotation, defines the angle, 0deg by default */
   filter: invert(100%); /* inverting */
   filter: opacity(50%); /* transparency */
   filter: saturate(150%); /*saturation change*/
   filter: sepia(100%); /* sepia */
   filter: drop-shadow(10px 10px 3px rgba(100, 0, 0, 0.5)); /* adds shadow to images, taking into account transparent areas */
}
```