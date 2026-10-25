function ContactItem({ contact, onDelete }) {
  return (
    <li className="contact-item">
      <div className="contact-info">
        <p className="contact-name">{contact.name}</p>
        <p>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
        {contact.phone && <p className="contact-phone">{contact.phone}</p>}
      </div>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => onDelete(contact.id)}
        aria-label={`Delete ${contact.name}`}
      >
        Delete
      </button>
    </li>
  )
}

export default ContactItem
