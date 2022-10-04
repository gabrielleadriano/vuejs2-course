<template>
  <div id="taskList" class="task-list">
    <template v-if="tasks.length > 0">
      <task
        v-for="(task, i) in tasks"
        :key="task.name"
        :task="task"
        @taskDeleted="$emit('taskDeleted', i)"
        @taskStateChanged="$emit('taskStateChanged', i)"
      />
    </template>
    <p v-else class="no-task">Sua vida está em dia :)</p>
  </div>
</template>

<style>
.task-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.task-list .task {
  margin: 10px;
}

.no-task {
  color: #aaa;
  font-size: 1.7rem;
}
</style>

<script>
import Task from "./Task.vue";
export default {
  components: { Task },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
};
</script>