import { configureStore } from "@reduxjs/toolkit";
import NoteSlice from "./NoteSlice";

const store = configureStore({
    reducer: {
        storedNotes: NoteSlice,
    },
})

export default store;