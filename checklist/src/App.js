import './App.css';
import {Routes, Route} from "react-router-dom";
import {Footer, Header} from "./components/Templates";
import {AboutPage, ChecklistPage} from "./components/Pages";

function App() {
  return (
    <div className="App">
        <Header />
        <main>
            <Routes>
                <Route path={'/checklist'} element={<ChecklistPage />} />
                <Route path={'/about'} element={<AboutPage />} />
            </Routes>
        </main>
        <Footer />
    </div>
  );
}

export default App;
