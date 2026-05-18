import "./styles.css";
import Virtualized from "../component/Virtualized";

export default function App() {
  const List = Array.from({ length: 100000 }, (_, index) => index + 1);
  return (
    <div className="App">
      <h1>Virtualized List</h1>
      <Virtualized list={List} height={400} width={400} itemHeight={35} />
    </div>
  );
}
