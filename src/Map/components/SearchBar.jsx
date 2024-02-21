import React, { useState } from "react";
import "./SearchBar.css";
import { GoSearch } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
 


function SearchBar({ placeholder, data, selected,clear , clearedSearch}) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.eventName.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  const clearInputt = () => {
    setFilteredData([]);
    
  };

  return (
    <div className="search" >
      <div className="searchInputs" style={{ margin: '20px', padding: '20px', borderRadius:'10px' }}>
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <GoSearch size={50} />
          ) : (
            <IoMdClose  size={50} id="clearBtn" onClick={()=>{
              clearInput();
              clearedSearch();
            }} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult" style={{ margin: '20px', padding: '20px', borderRadius:'10px'}}>
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" onClick={()=>{
                // console.log("hi")
                // console.log(value.building)
                clear();
                 clearInput()
                 clearedSearch();
                selected(value.building)
                 
                
              }}

              // onTouchStart={()=>{

              //   clear();
              //   selected(value.building)
              // }}
              
              >
                <p>{value.eventName + " " +" " +" - "+value.description}</p>
                {/* <p>{value.description}</p> */}
                {/* <p>{value.building}</p> */}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;