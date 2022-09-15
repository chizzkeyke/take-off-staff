import React from "react"
import styles from "./styles.module.css"
import classnames from "classnames/bind";
import { Input as ANTDInput } from "antd";

const cx = classnames.bind(styles)

interface InputPropsI {
   type: string
   value?: string
   label?: string
   placeholder?: string
   error?: string
   onChange?: () => void
   customClassname?: string
   customContainerClassname?: string
}

const Input: React.FC<InputPropsI> =
   ({
       type,
       label,
       placeholder,
       error,
       onChange,
       customClassname,
       customContainerClassname,
       ...props
    }) => (
      <div className={cx("container", customContainerClassname)}>
         <div>
            <ANTDInput
               type={type}
               onChange={onChange}
               placeholder={placeholder}
               className={cx("input", customClassname)}
               {...props}
            />
         </div>
         <div className={cx("error")}>
            <span>{error}</span>
         </div>
      </div>
   )

export default Input