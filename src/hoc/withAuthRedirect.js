import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

export const withAuthRedirect = (Component) => {
  const authRedirectComponent = (props) => {
    if (!props.authData.isAuth) return <Navigate to="/login" />;

    return <Component {...props} />;
  };

  const mapStateToProps = (state) => ({
    authData: state.auth,
  });

  return connect(mapStateToProps)(authRedirectComponent);
};
