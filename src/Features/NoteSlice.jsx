import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: []
}

const savedNotes = JSON.parse(localStorage.getItem("notes"))

if(savedNotes){
    initialState.notes =savedNotes
}

const noteSlice = createSlice({
    name: "note",
    initialState,
    reducers:{
        addNotes: (state,action) => {
            state.notes = [...state.notes,action.payload]
            localStorage.setItem("notes",JSON.stringify(state.notes))
        },

        deleteNotes: (state,action) => {
            state.notes = state.notes.filter((note)=>note.id!==action.payload)
            localStorage.setItem("notes",JSON.stringify(state.notes))
        },

        updateNotes: (state,action) => {
            const {id,name,title,description} = action.payload;
            const note = state.notes.find((note)=> note.id === id)
            if(note){
                note.name = name,
                note.title = title,
                note.description = description
                localStorage.setItem("notes",JSON.stringify(state.notes))
            }
        },
    }
})

export const {addNotes} = noteSlice.actions;
export const {deleteNotes} = noteSlice.actions;
export const {updateNotes} = noteSlice.actions;
export default noteSlice.reducer;