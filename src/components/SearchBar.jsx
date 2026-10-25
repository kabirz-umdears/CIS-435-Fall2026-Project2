function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="search">Search by name or email</label>
      <input
        id="search"
        type="search"
        placeholder="Start typing to filter..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}

export default SearchBar
