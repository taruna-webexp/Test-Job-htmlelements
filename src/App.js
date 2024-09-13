import { Grid } from "smart-webcomponents-react/grid";
import { GetData } from "./component/common/TableData";
import "smart-webcomponents-react/source/styles/smart.default.css";
import {
  selection,
  behavior,
  sorting,
  filtering,
  editing,
} from "./component/table/Features";
import { columns } from "./component/table/TableColumns";
export default function App() {
  const dataSource = GetData(100); //Get table data
  return (
    <div className="data-grid-container">
      <div className="demo-description">
        <h1>DataGrid Add New Column</h1>
      </div>
      {/* Table data grid */}
      <Grid
        id="grid"
        dataSource={dataSource}
        selection={selection}
        behavior={behavior}
        sorting={sorting}
        filtering={filtering}
        editing={editing}
        columns={columns}
      ></Grid>
    </div>
  );
}
