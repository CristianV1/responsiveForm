import { useDispatch, useSelector } from "react-redux";
import { setCurrentFlight } from "../../redux/actions/actionCreators";
import { CgMoreO } from "react-icons/cg";
import "./Navbar.scss";
import { useState } from "react";

interface flight {
  name: string;
  id: string;
}

interface Props {
  data?: flight[];
}

const Navbar: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  const [openResponsive, setOpenResponsive] = useState(false);

  const setAirport = (name: string) => {
    dispatch(setCurrentFlight(name));
  };

  const responsiveMenu = () => {
    return openResponsive ? " navbar__open__responsive" : "";
  };

  const responsiveItems = () => {
    return openResponsive ? " navbar__open__item" : "";
  };

  return (
    <div className="navbar__container">
      <ul className={`navbar__items__container ${responsiveMenu()}`}>
        <CgMoreO
          onClick={() => {
            setOpenResponsive(!openResponsive);
          }}
          className="navbar__more__icon"
        />
        {data?.map((data, idx) => {
          return (
            <li
              className={`navbar__item ${responsiveItems()}`}
              onClick={() => {
                setAirport(data.name);
                setOpenResponsive(false);
              }}
              key={idx}
            >
              {data.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
