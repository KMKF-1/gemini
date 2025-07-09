export default {
  fetch(req: Request): Response {
    return new Response("Hello World! The Vercel deployment is successful.", {
      status: 200,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  },
};
