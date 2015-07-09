define([
  'knockout',
  'text!./color-list.html'], function(ko, template) {

  function ColorsViewModel(params) {

    return colors;
  }
  return { viewModel: ColorsViewModel, template: template };
});
