import { Error, Loading } from "../../../types/store/generalTypes";

export interface ContactI {
   id: string
   username: string
   phone: string
}

export default interface ContactStateI {
   contacts: ContactI[]
   searchedContacts: ContactI[]
   loadingContacts: Loading
   error: Error
}

