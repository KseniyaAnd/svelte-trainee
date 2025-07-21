<script>
    import Tasks from "$lib/Components/Tasks/Tasks.svelte";
    import { fly } from "svelte/transition";
</script>

<div in:fly={{x: 100, duration: 100, delay: 100}}
     out:fly={{x: 100, duration: 100}}>
    <Tasks/>
</div>
