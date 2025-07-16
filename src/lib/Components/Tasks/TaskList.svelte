<script>
    import TaskItem from "$lib/Components/Tasks/TaskItem.svelte";

    export let tasks;
</script>

<div class="task-list">
    {#each tasks as task}
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