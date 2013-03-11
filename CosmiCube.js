// ddd
var CC = CosmiCube = {}; //
CC.getControl = function (ctrl) {
    if (!ctrl) return null;
    if (typeof ctrl == "string")
        return document.getElementById(ctrl);
    if (typeof ctrl == 'Object')
        return ctrl;
    return null;
};
CC.UpdateControlModel = function () {

};
CC.AddBindings = function () {
};
CC.ControlType = {
    TextBox: "TextBox",
    CheckBox: "CheckBox",
    DropDownList: "DropDownList",
    RadioBox: "RadioBox",
    Button: "Button",
    DataGrid: "DataGrid"
};
CC.CreateBinding = function (control, controlModel, type) {
    return CBF.CreateBinding(control, controlModel, type);
}

 CC.ControlBindingMapping= CC.CBM  = function (controlId, propertyName, controlType) {
    this.ControlId = controlId;
    this.PropertyName = propertyName;
    this.ControlType = controlType || CC.ControlType.TextBox;
}

CC.ViewBinding = function (viewModel, view, mappings) {
    this.bindingMappings = mappings;
    this.viewModel = viewModel;
    this.view = view;
    this.applyBindings();
};
CC.ViewBinding.prototype.bindingMappings = [];
CC.ViewBinding.prototype.viewModel = null;
CC.ViewBinding.prototype.view = null;
CC.ViewBinding.prototype.applyBindings = function () {
    for (var i = 0; i < this.bindingMappings.length; i++) {
        var mapping = this.bindingMappings[i];
        var binding = CC.CreateBinding(mapping.ControlId, this.viewModel[mapping.PropertyName], mapping.ControlType);
    }
};
CC.ViewBinding.Init = function (viewModel, view, mappings) {
    var viewBinding = new CC.ViewBinding(viewModel, view, mappings);
};
