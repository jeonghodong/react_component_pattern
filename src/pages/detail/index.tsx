import { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { goHome } from "@/hooks/goPages";
import { handleInputChange } from "./hooks/handleInputChange";
import { alertButtonClick } from "./hooks/alertButtonClick";

export default function Home() {
  const [text, setText] = useState("");

  return (
    <>
      <h1>상세페이지입니다.</h1>
      <Input type="text" placeholder="무언가를 입력해주세요." value={text} onChange={handleInputChange(setText)} />
      <Button text="상세페이지 클릭" onClick={() => alertButtonClick(text)} variant="contained" size="large" />
      <Button text="홈페이지로 이동" onClick={goHome} variant="contained" size="large"></Button>
    </>
  );
}
