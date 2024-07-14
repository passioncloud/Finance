import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, MyRootState } from '../store'

export const useTypedSelector: TypedUseSelectorHook<MyRootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
