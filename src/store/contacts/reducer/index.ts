import ContactStateI from "../types/reducerTypes";
import { ContactActionTypes, ContactsAction } from "../types/actionTypes";
import { search } from "../../../utils/search";

const initialStateContacts: ContactStateI = {
   contacts: [],
   searchedContacts: [],
   loadingContacts: false,
   error: null
}

const contactsReducer = (state = initialStateContacts, action: ContactActionTypes): ContactStateI => {
   switch (action.type) {
      case ContactsAction.START_LOADING_CONTACTS: {
         return {
            ...state,
            loadingContacts: true
         }
      }
      case ContactsAction.END_LOADING_CONTACTS: {
         return {
            ...state,
            loadingContacts: false
         }
      }
      case ContactsAction.GET_CONTACTS: {
         return {
            ...state,
            contacts: action.payload
         }
      }
      case ContactsAction.CREATE_CONTACT: {
         return {
            ...state,
            contacts: [ ...state.contacts, action.payload ]
         }
      }
      case ContactsAction.EDIT_CONTACT: {
         const { id, username, phone } = action.payload
         return {
            ...state,
            contacts: [ ...state.contacts.map((contact) => {
               if (contact.id === id) {
                  return {
                     ...contact,
                     username,
                     phone
                  }
               }
               return contact
            }) ]

         }
      }
      case ContactsAction.DELETE_CONTACT: {
         const id = action.payload
         const newContacts = state.contacts.filter((contact) => contact.id !== id)
         return {
            ...state,
            contacts: newContacts
         }
      }
      case ContactsAction.SEARCH_CONTACT: {
         const param = action.payload
         const findContacts = search(param, state.contacts)
         return {
            ...state,
            searchedContacts: findContacts
         }
      }
      case ContactsAction.DELETE_SEARCHED_CONTACT: {
         const id = action.payload
         const newContacts = state.searchedContacts.filter((contact) => contact.id !== id)
         return {
            ...state,
            searchedContacts: newContacts
         }
      }
      default:
         return state
   }
}

export default contactsReducer