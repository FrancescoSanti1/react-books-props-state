import { useContext } from "react";
import BooksContext from "../contexts/books";

export default function useBooksContext() {
    return useContext(BooksContext)
};