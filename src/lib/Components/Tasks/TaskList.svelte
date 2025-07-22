<script lang="ts">
    import { onMount } from 'svelte';
    import TaskItem from './TaskItem.svelte';
    import { dndzone } from 'svelte-dnd-action';
    import { loading, filter, filteredTasks, tasksStore } from '../../Stores/taskStore';
    import type { DndEvent } from 'svelte-dnd-action';

    let draggingId: number | null = null;

    function handleDndConsider(e: CustomEvent<{ items: any[] }>) {
        tasksStore.set(e.detail.items);
    }

    function handleDndFinalize(e: CustomEvent<{ items: any[] }>) {
        tasksStore.set(e.detail.items);
        draggingId = null;
    }

    function handleDragStart(id: number) {
        draggingId = id;
    }

    function isDragging(id: number) {
        return draggingId === id;
    }

    onMount(async () => {
        loading.set(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        const raw = await res.json();
        const parsed = raw.map(todo => ({
            id: todo.id,
            name: todo.title,
            description: '',
            state: todo.completed
        }));
        tasksStore.set(parsed);
        loading.set(false);
    });
</script>

<!-- Фильтр -->
<div class="filter-buttons">
    <button on:click={() => filter.set('all')}>All</button>
    <button on:click={() => filter.set('active')}>Active</button>
    <button on:click={() => filter.set('completed')}>Completed</button>
</div>

{#if $loading}
    <p>Загрузка задач...</p>
{:else}
    <div
            class="task-list"
            role="list"
            use:dndzone={{
            items: $filteredTasks,
            flipDurationMs: 300,
            dragDisabled: false,
            dropFromOthersDisabled: true
        }}
            on:consider={handleDndConsider}
            on:finalize={handleDndFinalize}
    >
        {#each $filteredTasks as task (task.id)}
            <div
                    role="listitem"
                    class="task-wrapper {isDragging(task.id) ? 'dragging active' : ''}"
                    on:dragstart={() => handleDragStart(task.id)}
            >
                <TaskItem {task} />
            </div>
        {/each}
    </div>
{/if}

<style>
    .task-list {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .task-wrapper {
        padding: 8px;
        background: white;
        border-radius: 6px;
        transition: background-color 0.2s ease;
    }

    .task-wrapper.dragging.active {
        background-color: #e0fbe0;
        border: 1px solid #34c759;
    }

    :global(.svelte-dnd-placeholder) {
        height: 60px;
        border: 2px dashed #ccc;
        border-radius: 8px;
        background: rgba(200, 200, 200, 0.1);
        margin: 10px 0;
    }

    .filter-buttons {
        display: flex;
        gap: 8px;
        margin-bottom: 12px;
    }

    .filter-buttons button {
        padding: 6px 12px;
        font-size: 14px;
        cursor: pointer;
    }
</style>
