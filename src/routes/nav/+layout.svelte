<script>
    import Nav from "$lib/Components/Nav.svelte";
    import "./app.css"

    let {children} = $props();
    import { slide, fade, fly } from 'svelte/transition';
</script>

<Nav/>

<div class="wrapper" in:fly={{ y: 200 }} out:fade >
    {@render children()}
</div>

