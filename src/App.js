import Footer from "./components/Footer";
import Header from "./components/Header";
// import TodoItem from "./components/TodoItem";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <Header title = 'My ToDos List' searchbar={true}/>
      <Todos />
      <Footer />
    </>
  );
}

export default App;
