import React from "react";
import './App.css';
import Header from "./components/Header";
import Login from "./components/Login";
import User from "./components/User";
import User2 from "./components/User2";


const name = "Abdulhakim";
let surname = "KAYA";

const isLoggedIn = false;
const fullName = "Abdulhakim KAYA"

const user = {
    name: "Sayit Can",
    surname: "BULUT",
    age: 20,
    city: "Elazığ"
}

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
          {/*strin dışındaki veriler {} içerisinde yazılır. string ifadeler {""} şeklinde süslü parantez içerisinde tırnak açarak da yazılabilir.*/}
          <User name="Abdulhakim" surname={"KAYA"} age={20} city={"Diyarbakır"}/>
          <User name="Ömer Faruk" surname={"DOĞAN"} age={21} city={"Adıyaman"}/>
          <User name="Furkan" surname={"OĞUZ"} age={22} city={"Elazığ"}/>

          {/*obje ve array göndererek verilerin alınması*/}
          <User2 title={"User2"} data={user} friends={["Manas", "Ömer"]}></User2>
          <User2 data={{
              name: "Sait",
              surname: "BAYAR",
              age: 22,
              city: "Elazığ"
          }} friends={["Sidar", "Kerem"]}></User2>
      </React.Fragment>
  );
}

export default App;
