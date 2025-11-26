const BASE_URL = "https://playground.4geeks.com/contact";
const AGENDA = "my_super_agenda"; 

export const initialStore = () => ({
    contacts: [],
});

export const actions = {

    ensureAgendaExists: async () => {
        try {
            await fetch(`${BASE_URL}/agendas/${AGENDA}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            });
        } catch (error) {
            console.error("Agenda already exists or could not be created.");
        }
    },

    loadContacts: async ({ dispatch }) => {
        try {
            const res = await fetch(`${BASE_URL}/agendas/${AGENDA}/contacts`);
            const data = await res.json();

            dispatch({
                type: "SET_CONTACTS",
                payload: data.contacts || [], 
            });
        } catch (error) {
            console.error("Error loading contacts:", error);
        }
    },

    createContact: async ({ dispatch }, newContact) => {
        await fetch(`${BASE_URL}/agendas/${AGENDA}/contacts`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newContact),
        });

        actions.loadContacts({ dispatch });
    },

    updateContact: async ({ dispatch }, id, updatedContact) => {
        await fetch(`${BASE_URL}/agendas/${AGENDA}/contacts/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedContact),
        });

        actions.loadContacts({ dispatch });
    },

    deleteContact: async ({ dispatch }, id) => {
        await fetch(`${BASE_URL}/agendas/${AGENDA}/contacts/${id}`, {
            method: "DELETE",
        });

        actions.loadContacts({ dispatch });
    }
};

export default function reducer(state, action) {
    switch (action.type) {
        case "SET_CONTACTS":
            return { ...state, contacts: action.payload };

        default:
            return state;
    }
}

