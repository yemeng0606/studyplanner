const CACHE_NAME = 'study-planner-v1';
const urlsToCache = [
  './',
  './index.html',
  './icon.png',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // キャッシュがあればそれを返す
        if (response) {
          return response;
        }
        // なければネットワークへ
        return fetch(event.request).then(
          response => {
            // レスポンスが正しくなければそのまま返す
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            // 重要リソースならキャッシュに追加するロジックを入れても良いが、
            // ここではシンプルにオンライン時にindex.htmlなどが更新されることを期待して
            // インストール次のみキャッシュする戦略、あるいは動的キャッシュも入れるか。
            // 今回はシンプルに、オフラインでも起動できるようにする基本実装。
            return response;
          }
        );
      })
  );
});
