import { ContactActionTypes, ContactsAction } from "../types/actionTypes";
import { ContactI } from "../types/reducerTypes";

const startLoadingContacts = (): ContactActionTypes => ({
   type: ContactsAction.START_LOADING_CONTACTS
})

const endLoadingContacts = (): ContactActionTypes => ({
   type: ContactsAction.END_LOADING_CONTACTS
})

const getContacts = (contacts: ContactI[]): ContactActionTypes => ({
   type: ContactsAction.GET_CONTACTS,
   payload: contacts
})

const createContact = (contact: ContactI): ContactActionTypes => ({
   type: ContactsAction.CREATE_CONTACT,
   payload: contact
})

const editContact = (contact: ContactI): ContactActionTypes => ({
   type: ContactsAction.EDIT_CONTACT,
   payload: contact
})

const deleteContact = (id: string): ContactActionTypes => ({
   type: ContactsAction.DELETE_CONTACT,
   payload: id
})

const searchContact = (param: string): ContactActionTypes => ({
   type: ContactsAction.SEARCH_CONTACT,
   payload: param
})

export const deleteSearchingContact = (id: string): ContactActionTypes => ({
   type: ContactsAction.DELETE_SEARCHED_CONTACT,
   payload: id
})

export {
   startLoadingContacts,
   endLoadingContacts,
   getContacts,
   createContact,
   editContact,
   deleteContact,
   searchContact
}

