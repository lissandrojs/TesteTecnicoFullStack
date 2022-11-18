import { useCallback, useState } from "react";
import { ThemeProvider } from "styled-components";
import { MainContainer, MainSection } from "./page/app/app.style";
import { themes } from "./theme/temaPagina";
import   "./styles/reset.css"
import TableUserRegister from "./components/tableListUser";
import ButtonTheme from "./components/ButtonTheme";


const App = () => {

  const [currentTheme, setCurrentTheme] = useState("light");

  const handleSetCurrentTheme = () => {
    return setCurrentTheme(getOpositeTheme())
  }

  const getOpositeTheme = useCallback(
    () => (currentTheme === "light" ? "dark" : "light"),
    [currentTheme]
  );

  return (
          <>
          <ThemeProvider theme={themes[currentTheme]}>
              <MainContainer>
                <MainSection>
                  <ButtonTheme 
                    handleSetCurrentTheme={handleSetCurrentTheme} 
                    currentTheme={currentTheme} 
                    />
                  <TableUserRegister/>
                </MainSection>
              </MainContainer>
          </ThemeProvider>
          </>
        );
};

export default App;
