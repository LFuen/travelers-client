import React from "react";
import cx from "classnames";
import { LogButton } from "../styled/Styled";

const Button = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <LogButton className={cx("Button", className)} ref={ref} {...props}>
      Login
    </LogButton>
  );
});

export default Button;
