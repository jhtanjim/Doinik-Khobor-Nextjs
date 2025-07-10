import { Input } from "../ui/input";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="mb-6 md:w-3/4">
      <h3>Search News</h3>
      <Input
        className="p-2 border w-full rounded-md"
        placeholder="Search by title or description"
        type="text"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
