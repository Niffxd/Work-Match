import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Route } from "react-router-dom";
import Loading from "../components/Register/Loading";


export const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => (
        <div className="page-layout">
          <Loading/>
        </div>
      ),
    })}
    {...args}
  />
);
export default ProtectedRoute