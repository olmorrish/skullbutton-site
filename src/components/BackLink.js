import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { Link } from "../resources/styles";

// TODO tab navigation doesn't work
const BackLink = ({ text, route }) => {
  const navigate = useNavigate();
  return (
    <Link
      role="link"
      onClick={() => {
        navigate(route);
      }}
      tabIndex="0"
    >
      {text}
    </Link>
  );
};

export default BackLink;
