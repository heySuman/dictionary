import { useState } from "react";
import { SearchBar } from "./search-bar";
import { IResultInterface } from "../interface/result";
import { Card } from "./word-card";

const MainComponent = () => {
  const [searchData, setSearchData] = useState<IResultInterface[]>([]);

  return (
    <main>
      <SearchBar setSearchData={setSearchData} />
      {searchData.length > 0 && <Card {...searchData[0]} />}
    </main>
  );
};

export { MainComponent };
