import {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext';

export default function useTheme (){
    const ctx = useContext(ThemeContext);
    if(!ctx) throw new Error("UseTheme must be used inside Theme Provider");
    return ctx;
}