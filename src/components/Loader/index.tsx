import React from "react"
import styles from "./styles.module.css"
import classnames from "classnames/bind"
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const cx = classnames.bind(styles)
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin/>;

const Loader = () => (
   <div className={cx('container')}>
      <Spin spinning indicator={antIcon} style={{ fontSize: 26 }}/>
   </div>
)

export default Loader