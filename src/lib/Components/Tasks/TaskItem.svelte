<script>
    export let task;
    import {tasksStore} from "$lib/Stores/taskStore.js";
</script>

<div class="task-item">
    <div class="task-item__checkbox">
        <input type="checkbox" checked={task.state} oninput={() =>tasksStore.setTaskState(task.id, !task.state)}/>
        <p>{task.name}</p>
    </div>
    <div class="task-item__description">
        <p>{task.description}</p>
    </div>
    <input class="task-item__btn" type="submit" value="Remove" onclick={() => tasksStore.removeTask(task.id)}/>
</div>

<style>
    .task-item {
        font-size: 18px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        background-color: #f4f4f4;
        padding: 20px;
        border: 1px solid #e0e0e0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    .task-item__checkbox {
        display: flex;
        gap: 10px;
    }

    .task-item__description {
        font-size: 14px;
        text-align: left;
    }

    .task-item__btn {
        font-size: 14px;
        margin-top: 10px;
        padding: 5px 10px;
        width: fit-content;
        align-self: flex-end;
        background-color: #ff1d1d;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        color: #ffffff;
        border: none;
        cursor: pointer;
    }
</style>
