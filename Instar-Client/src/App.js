import logo from './logo.svg';
import './App.css';
import Acceuil from './screens/Acceuil/Acceuil';
import Signup from './screens/sign-up/Signup' ;
import Signupone from './screens/sign-upone/Signupone'
import Login from './screens/log-in/Login'
import Footer from './Components/Footer/Footer'
import Logout from './screens/Logout/Logout'
import Profile from './screens/Profile/Profile'
import Payment from './screens/Payment/Payment';
import Description from './screens/Description/Description'
import Shopping from './Components/Shopping-cart/Shopping-cart'
import Client from './screens/Clients/Client'
import Creatingproject from './Components/Creatingproject';
import {BrowserRouter as Router , Routes , Route,useParams} from 'react-router-dom' ;
import { useEffect ,useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux/es/exports';
import {getUser} from './Actions/user.actions' ; 
import {UidContext} from './Components/AppContext'
import {getCart} from './Actions/cart.actions'
function App() {
  //on va déclendher le premier état a partir des données 
  let id = useParams();
  const [uid,setUid] = useState(null) ;
  const test = uid
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method : "get",
        url : `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials : true ,
      })
      .then ((res) => {
          setUid(res.data)
      })
      .catch ((err) => console.log("No Token")) ;
    }
    fetchToken();
    if (uid) {dispatch(getUser(uid)) ; dispatch(getCart(uid))}
  }, [uid]) ;
console.log(test!=null)



  return (
      <UidContext.Provider value={uid}>
      <Router>
      <div className="App">
      <Routes>
        <Route path="/"  element={<Acceuil/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signupone" element={<Signupone/>}/>
        <Route path="/acceuil" element={<Acceuil/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/footer" element={<Footer/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/payement" element={<Payment/>} />
        <Route path="/description/:id" element={<Description/>} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/client" element ={<Client/>}/>
        <Route path="/create" element ={<Creatingproject/>}/>
      </Routes>
      </div>
      </Router>
      </UidContext.Provider>
  );
}
export default App;
