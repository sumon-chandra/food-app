import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Header />
      <main className="lg:w-9/12 md:w-5/6 mx-auto px-4 lg:px-0 py-10">
        <Home />
      </main>
    </div>
  );
}

export default App;
