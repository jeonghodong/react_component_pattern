export const handleInputChange = (setText: Function) => (e: React.ChangeEvent<HTMLInputElement>) => {
  setText(e.target.value);
};
