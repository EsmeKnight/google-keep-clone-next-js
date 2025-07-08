export type NoteEntity = {
    id: string,
    user_id: string,
    title: string,
    noteItems: NoteItem[]
}

export type NoteItem ={
    id: string,
    completed: boolean,
    text: string
}