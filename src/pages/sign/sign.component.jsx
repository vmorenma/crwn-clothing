import "./sign.styles.scss";

import SignIn from "../../components/sign-in/sign-in.controller";
import SignUp from "../../components/sign-up/sign-up.component";

const SignPage = () => (
  <div className="sign">
    <SignIn />
    <SignUp/>
  </div>
);

export default SignPage;
