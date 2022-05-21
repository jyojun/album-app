import "./App.css";
import Router from "./AppRouter";
import { AuthProvider } from "./Context/Auth";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </div>
  );
}

export default App;
