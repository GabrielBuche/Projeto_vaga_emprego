import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { PasswordContainer, PasswordToggle } from "./styles";
import { InputComponent } from "../input";
import { InputProps as AntdInputProps } from "antd";
import { useState } from "react";


export function InputPassword(rest: AntdInputProps) {
  
    const [ showPassword, setShowPassword ] = useState<boolean>(false)

    function togglePassword(){
        setShowPassword(!showPassword);
    }

    return (
        <PasswordContainer>
            <InputComponent {...rest} type={showPassword ? "text" : "password"} />
            <PasswordToggle
                type="ghost"
                onClick={togglePassword}
                icon={showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
            />
        </PasswordContainer>
    );
}