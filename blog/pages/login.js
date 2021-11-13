import Meta from "../components/Meta";
import Header from "../components/Header/Header";
import Form from "../components/Form";

const Login = () => {
  return (
    <>
      <Meta title="ChanLog | Login" description="login page" />
      <Header />
      <Form type="login" />
    </>
  );
};

export default Login;
