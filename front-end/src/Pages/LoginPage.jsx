
import Layout from "../Layouts";
import LoginForm from "../Components/Forms/LoginForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../Components/Hooks/useAuth";
import { ROUTE_HOME } from "../store/constants";
import { useSelector } from "react-redux";


const LoginPage = () => {

  const nav = useNavigate();
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    if (user) {
      nav(ROUTE_HOME, { replace: true });
    }
  }, [user]);

  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
};

export default LoginPage;
