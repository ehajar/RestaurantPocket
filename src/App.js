import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "./Components/login";
import Signup from "./Components/Signup";
import Chef from "./Components/Chef";
import administrateur from "./Components/administrateur";
import Choix from "./Components/Choix";
import pageadmin from "./Components/pageadmin";
import "./Components/globale";

import Plat from "./Components/Plat";
import PlatList from "./Components/PlatList";
import Menu from "./Components/Menu";
import Bilan from "./Components/Bilan";
import Qr from "./Components/Qr";
import Categorie from "./Components/Categorie";

const authentication = {
  getLogInStatus() {
    return global.logdin;
  },
};

// const checkLoginStatus = () => {
//   axios.get("http://localhost8080/authenticate", { withCredentials: true })
//     .then(response => {
//       console.log("logged in?", response)
//     }).catch(error => {
//       console.log("check login error", error)
//     })
// };
//  const compounentDidMount = () => {
//   this.checkLoginStatus();
// };

function SecuredRoute(props) {
  return (
    <Route
      path={props.path}
      render={(data) =>
        authentication.getLogInStatus() ? (
          <props.component {...data}></props.component>
        ) : (
          <Redirect to={{ pathname: "/login" }}></Redirect>
        )
      }
    ></Route>
  );
}

const App = () => {
  const marginTop = {
    marginTop: "20px",
  };

  return (
    <Router>
      {/* <Route path="/pageadmin" exact component={pageadmin} /> */}
      <Route path="/" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/choix" exact component={Choix} />
      <Route path="/admin" exact component={administrateur} />
      <SecuredRoute path="/choixchef" component={Chef}></SecuredRoute>
      <Route path="/pageadmin" exact component={pageadmin} />

      <Route path="/Qr" exact component={Qr} />
      <Route path="/Bilan" exact component={Bilan} />
      <Route path="/add" exact component={Plat} />
      <Route path="/edit/:idrepas" exact component={Plat} />
      <Route path="/list" exact component={PlatList} />
      <Route path="/categorie" exact component={Categorie} />
    </Router>
  );
};

export default App;
