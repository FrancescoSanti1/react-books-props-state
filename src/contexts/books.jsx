import { createContext, useState } from "react";

const BooksContext = createContext();

export function Provider({ children }) {
    const [count, setCount] = useState(5);

    const value = {
        count,
        incrementCount: () => { setCount(count + 1) }
    }

    return <BooksContext.Provider value={value}>
        {children}
    </BooksContext.Provider>
}

export default BooksContext;