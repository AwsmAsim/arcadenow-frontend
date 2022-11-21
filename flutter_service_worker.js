'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8c58f417b4dc49fb23ef799618c80bbf",
".git/config": "2db2adfa0adbcd80e7776ecf606e5d6b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "52f85105148312623842e0692ac687a2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "73869cf25725e30409200188614bdad5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5690adcc2f983a855f47335810e9bbb0",
".git/logs/refs/heads/main": "a41f1513d369ff9e0aafdd9b59d94551",
".git/logs/refs/remotes/origin/main": "cf21a2f386dc34a24e4865bef7e22f9e",
".git/objects/08/9149d3fe77fad633e82259302cf25cb710ab0f": "f210c10511dc00d90407be302ce201e4",
".git/objects/17/0ef797c403836898b2853858a207543fd7996f": "d55cd534eb92e898f705a74a8e960bd8",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1b/d4f3c7b6b0fe8a89885a9b39240d1baee6d4cb": "96f76c5106fdd65c677e0c3f0a0b06cf",
".git/objects/1c/f693a787dc40805ae83f028c37719bbb3103f7": "59766842403d84f87070cb2c9d98cd8c",
".git/objects/1d/920c7eb6c055f86b419faa3805ed84c489acb9": "e1d83e6d9847d692681ec5c7ee758732",
".git/objects/27/f0149190e637c1226854bd21e6dc5a247a7768": "93e0698ef2cce737ca66924aebb81f00",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2e/2ea38dc202a073eb2f498190ada407e758bfc8": "6cc2a4c81dd2dae9caafcdfcc6d0beb8",
".git/objects/33/aa36c7219926df4de3019f408e2f4d53ce8fce": "d076b5ea627cd04c3f0bc132a5d59697",
".git/objects/3a/3a10391641471b7483bcc71b8f62a0a187ddc8": "6690c32833e7ca8b596fa90071181843",
".git/objects/3b/3a24625cdbe73d266bc0a3f90fb41144ab3890": "7f5685fce6dbd4a757ef9a5b0807e291",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/44/b9fe63c615ca279e363e912a2df38aa0ec4a8d": "8869a7cac28de24847a09e4a03f8d2b1",
".git/objects/4d/dcfeb889c1b081c5be07948f5a630f7ca50886": "6f795abef4bc55629f6d8802505e2b51",
".git/objects/4f/76fc047db121c2bf502c1d0aa53369507cdd31": "bc19c965d5bda718d7bf7cb6759294ff",
".git/objects/57/58a56a0a74c59dd8cf26dda06b227d451dcb65": "0a00d98ca0e63c5135b609ee3ef7bd7f",
".git/objects/5a/391bb30cc579b8353013f105b142980b83f6dd": "cb2da3e792690a93e5ff87a2433cb34f",
".git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "22c1d6d01faf7fc1d8fdea62943b78d8",
".git/objects/63/8bd5ddd2cfd048747793520b06df1b6769cbb7": "24451b717bdecf7584d6e22e8399ddfd",
".git/objects/64/526dff4aecce43e320e9741c64e48fa36f01b3": "9fbb8a1e2b71ff1f86de735c8f6ad870",
".git/objects/69/2d3bae7f5afd14bbb7cc3d589a00c25e12bd83": "261aed7ed9c621c04499c34c2854110a",
".git/objects/6a/6552b089fa78d2b8efe2f1240187143ae715ab": "f9261b1d52e8ef469b3923a7d8b071b3",
".git/objects/6e/3f48a4cd5386532fe902f9f7ede5f3fb2ea971": "0e56fc6d8368e78ef43cf34d3798cc87",
".git/objects/70/28eee749885fd60ce52127ea20f03f269eea18": "7af6bd163a35260d74eb3bed9912bc2a",
".git/objects/73/51d7ed070fe92ea2df340297ba19cb83efe97e": "8c7c5cf46dac60094cb2baf06b90a552",
".git/objects/75/4c18a814b70f0a52fea049b0f98f9330f1e535": "af91bdcc375039a7a74412f66d55164f",
".git/objects/75/5ee27b57c5c6fecbbd38e05c15597386c00f60": "e8ba91c3c32426f0d99c9562c5837ad6",
".git/objects/77/921aff91d256adf68b2e37cc3addd296403b82": "e06e4cf1bb8d3b9dda42ae7d89e598e8",
".git/objects/79/49c14b1951359cfd9c8bfc4c6bb6bf0b8a48ab": "afbe19584aa18655c964046ead07f163",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/931ef0102c5b40a4902c67f2594b49c365be8d": "a2e832d913496d08af48865cfd346cce",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/5f11cff1203538f548336b95bdc025bb045d36": "28e4062df6408836a2d368e73e2584e3",
".git/objects/88/87ffe74e466b6e803774aadd0e6b007d07286d": "4fa6a18782a753869472100741c14be7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/b299218ea5c4a9702a580c2eed0d27ab877232": "b59c93d43f7d05f43107e6c32f096ed4",
".git/objects/91/bfd024b872ac8e3a01c3b7d61f65b218bdfb9e": "e05caafed7efe116c84d13c75cd34b7e",
".git/objects/93/47a0ff7efb0f1a9aec5a254bb91f64ec24681f": "5b7914470e6896bb233f2346b1d56fb5",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9d/73055bb166c50d6300a8a792ef733d5b4fa2a9": "2e3fb820c3d1bba659097ae8c57534bc",
".git/objects/9e/d3d92d662758fe2da0f345aaef3db21f0c5e96": "291d22cc29524670242901bf9aa31456",
".git/objects/a0/83fe71cd4de60bddf6b43b5f53c7354b94efbc": "feac78435b40a477fe6ea001388af702",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/b5741593fa6ee786479ce92577f6903c056523": "5e984a0af3ee702f21e42f82dab67c8b",
".git/objects/a2/4ba01ee0d20310643f7d45be7554baa8f117a9": "7afb6334e0c5d23b8c23eea928b139c9",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b3/ea8dcad95495dd12e26b84a53ed0547625c157": "005512192db929d494fbdc5981035602",
".git/objects/b4/d562f76ee3dcbed72fb1f02567f64b884a192e": "250f6af2b74d441e1c6056f107f52043",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/95f9a5e2482ddf79f84e10cee938b448d88ce8": "16e2b5a6ce795314cac97f54042b7f81",
".git/objects/c8/12cbeabc56e185d44fbee40d17a05c5c497c1f": "492c9c5d671ded3c23462afb80247193",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/d2/3569f541cf307cf1573cdaf5818f179e49223a": "2fb3f16796bda4cfe92349c35a30fa0a",
".git/objects/d2/edcfe6b85dbb5111cd94b79501ea5cbfd6d8d3": "592ac7e54441676509df986ad8f9db54",
".git/objects/d4/94f6bebc7d1fec051a8e9f24094bdb8e04b459": "25f73c955da61fedadcc88220f3efdad",
".git/objects/d5/379251386625e5ee7b41edc96b60266423d0b3": "abf830b4360047eb799067304e0e7866",
".git/objects/d6/5bde105585e3fd15b2c6374d60ec0668f6e2a8": "867603e5beaa038e544b501cffab7799",
".git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "9a3ed4ae73e4666f234e83ce7b0c8952",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/bdeb26366943bdca31dc9d1632f6c8ac23d519": "f5d95a28b1e122ae53dd4f6916659e2f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/698e7c9bfc2df176185788e59ce8c5b92aa243": "6745b3992483399c5fcb7486376ab49e",
".git/objects/df/3b68301a80a0c93462ceb205cea5e982be4ed1": "c503e839b9c5346377fbcddaf10d5f56",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/87e1780a8069cdc820b0884c5c983842c996d9": "9b497341bda5884e1549b498a18478bd",
".git/objects/e3/40f14daa40c52bcc6f4687895d1f738087e69b": "a115dfe2d7d14715b83f11d7278049fa",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/b837d6e7a1317cd2d28c191b8ac945014bde22": "a6ab6a8fed69bc1124560df4680176d8",
".git/objects/f4/114f064581707c7f914eedb6d51a1b962d6cff": "164dcf9889ef48853b9733df3ece2f27",
".git/objects/f5/ab4bc069808aba7f4199d113800bd480577a1a": "6f99bc01ab0c278f4f4bdffb72d351dd",
".git/objects/f7/e9f58b5c4e001ec33929d51658f1bbdeed0f78": "3188ec4962bd6b102b8b4013dbc7f100",
".git/objects/fb/436e7a41ce142ae894df01b9773a4164482d48": "3198e99decc608d500cf95b264b43ee8",
".git/ORIG_HEAD": "e4ba0fd9b7141c2d96f1f6a26c273f96",
".git/refs/heads/main": "f61ce3cf9aecceb62aea5316a1e5d988",
".git/refs/remotes/origin/main": "f61ce3cf9aecceb62aea5316a1e5d988",
"assets/AssetManifest.json": "0f07f26acef468fd8a68547d8f5ca7f4",
"assets/assets/images/acade_now_logo.jpeg": "c80fe7e01dda1d4217cf41088d846d1f",
"assets/assets/images/learning-page-robo-face.png": "b01bcb744d78ee65b757c34ccf585095",
"assets/assets/images/start-learning-robo-face.png": "32b6cb8a325d4bbbe07b50cb9798f8bc",
"assets/assets/images/web2_landing_page.png": "d5bf457024c68db0709f519f48468823",
"assets/assets/images/web3_landing_page.png": "d551f80da85268c954c98f1875ed7b0c",
"assets/assets/svgs/computer-laptop-icon.svg": "994c344a2e2f210f502281a2fb149eab",
"assets/assets/svgs/console-controller.svg": "23d8a63b86ab76ee219dbbf7a7bf6198",
"assets/assets/svgs/discord.svg": "ad5fdb3933b48fb8f2853b8a9ba382dc",
"assets/assets/svgs/github.svg": "c723717d0263825030d730e2fd191fe4",
"assets/FontManifest.json": "4e55e91f73a6a80200a47f77244aef0c",
"assets/fonts/FontdinerSwanky-Regular.ttf": "c61f560c2b8399a1b0ad2ed5dba03e0f",
"assets/fonts/LICENSE.txt": "d273d63619c9aeaf15cdaf76422c4f87",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/OFL.txt": "b81498392c784c70b1748afa7aaf2072",
"assets/fonts/Silkscreen-Bold.ttf": "fd3bfe91d4b413d3f68d73b8e1cdf846",
"assets/fonts/Silkscreen-Regular.ttf": "5bed8502768fedf857a0ec8b81350f39",
"assets/images/acade_now_logo.jpeg": "c80fe7e01dda1d4217cf41088d846d1f",
"assets/images/learning-page-robo-face.png": "b01bcb744d78ee65b757c34ccf585095",
"assets/images/web2_landing_page.png": "d5bf457024c68db0709f519f48468823",
"assets/images/web3_landing_page.png": "d551f80da85268c954c98f1875ed7b0c",
"assets/NOTICES": "50b6abdd774a9c38699b9c91cf2de90b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"assets/svgs/computer-laptop-icon.svg": "994c344a2e2f210f502281a2fb149eab",
"assets/svgs/console-controller.svg": "23d8a63b86ab76ee219dbbf7a7bf6198",
"assets/svgs/discord.svg": "ad5fdb3933b48fb8f2853b8a9ba382dc",
"assets/svgs/github.svg": "c723717d0263825030d730e2fd191fe4",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9d443e5294c0f1372a8b91794f703d64",
"/": "9d443e5294c0f1372a8b91794f703d64",
"main.dart.js": "604651e942d8ba5e2d7123608e8a9514",
"manifest.json": "a6ba2327e0a7bf67372830d60bca2b2e",
"README.md": "c59a66dd50e57482c44d1df586d85287",
"version.json": "4bd40901d84e547a4ef2e88f4fbdc4ce"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
