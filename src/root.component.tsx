import { NavigationSidebar } from "components";
import { HomePage } from "./app";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "router";
import { AppContainer } from "containers";

function Root() {
  return (
    <BrowserRouter>
      <AppContainer>
        <NavigationSidebar />
        <AppRouter />
      </AppContainer>
    </BrowserRouter>
  );
}

export default Root;
