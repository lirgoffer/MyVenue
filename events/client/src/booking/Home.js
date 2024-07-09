import { useState, useEffect } from "react";
import { allHotels } from "../actions/hotel";
import SmallCard from "../components/cards/SmallCard";
import Search from "../components/forms/Search";

const Home = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    loadAllhotels();
  }, []);

  const loadAllhotels = async () => {
    let res = await allHotels();
    setHotels(res.data);
  };

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1> אולמות אירועים </h1>
      </div>
      <div className="col">
        <br />
        {/* <Search /> */}
      </div>
      <div className="container-fluid d-flex flex-row flex-nowrap">
        <br />
        {/* <pre>{JSON.stringify(hotels, null, 4)}</pre> */}
        <div className="col-3">
        <Search />
        </div>
        <div className="col-9">
        <div className="d-flex flex-row flex-wrap">
          {hotels.map((h) => (
            <SmallCard key={h._id} h={h} />
          ))}
        </div>
        </div>
        {/* {hotels.map((h) => (
          <SmallCard key={h._id} h={h} />
        ))} */}
      </div>
    </>
  );
};

export default Home;
