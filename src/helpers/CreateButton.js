import React from "react";
import cx from "classnames";

const CreateButton = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button className={cx("CreateButton", className)} ref={ref} {...props} />
  );
});

export default CreateButton;
