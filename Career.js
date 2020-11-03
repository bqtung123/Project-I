import React from 'react';

class Paypal extends React.Component{
       render(){
           return(
              <div>
                  <h2 id='PayPal'><strong>PayPal</strong></h2>
              <p>Trong khi đợi giấy tờ từ phía Canada, Elon vào học Đại học Pretoria khoảng 5 tháng.[54] Khi tới Canada, Musk ghi danh vào Đại học Queen tại Kingston năm 1989, tránh nghĩa vụ bắt buộc trong Quân đội Nam Phi.[55] Ông rời đi vào năm 1992 để học kinh tế và vật lý tại Đại học Pennsylvania; ông tốt nghiệp năm 1997 với bằng Cử nhân Kinh tế tại Trường Wharton thuộc Đại học Pennsylvania và bằng Cử nhân Khoa học Vật lý từ College of Arts and Sciences của Đại học Pennsylvania.</p>
              <p>Năm 1994, Musk đã tổ chức hai đợt thực tập tại Thung lũng Silicon vào mùa hè: tại một công ty khởi nghiệp lưu trữ năng lượng có tên là Pinnacle Research Institute, chuyên nghiên cứu các siêu âm điện phân để lưu trữ năng lượng và công ty khởi nghiệp Rocket Science Games tại Palo Alto.[61] Bruce Leak, cựu kỹ sư trưởng đằng sau QuickTime của Apple, người đã thuê Musk, lưu ý: "Anh ta có năng lượng vô biên. Bọn trẻ ngày nay không biết gì về phần cứng hay cách thức hoạt động, nhưng anh ta có một nền tảng hacker PC và chỉ để tìm ra mọi thứ mà không sợ điều gì</p>
              <p>Năm 1995, Musk được nhận vào chương trình tiến sĩ về vật lý năng lượng/khoa học vật liệu tại Đại học Stanford ở California.[20] Háo hức theo đuổi các cơ hội trong thời đại bùng nổ internet, tuy nhiên, thay vào đó, anh quyết định ra mắt công ty đầu tiên của mình, Zip2 Corporation.</p>
              </div>

           )
            }
};

class SpaceX extends React.Component{
    constructor(){
        super();
        this.state={show:false};
    }

    seeMoreLess=()=>{
        if(!this.state.show)
            this.setState({show:true});
        else
            this.setState({show:false});
    }
  

    render(){
        let rest;
        let content;
        let button;
        if(this.state.show){
            rest=(
            <div>
            <p>Musk nói rằng ý tưởng về công nghệ vũ trụ của mình chịu ảnh hưởng từ series "Foundation" của Issac Asimov [74], và xem việc khai phá vũ trụ như một bước quan trọng trong việc mở rộng—nếu không nói là bảo tồn-sự hiểu biết của đời sống con người.[75] Musk từng nói rằng sự sống trải trên nhiều hành tinh khác nhau có thể đóng vai trò như một hàng rào ngăn chặn những mối đe dọa sự tồn vong của loài người. "Một thiên thạch hay một siêu núi lửa có thể hủy diệt chúng ta, và chúng ta đối mặt với những thảm họa mà khủng long chưa từng biết tới: một virus được lập trình, một sự hình thành do sơ suất một vi lỗ đen, sự ấm lên toàn cầu thảm họa hoặc một công nghệ thậm chí chưa được biết đến nào đó có thể báo hiệu sự tiêu vong của chúng ta. Nhân loại đã tiến hóa hàng triệu năm, nhưng trong 60 năm gần đây các vũ khí nguyên tử tạo nên nguy cơ tiêu diệt chính chúng ta. Sớm hay muộn, chung ta phải mở rộng sự sống ra ngoài trái cầu xanh lam này-hoặc là tuyệt chủng." [76] Mục tiêu của Musk là giảm giá thành của một chuyến bay có chở người xuống còn 1/10 hiện nay.[77] Ông thành lập SpaceX với 100 triệu đô la từ tài sản ban đầu của mình. Ông hiện vẫn đóng vai trò điều hành lẫn chỉ đạo kĩ thuật của công ty đóng ở Hawthorne, California này.[78] Trong tiểu sử của Ashlee Vance, Musk tuyên bố rằng ông muốn thành lập một thuộc địa của loài người trên sao Hỏa vào năm 2040, với dân số khoảng 80.000 người.[44] Musk tuyên bố rằng, do bầu khí quyển của sao Hỏa thiếu oxy, nên tất cả các phương tiện giao thông trên sao Hỏa đều sẽ sử dụng động cơ điện (ô tô điện, tàu điện, Hyperloop, máy bay điện) [79]. Musk tuyên bố vào tháng 6 năm 2016 rằng hai tàu đầu tiên của SpaceX sẽ hạ cánh xuống sao Hỏa vào năm 2022 mang theo các thiết bị cần thiết để xây dựng các trạm năng lượng và cơ sở hạ tầng hỗ trợ sự sống. Đến năm 2024, các phi hành gia của SpaceX sẽ chính thức đặt chân lên hành tinh Đỏ, mang theo tham vọng chinh phục sao Hỏa của nhân loại [80]. Trong một cuộc phỏng vấn với Axios năm 2018, Tỷ phú Elon Musk tuyên bố ông muốn là người đầu tiên đặt chân lên Sao Hỏa.</p>
           </div>
            )
           content='Hidden';
        }
      else  content='See more';
      button=   <a onClick={this.seeMoreLess}>{content}</a>
       return (
               <div>
                   <h2 id='SpaceX'><strong>SpaceX</strong></h2>
               <p>Musk thành lập công ty thứ ba của ông, Space Exploration Technologies (SpaceX), vào tháng 6 năm 2002[71] và hiện là CEO và Giám đốc Kỹ thuật của tập đoàn này. SpaceX phát triển và chế tạo các phương tiện phóng ra không gian với trọng tâm hướng vào việc phát triển công nghệ tên lửa. Hai tên lửa đầu tiên của công ty là Falcon 1 và Falcon 9 và phi thuyền đầu tiên của nó mang tên Dragon</p>
                <p>SpaceX đã giành được hợp đồng 1,6 tỷ đô la với NASA ngày 23 tháng 12 năm 2008, cho 12 chuyến bay của Falcon 9 và Dragon vào Trạm Vũ trụ Quốc tế ISS, thay thế cho Space Shuttle của NASA sau khi nó hết thời gian hoạt động năm 2011. Ban đầu, Falcon 9/Dragon sẽ thay thế chức năng vận tải hàng hóa của Shuttle và việc vận chuyển phi hành gia sẽ được thực hiện bởi Tàu vũ trụ Soyuz. Tuy nhiên, SpaceX đã thiết kế Falcon 9/Dragon nhằm vào việc vận chuyển phi hành gia và Ủy ban Augustine (Cơ quan Hoa Kỳ phụ trách các chuyến bay có người lái vào vũ trụ) đã khuyến nghị việc vận tải hành khách bởi các công ty thương mại như SpaceX</p>
                {rest}
                {button}
                
             </div>
       );

    }

}

class SolarCity extends React.Component{
  render(){
      return(
          <div>
        <h2 id='SolarCity'><strong>Solar City</strong></h2>
        <p>Elon Musk là người đề xuất ý tưởng ban đầu cho SolarCity, một công ty do hai người anh em họ của ông, Peter (COO) và Lyndon Rive (CEO), thành lập năm 2006[113][114]. Elon Musk hiện giữ chân Chủ tịch và là cổ đông lớn nhất của SolarCity, định hướng nó cùng với Tesla Motors như một phần trong chiến dịch chống lại sự ấm lên toàn cầu[115]. Sau vài năm phát triển, SolarCity, chủ yếu hoạt động ở California, đã vươn lên thành nhà cung cấp năng lượng mặt trời cho dân cư lớn nhất Hoa Kỳ từ năm 2011.[116]. SolarCity cũng bước chân vào lĩnh vực ô tô điện từ năm 2009[117], và hợp tác với Tesla Motors nhằm kết hợp giữa pin điện ô tô với pin mặt trời, cung cấp các trạm sạc miễn phí cho xe điện hiệu Tesla và phương tiện lưu trữ điện mặt trời trong những thời điểm công suất hoạt động thấp[118][119]. SolarCity cũng tham gia các chương trình từ thiện, đầu tư các dự án hợp tác với chính phủ, quân đội, và các công ty khác như Google Inc. với Google Fund[120]. Lyndon Rive kể rằng Elon Musk chỉ có rất ít thời gian cho SolarCity, chỉ liên lạc qua điện thoại vài giờ mỗi tháng và họp hội đồng quản trị, nhưng vẫn bao quát toàn bộ hoạt động của công ty</p>
        </div>
      )
  }
}
class TeslaMotor extends React.Component{
    constructor(){
        super();
        this.state={show:false};
    }

    seeMoreLess=()=>{
        if(!this.state.show)
            this.setState({show:true});
        else
            this.setState({show:false});
    }
  

    render(){
        let rest;
        let content;
        let button;
        if(this.state.show){
            rest=(
            <div>
          <p>Mẫu xe điện thể thao đầu tiên, Tesla Roadster 2008, với giá khởi điểm 109 nghìn đô la/chiếc bán được khoảng 2500 đơn vị tới 31 quốc gia, đồng thời bản thử nghiệm của nó nhận giải "Phát minh xuất sắc nhất" năm 2006 của tạp chí Time trong lĩnh vực "Phát minh về vận tải"[96].[97]. Tesla Model S, chiếc sedan xuất hiện trên thị trường tháng 6 năm 2012 đã trở thành hiện tượng của năm, đạt một loạt giải thưởng như giải Xe tiêu biểu nhất của năm 2013 của tạp chí Automobile[98]. Nó bán được 2650 chiếc trong năm 2012 ở Hoa Kỳ[96] và 4900 chiếc tại Bắc Mỹ chỉ trong quý I 2013, trở thành mẫu xe điện bán chạy nhất trong khu vực[99]. Model X, mẫu xe SUV-minivan, được giới thiệu tháng 9 năm 2012 và được bán ra năm 2015</p>
           <p>Thế hệ thứ ba của xe điện Tesla là Model 3 ra mắt vào năm 2016. Bên cạnh việc bán xe điện thương hiệu Tesla, Tesla Motors còn cung cấp động cơ điện cho Mercedes-Benz, Toyota và Musk dự tính sẽ cung cấp một mạng lưới các trạm sạc điện siêu nhanh cho ô tô trên khắp Bắc Mỹ trong năm 2013[101] Tháng 5 năm 2013, Tesla Motors cho thấy quý đầu tiên hoạt động có lợi nhuận kể từ khi nó niêm yết cổ phiếu năm 2011</p>
           </div>
            )
           content='Hidden';
        }
      else  content='See more';
      button=   <a onClick={this.seeMoreLess}>{content}</a>
       return (
               <div>
                   <h2 id='TesLa'><strong>Teslar Motor</strong></h2>
               <p>Tesla Motors được Martin Eberhard và Marc Tarpening gây vốn vào tháng 7 năm 2003, Musk đầu tư thành lập tháng 2 năm 2004 và trở thành Chủ tịch Hội đồng Quản trị; nhưng đam mê của ông với ô tô điện đã có từ thời còn trẻ[89]. Do ảnh hưởng của khủng hoàng tài chính thế giới năm 2008 và kéo theo đó là một đợt cắt giảm nhân lực bắt buộc ở Tesla, Musk buộc phải đảm nhận thêm vị trí CEO[90]. Ông khẳng định đường hướng của công ty là đầu tiên phát triển những chiếc xe thể thao hạng sang để thu hút sự quan tâm tới xe điện và kiếm lợi nhuận ban đầu nhằm nuôi mục đích lâu dài là cung cấp ô tô điện phổ biến cho người bình dân, giảm đáng kể lượng tiêu thụ dầu thô toàn cầu</p>
                <p>Musk đóng vai trò tích cực trong công ty và đặc biệt chỉ đạo thiết kế các mẫu sản phẩm cũng như định hướng chiến lược, nhưng dù là CEO ông không liên hệ sâu vào việc điều hành kinh doanh hàng ngày[93]. Ông được cho là nắm 32% cổ phần tại Tesla, tập đoàn này được định giá 13.9 tỷ đô la vào tháng 7 năm 2013</p>
                {rest}
                {button}
              
             </div>
       );

    }

}

class Career extends React.Component{
   render(){
       return(
              <div>
                   <Paypal />
                   <SpaceX/>
                   <TeslaMotor/>
                   <SolarCity/>
              </div>


       )
        

       
   }

}

export default Career