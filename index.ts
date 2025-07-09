export default {
  fetch(req: Request): Response {
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Victory!</title>
        </head>
        <body>
          <h1>Success!</h1>
          <p>The Vercel deployment is successful and responding correctly.</p>
          <p>Coze can now connect to this server.</p>
        </body>
      </html>
    `;
    return new Response(html, {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  },
};
