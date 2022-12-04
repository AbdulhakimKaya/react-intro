import React from "react";
import './App.css';
import Header from "./components/Header";
import Login from "./components/Login";


const name = "Abdulhakim";
let surname = "KAYA";

const isLoggedIn = false;
const fullName = "Abdulhakim KAYA"

function App() {
  return (
      <React.Fragment>
        {name} {surname}

        {/*koşullu ifadelerinin ilk kullanımı*/}
        {
          isLoggedIn ? (<div>Hoşgeldiniz {fullName} </div>) : (<a href="#"> Giriş yapınız! </a>)
        }

        {/*koşullu ifadelerinin ikinci kullanımı*/}
        {
          isLoggedIn && <div>Hoşgeldiniz {fullName} </div>
        }

        {
          !isLoggedIn && <div> Giriş yapınız </div>
        }


          {
              isLoggedIn ? (<div>Hoşgeldiniz {fullName} </div>) : (<Login/>)
          }

        <div>Hello</div>
        <Header/>
      </React.Fragment>
  );
}

export default App;
