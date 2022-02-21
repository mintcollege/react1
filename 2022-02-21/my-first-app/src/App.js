import './assets/styles.css'
import WhoToFollow from "./components/Whotofollow";
import Header from "./components/Header";
import {Copyright, AllRights as HeyComp} from "./components/Footer";


function App() {
    const name = 'Robert'
    return (
        <div className="App">
            <div className={'followlist'}>
                <Header />
                <main>
                    <WhoToFollow fullname={'Mike Myers'} username={'mike'}
                                 url={'http://mike.com'} />
                    <WhoToFollow fullname={'Sandra Bullock'} username={'sandra'}
                                 url={'http://sandra.com'} />
                    <WhoToFollow fullname={'This Guy'} username={'thisguy'}
                                 url={'http://thisguy.com'} />
                </main>
                <Copyright />
                <HeyComp />
            </div>
        </div>
    );
}

export default App;
