define(['knockout'], function(ko) {
  ko.components.register('color', { require: 'components/color/color' });
  ko.components.register('colors', { require: 'components/color-list/color-list' });
  ko.applyBindings({});
});
