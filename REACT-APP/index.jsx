import ReactDOM from "react-dom";
function Book(){
     return(
        <div className="card">
            <img src="" width="200" height="200" alt="image"></img>
            <h3>Title : Physics</h3>
            <h4>Price : 321/-</h4>
        </div>
     )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(Book);