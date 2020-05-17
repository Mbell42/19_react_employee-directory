//DEPENDENCIES
import React from "react";

// This component allows developer to set a column's "size" prop instead of its className
// This also allows the developer to omit the col- at the start of each Bootstrap column class, (example: size="md-12" instead of className="col-md-12")

function Col(props) {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  return <div className={size} {...props} />;
}

export default Col;
