import { useRef } from "react";

interface InputProps {
  className?: string;
  value?: string;
  onChange?: (value: any) => void;
  autofocus?: boolean;
  type?: string;
  placeholder?: string;
  disabled?:boolean
}
const Input = (props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    autofocus,
    disabled,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <>
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        className={className}
        disabled={disabled}
        {...otherProps}
      />
    </>
  );
};

export default Input;
