import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "./../../data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <div className="title">{item.title}</div>

          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="listItem">
              <img src={listItem.icon} alt={listItem.title} />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
