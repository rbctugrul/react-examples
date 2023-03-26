import Button from "./Button";

function App() {
   return (
      <div>
         <div>
            <Button danger outline >Click me</Button>
         </div>
         <div>
            <Button warning >Buy</Button>
         </div>
         <div>
            <Button secondary olutline >See deal</Button>
         </div>
         <div>
            <Button success outline >Hide ads</Button>
         </div>
         <div>
            <Button secondary rounded >something</Button>
         </div>
      </div>
   );
}

export default App;