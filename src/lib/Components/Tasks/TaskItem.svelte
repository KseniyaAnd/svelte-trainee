<script>
    export let task;
</script>

<div class="task-item">
    <div class="task-item__checkbox">
        <input type="checkbox" checked={task.state}/>
        <p>{task.name}</p>
    </div>
    <div class="task-item__description">
        <p>{task.description}</p>
    </div>
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
</style>
