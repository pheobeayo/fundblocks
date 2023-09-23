import React from "react";
import { NavigateButton } from "./form.button.styles";

const FormButton = ({
  text,
  backgroundColor,
  color,
  borderColor,
  handleClick,
  width,
  marginLeft,
  disabled = false,
}) => {
  return (
    <>
      <NavigateButton
        backgroundColor={backgroundColor}
        color={color}
        borderColor={borderColor}
        onClick={() => handleClick()}
        type="button"
        width={width}
        disabled={disabled}
        marginLeft={marginLeft}
      >
        {text}
      </NavigateButton>
    </>
  );
};

export default FormButton;