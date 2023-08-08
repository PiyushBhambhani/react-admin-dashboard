import { FormEvent } from "react";
import "./add.scss";
import { GridColDef } from "@mui/x-data-grid";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Add = ({ slug, columns, setOpen }: Props) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // Add item to db n all
    // axios.post(`/api/${slug}s`)
  };

  return (
    <div className="add">
      <div className="modal">
        <div className="close" onClick={() => setOpen(false)}>
          X
        </div>
        <h1>Add new {slug} </h1>
        <form onSubmit={handleSubmit}>
          {columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}

          <button>Send</button>
        </form>
      </div>
    </div>
  );
};
