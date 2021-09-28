import { BrowserRouter, Route, Switch } from "react-router-dom";
import DaftarBank from "./components/daftarbank";
import FormBooking from "./components/form-booking";
import FormLogin from "./components/form-login";
import WithBooking from "./components/indexWithBooking";
import InfoAntrian from "./components/info-antrian";
import FormRegister from "./components/form-register";
import DetailBooking from "./components/detail-booking";
import Logo from "./ui-components/logo";
import axios from "axios";
import PublicRoute from "./route/publicroute";
import PrivateRoute from "./route/privateroute";

axios.defaults.baseURL = "https://be504ca5-d478-4a84-a8f1-42dddcbc18df.mock.pstmn.io/";
axios.interceptors.response.use(
   ({ data }: AxiosResponse) => {
      return data;
   },
   (err: any) => {
      console.log("Something Wrong", err);
   }
);

function App() {
   //const [user, setUser] = useState({ email: "" });
   //let history = useHistory();

   return (
      <BrowserRouter>
         <div>
            <Logo />
            {/* {user.email != "" ? history.push("/beranda") : history.push("/")} */}
            <Switch>
               <PublicRoute restricted="false" component={FormLogin} path="/" exact />
               <PublicRoute restricted="false" component={FormRegister} path="/register" />
               <PrivateRoute component={WithBooking} path="/beranda" />
               <PrivateRoute component={FormBooking} path="/booking" />
               <PrivateRoute component={DetailBooking} path="/detail-booking" />
               <PrivateRoute component={DaftarBank} path="/daftar-bank" />
               <PrivateRoute component={InfoAntrian} path="/info-antrian" />
               <Route>
                  <h1>404 Not Found : URL Tidak Ditemukan</h1>
               </Route>
            </Switch>
         </div>
      </BrowserRouter>
   );
}

export default App;
