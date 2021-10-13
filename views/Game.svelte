<script>
    import Layout from './Layout.svelte';
    export let message;
</script>

<svelte:head>
    <title>Game</title>
</svelte:head>

<Layout>
    <h1>{message}</h1>
</Layout>

<style>
    h1 {
        color: white;
        user-select: none;
    }
</style>