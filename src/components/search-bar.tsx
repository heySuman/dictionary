import { FormEvent, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IResultInterface } from "../interface/result";

const SearchBar = ({
  setSearchData,
}: {
  setSearchData: React.Dispatch<React.SetStateAction<IResultInterface[]>>;
}) => {
  const [word, setWord] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (word === "") return;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Meaning could not be found");
      })
      .then((data) => setSearchData(data))
      .catch((error) => alert(error));
    setWord("");
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setWord(e.target.value);
  }

  return (
    <form id="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Word"
        value={word}
        onChange={handleInputChange}
      />
      <button>
        <BiSearch />
      </button>
    </form>
  );
};

export { SearchBar };
