# Setup

Install bun if you don't already have it:

```bash
curl -fsSL https://bun.sh/install | bash
```

For simplicity we are just going to run the `client` and `server` seperatel.

cd to the `server` directory and run

```bash
bun run index.ts
```

in a sepreate terminal run cd into the `client` directory and run

```bash
bun run dev
```

This will start the vite client server. If you open your dev tools and go to networking and click on the state websocket connections, and you change the count on the UI you'll see the websocket data being sent.
