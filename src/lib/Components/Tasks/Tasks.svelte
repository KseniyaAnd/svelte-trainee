<script>
    import TaskForm from "$lib/Components/Tasks/TaskForm.svelte";
    import TaskList from "$lib/Components/Tasks/TaskList.svelte";

    let tasks = [
        {
            id: 1,
            name: 'Fix login issue',
            description: 'Investigate and fix the bug preventing users from logging in with Google OAuth. Reproduce in staging environment and verify with QA once resolved.',
            state: true
        },
        {
            id: 2,
            name: 'Update user profile UI',
            description: 'Redesign the user profile screen to include new fields (bio, location, website). Use Figma reference and ensure responsive layout.',
            state: false
        },
        {
            id: 3,
            name: 'Implement password reset flow',
            description: 'Create a secure password reset feature with email verification and token expiration logic. Add tests for edge cases.',
            state: false
        },
        {
            id: 4,
            name: 'Write documentation for API endpoints',
            description: 'Add detailed Swagger docs for all existing `/user`, `/auth`, and `/settings` endpoints. Include request/response examples.',
            state: false
        },
        {
            id: 5,
            name: 'Optimize image upload size',
            description: 'Compress uploaded images on the client side before sending to the server. Ensure quality threshold is acceptable for avatars and gallery items.',
            state: false
        }
    ];

    function handleAdd(task) {
        tasks = [...tasks, task];
    }
</script>

<h2 class="task-title">Tasks to do</h2>
<div class="tasks">
    <TaskList tasks={tasks}/>
    <TaskForm addTask={handleAdd}/>
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