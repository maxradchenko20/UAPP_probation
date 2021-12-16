// Button
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
  if (name.length > 0) {
    listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(name));

    // Add the new name to the list.
    let list = document.getElementById('nameList');
    list.appendChild(listItem);
  }
}


// Checkbox
function changeCheckbox(event) {
  let item = document.getElementById('chkPref');
  switch (item.getAttribute('aria-checked')) {
    case "true":
      item.setAttribute('aria-checked', "false");
      break;
    case "false":
      item.setAttribute('aria-checked', "true");
      break;
  }
}

//Link
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

// slider
spanElem.addEventListener('click', navigateLink);
spanElem.addEventListener('keydown', navigateLink);


function outputUpdate(vol) {
  document.querySelector('#volume').value = vol;
}

//Switch
document.querySelectorAll(".switch").forEach(function (theSwitch) {
  theSwitch.addEventListener("click", handleClickEvent, false);
});

function handleClickEvent(evt) {
  let el = evt.target;

  if (el.getAttribute("aria-checked") === "true") {
    el.setAttribute("aria-checked", "false");
  } else {
    el.setAttribute("aria-checked", "true");
  }
}

//Tab
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

