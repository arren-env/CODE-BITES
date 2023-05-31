import Layout from "../Layouts";
import RegisterForm from "../Components/Forms/RegisterForm";
import { ROUTE_HOME } from "../store/constants";
import { useEffect } from "react";
import { useAuth } from "../Components/Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RegistrationPage = () => {

  const nav = useNavigate();
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    if (user) {
      nav(ROUTE_HOME, { replace: true });
    }
  }, [user]);

  return (
    <Layout>
      <RegisterForm />
    </Layout>
  );
};

export default RegistrationPage;
