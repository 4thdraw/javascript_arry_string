/*

   <li class='col-4 bg'>
      <img src='2.jpg'>
      <p>신상품</p>
   </li>
   <li class='col-5 bg0'>
      <img src='brabo.jpg' alt='로고'>
      <p>세일상품</p>
   </li>
  
*/
lihtml('col-5 bg0', 'brabo.jpg', '세일상품', '로고');
function lihtml(a, b, c, d){
    console.log("<li class='"+a+"'><img src=\""+b+"\"alt="+d+" ><p>"+c+"</p></li>")
}