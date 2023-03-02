import sendRequest from "./send-request";
const BASE_URL = "/api/notes";

export async function createNote(noteData) {
	console.log('notes-api')
	return sendRequest(BASE_URL, 'POST', noteData)
}

export async function getNotes() {
	return sendRequest(BASE_URL)
}