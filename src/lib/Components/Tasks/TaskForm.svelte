<script>
    import {tasksStore} from "$lib/Stores/taskStore.js";

    let newTask = $state({
        id: Math.floor(Math.random() * 100),
        name: '',
        description: '',
        state: false,
    });

    let validity = $derived(() => !isNameTouched || newTask.name.trim().length > 3);
    let isNameTouched = $state(false);

    function hendle(event) {
        event.preventDefault();
        if (!validity) return;

        tasksStore.addTask({...newTask})

        newTask.id = Math.floor(Math.random() * 100);
        newTask.name = '';
        newTask.description = '';
    }
</script>

<form onsubmit={hendle}>
    <div class="form-group">
        <input type="text" placeholder="Enter task name" class={validity() ? "" : "invalid"} bind:value={newTask.name} oninput={() => isNameTouched = true}/>
        <textarea placeholder="Enter task description" bind:value={newTask.description}></textarea>
        <button type="submit" disabled={!validity()}>Add task</button>
    </div>
</form>

<style>
    .invalid {
        background-color: #ffdddd;
        border-color: #ff0000;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .form-group input:invalid {
        background-color: #ffdddd;
        border-color: #ff0000;
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

    .form-group button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
</style>
