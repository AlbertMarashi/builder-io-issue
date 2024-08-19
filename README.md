# Bug reproduction

1. create `.env` file with following content
```bash
PUBLIC_BUILDER_IO_KEY=e447dd52ae65478e8501b1735e4babc7
```

2. Run `bun i` / `npm i`
2. Run `bun dev` / `npm run dev` to start the svelte dev sever
3. Go to the URL `/foo`
4. Navigate to the `/dynamic` link via the link on the page
5. Notice how the data dynamic does not appear/load
6. Your console will show an error like
```
[Builder.io]:  Failed code evaluation: can't access property "results", state.milestones is undefined
Object { code: "state.milestones.results" }
```
7. Refresh the page, and notice how the data is loaded