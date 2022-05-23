import { FC, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./LightBox.scss";
import { useDispatch } from "react-redux";
import { setOpenLightBox } from "../../redux/actions/actionCreators";

interface Props {
  message: string;
}

const LightBox: FC<Props> = ({ message }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(setOpenLightBox(false));
    }, 5000);
  }, []);
  return (
    <div className="lightBox__container">
      <p className="lightBox__text">{message}</p>
    </div>
  );
};
export default LightBox;
