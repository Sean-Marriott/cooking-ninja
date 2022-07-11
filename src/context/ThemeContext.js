import { createContext } from "react";

export const ThemeContext = createContext()

// React component
export function ThemeProvider({ children }){

    return (
        <ThemeContext.Provider value={{ color: 'blue'}}>
            {children}
        </ThemeContext.Provider>
    )
}