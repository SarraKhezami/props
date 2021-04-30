import React from "react";

import Myprofile from "./profile/profilecomponent";
import Myimage from "./profile/image";

const App = () => {
  const message = name => alert(name);
 return(
 <>
   <Myprofile fullName='sarra'  bio='oui'  profession='Ingénieur'  message={message} />
   <Myimage><img src="/logo192.png" alt="myimage" /></Myimage>

 </>
);}
export default App;