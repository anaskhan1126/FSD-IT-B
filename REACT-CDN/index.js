function Book(props){
 const image=React.createElement("img",
    {
        src: props.image,
        width: 150,
        height: 150,
        alt: "Book Image"
    }
 );
 const h4=React.createElement("h4",null,`Price : ${props.price}`);
 const child=React.createElement("div",{className: "card"},image,h4);
 return (child);
};
const books=[{
    image: "https://up.yimg.com/ib/th/id/OIP.X-8BqLJUCX9HfQOtklYfegAAAA?pid=Api&rs=1&c=1&qlt=95&w=73&h=113",
    price: 235
},{
    image: "https://up.yimg.com/ib/th/id/OIP.YSJE-m47WRFAFX1JP1r2jgHaL3?pid=Api&rs=1&c=1&qlt=95&w=56&h=91",
    price: 245
},{
    image: "https://up.yimg.com/ib/th/id/OIP.ZHoWakoY6aiGYUtDqkHrUwHaLG?pid=Api&rs=1&c=1&qlt=95&w=60&h=91",
    price: 335
}];
const bookele=books.map(p=>(
    React.createElement(Book,{image : p.image,price:p.price}
)));
const book=React.createElement("div",{className:"booklist"},bookele)
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(book)