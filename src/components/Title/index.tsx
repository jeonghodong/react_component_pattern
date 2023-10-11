import React from "react";

function Title({ label, render }: any) {
  return (
    <>
      <h2>{label}</h2>
      {render()}
    </>
  );
}

export default Title;
