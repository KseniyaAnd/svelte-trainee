<script>
    import Home from "$lib/Components/Home.svelte";
    import { fly } from "svelte/transition";

</script>

<div in:fly={{x: 100, duration: 100, delay: 100}}
     out:fly={{x: 100, duration: 100}}>
    <Home/>
</div>

