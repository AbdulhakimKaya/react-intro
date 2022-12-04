import React, {useState} from "react";
import './App.css';
import Header from "./components/Header";
import Login from "./components/Login";
import User from "./components/User";
import User2 from "./components/User2";
import Counter from "./components/Counter";
import User3 from "./components/User3";
import Colors from "./components/Colors";
import Form from "./components/Form";
import Form2 from "./components/Form2";


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
    const [isVisible, setIsVisible] = useState(true)

    return (
        <React.Fragment>
            {name} {surname}

            {/*koşullu ifadelerinin ilk kullanımı*/}
            {
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
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

            {isVisible && <Counter/>}
            <button onClick={() => setIsVisible(!isVisible)}>Göster/Gizle</button>

            <User3/>

            <Colors/>

            <Form/>

            <Form2/>
        </React.Fragment>
    );
}

export default App;
