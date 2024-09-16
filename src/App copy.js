import React, { useEffect } from "react";
import { Grid } from "smart-webcomponents-react/grid";
import "smart-webcomponents-react/source/styles/smart.default.css";
import { GetData } from "./component/common/TableData";
import {
  selection,
  behavior,
  sorting,
  filtering,
  editing,
} from "./component/table/Features";

export const columns = [
  {
    label: "First Name",
    dataField: "firstName",
    editor: {
      required: true,
      template: "input",
    },
  },
  {
    label: "Last Name",
    dataField: "lastName",
    editor: {
      required: true,
      template: "autoComplete",
    },
  },
  {
    label: "Product",
    width: 200,
    dataField: "productName",
    editor: {
      required: true,
      template: function (editor, container, column) {
        // Custom autocomplete logic
        const inputElement = document.createElement("input");
        inputElement.setAttribute("list", "autocomplete-options");
        inputElement.value = editor.value || "";
        inputElement.oninput = (e) => {
          editor.value = e.target.value;
        };

        //     return inputElement;
      },
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
];

export default function App() {
  const dataSource = GetData(100); // Get table data

  // Safely check the template type
  const safeTemplateCheck = (template) => {
    if (typeof template === "string") {
      return template.indexOf("your-condition") !== -1;
    } else if (typeof template === "function") {
      console.log("Template is a function", template);
      return false;
    }
    return false;
  };

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return (
    <div className="data-grid-container">
      <div className="demo-description">
        <h1>DataGrid with Custom Autocomplete Editor</h1>
      </div>
      <Grid
        id="grid"
        dataSource={dataSource}
        selection={selection}
        behavior={behavior}
        sorting={sorting}
        filtering={filtering}
        editing={editing}
        columns={columns} // Pass the updated columns with custom editor
      />
    </div>
  );
}
