<script lang="ts">
    import TaskItem from "$lib/Components/Tasks/TaskItem.svelte";
    import {tasksStore} from "$lib/Stores/taskStore.js";
</script>

<div class="task-list">
    {#each $tasksStore as task}
        <TaskItem task={task}/>
    {/each}
</div>

<style>
    .task-list {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
</style>