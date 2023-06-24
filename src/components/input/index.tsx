import {  InputProps as AntdInputProps } from "antd";
import { Input } from "./styles";


interface InputProps extends AntdInputProps {}

export function InputComponent(props: InputProps) {
  return <Input {...props} />;
}