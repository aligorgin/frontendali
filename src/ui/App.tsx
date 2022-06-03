import Nav from "./containers/Nav";
import Header from "./containers/Header";
import Projects from "./containers/Projects";
import ITechs from "./containers/ITechs";

export default function App() {
    return (
        <div className='max-w-[38.938rem] mx-4 sm:mx-auto'>
            <Nav/>
            <Header/>
            <ITechs/>
            <Projects/>
        </div>
    )
}