import Button from "@/components/Button";
import Input from "@/components/Input";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleButtonClick = () => {
    alert(text);
  };

  const handleDetailGoClick = () => {
    router.push("/detail");
  };

  return (
    <>
      <h1>홈페이지입니다.</h1>
      <Input type="text" placeholder="홈페이지 무언가를 입력해주세요." value={text} onChange={handleInputChange} />
      <Button text="홈페이지 클릭" onClick={handleButtonClick} variant="contained" size="small" />
      <Button text="상세페이지로 이동하기" onClick={handleDetailGoClick} variant="outlined" size="small" />
      <Button text="다른세상으로 이동하기" onClick={() => router.push("/wtf")} variant="texted" size="small" />
    </>
  );
}
