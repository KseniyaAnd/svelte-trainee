<script lang="ts">
    import TaskItem from "$lib/Components/Tasks/TaskItem.svelte";
    import { tasksStore } from "$lib/Stores/taskStore.js";
    import { slide } from 'svelte/transition';
    import { dndzone } from 'svelte-dnd-action';
    import type { DndEvent } from 'svelte-dnd-action';

    let draggingId: number | null = null;

    function handleDndConsider(e: CustomEvent<{ items: StoreInterface[] }>) {
        tasksStore.set(e.detail.items);
    }

    function handleDndFinalize(e: CustomEvent<{ items: StoreInterface[] }>) {
        tasksStore.set(e.detail.items);
        draggingId = null;
    }

    function handleDragStart(taskId: number) {
        draggingId = taskId;
    }

    function isDragging(taskId: number): boolean {
        return draggingId === taskId;
    }
</script>

<div
        class="task-list"
        role="list"
        use:dndzone={{
        items: $tasksStore,
        flipDurationMs: 300,
        dragDisabled: false,
        dropFromOthersDisabled: true,
        dropTargetStyle: { outline: '2px dashed #999' },
        transformDraggedElement: { scale: 1.03 }
    }}
        on:consider={handleDndConsider}
        on:finalize={handleDndFinalize}
>
    {#each $tasksStore as task (task.id)}
        <div
                role="listitem"
                class="task-wrapper {isDragging(task.id) ? 'dragging' : ''}"
                transition:slide
                on:dragstart={() => handleDragStart(task.id)}
        >
            <TaskItem task={task} />
        </div>

    {/each}
</div>

<style>
    .task-list {
        display: flex;
        flex-direction: column;
        gap: 25px;
        position: relative;
    }

    .task-wrapper {
        transition: transform 0.25s ease, margin 0.25s ease, background-color 0.2s ease;
        padding: 8px;
        border-radius: 6px;
        background-color: white;
    }

    /* Зелёный стиль для перетаскиваемого элемента */
    .task-wrapper.dragging.active {
        background-color: #e0fbe0;
        border: 1px solid #34c759;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        transform: scale(1.02);
        opacity: 0.95;
        z-index: 10;
    }

    /* Анимация вставки placeholder */
    :global(.svelte-dnd-placeholder) {
        height: 60px;
        border: 2px dashed #ccc;
        border-radius: 8px;
        background: rgba(200, 200, 200, 0.1);
        margin: 10px 0;
        animation: growIn 0.2s ease-out;
    }

    @keyframes growIn {
        from {
            height: 0;
            opacity: 0;
        }
        to {
            height: 60px;
            opacity: 1;
        }
    }
</style>