import React from 'react';


class Study extends React.Component{
   
    render(){
        let str='study';
        return (
<div>
    <h3 id={str}>Học vấn</h3>
    <p>Trong khi đợi giấy tờ từ phía Canada, Elon vào học Đại học Pretoria khoảng 5 tháng.[54] Khi tới Canada, Musk ghi danh vào Đại học Queen tại Kingston năm 1989, tránh nghĩa vụ bắt buộc trong Quân đội Nam Phi.[55] Ông rời đi vào năm 1992 để học kinh tế và vật lý tại Đại học Pennsylvania; ông tốt nghiệp năm 1997 với bằng Cử nhân Kinh tế tại Trường Wharton thuộc Đại học Pennsylvania và bằng Cử nhân Khoa học Vật lý từ College of Arts and Sciences của Đại học Pennsylvania.</p> 
    <p>Năm 1994, Musk đã tổ chức hai đợt thực tập tại Thung lũng Silicon vào mùa hè: tại một công ty khởi nghiệp lưu trữ năng lượng có tên là Pinnacle Research Institute, chuyên nghiên cứu các siêu âm điện phân để lưu trữ năng lượng và công ty khởi nghiệp Rocket Science Games tại Palo Alto.[61] Bruce Leak, cựu kỹ sư trưởng đằng sau QuickTime của Apple, người đã thuê Musk, lưu ý: "Anh ta có năng lượng vô biên. Bọn trẻ ngày nay không biết gì về phần cứng hay cách thức hoạt động, nhưng anh ta có một nền tảng hacker PC và chỉ để tìm ra mọi thứ mà không sợ điều gì</p>
    <p>Năm 1995, Musk được nhận vào chương trình tiến sĩ về vật lý năng lượng/khoa học vật liệu tại Đại học Stanford ở California.[20] Háo hức theo đuổi các cơ hội trong thời đại bùng nổ internet, tuy nhiên, thay vào đó, anh quyết định ra mắt công ty đầu tiên của mình, Zip2 Corporation.</p>
</div>
        );
    }
}

 class Intro extends React.Component{
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
                    <p>Từ nhỏ, Elon đã là một độc giả cuồng nhiệt[43] Vào năm 10 tuổi, ông đã có hứng thú với máy tính trong khi sử dụng Commodore VIC-20.[44] 
                        Elon đã học lập trình máy tính bằng cách sử dụng một hướng dẫn và đến năm 12 tuổi, đã bán mã nguồn của một video game dựa trên BASIC tạo ra Blastar cho tạp chí PC and Office Technology với giá khoảng 500 đô la.[45][46] Danh mục đọc của Elon gồm bộ sách Foundation của Isaac Asimov từ đó rút ra bài học rằng "bạn nên cố gắng thực hiện tập hợp các hành động có khả năng kéo dài nền văn minh, giảm thiểu xác suất của thời kỳ đen tối và giảm độ dài của thời kỳ đen tối nếu có".</p>
                   <p>Thời đi học, ông chịu sự bắt nạt nghiêm trọng và đã từng phải nhập viện sau khi bị một nhóm bạn học ném xuống cầu thang.[40][43][47][48] Elon theo học trường dự bị Waterkloof House Preparatory School và trung học Bryanston High School[47] sau đó tốt nghiệp tại trường trung học Pretoria Boys High School.</p>
                   <p>Mặc dù người cha khăng khăng muốn Elon đi học đại học ở Pretoria, nhưng Elon đã quyết tâm chuyển đến Hoa Kỳ, nói rằng "Tôi nhớ đã nghĩ và thấy rằng nước Mỹ là nơi có thể có những điều tuyệt vời, hơn bất kỳ quốc gia nào trên thế giới."[49] Ông biết rằng việc đến Hoa Kỳ từ Canada sẽ dễ dàng hơn và chuyển đến đó trái với mong muốn của cha mình vào tháng 6 năm 1989, ngay trước sinh nhật thứ 18.[50][51] Sau đó có được hộ chiếu Canada thông qua người mẹ gốc Canada của mình.</p>
                   </div>
                    )
                   content='Hidden';
                }
              else  content='See more';
              button=   <a onClick={this.seeMoreLess}>{content}</a>
               return (
                       <div>
                        <p>Elon Musk sinh ngày 28 tháng 6 năm 1971 tại Pretoria, Transvaal, Nam Phi.
                           Elon là con trai của bà Maye Musk (nhũ danh Haldeman) là một người mẫu và chuyên gia dinh dưỡng sinh ra tại Saskatchewan, Canada, lớn lên tại Nam Phi và ông Errol Musk, 
                           một kỹ sư cơ điện, phi công và thủy thủ người Nam Phi. Elon có một em trai là Kimbal (sinh năm 1972) và một em gái Tosca (sinh năm 1974).</p>
                        <p>Ông ngoại, Tiến sĩ Joshua Haldeman có quốc tịch Canada sinh ra tại Mỹ. 
                        Bà nội của Elon gốc Anh và cũng có tổ tiên là người nhập cư gốc Đức đầu tiên tại vùng đất Pennsylvania. 
                        Sau khi cha mẹ ly dị vào năm 1980, Elon sống chủ yếu với cha ở ngoại ô Pretoria, một lựa chọn mà Elon đưa ra hai năm sau khi bố mẹ ly thân nhưng sau đó cảm thấy hối hận.
                        Elon bị cha ghẻ lạnh, người mà ông đã gọi là "một con người khủng khiếp". Elon cũng có hai người anh em cùng cha khác mẹ.</p>
                        {rest}
                        {button}
                        <Study/>
                     </div>
               );

            }
 }

export default Intro