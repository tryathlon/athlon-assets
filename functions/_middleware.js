export async function onRequest(context) {
  const { pathname } = new URL(context.request.url);

  if (pathname.includes('/ui/') || pathname.includes('/animations/')) {
    return new Response('Not Found', { status: 404 });
  }

  return context.next();
}
