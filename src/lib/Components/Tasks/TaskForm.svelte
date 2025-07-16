<script>

    let taskName = $state('');
    let taskDescription = $state('');

    let {addTask} = $props();
    function handleAddTask() {
        addTask( {
            id: Math.random(),
            name: taskName,
            description: taskDescription,
            state: false,
        });
        taskName = "";
        taskDescription = "";
    }
</script>

<form on:submit|preventDefault={handleAddTask}>
    <div class="form-group">
        <input type="text" placeholder="Enter task name" bind:value={taskName}/>
        <textarea placeholder="Enter task description" bind:value={taskDescription}></textarea>
        <button type="submit">Add task</button>
    </div>
</form>

<style>
    .form-group {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .form-group input,
    .form-group textarea {
        padding: 10px 14px;
        font-size: 16px;
        border: 1px solid #ccc;
        outline: none;
        transition: border-color 0.2s ease;
    }

    .form-group input:focus,
    .form-group textarea:focus {
        border-color: #007acc;
    }

    .form-group textarea {
        resize: vertical;
        min-height: 80px;
        max-height: 200px;
        line-height: 1.4;
    }

    .form-group button {
        align-self: flex-start;
        background-color: #007acc;
        color: #fff;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.2s ease;
    }

    .form-group button:hover {
        background-color: #005fa3;
    }
</style>
