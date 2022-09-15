import { ContactI } from "../store/contacts/types/reducerTypes";

export function search(param: string, contacts: ContactI[]): ContactI[] {
   if (contacts.length === 0) {
      return []
   }
   let sortArr: ContactI[] = []
   const paramLength = param.length
   contacts.forEach((contact) => {
      if (param.toLowerCase() === contact.username.toLowerCase().substring(0, paramLength)) {
         sortArr.push(contact)
      }
   })

   return sortArr
}