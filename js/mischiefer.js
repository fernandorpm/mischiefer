const light1 = '#fff';
const light2 = '#f5f9fc';
const light3 = '#f1f4f7';
const light4 = '#d7dee6';
const light5 = '#9eadbe';

const dark1 = '#37374f';
const dark2 = '#2f2f40';
const dark3 = '#474763';
const dark4 = '#5d5d7a';
const dark5 = '#adafc3';

if (document.cookie.includes('equilibrium=dark')) MakeItDark();
else MakeItLight();

const switchers = document.getElementsByClassName('switch');
for (let i = 0; i < switchers.length; i++) {
  let switcher = switchers[i];
  switcher.addEventListener("click", CauseMischief);
}

function CauseMischief() {
  SetTransitionDuration(0.5);

  if (document.cookie.includes('equilibrium=dark')) MakeItLight();
  else MakeItDark();
}

// MAKE IT LIGHT ==================================================================

function MakeItLight() {
  SetBaseTextColor(dark4);

  // Background Color
  SetBackgroundColor(light1, 'navbar');
  SetBackgroundColor(light1, 'navbar-1');
  SetBackgroundColor(light1, 'navbar-2');
  SetBackgroundColor(light1, 'navbar-3');

  // Text Color
  SetTextColor(dark3, 'text-color-1');
  SetTextColor(dark4, 'text-color-2');
  SetTextColor(dark5, 'text-color-3');

  // Mischiefer Logo
  RemoveClass('mischiefer-face-dark', 'mischiefer-face');

  // Card
  SetBackgroundColor(light1, 'card');
  SetBorderColor(light3, 'card-title');

  // Box Shadow
  SetBoxShadow('rgba(150, 177, 205, 0.15)', 'box-shadow');

  // Border
  for (let i = 0; i < 7; i++) {
    SetBorderColor(light4, 'b-' + i);
    SetBorderColor(light4, 'by-' + i);
    SetBorderColor(light4, 'bt-' + i);
    SetBorderColor(light4, 'bb-' + i);
    SetBorderColor(light4, 'bx-' + i);
    SetBorderColor(light4, 'br-' + i);
    SetBorderColor(light4, 'bl-' + i);
  }

  // Default Button (Purple)
  SetBorderColor('#845dec', 'button-glass');
  SetBackgroundColor('rgba(0, 0, 0, 0)', 'button-glass');

  // Light & Dark Background
  SetBackgroundColor(light1, 'bg-color-1');
  SetBackgroundColor(light2, 'bg-color-2');
  SetBackgroundColor(light3, 'bg-color-3');
  SetBackgroundColor(light4, 'bg-color-4');
  SetBackgroundColor(light5, 'bg-color-5');

  // Colored Background
  SetBackgroundColor(dark3, 'bg-color-reverse');
  SetBackgroundColor('#845dec', 'bg-color-purple');
  SetBackgroundColor('#51adf8', 'bg-color-blue');
  SetBackgroundColor('#37af73', 'bg-color-green');
  SetBackgroundColor('#ffc14e', 'bg-color-yellow');
  SetBackgroundColor('#fa8072', 'bg-color-salmon');
  SetBackgroundColor('#e34646', 'bg-color-red');

  // Colored Button Solid
  SetBackgroundColor(dark3, 'button-solid-reverse');
  SetTextColor(light3, 'button-solid-reverse');
  SetBackgroundColor('#845dec', 'button-solid-purple');
  SetTextColor(light2, 'button-solid-purple');
  SetBackgroundColor('#51adf8', 'button-solid-blue');
  SetTextColor(light2, 'button-solid-blue');
  SetBackgroundColor('#37af73', 'button-solid-green');
  SetTextColor(light2, 'button-solid-green');
  SetBackgroundColor('#ffc14e', 'button-solid-yellow');
  SetTextColor(dark3, 'button-solid-yellow');
  SetBackgroundColor('#fa8072', 'button-solid-salmon');
  SetTextColor(light2, 'button-solid-salmon');
  SetBackgroundColor('#e34646', 'button-solid-red');
  SetTextColor(light2, 'button-solid-red');

  // Button Empty
  RemoveClass('button-empty-dark', 'button-empty');

  // Colored Button Secondary
  RemoveClass('button-secondary-reverse-dark', 'button-secondary-reverse');

  // Form
  RemoveClassByTag('form-dark', 'form');

  // Light & Dark Border Color
  SetBorderColor(light1, 'b-color-1');
  SetBorderColor(light2, 'b-color-2');
  SetBorderColor(light3, 'b-color-3');
  SetBorderColor(light4, 'b-color-4');
  SetBorderColor(light5, 'b-color-5');

  // Colored Border Color
  SetBorderColor(dark3, 'b-color-reverse');
  SetBorderColor('#51adf8', 'b-color-blue');
  SetBorderColor('#37af73', 'b-color-green');
  SetBorderColor('#ffc14e', 'b-color-yellow');
  SetBorderColor('#fa8072', 'b-color-salmon');
  SetBorderColor('#e34646', 'b-color-red');

  SetTextColor(light5, 'text-subtitle');

  document.body.style.backgroundColor = light2;

  let d = new Date();
  d.setTime(d.getTime() + (60 * 24 * 60 * 60 * 1000));

  document.cookie = "equilibrium=light;expires=" + d + ";SameSite=None;Secure";
}

// MAKE IT DARK ===================================================================

function MakeItDark() {
  SetBaseTextColor(light4);

  // Background Color
  SetBackgroundColor(dark1, 'navbar');
  SetBackgroundColor(dark1, 'navbar-1');
  SetBackgroundColor(dark1, 'navbar-2');
  SetBackgroundColor(dark1, 'navbar-3');

  // Text Color
  SetTextColor(light3, 'text-color-1');
  SetTextColor(light4, 'text-color-2');
  SetTextColor(light5, 'text-color-3');

  // Mischiefer Logo
  AddClass('mischiefer-face-dark', 'mischiefer-face');

  // Card
  SetBackgroundColor(dark1, 'card');
  SetBorderColor(dark3, 'card-title');

  // Box Shadow
  SetBoxShadow('rgba(28, 28, 38, 0.2)', 'box-shadow');

  // Default Button
  SetBorderColor('#6043b1', 'button-glass');
  SetBackgroundColor('rgba(0, 0, 0, 0)', 'button-glass');

  // Border
  for (let i = 0; i < 7; i++) {
    SetBorderColor(dark3, 'b-' + i);
    SetBorderColor(dark3, 'by-' + i);
    SetBorderColor(dark3, 'bt-' + i);
    SetBorderColor(dark3, 'bb-' + i);
    SetBorderColor(dark3, 'bx-' + i);
    SetBorderColor(dark3, 'br-' + i);
    SetBorderColor(dark3, 'bl-' + i);
  }

  // Light & Dark Background
  SetBackgroundColor(dark1, 'bg-color-1');
  SetBackgroundColor(dark2, 'bg-color-2');
  SetBackgroundColor(dark3, 'bg-color-3');
  SetBackgroundColor(dark4, 'bg-color-4');
  SetBackgroundColor(dark5, 'bg-color-5');

  // Colored Background
  SetBackgroundColor(light4, 'bg-color-reverse');
  SetBackgroundColor('#6043b1', 'bg-color-purple');
  SetBackgroundColor('#4795d4', 'bg-color-blue');
  SetBackgroundColor('#3faa75', 'bg-color-green');
  SetBackgroundColor('#e6ad44', 'bg-color-yellow');
  SetBackgroundColor('#e66759', 'bg-color-salmon');
  SetBackgroundColor('#be4040', 'bg-color-red');

  // Colored Button Solid
  SetBackgroundColor(dark5, 'button-solid-reverse');
  SetTextColor(dark3, 'button-solid-reverse');
  SetBackgroundColor('#6043b1', 'button-solid-purple');
  SetTextColor(light2, 'button-solid-purple');
  SetBackgroundColor('#4795d4', 'button-solid-blue');
  SetTextColor(light2, 'button-solid-blue');
  SetBackgroundColor('#3faa75', 'button-solid-green');
  SetTextColor(light2, 'button-solid-green');
  SetBackgroundColor('#e6ad44', 'button-solid-yellow');
  SetTextColor(dark3, 'button-solid-yellow');
  SetBackgroundColor('#e66759', 'button-solid-salmon');
  SetTextColor(light2, 'button-solid-salmon');
  SetBackgroundColor('#be4040', 'button-solid-red');
  SetTextColor(light2, 'button-solid-red');

  // Button Empty
  AddClass('button-empty-dark', 'button-empty');

  // Colored Button Secondary
  AddClass('button-secondary-reverse-dark', 'button-secondary-reverse');

  // Form
  AddClassByTag('form-dark', 'form');

  // Light & Dark Border Color
  SetBorderColor(dark1, 'b-color-1');
  SetBorderColor(dark2, 'b-color-2');
  SetBorderColor(dark3, 'b-color-3');
  SetBorderColor(dark4, 'b-color-4');
  SetBorderColor(dark5, 'b-color-5');

  // Colored Border Color
  SetBorderColor(light4, 'b-color-reverse');
  SetBorderColor('#4795d4', 'b-color-blue');
  SetBorderColor('#3faa75', 'b-color-green');
  SetBorderColor('#e6ad44', 'b-color-yellow');
  SetBorderColor('#e66759', 'b-color-salmon');
  SetBorderColor('#be4040', 'b-color-red');

  SetTextColor(dark5, 'text-subtitle');

  document.body.style.backgroundColor = dark2;

  let d = new Date();
  d.setTime(d.getTime() + (60 * 24 * 60 * 60 * 1000));

  document.cookie = "equilibrium=dark;expires=" + d + ";SameSite=None;Secure";
}

// DEFAULT FUNCTIONS ==============================================================

function AddClass(classAdd, className) {
  let all = document.getElementsByClassName(className);
  for (let i = 0; i < all.length; i++) {
    all[i].classList.add(classAdd);
  }
}

function RemoveClass(classRemove, className) {
  let all = document.getElementsByClassName(className);
  for (let i = 0; i < all.length; i++) {
    all[i].classList.remove(classRemove);
  }
}

function AddClassByTag(classAdd, tagName) {
  let all = document.getElementsByTagName(tagName);
  for (let i = 0; i < all.length; i++) {
    all[i].classList.add(classAdd);
  }
}

function RemoveClassByTag(classRemove, tagName) {
  let all = document.getElementsByTagName(tagName);
  for (let i = 0; i < all.length; i++) {
    all[i].classList.remove(classRemove);
  }
}

function SetDisplay(displayType, className) {
  let all = document.getElementsByClassName(className);
  for (let i = 0; i < all.length; i++) {
    all[i].style.display = displayType;
  }
}

function SetTransitionDuration(time) {
  let all = document.getElementsByTagName('*');
  for (let i = 0; i < all.length; i++) {
    all[i].style.transitionDuration = time + 's';
  }
}

function SetBaseTextColor(color) {
  let all = document.getElementsByTagName('*');
  for (let i = 0; i < all.length; i++) {
    all[i].style.color = color;
  }
}

function SetTextColor(color, className) {
  let all = document.getElementsByClassName(className);
  for (let i = 0; i < all.length; i++) {
    all[i].style.color = color;
  }
}

function SetBackgroundColor(color, className) {
  let all = document.getElementsByClassName(className);
  for (let i = 0; i < all.length; i++) {
    all[i].style.backgroundColor = color;
  }
}

function SetBorderColor(color, className) {
  let all = document.getElementsByClassName(className);
  for (let i = 0; i < all.length; i++) {
    all[i].style.borderColor = color;
  }
}

function SetBoxShadow(color, className) {
  let all = document.getElementsByClassName(className);
  for (let i = 0; i < all.length; i++) {
    all[i].style.boxShadow = '0px 4px 20px ' + color;
  }
}

