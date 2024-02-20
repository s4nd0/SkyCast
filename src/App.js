import { useEffect, useState } from "react";

// components
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchComponent from "./components/SearchComponent";
import ErrorText from "./components/ErrorText";
import GeneralForecastComponent from "./components/GeneralForecastComponent";
import HoursForecastComponent from "./components/HoursForecastComponent";
import LoadingComponent from "./components/LoadingComponent";
import DetailsForecastComponent from "./components/DetailsForecastComponent";
import ScrollComponent from "./components/ScrollComponent";
import HorizontalDesktopComponent from "./components/HorizontalDesktopComponent";

// hooks
import { useForecast } from "./hooks/useForecast";
import DailyForecastComponent from "./components/DailyForecastComponent";

function App() {
  const [name, setName] = useState("");
  const [town, setTown] = useState("Warsaw");

  const {
    generalForecast,
    onMount,
    isPending,
    forecast,
    error,
    enabledLocation,
    userTown,
  } = useForecast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTown(name);
    setName("");
  };

  useEffect(() => {
    if (town) {
      !enabledLocation && generalForecast(town);
    }
  }, [town]);
  useEffect(() => {
    onMount();
  }, []);

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
            <>
              <div className="my-4 sm:grid sm:grid-cols-2 box-border">
                <GeneralForecastComponent
                  town={town}
                  forecast={forecast}
                  enabledLocation={enabledLocation}
                  userTown={userTown}
                />
                <div className="hidden sm:block">
                  <DetailsForecastComponent forecast={forecast} />
                </div>
              </div>
              <HoursForecastComponent forecast={forecast} />
              <div className="my-4 sm:grid sm:grid-cols-2 box-border gap-2">
                <DailyForecastComponent forecast={forecast} />
              </div>
              <div className="sm:hidden mt-4">
                <DetailsForecastComponent forecast={forecast} />
              </div>
              <div className="sm:hidden">
                <ScrollComponent forecast={forecast} />
              </div>
              <div className="hidden sm:grid grid-cols-2 box-border gap-2 mt-4">
                <HorizontalDesktopComponent forecast={forecast} />
              </div>
            </>
          )
        )}
        {error && <ErrorText text={error} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
