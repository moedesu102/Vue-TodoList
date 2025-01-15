import tasks from "@/mocks/tasks";
import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
    state: () => ({
        listTask: tasks,
        isShowForm: false,
        strSearch: "",
        orderBy: "name",
        orderDir: "asc",
        taskSelected: null,
    }),
    getters: {
        listTaskSearchSort: (state) => {
            var newItems = state.listTask.filter((item) =>
                item.name.toLowerCase().includes(state.strSearch.toLowerCase())
            );

            const listTask = [...newItems];
            listTask.sort(function (a, b) {
                var numberSort = state.orderDir === "asc" ? -1 : 1;

                if (a[state.orderBy] < b[state.orderBy]) return numberSort;
                else if (a[state.orderBy] > b[state.orderBy])
                    return numberSort * -1;
                return 0;
            });

            return listTask;
        },
    },
    actions: {
        changeTasks(newTasks) {
            this.listTask = newTasks;
        },
        toggleForm() {
            if (this.isShowForm) this.taskSelected = null;
            this.isShowForm = !this.isShowForm;
        },
        handleSearch(strSearch) {
            this.strSearch = strSearch;
        },
        handleSort(orderBy, orderDir) {
            this.orderBy = orderBy;
            this.orderDir = orderDir;
        },
        handleDelete(taskDelete) {
            this.listTask = this.listTask.filter(
                (item) => item.id !== taskDelete.id
            );
        },
        handleAddNewTask(task) {
            this.listTask.push(task);
        },
        handleEdit(taskEdit) {
            this.isShowForm = true;
            this.taskSelected = taskEdit;
        },
        handleEditTaskById(taskEdit) {
            let index = this.listTask.findIndex(
                (item) => item.id === taskEdit.id
            );
            let listTaskClone = [...this.listTask];
            if (index !== -1) {
                listTaskClone.splice(index, 1, taskEdit);
                this.toggleForm();
                this.changeTasks(listTaskClone);
            }
        },
    },
});
