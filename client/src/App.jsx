import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";


function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
      <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;