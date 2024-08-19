<script>
    import { PUBLIC_BUILDER_IO_KEY } from "$env/static/public";
    import { Content } from "@builder.io/sdk-svelte";

let {
    data
} = $props()
</script>

<Content
    content={data.content}
    apiKey={PUBLIC_BUILDER_IO_KEY}
    model="page"/>