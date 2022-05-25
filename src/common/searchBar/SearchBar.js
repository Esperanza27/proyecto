import "./SearchBar.scss";
const SearchBar = ({ list = [], filteredList }) => {
  const cerca = (e) => {
    
      const filtered = list.filter((torta) => {
          return torta?.title.toLowerCase().includes(e.target.value.toLowerCase());
      });
      filteredList(filtered);
    
  };
  return (
    <div>
      <input onChange={cerca} />
      {/* TODO card list */}
    </div>
  );
};
export default SearchBar;
