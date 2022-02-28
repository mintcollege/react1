import './assets/styles.css'
import WhoToFollow from "./components/Whotofollow";
import Header from "./components/Header";
import {Copyright, AllRights as HeyComp} from "./components/Footer";
import {Image, FavFood} from "./components/Assets";


function App() {
    const theme = 'light'
    const name = 'Robert'
    const usernames = [
        {
            id: 1,
            fullname: 'Mike Myers',
            username: 'mike',
            url: 'http://mike.com'
        }
    ]
    const landarray = [
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {},  // 1
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {},  // 2
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {},  // 3
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {},  // 4
    ]

    return (
        <div className="App">
            <div className={'followlist'}>
                <Header />
                <main className={theme === 'dark' && 'dark' || 'light'}>
                    <FavFood />
                    <div>
                        <Image show={2} details={'Hello world'} artist={'Noella'} />
                    </div>
                    {usernames.map(item => {
                        return (
                            <div key={item.id}>
                                <WhoToFollow fullname={item.fullname}
                                             username={item.username}
                                             url={item.url} />
                            </div>
                        )
                    })}
                </main>
                <Copyright />
                <HeyComp />
            </div>
        </div>
    );
}

export default App;
