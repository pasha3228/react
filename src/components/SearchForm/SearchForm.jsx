export const SearchForm = ({ value, onChange }) => (
  <input value={value} onChange={(event) => onChange(event.target.value)} />
);
