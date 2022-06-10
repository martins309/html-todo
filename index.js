const todoObjectList = []

class Todo_Class {
    constructor(item){
        this.ulElement = item
    }

    add() {
        const todoInput = document.querySelector("myInput").value
        if(todoInput == ""){
            alert("Dont make me fight you..")
        }else {
            const todoObject = {
                id: todoObjectList.length,
                todoText: todoInput,
                isDone: false,
            }
            todoObjectList.unshift(todoObject)
            this.display()
            document.querySelector("#task").value = ''
        }
    }

    done_undone(x) {

    }

    deleteElement(z) {

    }

    display() {
        this.ulElement.innerHTML = ""

        todoObjectList.forEach((object_item) => {
            
        const liElement = document.createElement("li")
        const delBtn = document.createElement("i")

        liElement.innerText = object_item.todoText
        liElement.setAttribute("data-id", object_item.id)

        delBtn.setAttribute("data-id", object_item)
        delBtn.classList.add("far", "fa-trash-alt")

        liElement.appendChild(delBtn)

        delBtn.addEventListener("click", function(e) {
            const deleteId = e.target.getAttribute("data-id")
            myTodoList.deleteElement(deleteId)
        })

        liElement.addEventListener("click", function(e) {
            const selectId = e.target.getAttribute("data-id")
            myTodoList.done_undone(selectId)
        })

        if(object_item.isDone){
            liElement.classList.add("checked")
        }

        this.ulElement.appendChild(liElement)

        })
        
    }
    
}


const listSection = document.querySelector('#myUL')

myTodoList = new Todo_Class(listSection)

document.querySelector(".addBtn").addEventListener("click", function() {
    myTodoList.add()
})