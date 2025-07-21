<script>
    import About from "$lib/Components/About.svelte";
    import { fly } from "svelte/transition";
</script>

<div in:fly={{x: 100, duration: 100, delay: 100}}
     out:fly={{x: 100, duration: 100}}>
    <About/>
</div>
