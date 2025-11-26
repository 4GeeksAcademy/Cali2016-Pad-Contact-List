import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export default function AddContact() {
    const { store, dispatch, actions } = useGlobalReducer();
    const navigate = useNavigate();
    const { id } = useParams();

    const editing = Boolean(id);

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
    });

    useEffect(() => {
        if (editing) {
            const contact = store.contacts.find((c) => c.id == id);
            if (contact) setForm(contact);
        }
    }, [editing]);

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editing) {
            await actions.updateContact({ dispatch }, id, form);
        } else {
            await actions.createContact({ dispatch }, form);
        }

        navigate("/");
    };

    return (
        <div className="container mt-4">
            <h1>{editing ? "Edit Contact" : "Add Contact"}</h1>

            <form className="mt-3" onSubmit={handleSubmit}>
                <input className="form-control mb-2" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
                <input className="form-control mb-2" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
                <input className="form-control mb-2" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
                <input className="form-control mb-2" name="address" placeholder="Address" value={form.address} onChange={handleChange} />

                <button className="btn btn-primary mt-3" type="submit">
                    {editing ? "Save Changes" : "Create Contact"}
                </button>
            </form>
        </div>
    );
}
