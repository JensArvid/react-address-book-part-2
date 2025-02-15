import { useParams, useNavigate } from "react-router-dom";

export default function ViewContact(props)
{
    const { id } = useParams()
    const { contacts, deleteContact } = props
    const contact = contacts[id - 1]

    const navigate = useNavigate()

    const handleEdit = () =>
    {
        navigate(`/editContact/${id}`)
    }

    const handleDelete = () =>
    {
        deleteContact({contact})
        navigate("/contacts")
    }

    return (
        <>
        <div className="container">
        <img src={contact.profileImage} alt="" className="icon"/>
            <h1>{contact.firstName} {contact.lastName}</h1>
            <p>Street: {contact.street}</p>
            <p>City:  {contact.city}</p> 
            <p> Email: {contact.email}</p>
            <button className= "btn" 
            onClick={handleDelete}>Delete</button>
            <button className= "btn" 
            onClick={handleEdit}>Edit</button>
            <iframe
                width="50%"
                height="250"
                src={`https://maps.google.com/maps?q=${contact.latitude} + ${contact.longitude}&output=embed&z=3`}
            ></iframe>


            </div>
        </>
    )
}