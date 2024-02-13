import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HorizontalLine from "./components/HorizontalLine";
import SearchComponent from "./components/SearchComponent";
import WeatherComponent from "./components/WeatherComponent";
import ErrorText from "./components/ErrorText";
import GeneralForecastComponent from "./components/GeneralForecastComponent";
import HoursForecastComponent from "./components/HoursForecastComponent";

function App() {
  const [name, setName] = useState("");
  const [town, setTown] = useState("Warsaw");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTown(name);
    console.log("submitted, city: ", name);
    setName("");
  };

  // // getting user position
  // const getPosition = function () {
  //   return new Promise(function (resolve, reject) {
  //     navigator.geolocation.getCurrentPosition(
  //       (posiotion) => resolve(posiotion),
  //       (err) => reject(err)
  //     );
  //     navigator.geolocation.getCurrentPosition(resolve, reject);
  //   });
  // };

  // // function for setting a user position on start
  // const onMount = async () => {
  //   setPositionError(null);
  //   try {
  //     const pos = await getPosition();
  //     const { latitude: lat, longitude: lng } = pos.coords;
  //     setPosition({ lat: lat, lng: lng });
  //   } catch (err) {
  //     setPositionError(err.message);
  //   }
  // };

  // fetch data on the start of the app
  // useEffect(() => {
  //   onMount();
  // }, []);

  return (
    <div className="flex flex-col min-h-screen box-border">
      <Header />
      <HorizontalLine />
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 box-border">
        <SearchComponent
          name={name}
          setName={setName}
          handleSubmit={handleSubmit}
        />
        <div className="sm:grid sm:grid-cols-2 box-border">
          <GeneralForecastComponent town={town} />
        </div>
      </main>
      <HorizontalLine />
      <Footer />
    </div>
  );
}

export default App;
