import React, { useEffect } from "react"
import { ControlledInput } from "../../../../components";
import { Button, Modal } from "antd";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { createContact } from "../../../../store/contacts/actions";
import { nanoid } from "nanoid";
import { IContact } from "../../index";
import { useTypedDispatchHook } from "../../../../hooks/typedStoreHooks";

interface ModalCreatingContactPropsI {
   modalIsOpen: boolean
   handleModal: () => void
}

const ModalCreatingContact: React.FC<ModalCreatingContactPropsI> = ({ modalIsOpen, handleModal }) => {
   const { handleSubmit, reset } = useFormContext<IContact>()
   const dispatch = useTypedDispatchHook()

   useEffect(() => () => reset(), [])

   const addContact: SubmitHandler<IContact> = (data) => {
      dispatch(createContact({ ...data, id: nanoid() }))
      reset({})
   }
   return (
      <Modal
         visible={modalIsOpen}
         onCancel={handleModal}
         footer={null}
      >
         <form onSubmit={handleSubmit(addContact)}>
            <h2>Add User</h2>
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
            <Button htmlType="submit">Add</Button>
         </form>
      </Modal>
   )
}

export default ModalCreatingContact