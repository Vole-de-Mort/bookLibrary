const myLibary = [];
const btn = document.getElementById('btn');
const books = document.getElementById('books');
const dialog = document.querySelector('dialog');
const closeBtn = document.getElementById('close');
const addBtn = document.getElementById('add');
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.index = 0;
    if (read){
        this.read = "yes";
    }else{
        this.read = "Noo";
    }
    this.inf = function(){
        console.log(this.title+'\t'+this.author+'\t'+this.pages+'\t'+this.read);
    };
}
function display(){
    let s=0;
    for(let i=0; i<myLibary.length; i++){
        const part1 = document.createElement('div');
        const part2 = document.createElement('div');
        const part3 = document.createElement('div');
        const btn1 = document.createElement('button');
        const btn2 = document.createElement('button');
        part1.classList = 'item';
        part2.classList = 'item';
        part3.classList = 'item';
        btn1.classList = 'item btn hell';
        btn2.classList = 'item btn removeBtn';
        part1.textContent = myLibary[i].title;
        part2.textContent = myLibary[i].author;
        part3.textContent = myLibary[i].pages;
        btn1.textContent = myLibary[i].read;
        btn2.textContent = 'X';
        myLibary[i].index = s;
        btn2.dataset.index = myLibary[i].index;
        btn1.dataset.index = myLibary[i].index;
        s++;
        myLibary[i].index++;
        books.appendChild(part1);
        books.appendChild(part2);
        books.appendChild(part3);
        books.appendChild(btn1);
        if(btn1.textContent == "yes"){
            btn1.style.backgroundColor = 'green';
        }else{
            btn1.style.backgroundColor = 'red';
        }
        books.appendChild(btn2);
    }
};
btn.addEventListener('click', ()=>{
    dialog.showModal();
});
closeBtn.addEventListener('click', ()=>{
    dialog.close();
});
function clear(){
    var items = document.querySelectorAll(".item");
    items.forEach(function (item){
        item.remove();
    });
};
function setUpDisplay(){
    var e1=document.createElement('div');
    var e2=document.createElement('div');
    var e3=document.createElement('div');
    var e4=document.createElement('div');
    var e5=document.createElement('div');
    e1.textContent = "Titles";
    e2.textContent = "Author";
    e3.textContent = "Num pages";
    e4.textContent = "read";
    e5.textContent = "remove";
    books.classList = 'remove_border';
    books.appendChild(e1);
    books.appendChild(e2);
    books.appendChild(e3);
    books.appendChild(e4);
    books.appendChild(e5);
    
}
addBtn.addEventListener('click', ()=>{
    if (myLibary.length === 0){
        setUpDisplay();
    }
    const title = document.getElementById('getbooktitle').value;
    const author = document.getElementById('getbookauthor').value; 
    const pages = document.getElementById('getbookpages').value; 
    const check = document.getElementById('check').checked;
    const book = new Book(title, author, pages, check)
    myLibary.push(book);
    clear();
    display();
    document.getElementById('form').reset();
    dialog.close();
    
});
books.addEventListener('click', (event) => {
    if (event.target.classList.contains('removeBtn')) {
        const indexToRemove = event.target.dataset.index;
        myLibary.splice(indexToRemove, 1); // Remove the book from the array
        clear();
        display(); // Redraw the updated book list
    }else if (event.target.classList.contains('hell')){
        if(event.target.textContent == "yes"){
            event.target.textContent = "Noo";
            event.target.style.backgroundColor = 'red';
            myLibary[event.target.dataset.index].read = "Noo";
        }else{
            event.target.textContent = "yes";
            event.target.style.backgroundColor = 'green';
            myLibary[event.target.dataset.index].read = "yes";
        }
    };
});