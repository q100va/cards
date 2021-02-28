import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import MultipleChoiceFilter from "./components/filter/MultipleChoiceFilter";
import TextFieldFilter from "./components/filter/TextFieldFilter";
import Filter from "./screens/Filter";
import ComplexGrid from "./screens/Grid";
import LoginScreen from "./screens/login/LoginScreen";
import Main from "./screens/Main";
import UserNewScreen from "./screens/user/UserNewScreen";
import UserScreen2 from "./screens/user/UserScreen2";

/*
/login
/logout
/
/holidays
/institutions
/seniors
/coordinators
/senders
/users
/orders
/reports
/help/quickstart
/help/faq
/help/advice
/help/answers
/help/links
/roles
/statuses
/settings
/export
/import
/mailing
*/

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#81c784",
    },
    secondary: {
      main: "#ffb74d",
    },
  },
  typography: {
    fontSize: 11,
  },
  spacing: 6,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/" component={Main} exact />
        <Route path="/grid" component={ComplexGrid} exact />
        <Route path="/login" component={LoginScreen} exact />
        <Route path="/user/new" component={UserNewScreen} exact />
        <Route path="/user2" component={UserScreen2} exact />
        <Route path="/filter" component={Filter} exact />
        <Route path="/mc_filter" component={MultipleChoiceFilter} exact />
        <Route path="/tf_filter" exact >
          <TextFieldFilter />
        </Route>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
