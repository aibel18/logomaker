const MDCRipple = mdc.ripple.MDCRipple;
const MDCSelect = mdc.select.MDCSelect;
const MDCTextField = mdc.textField.MDCTextField;

const MDCTopAppBar = mdc.topAppBar.MDCTopAppBar
// select.listen('MDCSelect:change', () => {
//   console.log(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
// });



var app = new Vue({
  el: '#app',
  data: {
    message: 'Testing Vue with Material Components',
    organization: ""
  },
  mounted: function () {
    console.log("init app");
    document.querySelectorAll('.mdc-select').forEach(b => {
      MDCSelect.attachTo(b);
    });

    const foos = [].map.call(document.querySelectorAll('.vt-ripple'), function (el) {
      return new MDCRipple(el);
    });

    const text = [].map.call(document.querySelectorAll('.mdc-text-field'), function (el) {
      return new MDCTextField(el);
    });

    const topAppBarElement = document.querySelector('.mdc-top-app-bar');
    const topAppBar = new MDCTopAppBar(topAppBarElement);
  }
});

