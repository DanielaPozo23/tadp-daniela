import { BrowserRouter } from "react-router-dom";
import { Rutas } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Rutas /> {/* Asegúrate de que este componente está bien definido */}
    </BrowserRouter>
  );
}

export default App;
