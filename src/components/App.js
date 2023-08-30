import React, { useRef, useState } from "react";
import './../styles/App.css';

const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
  "Item 16",
  "Item 17",
  "Item 18",
  "Item 19",
  "Item 20",
  "Item 21",
  "Item 22",
  "Item 23",
  "Item 24",
  "Item 25",
  "Item 26",
  "Item 27",
  "Item 28",
  "Item 29",
  "Item 30"
];

const App = () => {
  let show = useRef(0);
  let [filtereditems, setFilteredItems] = useState([]);


  function handleClick(){
    setTimeout(() => {
      show.current = show.current+10
      console.log(show.current);
      setFilteredItems(items.slice(0, show.current))
    }, 600);
  }

  return (
    <div>
      {/* Do not remove the main div */}
      {
        show !== 0 && <ul>
          {
            filtereditems.map((item, indx)=>(
              <li key={indx} >{item}</li>
            ))
          }
        </ul>
      }
      {
        (show.current < 30) && 
        <button onClick={handleClick}>Load More</button>
      }
    </div>
  )
}

export default App
