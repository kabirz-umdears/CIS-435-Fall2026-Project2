import ContactItem from './ContactItem.jsx'

function ContactList({ contacts, totalCount, filterText, onDelete }) {
  if (totalCount === 0) {
    return <p className="message">No contacts yet. Add one above!</p>
  }

  if (contacts.length === 0) {
    return <p className="message">No matches found for &lsquo;{filterText}&rsquo;</p>
  }

  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  )
}

export default ContactList
