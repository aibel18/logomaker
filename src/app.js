const MDCRipple = mdc.ripple.MDCRipple;
const MDCSelect = mdc.select.MDCSelect;

// select.listen('MDCSelect:change', () => {
//   console.log(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
// });

document.querySelectorAll('.mdc-select').forEach(b => {
  MDCSelect.attachTo(b);
  console.log("jje");
});

const foos = [].map.call(document.querySelectorAll('.vt-ripple'), function (el) {
  return new MDCRipple(el);
});