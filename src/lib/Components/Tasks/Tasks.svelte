<script>
    import TaskForm from "$lib/Components/Tasks/TaskForm.svelte";
    import TaskList from "$lib/Components/Tasks/TaskList.svelte";
</script>

<h2 class="task-title">Tasks to do</h2>
<div class="tasks">
    <TaskList/>
    <TaskForm/>
</div>


<style>
    .task-title {
        font-size: 24px;
    }

    .tasks {
        background-color: #ffffff;
        padding: 30px 20px;
        border: 1px solid #e0e0e0;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        max-width: 600px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
</style>