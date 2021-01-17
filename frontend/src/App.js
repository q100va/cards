import { BrowserRouter, Route } from "react-router-dom";
import LoginScreen from "./screens/login/LoginScreen";
import UserNewScreen from "./screens/user/UserNewScreen";

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

function App() {
  return (
    <BrowserRouter>
      <Route path="/login" component={LoginScreen} exact />
      <Route path="/user/new" component={UserNewScreen} exact />
    </BrowserRouter>
  );
}

export default App;
