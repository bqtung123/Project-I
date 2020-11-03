import React from 'react';
import Intro from './Intro.js';
import ElonMusk from './ElonMusk.js'
import Career from './Career.js'


class Information extends React.Component{
    
    render(){
        return (
            <div >
                <div> 
                        <h1>Elon Musk</h1>
                        <h2><strong>Mục lục</strong></h2>       
                        <ul style={{listStyleType:"none"}}>    
                        <li>
                                        <a href='#intro'>1 Tiểu sử</a> 
                                        <ul style={{listStyleType:"none"}}>
                                                <li> <a href='#study'>1.1 Học vấn</a></li>
                                        </ul>   
                        </li>      
                        
                        <li>           
                                        <a href='#career'>2 Sự nghiệp kinh doanh</a>
                                        <ul style={{listStyleType:"none"}}>      
                                                <li> <a href='#PayPal'> 2.1 Paypal</a> </li>
                                                <li><a href='#SpaceX'> 2.2 SpaceX</a></li> 
                                                <li> <a href='#TesLa'> 2.3 Tesla Motors</a></li> 
                                                <li><a href='#SolarCity'>2.4 Solar City</a></li>
                                        </ul> 
                        </li>  

                        <li>        
                                <a>3. Hoạt dộng cá nhân</a>   
                                <ul style={{listStyleType:"none"}}>
                                        <li> <a>3.1 Từ thiện</a></li>     
                                        <li><a> 3.2 Gia đình</a></li>
                                        <li><a> 3.3 Tham gia chương trình Joe Rogan</a> </li>
                                </ul>
                        </li>

                        </ul>
                </div>   
             
                <hr></hr>
                <ElonMusk/>       
        <h2 id='intro'><strong>Tiểu sử</strong></h2>
               <Intro/>
        <h2 id='career'><strong>Sự nghiệp kinh doanh</strong></h2>               
               <Career/>
                
           
       </div>
        )
        }

}

export default Information