### `СЕЛЕКТОРЫ CSS`

## `Обращение ко всем элементам внутри класса .wrapper`

```css
  .wrapper * {
   font-size: 14px;
}
```

---

## `Обращание ко всем <p> внутри класса .text`

```css
 .text p {
   font-size: 24px;
/ / обращение ко всем p внутри класса . text
}
```

---

## `Обращание к след <p> (первому)после <img>`

```css
img + p {
   font-size: 20px;
}
```

---

## `Все <p> после тега img, не вложенные а соседи внизу `

```css
  img ~ p {
   color: mediumvioletred;
}
```

---

## `Обращение к <li> где .list родитель а не дед`

```css
.list > li {
   border: 1px solid black;
}
```

## ` Обращение к <input type="text"> `

```css
  input[type=text] {
   border: 5px solid darkblue;
}
```

---

## `Обращение к ссылке где в href есть слово 'link' `

```css
    a[href*="link"] {
   color: yellow;
}
```

---

## `Обращение к ссылке где в href начинаеться на слово 'link' `

```css
    a[href^="link"] {
   color: yellow;
}
```

---

## `обращаение к фото с типом jpg`

```css
img[src$=".jpg"] {
   display: none;
}
```

---

## ` всем <p> кроме <p>.item `

```css
 p:not(.item) {
   border-radius: 10px;
}
```