import { ReactNode, useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { Navigate, useLocation } from "react-router";
import Loading from "./Loading";

type Props = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: Props) => {
  const location = useLocation();
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Must be used within an AuthProvider");
  }

  const { user, loading } = context;

  return loading ? (
    <Loading />
  ) : user && user?.email ? (
    <div>{children}</div>
  ) : (
    <Navigate state={location.pathname} to={"/auth/login"} />
  );
};

export default PrivateRoute;
