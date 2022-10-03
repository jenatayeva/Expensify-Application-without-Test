import React from "react";

const Action = (props) => (
  <div>
    <button onClick={props.handlePick} disabled={!props.hasOption}>
      What shoul i do ?
    </button>{" "}
  </div>
);

export default Action;
