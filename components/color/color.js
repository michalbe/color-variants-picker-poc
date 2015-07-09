define(['knockout', 'text!./color.html'], function(ko, template) {

  function ColorViewModel(params) {
    var qty = ko.observable(0);

    var color = "Yellow";

    return {
      qty: qty,
      color: color
    };
  }
  return { viewModel: ColorViewModel, template: template };
});
