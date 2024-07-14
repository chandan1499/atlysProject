import "../formCommonStyles.css";
import InputWithText from "../../common/inputWithText/InputWithText";
import { Button } from "../../common/button/Button";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CrossSvg } from "../../common/crossIcon/CrossSvg";
import { ShowPageEnum } from "../home/utils";
import { useMyContext } from "../../../ContextProvider";

interface formValuesType {
  emailOrUsername: string;
  password: string;
}

export const LoginPage = ({ source }: { source?: string }) => {
  const navigate = useNavigate();
  const { setHomeState } = useMyContext();
  const methods = useForm<formValuesType>({
    defaultValues: { emailOrUsername: "", password: "" },
  });

  const handleRouteChange = (path: string) => {
    if (source === "home") {
      switch (path) {
        case "/register":
          setHomeState(ShowPageEnum.REGISTER);
          break;
        default:
          setHomeState(ShowPageEnum.HOME);
      }
    } else {
      navigate(path);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("login form", data);
    handleRouteChange("/home");
  };

  return (
    <FormProvider {...methods}>
      <div className="containerBorder">
        <div className="container">
          <div className="flex justify-around">
            <div className="min-w-full">
              <h3 className="formHeading">WELCOME BACK</h3>
              <h2 className="formSubHeading">Log into your account</h2>
            </div>
            {source === "home" && (
              <CrossSvg onClick={() => handleRouteChange("/home")} />
            )}
          </div>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
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
            <h4
              className="nonRegisterText"
              onClick={() => handleRouteChange("/register")}
            >
              Not registered yet?{" "}
              <span className="nonRegisterTextHighlight">Register →</span>
            </h4>
          </form>
        </div>
      </div>
    </FormProvider>
  );
};
