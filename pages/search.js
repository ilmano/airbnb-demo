import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noGuest } = router.query;

  const range = `From ${startDate} to ${endDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noGuest} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6 ">
          <p className="text-xs">
            300+ Stays - {range} - for {noGuest} guest
          </p>

          <p className="text-3xl font-semibold mt-2 mb-6">
            {" "}
            Stays in {location}
          </p>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="search-filter-button">Cancelaltion Flexibility</p>
            <p className="search-filter-button">Type of Place</p>
            <p className="search-filter-button">Price</p>
            <p className="search-filter-button">Rooms & Beds</p>
            <p className="search-filter-button">More Filters</p>
          </div>

          <div className="flex flex-col flex-grow"> 
            {searchResults?.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  title={title}
                  location={location}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={searchResults}/>
          
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
