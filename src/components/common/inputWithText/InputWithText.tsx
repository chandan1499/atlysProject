import { HTMLInputTypeAttribute } from "react";
import "./inputStyles.css";
import { useFormContext } from 'react-hook-form';


interface InputWithTextProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

const InputWithText = ({
  label,
  placeholder,
  type,
  name,
}: InputWithTextProps) => {
  const { register } = useFormContext();


  return (
    <>
      <h4 className="inputText">{label}</h4>
      <input
        className="inputField"
        type={type ?? "text"}
        placeholder={placeholder ?? label}
        {...register(name, {required: true})}
      />
    </>
  );
};

export default InputWithText;
