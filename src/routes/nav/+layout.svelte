<script>
    import Nav from "$lib/Components/Nav.svelte";
    import "./app.css"

    let {children} = $props();
</script>

<Nav/>

<div class="wrapper">
    {@render children()}
</div>

