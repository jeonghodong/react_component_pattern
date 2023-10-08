import Button from "../Button";
import { SpaceInfo } from "../SpaceInfo/index";

const SpaceInfoCreateBox = () => {
  return (
    <SpaceInfo>
      <SpaceInfo.header>
        <Button text="생성하기" variant="texted" />
      </SpaceInfo.header>
      <SpaceInfo.InputBox />
      <SpaceInfo.nameText name="안녕" />
    </SpaceInfo>
  );
};

export default SpaceInfoCreateBox;
