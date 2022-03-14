import './assets/reset.css'
import './assets/styles.css'
import SiteTemplate from "./components/SiteTemplate";
import HomePage, {PortfolioPage, ContactPage} from "./components/Pages";
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
    <div className="App">

        <BrowserRouter>
            <SiteTemplate>

                <Routes>
                    <Route path={'/contact'} element={<ContactPage />} />
                    <Route path={'/portfolio'} element={<PortfolioPage />} />
                    <Route path={'/'} element={<HomePage />} />
                </Routes>

            </SiteTemplate>
        </BrowserRouter>

    </div>
  );
}

export default App;
