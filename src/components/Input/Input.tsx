import { OutlinedInput } from "@mui/material";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ type, placeholder, value, onChange }: InputProps) {
  return <OutlinedInput type={type} placeholder={placeholder} value={value} onChange={onChange} />;
}
