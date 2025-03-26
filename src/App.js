import Layout from "./Layout";
import MobileLayout from "./MobileLayout";

function App() {
  const isMobileDevice = () => {
    return /iPhone|Android|iPad/i.test(navigator.userAgent);
  };

  return (
    <div>
      {isMobileDevice() ? <MobileLayout /> : <Layout />}
    </div>
  );
}

export default App;
