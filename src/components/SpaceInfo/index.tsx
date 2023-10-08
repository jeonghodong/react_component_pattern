import { Box } from "@mui/material";

const SpaceInfoHeader = ({ children }: any) => {
  return <Box style={{ backgroundColor: "red" }}>{children}</Box>;
};

const SpaceNameText = ({ name }: any) => {
  return <p style={{ backgroundColor: "blue" }}>{name}</p>;
};

const SpaceInfoInput = ({ children }: any) => {
  return <input style={{ width: "50%" }}>{children}</input>;
};

const SpaceInfoMain = ({ children }: any) => {
  return <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>;
};

export const SpaceInfo = Object.assign(SpaceInfoMain, {
  header: SpaceInfoHeader,
  InputBox: SpaceInfoInput,
  nameText: SpaceNameText,
});
