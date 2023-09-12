import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Categories from "./component/Categories";
 
function App() {
  return (
    <Provider store={store}>
      <Categories />
    </Provider>
  );
}

export default App;
