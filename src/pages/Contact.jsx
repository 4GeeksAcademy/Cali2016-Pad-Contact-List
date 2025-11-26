import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import ContactCard from "../components/ContactCard";

export default function Contact() {
    const { store, dispatch, actions } = useGlobalReducer();

    useEffect(() => {
        actions.loadContacts({ dispatch });
    }, []);

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Contact List</h1>
                <Link to="/add" className="btn btn-success">
                    Add New Contact
                </Link>
            </div>

            {store.contacts.length === 0 ? (
                <p>No contacts yet...</p>
            ) : (
                store.contacts.map(contact => (
                    <ContactCard key={contact.id} contact={contact} />
                ))
            )}
        </div>
    );
}

