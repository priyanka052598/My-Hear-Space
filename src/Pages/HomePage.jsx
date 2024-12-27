import React from 'react'
import Header from '../Components/Home/Header'
import SafeSpace from '../Components/Home/SafeSpace/SafeSpace'
import Youfeel from '../Components/Home/Youfeel/Youfeel'
import Onestopsolution from '../Components/Home/onestopsolution'
import Caringlisteners from '../Components/Home/Caringlisteners'
import Usersay from '../Components/Home/Usersay'
import Appfeatured from '../Components/Home/Appfeatured'
import Oursupprtiveblogs from '../Components/Home/Oursupprtiveblogs'
import Firstrecharge from '../Components/Home/Firstrecharge'
import FAQ from '../Components/Home/Faq/FAQ'
import Footer from '../Components/Home/Footer'
import Sharereview from '../Components/Home/Sharereview'


function HomePage() {
  return (
    <div>
   <Header/>
   <SafeSpace/>
   <Youfeel/>
   <Onestopsolution/>
   <Caringlisteners/>
   <Usersay/>
   <Appfeatured/>
   <Oursupprtiveblogs/>
   <Firstrecharge/>
   <FAQ/>
   <Sharereview/>
 <Footer/>
   
    </div>
  )
}

export default HomePage