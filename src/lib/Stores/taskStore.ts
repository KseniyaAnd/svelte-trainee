import { writable, derived } from 'svelte/store';

export type StoreInterface = {
    id: number;
    name: string;
    description: string;
    state: boolean;
};

const tasks = writable<StoreInterface[]>([]);
export const loading = writable(false);

// filter: 'all' | 'active' | 'completed'
export const filter = writable<'all' | 'active' | 'completed'>('all');

export const filteredTasks = derived(
    [tasks, filter],
    ([$tasks, $filter]) => {
        if ($filter === 'active') return $tasks.filter(task => !task.state);
        if ($filter === 'completed') return $tasks.filter(task => task.state);
        return $tasks;
    }
);

function createTasksStore() {
    function addTask(task: StoreInterface) {
        tasks.update(value => [...value, task]);
    }

    function removeTask(taskId: number) {
        tasks.update(value => value.filter(task => task.id !== taskId));
    }

    function setTaskState(taskId: number, state: boolean) {
        tasks.update(value => value.map(task => task.id === taskId ? { ...task, state } : task));
    }

    function set(newTasks: StoreInterface[]) {
        tasks.set(newTasks);
    }

    return {
        subscribe: tasks.subscribe,
        set,
        addTask,
        removeTask,
        setTaskState,
    };
}

export const tasksStore = createTasksStore();
