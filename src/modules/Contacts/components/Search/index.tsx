import React from "react"
import styles from './styles.module.css'
import classnames from "classnames/bind";
import { Input } from "antd";
import { useTypedSelectorHook } from "../../../../hooks/typedStoreHooks";
import { arrayIsEmpty } from "../../../../utils/arrayIsEmpty";

const cx = classnames.bind(styles)

interface SearchPropsI {
   value: string
   handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Search: React.FC<SearchPropsI> = ({value, handleChange}) => {
   const { contacts } = useTypedSelectorHook(state => state.contacts)
   const contactsIsEmpty = arrayIsEmpty(contacts)

   return (
      <div className={cx('container')}>
         <Input
            onChange={handleChange}
            placeholder="Searching name"
            value={value}
            disabled={contactsIsEmpty}
         />
      </div>
   )
}

export default Search