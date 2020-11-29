import { Navbar } from "./components";
import { BrowserRouter as Router, Switch, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      {/* <Switch></Switch> */}
    </Router>
  );
};

export default App;
