import { useState } from 'react'
import ContactForm from './components/ContactForm.jsx'
import SearchBar from './components/SearchBar.jsx'
import ContactList from './components/ContactList.jsx'

function App() {
  // Single source of truth for the contacts array and the filter text
  const [contacts, setContacts] = useState([])
  const [filterText, setFilterText] = useState('')

  function addContact(contact) {
    const newContact = { id: Date.now().toString(), ...contact }
    // Create a new array instead of mutating state
    setContacts((prev) => [...prev, newContact])
  }

  function deleteContact(id) {
    setContacts((prev) => prev.filter((contact) => contact.id !== id))
  }

  const query = filterText.trim().toLowerCase()
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(query) ||
      contact.email.toLowerCase().includes(query)
  )

  return (
    <div className="app">
      <header className="app-header">
        <h1>Simple Contact Book</h1>
        <p>Add, search and delete your contacts.</p>
      </header>

      <main className="layout">
        <section className="card" aria-labelledby="add-heading">
          <h2 id="add-heading">Add Contact</h2>
          <ContactForm onAdd={addContact} />
        </section>

        <section className="card" aria-labelledby="list-heading">
          <h2 id="list-heading">
            Contacts <span className="count">({contacts.length})</span>
          </h2>
          <SearchBar value={filterText} onChange={setFilterText} />
          <ContactList
            contacts={filteredContacts}
            totalCount={contacts.length}
            filterText={filterText}
            onDelete={deleteContact}
          />
        </section>
      </main>

      <footer className="app-footer">
        <p>CIS 435 Project 2 &middot; Zaid Kabir</p>
      </footer>
    </div>
  )
}

export default App
