import { useEffect, useState } from "react";

// components
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchComponent from "./components/SearchComponent";
import ErrorText from "./components/ErrorText";
import GeneralForecastComponent from "./components/GeneralForecastComponent";
import HoursForecastComponent from "./components/HoursForecastComponent";
import LoadingComponent from "./components/LoadingComponent";

// hooks
import { useForecast } from "./hooks/useForecast";
import DetailsForecastComponent from "./components/DetailsForecastComponent";
import ScrollComponent from "./components/ScrollComponent";

function App() {
  const [name, setName] = useState("");
  const [town, setTown] = useState("Warsaw");

  const { generalForecast, isPending, forecast, error } = useForecast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTown(name);
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

  useEffect(() => {
    if (town) {
      generalForecast(town);
    }
  }, [town]);

  return (
    <div
      className={`flex flex-col min-h-screen box-border bg-gradient-to-b  text-white ${
        forecast
          ? forecast.current.is_day
            ? "from-blue-300 to-blue-500"
            : "from-blue-500 to-blue-700"
          : "from-blue-300 to-blue-500"
      } `}
    >
      <Header />
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 box-border">
        <SearchComponent
          name={name}
          setName={setName}
          handleSubmit={handleSubmit}
        />
        {isPending ? (
          <LoadingComponent />
        ) : (
          forecast && (
            <div className="my-4 sm:grid sm:grid-cols-2 box-border">
              <GeneralForecastComponent town={town} forecast={forecast} />
              <DetailsForecastComponent forecast={forecast} />
              <div className="sm:hidden">
                <ScrollComponent forecast={forecast} />
              </div>
            </div>
          )
        )}
        {error && <ErrorText text={error} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
