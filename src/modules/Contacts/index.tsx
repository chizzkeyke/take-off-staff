import React, { useState } from "react"
import styles from "./styles.module.css"
import classnames from "classnames/bind"
import { Table, Button } from "antd";
import { columns } from "./constants";
import { useTypedDispatchHook, useTypedSelectorHook } from "../../hooks/typedStoreHooks";
import { FormProvider, useForm } from "react-hook-form";
import { ModalCreatingContact, Search } from "./components";
import { LogoutThunk } from "../../thunk/auth/authActionThunk";
import { searchContact } from "../../store/contacts/actions";
import { SearchingContext } from "../../utils/searchingContext";

const cx = classnames.bind(styles)

export interface IContact {
   username: string
   phone: string
}

const Contacts: React.FC = () => {
   const [ search, setSearch ] = useState("")
   const methods = useForm<IContact>({
      defaultValues: {
         username: "",
         phone: ""
      }
   })
   const dispatch = useTypedDispatchHook()
   const { contacts, searchedContacts } = useTypedSelectorHook(state => state.contacts)
   const [ modalIsOpen, setModalIsOpen ] = useState<boolean>(false)

   const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value)
      dispatch(searchContact(event.target.value))
   }

   const handleModal = () => setModalIsOpen(!modalIsOpen)
   const logout = () => {
      dispatch(LogoutThunk())
   }

   const contactsForTable = contacts.map((contact, id) => ({ ...contact, key: id }))
   const searchingContactsForTable = searchedContacts.map((contact, id) => ({ ...contact, key: id }))
   const shownContacts =
      !!search
         ? searchingContactsForTable
         : contactsForTable

   return (
      <SearchingContext.Provider value={!!search}>
         <FormProvider {...methods}>
            <div className={cx("container")}>
               <h1>Contacts</h1>
               <Search
                  value={search}
                  handleChange={onHandleChange}
               />
               <Table
                  dataSource={shownContacts}
                  columns={columns}
                  pagination={false}
                  bordered
               />
               <ModalCreatingContact modalIsOpen={modalIsOpen} handleModal={handleModal}/>
               <Button type="primary" onClick={handleModal}>Add contact</Button>
               <Button type="dashed" onClick={logout}>Exit</Button>
            </div>
         </FormProvider>
      </SearchingContext.Provider>
   )
}

export default Contacts