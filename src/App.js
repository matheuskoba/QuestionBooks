import { Routes } from "./app/routes";
import { Providers } from "./app/providers";
require("./app/stylesheets/application.sass");

const App = () => (
  <div id="main-page">
    <Providers>
      <Routes />
    </Providers>
  </div>
);
export default App;
