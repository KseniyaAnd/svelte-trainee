<script lang="ts">
    import TaskItem from "$lib/Components/Tasks/TaskItem.svelte";
    import {tasksStore} from "$lib/Stores/taskStore.js";
    import { slide } from 'svelte/transition';
</script>

<div class="task-list">
    {#each $tasksStore as task (task.id)}
        <div transition:slide>
            <TaskItem task={task}/>
        </div>
    {/each}
</div>

<style>
    .task-list {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
</style>