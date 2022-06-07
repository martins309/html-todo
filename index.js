const todoObjectList = []

class Todo_Class {
    constructor(item){
        console.log(item)
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

    }
    
}


const listSection = document.querySelector('#myUL')

myTodoList = new Todo_Class(listSection)

document.querySelector(".addBtn").addEventListener("click", function() {
    myTodoList.add()
})