import { Search } from "lucide-react";
import "../scss/components/SearchInput.scss";

type SearchInputType = {
  handleSearch: (country: string) => void;
};

const SearchInput = ({ handleSearch }: SearchInputType) => {
  return (
    <div className="SearchInput">
      <input
        type="text"
        placeholder=""
        onChange={(e) => {
          handleSearch(e.currentTarget.value);
        }}
      />
      <p>
        <Search color="white" size={18} />
        Search for a country...
      </p>
    </div>
  );
};

export default SearchInput;
