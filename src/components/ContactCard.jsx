import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export default function ContactCard({ contact }) {
    const { actions, dispatch } = useGlobalReducer();

    return (
        <div className="contact-card container mb-3">
            <div className="row align-items-center shadow-sm p-3 bg-white rounded">
                <div className="col-2 text-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        className="img-fluid rounded-circle contact-avatar"
                        alt="avatar"
                    />
                </div>

   
                <div className="col-7">
                    <h5 className="mb-1 fw-bold">{contact.name}</h5>
                    <p className="mb-1"><strong>Email:</strong> {contact.email}</p>
                    <p className="mb-1"><strong>Phone:</strong> {contact.phone}</p>
                    <p className="mb-0"><strong>Address:</strong> {contact.address}</p>
                </div>
 
                <div className="col-3 text-end">
                    <Link to={`/edit/${contact.id}`} className="btn btn-primary me-2">
                        Edit
                    </Link>
                    <button
                        className="btn btn-danger"
                        onClick={() => actions.deleteContact({ dispatch }, contact.id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
