import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux"
import { RootState, AppDispatch } from "../store/store";

const useTypedSelectorHook: TypedUseSelectorHook<RootState> = useSelector
const useTypedDispatchHook: () => AppDispatch = useDispatch

export {
   useTypedSelectorHook,
   useTypedDispatchHook
}