import './assets/reset.css'
import './assets/styles.css'
import SiteTemplate from "./components/SiteTemplate";
import HomePage, {PortfolioPage, ContactPage, LoginPage, LogoutPage} from "./components/Pages";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import useStore from "./components/store";
import {useEffect} from "react";



function App() {
  const auth = useStore(state => state.auth)

    useEffect(() => {
        // Read data from localStorage and save back to store
    }, [])

  return (
    <div className="App">

        <BrowserRouter>
            <SiteTemplate>

                <Routes>
                    <Route path={'/contact'} element={<ContactPage num={12} name={'Peter Parker'} />} />
                    {auth && (
                        <Route path={'/portfolio'} element={<PortfolioPage />} />
                    )}
                    <Route path={'/'} element={<HomePage />} />
                    <Route path={'/account/login'} element={<LoginPage />} />
                    <Route path={'/account/logout'} element={<LogoutPage />} />
                </Routes>

            </SiteTemplate>
        </BrowserRouter>

    </div>
  );
}

export default App;
