export const columns = [
  {
    label: "First Name",
    dataField: "firstName",
    editor: {
      required: false,
      template: "input",
    },
    template: '<a href="https://www.google.com/" target="_blank">{{value}}</a>',
  },
  {
    label: "Last Name",
    dataField: "lastName",
    editor: {
      required: true,
      template: "input",
    },
  },
  {
    label: "Product",
    width: 200,
    dataField: "productName",
    editor: {
      required: true,
      template: "dropDownList",
    },
  },
  {
    label: "Available",
    dataField: "available",
    template: "checkBox",
    editor: "checkBox",
  },
  {
    label: "Quantity",
    dataField: "quantity",
    editor: "numberInput",
  },
  {
    label: "Unit Price",
    dataField: "price",
    editor: "numberInput",
    cellsFormat: "c2",
  },

  {
    label: "Country",
    dataField: "countryData",
    editor: {
      required: true,
      template: "autoComplete",
    },
  },
];
