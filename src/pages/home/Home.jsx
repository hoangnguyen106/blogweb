import Header from '../../components/header/Header';
import './Home.css';
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sideBar/SideBar'

function Home() {
    return (
        <>
            <Header />
            <div className="home">
               <Posts />
               <SideBar />
            </div>
        </>
    );
}

export default Home;
