import { ContactI } from "./reducerTypes";

export enum ContactsAction {
   GET_CONTACTS = "get contacts",
   CREATE_CONTACT = "create contact",
   DELETE_CONTACT = "delete contact",
   EDIT_CONTACT = "edit contact",
   START_LOADING_CONTACTS = "start loading contacts",
   END_LOADING_CONTACTS = "end loading contacts",
   SEARCH_CONTACT = "search contact",
   DELETE_SEARCHED_CONTACT = "delete searched contact"
}

interface StartLoadingContactsI {
   type: ContactsAction.START_LOADING_CONTACTS
}

interface EndLoadingContactsI {
   type: ContactsAction.END_LOADING_CONTACTS
}

interface GetContactsI {
   type: ContactsAction.GET_CONTACTS
   payload: ContactI[]
}

interface CreateContactI {
   type: ContactsAction.CREATE_CONTACT
   payload: ContactI
}

interface EditContactI {
   type: ContactsAction.EDIT_CONTACT
   payload: ContactI
}

interface DeleteContactI {
   type: ContactsAction.DELETE_CONTACT
   payload: string
}

interface SearchContact {
   type: ContactsAction.SEARCH_CONTACT
   payload: string
}

interface DeleteSearchedContact {
   type: ContactsAction.DELETE_SEARCHED_CONTACT
   payload: string
}

export type ContactActionTypes =
   GetContactsI |
   CreateContactI |
   EditContactI |
   DeleteContactI |
   StartLoadingContactsI |
   EndLoadingContactsI |
   SearchContact |
   DeleteSearchedContact

