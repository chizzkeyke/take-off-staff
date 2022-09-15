import React from "react"
import { useFormContext, Controller } from "react-hook-form";
import { Input } from "../index";
import styles from "./styles.module.css"
import classnames from "classnames/bind";
import { InputRef } from "antd";

const cx = classnames.bind(styles)

interface ControlledInputPropsI {
   type: string
   name: string
   placeholder?: string
   rules?: { required: true }
   ref?: React.Ref<InputRef>
}

const ControlledInput: React.FC<ControlledInputPropsI> = (
   {
      name,
      placeholder,
      rules,
      type,
      ...props
   }
) => {
   const { control } = useFormContext()
   return (
      <Controller
         name={name}
         rules={rules}
         control={control}
         render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
            <Input
               type={type}
               customClassname={cx("input-custom")}
               value={value}
               placeholder={placeholder}
               onChange={onChange}
               error={error?.message}
               ref={ref}
               {...props}
            />
         )}
      />
   )
}

export default ControlledInput