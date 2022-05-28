import Nav from "./components/Nav";
import Card from "./components/Card";
import data from "./data";

function App() {
  const card_data = data.map((items) => {
    return <Card key={items.id} items={items} />;
  });
  return (
    <div className="App">
      <Nav />
      <main>{card_data}</main>
    </div>
  );
}

export default App;
