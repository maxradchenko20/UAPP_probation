# WAI-ARIA

---

### `Enter WAI-ARIA:`

* #### Roles These define what an element is or does. Many of these are so-called landmark roles, which largely duplicate the semantic value of HTML5 structural elements e.g. `role="navigation"` (`<nav>`) or `role="complementary" (<aside>)`, but there are also others that describe different pages structures, such as `role="banner", role="search", role="tabgroup", role="tab"`, etc., which are commonly found in UIs.
* #### Properties — These define properties of elements, which can be used to give them extra meaning or semantics. As an example, `aria-required="true"` specifies that a form input needs to be filled in to be valid, whereas `aria-labelledby="label"` allows you to put an ID on an element, then reference it as being the label for anything else on the page, including multiple elements, which is not possible using `<label for="input">`. As an example, you could use aria-labelledby to specify that a key description contained in a <div> is the label for multiple table cells, or you could use it as an alternative to image alt text — specify existing information on the page as an image's alt text, rather than having to repeat it inside the alt attribute. You can see an example of this at Text alternatives.
* #### States — Special properties that define the current conditions of elements, such as `aria-disabled="true"`, which specifies to a screenreader that a form input is currently disabled. States differ from properties in that properties don't change throughout the lifecycle of an app, whereas states can change, generally programmatically via JavaScript.

---

## Roles:

## `Widget roles`:

* ### [`Button`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role) - docs

#### `Description`

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">Save</div>

<button type="button" id="saveChanges">Save</button>
```

### `Toggle buttons`:

* #### If `aria-pressed is not used`, or is set to the "undefined" state, the button is not a toggle button.
* #### If `aria-pressed="false"` is used the button is a toggle button that is currently not pressed.
* #### If `aria-pressed="true"` is used the button is a toggle button that is currently pressed.
* #### if `aria-pressed="mixed"` is used, the button is considered to be partially pressed.

### `Example`:

###`Html`
```html
    <h1>ARIA Button Example</h1>
    <ul id="nameList"></ul>
    <label for="newName">Enter your Name: </label>
    <input type="text" id="newName">
    <span role="button" tabindex="0" onclick="handleCommand(event)" onKeyDown="handleCommand(event)">Add Name</span>****
```
---
###`Css`

```css
[role="button"] {
  padding: 2px;
  background-color: navy;
  color: white;
  cursor: default;
}
[role="button"]:hover,
[role="button"]:focus,
[role="button"]:active {
   background-color: white;
   color: navy;
}
ul {
    list-style: none;
}
```

---

### `Js`
```javascript
function handleCommand(event) {
    // Handles both mouse clicks and keyboard
    // activate with Enter or Space

    // Keypresses other then Enter and Space should not trigger a command
    if (event instanceof KeyboardEvent && event.key !== 'Enter' && event.key !== ' ') {
        return;
    }

    // Get the new name value from the input element
    let newNameInput = document.getElementById('newName');
    let name = newNameInput.value;
    newNameInput.value = ''; // clear the text field
    newNameInput.focus();  // give the text field focus to enable entering and additional name.

    // Don't add blank entries to the list.
    if(name.length > 0) {
        listItem = document.createElement('li');
        listItem.appendChild(document.createTextNode(name));

        // Add the new name to the list.
        let list = document.getElementById('nameList');
        list.appendChild(listItem);
    }
}
```

---

### `Best practices`:
If a link performs the action of a button, giving the element role="button" helps assistive technology users understand the function of the element. However, a better solution is to adjust the visual design so it matches the function and ARIA role.  Where possible, it is recommended to use native HTML buttons (`<button>, <input type="button">`,  `<input type="submit">, <input type="reset"> and <input type="image">`) rather than the button role, as native HTML buttons are supported by all user agents and assistive technology and provide keyboard and focus requirements by default, without need for additional customization.

---
 ## Checkbox  [docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role)

* The checkbox role is for checkable interactive controls. Elements containing `role="checkbox"` must also include the aria-checked attribute to expose the checkbox's state to assistive technology.
* The native HTML checkbox (`<input type="checkbox">`) form control had two states (`"checked" or "not checked"`), with an indeterminate state settable via JavaScript. Similarly, an element with `role="checkbox"`  can expose three states through the aria-checked attribute: true, false, or mixed.
  Since a checkbox is an interactive control, it must be focusable and keyboard accessible. If the role is applied to a non-focusable element, use the tabindex attribute to change this. The expected keyboard shortcut for activating a checkbox is the Space key.
  The developer is required to change the value of the aria-checked attribute dynamically when the checkbox is activated.

### `Examples`

### `HTML`
```html
<span role="checkbox" id="chkPref" aria-checked="false" onclick="changeCheckbox()" onKeyPress="changeCheckbox()"
   tabindex="0" aria-labelledby="chk1-label"></span>
<label id="chk1-label" onclick="changeCheckbox()" onKeyPress="changeCheckbox()">Remember my preferences</label>
```
---

### `CSS`
```css
[role="checkbox"] {
    padding:5px;
}

[aria-checked="true"]::before {
    content: "[x]";
}

[aria-checked="false"]::before {
    content: "[ ]";
}
```
---

### `JS`
```javascript
function changeCheckbox(event) {
    let item = document.getElementById('chkPref');
    switch(item.getAttribute('aria-checked')) {
        case "true":
            item.setAttribute('aria-checked', "false");
            break;
        case "false":
            item.setAttribute('aria-checked', "true");
            break;
    }
}
```

### `Best practices`:

* #### The first rule of ARIA is: if a native HTML element or attribute has the semantics and behavior you require, use it instead of re-purposing an element and adding an ARIA role, state or property to make it accessible. As such, it is recommended to use the native HTML checkbox  using form control instead of recreating a checkbox's functionality with JavaScript and ARIA.

---

### ARIA: gridcell role [`docs`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role)

* Any element with a `role="gridcell"` applied to it should use ARIA to describe its order in the table-style grouping, provided the table, grid, or treegrid has the ability to have rows and/or columns dynamically added, hidden, or removed.
####
* Use `aria-colindex` to describe a gridcell's order in the list of columns, and `aria-rowindex` to describe a gridcell's order in the list of rows. Use `aria-colcount` and `aria-rowcount` on the parent element with `role="grid"` applied to it to set the total number of columns or rows.
####
* In a treegrid, gridcells may be made expandable by toggling the `aria-expanded` attribute. Note that if this attribute is provided, it applies only to the individual gridcell.

### `Associated WAI-ARIA Roles, States, and Properties`:

* `grid` - communicates that a parent element is a table or tree style grouping of information.
 
* `row` - required to communicate the gridcell is part of a row of a table-style grouping of information.
 
* `columnheader` - specifies which element is the associated column header.

* `aria-colindex` - identifies the position of an element in relation to the rest of the table-style grouping of information's columns.
 
* `rowheader` - specifies which element is the associated row header.
 
* `aria-rowindex` - identifies the position of an element in relation to the rest of the table-style grouping of information's rows.

### `Exampels`:

`Html`
```html
<table role="grid">
    <thead>
    <!-- etc -->
    </thead>
    <tbody>
    <tr>
        <td role="gridcell">17</td>
        <td role="gridcell">64</td>
        <td role="gridcell">18</td>
    </tr>
    <tr>
        <td role="gridcell">17</td>
        <td role="gridcell">64</td>
        <td role="gridcell">18</td>
    </tr>
    </tbody>
</table>
```
### `Ex2`
```html
<h3 id="table-title">Jovian gas giant planets</h3>
<div role="grid" aria-describedby="table-title">
    <div role="rowgroup">
        <div role="row">
            <div role="columnheader">Name</div>
            <div role="columnheader">Diameter (km)</div>
            <div role="columnheader">Length of day (hours)</div>
            <div role="columnheader">Distance from Sun (10<sup>6</sup>km)</div>
            <div role="columnheader">Number of moons</div>
        </div>
    </div>
    <div role="rowgroup">
        <div role="row">
            <div role="gridcell">Jupiter</div>
            <div role="gridcell">142,984</div>
            <div role="gridcell">9.9</div>
            <div role="gridcell">778.6</div>
            <div role="gridcell">67</div>
        </div>
    </div>
    <div role="rowgroup">
        <div role="row">
            <div role="gridcell">Saturn</div>
            <div role="gridcell">120,536</div>
            <div role="gridcell">10.7</div>
            <div role="gridcell">1433.5</div>
            <div role="gridcell">62</div>
        </div>
    </div>
</div>
```
---
`Accessibility concerns`:

Support for `gridcell` and certain `gridcell-related` ARIA roles and properties have poor support with assistive technologies. If at all possible, use HTML table markup in their place.

`Best practices`:

The first rule of ARIA is: if a native HTML element or attribute has the semantics and behavior you require, use it instead of re-purposing an element and adding an ARIA role, state or property to make it accessible. As such, it is recommended to use native HTML table markup instead of recreating a table's form and functionality with ARIA and JavaScript.

---

### ARIA: link  role [`docs`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_link_role)
####
* When the link role is added to an element, or when such an element becomes visible, the user agent should do the following:
####
* Expose the element as having a link role in the operating system's accessibility API.
Fire an accessible link event using the operating system's accessibility API if it supports it.
Assistive technology products should listen for such an event and notify the user accordingly:
####
* Screen readers should announce the text of a link — or the link's label — when the link is focused. A screen reader should also identify the link as a link. ARIA links should be included in the screen reader's List Links function with ordinary links. Actions in the screen reader's dialog list (such as _Activate Link_ or _Move to Link_) should perform the same as ordinary links.
Screen magnifiers may enlarge links.
---
### `Examples:`

`HTML`
```html
<h1>role="link" example</h1>

<span data-href="https://mozilla.org" tabindex="0" id="link1" role="link" class="link">
  Fake accessible link created using a span
</span>

<p><a href="https://mozilla.org" target="_blank">Actual real link</a></p>
```
####
`CSS`
```css
span[role="link"] {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}

span[role="link"]:focus {
  outline: 1px dotted black;
}
```
####
`JS`
```javascript
const spanElem = document.querySelector('span');

//handles clicks and keydowns on the link
function navigateLink(e) {
    if (e.type === 'click' || e.key === 'Enter') {
        let ref = e.target != null ? e.target : e.srcElement;
        if (ref) {
          window.open(ref.getAttribute('data-href'), '_blank');
        }
    }
}
spanElem.addEventListener('click', navigateLink);
spanElem.addEventListener('keydown', navigateLink);
```

#### This example shows how to implement a fake link using a `<span>` element. This includes JavaScript to grab the location and handle navigating to the new location using `window.open()` via clicking, and using keyboard, CSS to give the desired visuals of a link, the `tabindex="0"` attribute to make it keyboard-focussable, and `role="link"` to make it recognized as a link by assistive technology.
#### This is a lot of work just to recreate something you get for free using the `<a>` element, so use that if possible. But this shows that it can be done.

### However, there are still problems with this approach:
* #### It is difficult to detect whether the target of the fake link has been visited before, and therefore use :visited styles (e.g. the default purple color for visited links).
* #### Opening a page using the `open()` method counts as being a popup, and certain browsers may issue a warning when you try to activate it, or make you explicitly agree to allowing popups form for the domain.
####
##`Note`:
Where possible, it is recommended that you use a native `<a>` element rather than the link role, as native elements are more widely supported by older user agents and assistive technology. Native `<a> `elements also support keyboard and focus requirements by default, without need for additional customization.

---
### ARIA: progressbar   role [`docs`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role)

* ### A progressbar indicates that the user's request has been received and the application is making progress toward completing the requested action. If the actual value of the progressbar can be determined, the developer has to indicate this progress using the `aria-valuenow`, `aria-valuemin`, and `aria-valuemax attributes`. If the progress value  is indeterminate, the developer should omit the `aria-valuenow` attribute.
####
* ### As the task progresses, the `aria-valuenow` value has to be updated dynamically to indicate this progress to assistive technology products. 
####
* ### If the progressbar is describing the loading progress of a particular region of a page, the author SHOULD use `aria-describedby` to point to the status, and set the `aria-busy` attribute to true on the region until it is finished loading. It is not possible for the user to alter the value of a _progressbar_ because it is always readonly.
---
### `Exampels`:

#### `HTML`
```html
<div role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">20 %</div>
```
####
```html
<div role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuetext="Step 2: Copying files... " aria-valuemax="100">
  Step 2: Copying files...
</div>
```
---

### ARIA: radio role [`docs`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_radio_role)

* #### A checkable input in a group of elements with the same role, only one of which can be checked at a time.
* #### This is achieved by enclosing the radio elements in an element with role radiogroup. If it is not possible to make the radio buttons DOM children of the radiogroup, authors SHOULD use the aria-owns attribute on the radiogroup element to indicate the relationship to its children.

### `Examples:`

`HTML`
```html
<div role="radiogroup">
    <input role="radio" type="radio" aria-checked="true"> One<br>
    <input role="radio" type="radio" aria-checked="false"> Two<br>
    <input role="radio" type="radio" aria-checked="false"> Three
</div>
```
---

### ARIA: slider role [`docs`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_slider_role)

* #### This technique demonstrates how to use the slider role and describes the effect it has on browsers and assistive technology.
* #### The 'slider' role is used for markup that allows a user to select a value from within a given range. The slider role is assigned to the "thumb," the control that is adjusted to change the value. As the user interacts with the thumb, the application must programmatically adjust the slider's 'aria-valuenow' (and possible 'aria-valuetext') attribute to reflect the current value. See the Examples section below for more information.
### Keyboard And Focus:
* #### The slider should be keyboard focusable and operable. When the user tabs focus to the slider, it should land on the thumb: the control a mouse user would drag. Arrow keys should operate as follows (localization for right-to-left languages should reverse the direction of the arrows):

### `Examples:`
#### In the example below, a simple slider is used to select a value between 1 and 100. The current volume is 50. The application will programmatically update the value of aria-valuenow in response to user input.

`HTML`
```html
<label for="fader">Volume</label>
<input type="range"
       id="fader"
       min="1"
       max="100"
       value="50"
       step="1"
       aria-valuemin="1"
       aria-valuemax="100"
       aria-valuenow="50"
       oninput="outputUpdate(value)">
<output for="fader" id="volume">50</output>
```
---
`JS`
```js
function outputUpdate(vol) {
  document.querySelector('#volume').value = vol;
}
```
---

### ARIA: switch  role [`docs`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role)

* #### The ARIA `switch` role is identical to the _checkbox_ role, except instead of being "checked" or "unchecked", it is either "on" or "off."  Like the checkbox role, the `aria-checked` attribute is required. The two possible values are `true` and `false`. Unlike a` <checkbox>` or `role="checkbox"`, there is no `indeterminate` or `mixed` state. The `switch` role does not support the value `mixed` for the `aria-checked` attribute; assigning a value of `mixed` to a `switch` instead sets the value to `false`.
* #### Assistive technologies may choose to represent `switch` widgets with a specialized presentation to reflect the notion of an on/off switch.
* #### Since a switch is an interactive control, it must be focusable and keyboard accessible. If the role is applied to a non-focusable element, use the `tabindex` attribute to change this. The expected keyboard shortcut for toggling the value of a switch is the _Space_ key. The developer is required to change the value of the `aria-checked` attribute dynamically when the switch is toggled.

### `Associated ARIA roles, states, and properties`:
* `aria-checked **attribute**`:
The `aria-checked` attribute is required when using the `switch` role, as it represents the current state of the widget that the switch role is applied to. A value of true represents the "on" state; false represents the "off" state; a value of mixed is not supported by the `switch` role, and is treated as `false`. The default value is `false`.
* `aria-readonly **attribute**`:
  The `aria-readonly` attribute is supported by the `switch` role. It indicates whether the widget's state is editable by the user. A value of false means that the user can change the widget's state; a value of true means that the user cannot change the widget's state. The default value is false.

### `Examples:`
#### In the example below, a simple slider is used to select a value between 1 and 100. The current volume is 50. The application will programmatically update the value of aria-valuenow in response to user input.

`HTML`
```html
<button role="switch" aria-checked="true"
        id="speakerPower" class="switch">
  <span>off</span>
  <span>on</span>
</button>
<label for="speakerPower" class="switch">Speaker power</label>
```
---
`CSS`
```css
button.switch {
  margin: 0;
  padding: 0;
  width: 70px;
  height: 26px;
  border: 2px solid black;
  display: inline-block;
  margin-right: 0.25em;
  line-height: 20px;
  vertical-align: middle;
  text-align: center;
  font: 12px "Open Sans", "Arial", serif;
}

button.switch span {
  padding: 0 4px;
  pointer-events: none;
}

[role="switch"][aria-checked="false"] :first-child,
[role="switch"][aria-checked="true"] :last-child {
  background: #262;
  color: #eef;
}

[role="switch"][aria-checked="false"] :last-child,
[role="switch"][aria-checked="true"] :first-child {
  color: #bbd;
}

label.switch {
  font: 16px "Open Sans", "Arial", sans-serif;
  line-height: 20px;
  user-select: none;
  vertical-align: middle;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
}
```


`JS`
```js
document.querySelectorAll(".switch").forEach(function(theSwitch) {
  theSwitch.addEventListener("click", handleClickEvent, false);
});

function handleClickEvent(evt) {
  let el = evt.target;

  if (el.getAttribute("aria-checked") == "true") {
    el.setAttribute("aria-checked", "false");
  } else {
    el.setAttribute("aria-checked", "true");
  }
}
```
---

### ARIA: Tab  role [`docs`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role)

* #### The ARIA tab role indicates an interactive element inside a tablist that, when activated, displays its associated tabpanel.
* #### An element with the tab role controls the visibility of an associated element with the tabpanel role. The common user experience pattern is a group of visual tabs above, or to the side of, a content area, and selecting a different tab changes the content and makes the selected tab more prominent than the other tabs.
* #### Elements with the role tab must either be a child of an element with the tablist role, or have their id as part of the aria-owns property of a tablist. This combination identifies to assistive technology that the element is part of a group of related elements. Some assistive technology will provide a count of the number of tab role elements inside a tablist, and inform users of which tab they currently have targeted. Further, an element with the tab role should contain the aria-controls property identifying a corresponding tabpanel (that has a tabpanel role) by that element's id. When an element with the tabpanel role has focus, or a child of it has focus, that indicates that the connected element with the tab role is the active tab in a tablist.
* #### When elements with the tab role are selected or active they should have their aria-selected attribute set to true. Otherwise, their aria-selected attribute should be set to false. When a tab is selected or active, its corresponding controlled tabpanel should have its aria-expanded attribute set to true and its hidden attribute set to false, otherwise the reverse.

* `aria-selected _attribute_`: boolean
* `aria-controls **attribute**`: id of element with tabpanel role
* `id`: content
### `Examples:`
#### In the example below, a simple slider is used to select a value between 1 and 100. The current volume is 50. The application will programmatically update the value of aria-valuenow in response to user input.

`HTML`
```html
<div class="tabs">
  <div role="tablist" aria-label="Sample Tabs">
    <button role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1" tabindex="0">
      First Tab
    </button>
    <button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" tabindex="-1">
      Second Tab
    </button>
    <button role="tab" aria-selected="false" aria-controls="panel-3" id="tab-3" tabindex="-1">
      Third Tab
    </button>
  </div>
  <div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
    <p>Content for the first panel</p>
  </div>
  <div id="panel-2" role="tabpanel" tabindex="0" aria-labelledby="tab-2" hidden>
    <p>Content for the second panel</p>
  </div>
  <div id="panel-3" role="tabpanel" tabindex="0" aria-labelledby="tab-3" hidden>
    <p>Content for the third panel</p>
  </div>
</div>
```
---

`JS`
```js
window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll('[role="tab"]');
  const tabList = document.querySelector('[role="tablist"]');

  // Add a click event handler to each tab
  tabs.forEach(tab => {
    tab.addEventListener("click", changeTabs);
  });

  // Enable arrow navigation between tabs in the tab list
  let tabFocus = 0;

  tabList.addEventListener("keydown", e => {
    // Move right
    if (e.keyCode === 39 || e.keyCode === 37) {
      tabs[tabFocus].setAttribute("tabindex", -1);
      if (e.keyCode === 39) {
        tabFocus++;
        // If we're at the end, go to the start
        if (tabFocus >= tabs.length) {
          tabFocus = 0;
        }
        // Move left
      } else if (e.keyCode === 37) {
        tabFocus--;
        // If we're at the start, move to the end
        if (tabFocus < 0) {
          tabFocus = tabs.length - 1;
        }
      }

      tabs[tabFocus].setAttribute("tabindex", 0);
      tabs[tabFocus].focus();
    }
  });
});

function changeTabs(e) {
  const target = e.target;
  const parent = target.parentNode;
  const grandparent = parent.parentNode;

  // Remove all current selected tabs
  parent
          .querySelectorAll('[aria-selected="true"]')
          .forEach(t => t.setAttribute("aria-selected", false));

  // Set this tab as selected
  target.setAttribute("aria-selected", true);

  // Hide all tab panels
  grandparent
          .querySelectorAll('[role="tabpanel"]')
          .forEach(p => p.setAttribute("hidden", true));

  // Show the selected panel
  grandparent.parentNode
          .querySelector(`#${target.getAttribute("aria-controls")}`)
          .removeAttribute("hidden");
}

```
---
### ARIA: Textbox   role [`docs`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role)

* #### The `textbox` role is used to identify an element that allows the input of free-form text. Whenever possible, rather than using this role, use an `<input> `element with `type="text"`, for single-line input, or a `<textarea>` element for multi-line input.
* #### When an element has the textbox role, the browser sends an accessible textbox event to assistive technologies, which can then notify the user about it.
* #### The default is a single line input, in which Return or Enter submits the form; in this case, it is preferable to use an HTML `<input>` with `type="text"`. To create a multi-line text box which supports line breaks, as in an HTML `<textarea>`, set `aria-multiline="true"`. Including the HTML contenteditable attribute ensures the text node is editable.

### `Associated ARIA properties`: Taking as it's value the ID of is either a descendant of the element with DOM focus or is a logical descendant as indicated by the aria-owns attribute, it indicates when that element has focus, when it is part of a composite widget such as a combobox. For example, in a combobox, focus may remain on the textbox while the value of aria-activedescendant on the textbox element refers to a descendant of a popup listbox that is controlled by the textbox.This attribute must be updated programmatically as the focus changes.

---
* ### `aria-activedescendant attribute`: 
* ### `aria-autocomplete attribute`: Indicates whether and how the user's input into the field could trigger display of a prediction of the intended value. It supports the following values:
#### * `inline`: Predicted text is inserted after the caret.
#### * `list`: Predicted text is presented as a collection of values.
#### * `both`: Predicted text is presented as a collection of values, with the text needed to complete one value inserted after the caret.
#### * `none` (default): Predicted text is not offered.

---
* ### `aria-multiline attribute`: 
  #### `Enter`
    or
  #### `Return`
#### will create a line break rather than submitting the form. ARIA does not alter the behavior of the element; rather this feature must be controlled by the developer. If false is set, or the attribute is omitted and defaults to false, the user expectation is that the control is a single line text box, and
#### `Enter`
    or
#### `Return`
####submits the form.

---
* ### `aria-placeholder attribute`: Represents a hint (word or phrase) to the user about what to enter into the text field. The hint should be a sample value or a brief description of the expected format.This information should not be used as a substitute for a label: a label is focusable, permanent, indicates what kind of information is expected, and increases the hit area for setting focus on the control, whereas placeholder text is only temporary hint about the expected value, which if implemented incorrectly can decrease accessibility. The placeholder should be visible when the control's value is the empty string such as when the control first receives focus and when users remove a previously-entered value. Instead of using` aria-placeholder`, use the semantic `<input type="text">` or `<textarea>` with a placeholder attribute.
---
* ### `aria-readonly attribute`: Indicates that the user cannot modify the value of the text field. Instead of using `aria-readonly`, use the semantic `<input type="text">` or `<textarea>` with a readonly attribute.
---
* ### `aria-required  attribute`: Indicates that a value must be provided for the field before it is submitted. Instead of using `aria-required`, use the semantic `<input type="text">` or `<textarea>` with a required attribute.
---
## `Examples`