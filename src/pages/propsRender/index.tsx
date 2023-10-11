import Title from "@/components/Title";
import React from "react";

const index = () => {
  return (
    <>
      <Title label="안녕, 나는 라벨 prop 이야." render={() => <h1>안녕, 나는 렌더 prop 이야.</h1>} />
    </>
  );
};

export default index;
