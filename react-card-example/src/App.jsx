import 'bulma/css/bulma.css';
import './App.css';
import  Course  from './Course';
import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import Csharp from './images/ccsharp.png';
import Web from './images/kompleweb.jpg';

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">
            Kurslar
          </p>
        </div>
      </section>
      <div className='container'>
        <section className='section'>
        <div className='columns'>
          <div className='column'>
          <Course 
          image={Angular}
          title="Angular" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto repudiandae, reiciendis, perspiciatis laudantium similique cupiditate veritatis voluptate ad sunt ipsa facilis harum quia nulla distinctio, deleniti maxime excepturi. Ipsa, natus?" />
          </div>
          <div className='column'>
          <Course 
          image={Bootstrap}
          title="Bootstrap" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto repudiandae, reiciendis, perspiciatis laudantium similique cupiditate veritatis voluptate ad sunt ipsa facilis harum quia nulla distinctio, deleniti maxime excepturi. Ipsa, natus?" />
          </div>
          <div className='column'>
          <Course 
          image={Csharp}
          title="Web" 
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto repudiandae, reiciendis, perspiciatis laudantium similique cupiditate veritatis voluptate ad sunt ipsa facilis harum quia nulla distinctio, deleniti maxime excepturi. Ipsa, natus?" />
          </div>
          <div className='column'>
          <Course 
          image={Web}
          title="Frontend" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto repudiandae, reiciendis, perspiciatis laudantium similique cupiditate veritatis voluptate ad sunt ipsa facilis harum quia nulla distinctio, deleniti maxime excepturi. Ipsa, natus?" /> 
          </div>
        </div>
        </section>
      </div>

      
      
      
    </div>
  );
}


export default App;
