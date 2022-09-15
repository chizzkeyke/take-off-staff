import React, { useContext, useState } from "react"
import styles from "./styles.module.css"
import classnames from "classnames/bind";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useTypedDispatchHook } from "../../../../hooks/typedStoreHooks";
import { Button, Modal } from "antd";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import contacts, { IContact } from "../../index";
import { ControlledInput } from "../../../../components";
import { ContactI } from "../../../../store/contacts/types/reducerTypes";
import {
   editContact,
   deleteContact as deleteContactAction,
   deleteSearchingContact
} from "../../../../store/contacts/actions";
import { SearchingContext } from "../../../../utils/searchingContext";

const cx = classnames.bind(styles)

interface TableActionButtonPropsI {
   contact: ContactI
}

const TableActionButton: React.FC<TableActionButtonPropsI> = ({ contact }) => {
   const methods = useForm<IContact>()
   const isSearched = useContext(SearchingContext)
   const { handleSubmit, reset } = methods
   const { username, phone } = contact
   const dispatch = useTypedDispatchHook()
   const [ modalIsVisible, setModalIsVisible ] = useState<boolean>()

   const updateContact: SubmitHandler<IContact> = (data) => {
      dispatch(editContact({ ...data, id: contact.id }))
   }

   const handleModal = () => {
      if(!modalIsVisible) {
         reset({ username, phone })
      }
      setModalIsVisible((prevState) => !prevState)
   }

   const deleteContact = () => {
      dispatch(deleteContactAction(contact.id))
      if (isSearched) {
         dispatch(deleteSearchingContact(contact.id))
      }
   }

   return (
      <FormProvider {...methods}>
         <div className={cx("container")}>
            <EditOutlined className={cx("icon", "edit")} onClick={handleModal}/>
            <DeleteOutlined className={cx("icon", "delete")} onClick={deleteContact}/>
         </div>
         <Modal
            visible={modalIsVisible}
            onCancel={handleModal}
            footer={null}>
            <h3>Edit Contact</h3>
            <form onSubmit={handleSubmit(updateContact)}>
               <ControlledInput
                  type="text"
                  name="username"
                  placeholder="Username"
                  rules={{ required: true }}

               />
               <ControlledInput
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  rules={{ required: true }}
               />
               <Button htmlType="submit">Submit</Button>
            </form>

         </Modal>
      </FormProvider>
   )
}

export default TableActionButton