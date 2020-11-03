import React from 'react';
import  image1 from './Elon_Musk1.jpg';
import  image2 from './Elon_Musk2.png';
import  image3 from './Elon_Musk3.jpg';
import  image4 from './Elon_Musk4.jpg';

let time=0;
class ElonMusk extends React.Component{
         constructor(){
             super();
             this.state={image:image1};
         }

         componentDidMount(){
             setInterval(()=>{
                  let img;
                  if(time===30) time=0;
                  if(time%4===0) img=image1;
                  else  if(time%4===1)  img=image2;
                  else  if(time%4===2)  img=image3;
                  else img=image4;
                  time++;
                  this.setState({image:img});
             },1000);
         }
    render(){
        let anim= <img src={this.state.image} alt='Elon Musk' width='400px' height='500px' style={{float:'right'}}></img>;
          return (
           <div>             
             {anim}
           </div>
          );
    }
}

export default ElonMusk

