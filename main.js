const myLibrary = [];

function Book(name, author, page, read) {
    this.name = name
    this.author = author
    this.page = page
    this.read = read
}

const popUp = document.querySelector(".form");
const newBook = document.querySelector(".new_book");
newBook.addEventListener('click',() => {
    popUp.style.display = "block";
});

const getBookFromInput = () => {
    const title = document.getElementById('book_name').value;
    const author = document.getElementById('author_name').value;
    const page = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    return new Book(title, author, page, read);
};

const form = document.querySelector("form");
const submit = document.querySelector(".submit");
submit.addEventListener('click', () => {
    myLibrary.push(getBookFromInput());
    console.log(myLibrary);
    form.reset();
});

const previous = "";
const warning = document.createElement("p");
const main = document.querySelector("main")
const showbook = document.querySelector(".show_book");
showbook.addEventListener('click', (event) => {
    event.preventDefault();
    popUp.style.display = "none";
    if(myLibrary.length === 0)
    {   
        warning.style.color = "red";
        warning.style.display = "block";
        warning.textContent = "*Currently this library is empty";
        main.append(warning);
    }
    else
    {   
        for(const object of myLibrary)
        {   
            if(object.name === previous)
            {
                warning.textContent = "Add books to show in library";
            }
            else
            {
            warning.style.display= "none";
            const card = document.createElement("div");
            card.style.width = "300px";
            card.style.height = "300px";
            card.style.backgroundColor = "lightgreen";
            card.style.border = "1px solid black";
            card.style.borderRadius = "5px";
            card.style.display = "flex";
            card.style.flexDirection = "column";
            card.style.justifyContent = "center";
            card.style.alignItems = "center";
            
            
            const name = object.name;
            const l1 = document.createElement("h2");
            l1.textContent = `Book name: ${name}`;
            card.appendChild(l1);
            
            const author = object.author;
            const l2 = document.createElement("h2");
            l2.textContent = `Author: ${author}`;
            card.appendChild(l2);
            
            const page = object.page;
            const l3 = document.createElement("h2");
            l3.textContent = `Pages: ${page}`;
            card.appendChild(l3);
            
            const read = object.read;
            const l4 = document.createElement("h2");
            l4.textContent = `Read status: ${read}`;
            card.appendChild(l4);

            const remove = document.createElement("button");
            remove.textContent = "Remove this book";
            remove.style.width = "200px";
            remove.style.height = "200px";
            remove.style.backgroundColor = "white";
            remove.style.borderRadius = "5px";
            remove.style.fontSize = "large";
            remove.addEventListener('click', () => {
                main.removeChild(card)
            });
            card.appendChild(remove);

            main.appendChild(card);
            previous = name;
            }
            
            

        }
        
    }
});




