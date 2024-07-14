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

export const RegisterPage = ({ source }: { source?: string }) => {
  const navigate = useNavigate();
  const { setHomeState } = useMyContext();
  const methods = useForm<formValuesType>({
    defaultValues: { emailOrUsername: "", password: "" },
  });

  const handleRouteChange = (path: string) => {
    if (source === "home") {
      switch (path) {
        case "/login":
          setHomeState(ShowPageEnum.LOGIN);
          break;
        default:
          setHomeState(ShowPageEnum.HOME);
      }
    } else {
      navigate(path);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("register form", data);
    handleRouteChange("/login");
  };

  return (
    <FormProvider {...methods}>
      <div className="containerBorder">
        <div className="container">
          <div className="flex justify-around">
            <div className="min-w-full">
              <h3 className="formHeading">SIGN UP</h3>
              <h2 className="formSubHeading">Create an account to continue</h2>
            </div>
            {source === "home" && (
              <CrossSvg onClick={() => handleRouteChange("/home")} />
            )}
          </div>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <InputWithText
              label="Email"
              placeholder="Enter your email"
              name="email"
            />
            <InputWithText
              label="Username"
              placeholder="Choose a preferred username"
              name="userName"
            />
            <InputWithText
              label="Password"
              placeholder="Choose a strong password"
              name="password"
              type="password"
            />
            <div className="mt-3">
              <Button text="Continue" type="submit" />
            </div>
            <h4
              className="nonRegisterText"
              onClick={() => handleRouteChange("/login")}
            >
              Already have an account?{" "}
              <span className="nonRegisterTextHighlight">Login →</span>
            </h4>
          </form>
        </div>
      </div>
    </FormProvider>
  );
};
