# ` CSS Fonts` :
###`Global values` :
###`font-size: inherit | initial | revert | unset`

---
## `Font-size` :
### Sets the font-size
###`font-size: px | % | em | rem`
   * `em` is a relative unit and depends on the element's font-size value.
   * `rem` it relies on the value of the root element, which is the `<html>` element.
```css
html { font-size: 20px; }
p { width: 50%; }
p { font-size: 0.8rem; }        /* = 16px */
p span { font-size: 2em; }      /* = 16px * 2 = 32px */
p strong { font-size: 2rem; }   /* = 20px * 2 = 40px */
```
---
#####
##`Font-style` 
### Sets the font style. The default is normal :
  `font-style: normal | italic | oblique | inherit`
* `normal` - Selects a font that is classified as normal within a font-family.
* `italic`- Selects a font that is classified as italic. If no italic version of the face is available, one classified as oblique is used instead. If neither is available, the style is artificially simulated.
* `oblique` - Selects a font that is classified as oblique. If no oblique version of the face is available, one classified as italic is used instead. If neither is available, the style is artificially simulated.
* `inherit` - The value must be inherited from the parent element
---
#####
##`Font-weight`
### Sets the weight of the font. The value is specified as numbers from 100 to 900 in increments of 100 or using specified keywords. :
`font-weight: bold|bolder|lighter|normal|100|200|300|400|500|600|700|800|900`
* `bolder and lighter` - change the fat content relative to the parent's saturation, respectively, up and down.
```css
 h1{ font-weight: 400; }
 p { font-weight: bold }
```
---
#####
##`Font-variant`
### Determines how to represent lowercase letters - leave them unmodified, or make them all caps at a reduced size. This way of changing characters is called small caps. :
`font-weight: small-caps|inherit|normal |`
* `small-caps` - The browser displays a small-caps font.
```css
div { font-variant: normal; }
div{ font-variant: small-caps;}
```
---
#####
##`Font-kerning `
### Kerning defines how letters are spaced. :
`font-weight: auto|normal|none;`
* `auto` - Default. The browser determines whether font kerning should be applied or not
* `normal` - 	Specifies that font kerning is applied
* `none` - Specifies that font kerning is not applied
```css
.ex1 {
  font-kerning: normal;
}
```
---
#####
##`Font-kerning `
### The font-stretch property allows you to make text narrower (condensed) or wider (expanded).  :
`font-stretch:  ultra-condensed | extra-condensed | condensed | semi-condensed |
normal | semi-expanded | expanded | extra-expanded | ultra-expanded`
---
* `ultra-condensed` -	Makes the text as narrow as it gets
* `extra-condensed` -	Makes the text narrower than condensed, but not as narrow as ultra-condensed
* `condensed` -	Makes the text narrower than semi-condensed, but not as narrow as extra-condensed
* `semi-condensed` -	Makes the text narrower than normal, but not as narrow as condensed
* `normal` -	Default value. No font stretching
* `semi-expanded` -	Makes the text wider than normal, but not as wide as expanded
* `expanded` -	Makes the text wider than semi-expanded, but not as wide as extra-expanded
* `extra-expanded` -	Makes the text wider than expanded, but not as wide as ultra-expanded
* `ultra-expanded` -	Makes the text as wide as it gets
* `initial` -	Sets this property to its default value. Read about initial
* `inherit` -	Inherits this property from its parent element. Read about inherit
```css

div {
  font-family: sans-serif, "Helvetica Neue", "Lucida Grande", Arial;
  font-stretch: expanded;
}
```
---
#####
##`Font-face `
### Kerning defines how letters are spaced. :
```css
@font-face {
   font-family: TeddyBear;
   src: url(teddy-bear.ttf);
   font-style: normal;
   font-weight: bold;
}
h1 {
   font-family: TeddyBear;
}
```
---
#####