define(['knockout'], function(ko) {
  FastClick.attach(document.body);
  ko.components.register('color', { require: 'components/color/color' });
  ko.components.register('colors', { require: 'components/color-list/color-list' });
  ko.applyBindings({});
});
