import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';
import { RootStoreType } from '../combine';

export const useTypeSelector: TypedUseSelectorHook<RootStoreType> = useReduxSelector;
