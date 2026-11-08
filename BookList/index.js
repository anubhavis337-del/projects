// let title= document.getElementById("title")
// let author=document.getElementById("author")
// let isbn =document.getElementById("isbn")
const formlist=document.getElementById("form-list")
let search =document.getElementById("search")
let booklist=document.querySelector("#book-list")
// const addbtn=document.getElementById("add-btn")

// console.log(addbtn)

window.addEventListener("load",function(){
    let booklist=JSON.parse(localStorage.getItem("books"))
    console.log(booklist)
    booklist.forEach((book)=> {
        addbook(book)
        
    });
})
 
formlist.addEventListener("submit", function(e){
e.preventDefault();

let title=document.querySelector("#title").value;
let author=document.querySelector("#author").value;
let isbn=document.querySelector("#isbn").value;

let books={title,author,isbn};

// if(!title || !author || !isbn){
//     alert("Please add details...")
// }

clearAll();
addbook(books);
addlocalstorage(books);
})

function clearAll(){
document.querySelector("#title").value="";
document.querySelector("#author").value="";
document.querySelector("#isbn").value="";
}

function addbook(book){
 let tr=document.createElement("tr");
 tr.innerHTML =`
 <td>${book.title}</td>
 <td>${book.author}</td>
 <td>${book.isbn}</td>
 <td><a href="#" class="delete">delete</a></td>
`;
 
booklist.appendChild(tr)
    
}

function addlocalstorage(pustak){
    let finalbook=[]
    if(localStorage.getItem("books")===null){
        console.log("hiiiii")
        finalbook=[]
    }else{
       finalbook= JSON.parse(localStorage.getItem("books"))
       console.log("newbook",finalbook)
    }

    finalbook.push(pustak)
    localStorage.setItem("books",JSON.stringify(finalbook));

}

booklist.addEventListener("click",function(e){
    if(e.target.classList.contains("delete")){
        booklist.removeChild(e.target.parentElement.parentElement)

    
    }
})