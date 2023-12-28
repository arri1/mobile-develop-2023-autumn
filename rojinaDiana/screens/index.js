import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useEffect,
} from "react";
import { AsyncStorage } from "react-native";

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const memoizedBackgroundColor = useMemo(
    () => backgroundColor,
    [backgroundColor]
  );

  useEffect(() => {
    AsyncStorage.setItem("backgroundColor", memoizedBackgroundColor);
  }, [memoizedBackgroundColor]);

  useEffect(() => {
    AsyncStorage.getItem("backgroundColor").then((value) => {
      if (value) {
        setBackgroundColor(value);
      }
    });
  }, []);

  const changeBackgroundColor = (newColor) => {
    setBackgroundColor(newColor);
  };

  const contextValue = {
    backgroundColor: memoizedBackgroundColor,
    changeBackgroundColor,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
