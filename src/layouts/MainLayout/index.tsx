import React from "react"
import styles from "./styles.module.css"
import classnames from "classnames/bind";
import { Outlet } from "react-router-dom";

const cx = classnames.bind(styles)

const MainLayout: React.FC = () => {
   return (
      <div className={cx("container")}>
         <Outlet/>
      </div>
   )
}

export default MainLayout