<script>
    let count = 0;
    function increment() {
        count++;
    }
</script>

<button on:click={increment} class="btn">
    Click!
</button>

<p>Count: {count}</p>

<style>
    .btn {
        padding: 10px 20px;
        background-color: #97c4ff;
        color: white;
        border: none;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .btn:hover {
        background-color: #a8ccff;
        transform: scale(1.03);
    }

    .btn:active {
        transform: scale(0.98);
    }
</style>