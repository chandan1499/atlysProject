import React, { createContext, useContext, useState } from "react";
import { ShowPageEnum } from "./components/screen/home/utils";

interface MyContextType {
  homeState: ShowPageEnum;
  setHomeState: React.Dispatch<React.SetStateAction<ShowPageEnum>>;
}

const MyContext = createContext<MyContextType>({
  homeState: ShowPageEnum.HOME,
  setHomeState: () => {},
});

export const useMyContext = () => {
  const context = useContext(MyContext);
  return context;
};

export const MyContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [homeState, setHomeState] = useState<ShowPageEnum>(ShowPageEnum.HOME);

  return (
    <MyContext.Provider value={{ homeState, setHomeState }}>
      {children}
    </MyContext.Provider>
  );
};
