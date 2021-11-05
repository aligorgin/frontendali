import Nav from "./containers/Nav";
import Header from "./containers/Header";
import Projects from "./containers/Projects";

export default function App(){
    return(
        <div className='max-w-2xl mx-auto py-8'>
            <Nav/>
            <Header/>
            <Projects/>
        </div>
    )
}