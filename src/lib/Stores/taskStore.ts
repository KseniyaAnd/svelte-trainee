import {writable} from "svelte/store";

function createTasksStore() {
    let tasks = writable([
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
    ]);

    function addTask(task:StoreInterface) {
        tasks.update(value => [...value, task]);
    }
    function removeTask(taskId: number) {
        tasks.update(value => value.filter(task => task.id !== taskId));
    }
    function setTaskState(taskId: number, state: boolean) {
        console.log(taskId, state);
        tasks.update(value => value.map(task => task.id === taskId ? {...task, state} : task));
    }
    return {
        subscribe: tasks.subscribe,
        addTask,
        removeTask,
        setTaskState,
    }
}

export const tasksStore = createTasksStore();
