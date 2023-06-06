import { useState } from "react";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";

export default function Home() {
  const [text, setText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleButtonClick = () => {
    alert(text);
  };

  return (
    <>
      <h1>상세페이지입니다.</h1>
      <Input type="text" placeholder="상세페이지 무언가를 입력해주세요." value={text} onChange={handleInputChange} />
      <Button text="상세페이지 클릭" onClick={handleButtonClick} variant="contained" size="large" />
    </>
  );
}
