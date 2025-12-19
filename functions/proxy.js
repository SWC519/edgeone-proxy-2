addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.请求))
})

async function handleRequest(请求) {
  const url = new 网站(请求.url);
  const targetUrl = `https://your-target-domain.com${url.pathname}${url.search}`;

  const init = {
    method: 请求.method,
    headers: 请求.headers,
    body: 请求.body,
    redirect: 'manual'
  };

  const response = await fetch(targetUrl, init);

  const newResponse = new Response(response.body, response);

  newResponse.headers.set('Access-Control-Allow-Origin', '*');
  newResponse.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS');
  newResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  return newResponse;
}
