<script>
    import { page } from '$app/state';
</script>

<nav class="navbar">
    <div class="navbar-links">
        <a href="/nav/home" class:active={page.url.pathname === '/nav/home'}>Home</a>
        <a href="/nav/about" class:active={page.url.pathname === '/nav/about'}>About</a>
        <a href="/nav/tasks" class:active={page.url.pathname === '/nav/tasks'}>Tasks</a>
    </div>
</nav>

<style>
    .navbar {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 1rem 2rem;
        background-color: #ffffff;
        border-bottom: 1px solid #e0e0e0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        font-family: sans-serif;
    }

    .navbar-links {
        display: flex;
        gap: 1.5rem;
    }

    .navbar-links a {
        color: #333;
        text-decoration: none;
        font-size: 1rem;
        position: relative;
        padding: 0.5rem 0;
    }

    .navbar-links a:hover,
    .navbar-links a.active {
        color: #007bff;
    }

    .navbar-links a::after {
        content: '';
        display: block;
        width: 0%;
        height: 2px;
        background-color: #007bff;
        transition: width 0.3s;
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .navbar-links a:hover::after,
    .navbar-links a.active::after {
        width: 100%;
    }
</style>