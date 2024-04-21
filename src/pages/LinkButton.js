import { Button, Popover } from "antd";
import { styled } from "styled-components";

const Text = styled.b`
  color: black;
  font-family: "Anonymous Pro";
  font-weight: 700;
`;

const LinkButton = ({ name, content, onClick }) => {
  return (
    <Popover
      content={
        <div>
          <p>
            {content}
          </p>
        </div>
      }
      title={name}
      placement="right"
    >
      <Button shape="round" size="large" onClick={onClick}>
        <Text>{name}</Text>
      </Button>
    </Popover>
  );
};

export default LinkButton;
