<template>
  <div id="app">
    <h1>Tarefas</h1>
    <task-progress :progress="progress" />
    <add-task @taskAdded="addTask($event)" />
    <task-list
      :tasks="tasks"
      @taskDeleted="deleteTask($event)"
      @taskStateChanged="toggleTaskState($event)"
    />
  </div>
</template>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>

<script>
import TaskProgress from "./components/TaskProgress.vue";
import AddTask from "./components/AddTask.vue";
import TaskList from "./components/TaskList.vue";
export default {
  components: { TaskList, AddTask, TaskProgress },
  data() {
    return {
      tasks: [],
    };
  },
  watch: {
    tasks: {
      deep: true,
      handler() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      },
    },
  },
  computed: {
    progress() {
      const total = this.tasks.length;
      const done = this.tasks.filter((t) => !t.pending).length;
      return Math.round((done / total) * 100) || 0;
    },
  },
  created() {
    const json = localStorage.getItem("tasks");
    const array = JSON.parse(json);
    this.tasks = Array.isArray(array) ? array : [];
  },
  methods: {
    addTask(newTask) {
      const sameName = (t) => t.name === newTask.name;
      const isNew = this.tasks.filter(sameName).length === 0;

      isNew && newTask.name !== "" && this.tasks.push(newTask);
    },
    deleteTask(i) {
      this.tasks.splice(i, 1);
    },
    toggleTaskState(i) {
      this.tasks[i].pending = !this.tasks[i].pending;
    },
  },
};
</script>
