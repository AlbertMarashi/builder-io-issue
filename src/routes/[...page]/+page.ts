import { PUBLIC_BUILDER_IO_KEY } from '$env/static/public';
import { fetchOneEntry } from '@builder.io/sdk-svelte';


export async function load({url}) {
    const page = url.searchParams.get('page');

    let content = await fetchOneEntry({
        apiKey: PUBLIC_BUILDER_IO_KEY,
        model: 'page',
        userAttributes: {
            urlPath: url.pathname,
        }
    })

    return {
        content
    }
}