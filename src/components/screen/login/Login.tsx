import "../formCommonStyles.css";
import InputWithText from "../../common/inputWithText/InputWithText";
import { Button } from "../../common/button/Button";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useNavigate } from 'react-router-dom';

interface formValuesType {
  emailOrUsername: string;
  password: string;
}

export const LoginPage = () => {
  const navigate = useNavigate()
  const methods = useForm<formValuesType>({
    defaultValues: { emailOrUsername: "", password: "" },
  });

  const handleRouteChange = (path: string) => {
    navigate(path);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("login form", data);
    handleRouteChange("/home");
  };

  return (
    <FormProvider {...methods}>
      <form className="container" onSubmit={methods.handleSubmit(onSubmit)}>
        <h3 className="formHeading">WELCOME BACK</h3>
        <h2 className="formSubHeading">Log into your account</h2>
        <InputWithText
          label="Email or Username"
          placeholder="Enter your email or username"
          name="emailOrUsername"
        />
        <>
          <div className="passwordBox">
            <h4 className="inputText">Password</h4>
            <h4 className="inputText">Forgot password?</h4>
          </div>
          <input
            className="inputField"
            type={"Password"}
            placeholder={"Enter your password"}
            {...methods.register("password")}
          />
        </>
        <div className="mt-3">
          <Button
            text="Login"
            onClick={() => console.log("Login")}
            type="submit"
          />
        </div>
        <h4 className="nonRegisterText" onClick={() => handleRouteChange('/register')}>
          Not registered yet?{" "}
          <span className="nonRegisterTextHighlight">Register →</span>
        </h4>
      </form>
    </FormProvider>
  );
};
