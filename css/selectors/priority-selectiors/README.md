## Priority of selectors

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Selectors</title>
    <style>
        .block {
            background-color: red;
            width: 100px;
            height: 100px;
        }
    </style>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="block" id="block" style="background-color: #581B45; width: 200px; height: 200px">

</div>
</body>
</html>
```

## `Priority:`

### 1. `Inline style `

```html

<div class="block" id="block" style="background-color: #581B45; width: 200px; height: 200px">
```

---

### 2.  `id #`

```css
#block {
   background-color: blue;
   width: 50px;
   height: 50px;
}
```

---

3. `classname`

```css
.block {
   background-color: yellow;
   width: 50px;
   height: 50px;
}
```

---

### 4.  `Tag <style>`

```html

<style>
    .block {
        background-color: red;
        width: 100px;
        height: 100px;
    }
</style>
```

---

5. `Tag name`

```css
div {
   background-color: pink;
   width: 50px;
   height: 50px;
}
```

---