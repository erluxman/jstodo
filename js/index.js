class Todo {
    constructor(work, done) {
        this.work = work;
        this.done = done;
    }
}


class DB {
    static getDoneTasks() {

        return [
            { work: "Buy an Acre of Land", done: true },
            { work: "Buy A car", done: true },
            { work: "Make new Home", done: true },
        ]

    }

    static getNotDoneTasks() {
        return [
            { work: "Buy macbook", done: true },
            { work: "Buy kindle", done: true },
            { work: "Start Learning Web", done: true },
        ]
    }
    static addTask(task) {

    }

    static deleteTask(work) {

    }
}

class UI {
    static displayNotDoneTasks() {
        DB.getNotDoneTasks().forEach((task) => UI.addNotDonetask(task))
    }

    static addNotDonetask(task) {
        const list = document.querySelector('#todo-list')
        const row = document.createElement('tr')
        row.innerHTML = `
        <td class="not-done-work-text">${task.work}</td>
        <td><i class="far fa-trash-alt not-deleted-task"></i></td>
        <td><i class="far fa-check-circle not-done-mark"></i></td>
        `
        list.appendChild(row)
    }

    static addDoneTask(task) {
        const list = document.querySelector('#done-list')
        const row = document.createElement('tr')
        row.innerHTML = `
        <td class="done-work-text">${task.work}</td>
        <td><i class="far fa-trash-alt not-deleted-task"></i></td>
        <td><i class="far fa-check-circle done-mark"></i></td>
        `
        list.appendChild(row)
    }
    static displayDoneTasks() {
        DB.getDoneTasks().forEach((task) => UI.addDoneTask(task))

    }

    static addTask(task) {
        const books = Store.getBooks()
        books.push(book)
        localStorage.setItem('books', JSON.stringify(books))
    }

    static removeTask(work) {

    }

    static markAsDone(work) {
    }

    static markAsNotDone(work) {

    }
    static clearInput() {
        document.querySelector("#todo-field").value=""
    }

    static showAlert() {

    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    UI.displayDoneTasks()
    UI.displayNotDoneTasks()
})

document.querySelector("#todo-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const work = document.querySelector("#todo-field").value
    const todo = new Todo(work, false)
    UI.addNotDonetask(todo)
    UI.clearInput()
})
