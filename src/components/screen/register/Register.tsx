import "../formCommonStyles.css";
import InputWithText from "../../common/inputWithText/InputWithText";
import { Button } from "../../common/button/Button";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

interface formValuesType {
  emailOrUsername: string;
  password: string;
}

export const RegisterPage = () => {
  const methods = useForm<formValuesType>({
    defaultValues: { emailOrUsername: "", password: "" },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("register form", data);
  };

  return (
    <FormProvider {...methods}>
      <form className="container" onSubmit={methods.handleSubmit(onSubmit)}>
        <h3 className="formHeading">SIGN UP</h3>
        <h2 className="formSubHeading">Create an account to continue</h2>
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
        <h4 className="nonRegisterText">
          Already have an account?{" "}
          <span className="nonRegisterTextHighlight">Login →</span>
        </h4>
      </form>
    </FormProvider>
  );
};
