JavaScript thế hệ tiếp theo - Tóm tắt
Trong modules này, tôi đã cung cấp một giới thiệu ngắn gọn về một số tính năng cốt lõi "next-gen JavaScript features", tất nhiên tập trung vào những tính năng bạn sẽ thấy nhiều nhất trong khóa học này. Đây là một bản tóm tắt nhanh chóng!

let & const

Đọc thêm về let :  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

Đọc thêm về const :  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

let  và const  cơ bản thay thế var . Bạn sử dụng let  thay vì var  và const  thay vì var  nếu bạn có kế hoạch không bao giờ gán lại "biến" này (do đó có hiệu quả biến nó thành một hằng số).

Arrow Function ES6

Đọc thêm:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Fifts/Arrow_fifts

Các Arrow Function là một cách khác nhau để tạo các hàm trong JavaScript. Bên cạnh một cú pháp ngắn hơn, họ cung cấp các lợi thế khi nói đến việc giữ phạm vi của từ khóa `this` (xem tại đây: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_binding_of_this).

Cú pháp Arrow Function có thể trông lạ nhưng thực ra nó đơn giản.

hàm callMe ( name ) {  
    console.log( name );
}

mà bạn cũng có thể viết là:

const callMe = function ( name ) {   
    console.log( name );
}

trở thành: 

const callMe = ( name ) => {    
    console.log( name );
}

Quan trọng: 

Khi không có đối số , bạn phải sử dụng dấu ngoặc rỗng trong khai báo hàm:

const callMe = () => {    
    console.log( 'Max!' );
}

Khi có chính xác một đối số , bạn có thể bỏ qua dấu ngoặc đơn:

const callMe = name => {  
    console.log( name );
}

Khi chỉ trả về một giá trị (return) , bạn có thể viết tắt như sau:

const returnMe = name => name

Điều đó tương đương với:

const returnMe = name => {  
    return name ;
}

export & import

Trong các dự án React (và thực tế trong tất cả các dự án JavaScript hiện đại), bạn chia code của mình thành nhiều tệp JavaScript - cái gọi là modules. Bạn làm điều này để giữ cho mỗi tệp/modules tập trung và quản lý được.

Để vẫn truy cập chức năng trong một tệp khác, bạn cần export  (để làm cho nó có sẵn) và import  (để có quyền truy cập).

Bạn có hai loại export khác nhau: default (unnamed-không tên) và named export (named-có tên) :

default => export default ...; 

named => export const someData = ...; 

Bạn có thể import default exports như thế này:

import someNameOfYourChoice from './path/to/file.js'; 

Đáng ngạc nhiên,  someNameOfYourChoice  hoàn toàn phụ thuộc vào bạn.

Named export phải được import theo tên của họ:

import { someData } from './path/to/file.js'; 

Một tệp chỉ có thể chứa một default export và không giới hạn số lần named export. Bạn cũng có thể trộn một default export với bất kỳ số lượng named export nào trong cùng một file.

Khi import named export, bạn cũng có thể import tất cả named export cùng một lúc với cú pháp sau:

import * as upToYou from './path/to/file.js'; 

upToYou  là - tốt - tùy thuộc vào bạn và chỉ đơn giản gói tất cả các biến/hàm đã xuất trong một đối tượng JavaScript. Ví dụ: nếu bạn export const someData = ...  ( /path/to/file.js ) bạn có thể truy cập upToYou  như thế này :  upToYou.someData .

Class

Các class là một tính năng về cơ bản thay thế constructor function và prototype. Bạn có thể xác định kế hoạch chi tiết cho các đối tượng JavaScript với chúng. 

Như thế này:

class Person {  
    constructor() { 
        this.name = 'Max'; 
    }
}
 
const person = new Person();
console.log( person.name ); // in 'Max' 

Trong ví dụ trên, không chỉ class mà cả thuộc tính của class đó (=>  name ) được định nghĩa(defined). Cú pháp bạn thấy ở đó, là cú pháp "cũ" để xác định các thuộc tính. Trong các dự án JavaScript hiện đại (như một dự án được sử dụng trong khóa học này), bạn có thể sử dụng cách sau đây thuận tiện hơn để xác định các thuộc tính class:

class Person {  
    name = 'Max'; 
}
 
const person = new Person();  
console.log( person.name ); // in 'Max' 

Bạn cũng có thể định nghĩa các method như thế này:

class Person {  
    name = 'Max'; 
    printMyName() { 
        console.log( this.name ); // this là bắt buộc để tham chiếu đến class! 
    }
}
 
const person = new Person();  
person.printMyName();

Hoặc như thế này:

class Person {  
    name = 'Max'; 
    printMyName = () => {   
        console.log( this.name );
    }
}
 
const person = new Person();  
person.printMyName();

Cách tiếp cận thứ hai có cùng lợi thế như tất cả các Arrow Function có: Từ khóa this không thay đổi tham chiếu của nó.

Bạn cũng có thể sử dụng tính kế thừa khi sử dụng các class:

class Human {  
    species = 'Person'; 
}
 
class Person extends Human {    
    name = 'Max'; 
    printMyName = () => {   
        console.log( this.name );
    }
}
 
const person = new Person();  
person.printMyName();
console.log( person.species ); // in 'Person'

Spread & Rest Operator

Các spread and rest operator thực sự sử dụng cùng một cú pháp: ...

Vâng, đó là toán tử - chỉ ba dấu chấm. Việc sử dụng sẽ xác định xem bạn đang sử dụng nó làm toán tử spread hay rest.

Sử dụng toán tử spread (spread operator):

spread operator cho phép bạn kéo các phần tử ra khỏi một mảng (=> chia mảng thành một danh sách các phần tử của nó) hoặc kéo các thuộc tính ra khỏi một đối tượng. Đây là hai ví dụ:

const oldArray = [ 1 , 2 , 3 ];   
const newArray = [... oldArray , 4 , 5 ]; //  [1, 2, 3, 4, 5];    
Đây là spread operator được sử dụng trên một đối tượng:

const oldObject = { 
    name: 'Max' 
};

const newObject = { 
    ... oldObject,
    age: 28 
};

newObject sau đó sẽ là:

{
    name: 'Max' , 
    age: 28 
}

Toán tử lây lan (spread operator) cực kỳ hữu ích để nhân bản mảng và đối tượng. Vì cả hai đều là loại tham chiếu (và không phải là nguyên thủy) , sao chép chúng một cách an toàn (nghĩa là ngăn chặn sự đột biến trong tương lai của bản gốc được sao chép) có thể khó khăn. Với spread operator, bạn có một cách dễ dàng để tạo một bản sao (shallow!) của đối tượng hoặc mảng.

Destructuring

Destructuring cho phép bạn dễ dàng truy cập các giá trị của mảng hoặc đối tượng và gán chúng cho các biến.

Đây là một ví dụ cho một mảng:

const array = [ 1 , 2 , 3 ];   
const [ a , b ] = array ;  
console.log( a ); // in 1 
console.log( b ); // in 2 
console.log( array ); // in [1, 2, 3] 

Và ở đây cho một đối tượng:

const myObj = { 
    name: 'Max', 
    age: 28 
}
const { name } = myObj;  
console.log( name ); // in 'Tối đa' 
console.log( age ); // in undefined
console.log( myObj ); // in {name: 'Max', age: 28} 
Destructuring rất hữu ích khi làm việc với các đối số function(function arguments). Xem xét ví dụ này:

const printName = (personObj) => {   
    console.log( personObj.name );
}
printName({ name: 'Max', age: 28 }); // in 'Max'   

Ở đây, chúng tôi chỉ muốn in name trong function nhưng chúng tôi chuyển một đối tượng personObj hoàn chỉnh cho hàm. Tất nhiên điều này không có vấn đề gì nhưng nó buộc chúng ta phải gọi personObj.name bên trong function của chúng ta. Chúng tôi có thể rút gọn code này với Destructuring:

const printName = ({ name }) => {   
    console.log( name );
}
printName ({ name: 'Max', age: 28 }); // in 'Max') 

Chúng tôi nhận được kết quả tương tự như trên nhưng chúng tôi lưu ít code hơn. Bằng cách destructuring, chúng ta chỉ cần lấy thuộc tính name và lưu trữ nó trong một biến/đối số có tên name mà sau đó chúng ta có thể sử dụng trong thân hàm.