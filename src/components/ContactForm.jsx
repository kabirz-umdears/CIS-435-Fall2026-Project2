import { useState } from 'react'

const emptyForm = { name: '', email: '', phone: '' }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}
  if (!values.name.trim()) {
    errors.name = 'Name is required.'
  }
  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Please enter a valid email (e.g. name@example.com).'
  }
  return errors
}

function ContactForm({ onAdd }) {
  const [values, setValues] = useState(emptyForm)
  const [errors, setErrors] = useState({})

  function handleChange(event) {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    // Clear a field's error once the user starts fixing it
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newErrors = validate(values)
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    onAdd({
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
    })
    setValues(emptyForm)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">
          Name <span className="required">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Jane Doe"
          value={values.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p className="error" id="name-error">
            {errors.name}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="email">
          Email <span className="required">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="jane@example.com"
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p className="error" id="email-error">
            {errors.email}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(313) 555-0123"
          value={values.phone}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Contact
      </button>
    </form>
  )
}

export default ContactForm
