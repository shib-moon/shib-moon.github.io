/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8e8751dce282015bda7285c0065e65b7"
  },
  {
    "url": "about/index.html",
    "revision": "4ef021363906b0781884a1076aa40a42"
  },
  {
    "url": "assets/css/0.styles.ac974a55.css",
    "revision": "d9c9e086e082523f30f1b4c3fd4e1cf7"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/caiquan.c9a39117.jpg",
    "revision": "c9a3911719e03faa7dd84655edccbf5c"
  },
  {
    "url": "assets/img/human.dfaffc5c.jpg",
    "revision": "dfaffc5ca0670c14ac6fc388ba445a32"
  },
  {
    "url": "assets/img/moon.d49c8802.jpg",
    "revision": "d49c8802163dc0dca0cd025b0a79ec00"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.25748be7.js",
    "revision": "ebf59ea51e167509536c49bb6010d1c4"
  },
  {
    "url": "assets/js/11.60d8b8cb.js",
    "revision": "9d98a378922d3b5947456ad86fc7f2d9"
  },
  {
    "url": "assets/js/12.43b38cd0.js",
    "revision": "caa57bad23e8c010a4a3428a8900e6d7"
  },
  {
    "url": "assets/js/13.f4cc2432.js",
    "revision": "33ccf58a40e9adf4a46c064aa29f4cb1"
  },
  {
    "url": "assets/js/14.0f76ab36.js",
    "revision": "89f4b5c6c0672bb3d574eb692b9b11cb"
  },
  {
    "url": "assets/js/15.47bb7f07.js",
    "revision": "30b340b2b41d64c50204b46ecdef8b68"
  },
  {
    "url": "assets/js/16.79e2e1ea.js",
    "revision": "a3c6f9e5e6b6f5d0e24e71e7793718ac"
  },
  {
    "url": "assets/js/17.2ad674da.js",
    "revision": "c562d5b2ed1674e81c4945f5bbf2c860"
  },
  {
    "url": "assets/js/18.039e0de1.js",
    "revision": "c1cc3110532fe5233cf40baaa2640c9c"
  },
  {
    "url": "assets/js/19.72eced32.js",
    "revision": "d3450a85bbe77d74fe117c07fc239ecf"
  },
  {
    "url": "assets/js/2.cf646868.js",
    "revision": "c71900ea85b1cc8860c86043705b79d0"
  },
  {
    "url": "assets/js/20.6343a60d.js",
    "revision": "7106906719526906bceddb16240cd667"
  },
  {
    "url": "assets/js/21.e5f599d8.js",
    "revision": "d1cd6384f214ee28e60aa5bfbd177199"
  },
  {
    "url": "assets/js/22.4b97b0d0.js",
    "revision": "fb7369cc1caee9c08200e90f4fc540e3"
  },
  {
    "url": "assets/js/23.a0831074.js",
    "revision": "6219e004a6088e09effad4fbc5a0cbea"
  },
  {
    "url": "assets/js/24.6e2e548a.js",
    "revision": "28afab1c1b614ef7173c29c39d300546"
  },
  {
    "url": "assets/js/3.48c34e36.js",
    "revision": "ba1a71f40233f6d72e94ae24dc4e7067"
  },
  {
    "url": "assets/js/4.4e0f6001.js",
    "revision": "e30d46defb7ac13c4d908ffd5316b306"
  },
  {
    "url": "assets/js/5.b42ba372.js",
    "revision": "10317c44c5ab08cb8bd98535632534de"
  },
  {
    "url": "assets/js/6.e5f57da4.js",
    "revision": "b7dca0161c6f00fdb2d8fd88a8ca82b3"
  },
  {
    "url": "assets/js/7.9ecb3e6b.js",
    "revision": "ffab248f8eda84bda2c171dd73d0f245"
  },
  {
    "url": "assets/js/8.32d6abb1.js",
    "revision": "e54a315bdfa7811d38908139dcb1f827"
  },
  {
    "url": "assets/js/9.a7fc31bd.js",
    "revision": "e43d8711b85ae0c20dcde0c2775d9670"
  },
  {
    "url": "assets/js/app.b10929c4.js",
    "revision": "e99009811e1864133b683e88fd383b78"
  },
  {
    "url": "img/caiquan.jpg",
    "revision": "c9a3911719e03faa7dd84655edccbf5c"
  },
  {
    "url": "img/human.jpg",
    "revision": "dfaffc5ca0670c14ac6fc388ba445a32"
  },
  {
    "url": "img/moon.jpg",
    "revision": "d49c8802163dc0dca0cd025b0a79ec00"
  },
  {
    "url": "img/shib.jpg",
    "revision": "f4b1ffe20ae0c70dac1245abc3ce6a8b"
  },
  {
    "url": "index.html",
    "revision": "4341a7309717990451f5793b520b764b"
  },
  {
    "url": "life/2019-05-26.html",
    "revision": "54ea264ff086f14481c50325fab21789"
  },
  {
    "url": "life/index.html",
    "revision": "82834f56ecb0e64300182f770e3eed89"
  },
  {
    "url": "ponder/index.html",
    "revision": "293bee8733695657a0352bf352610cd0"
  },
  {
    "url": "tags/index.html",
    "revision": "1dc51f1251bd47e63d298b29b4f716b7"
  },
  {
    "url": "technology/algor/pageAlgor.html",
    "revision": "6471d392dd6f62514bd1998bbcb7cd05"
  },
  {
    "url": "technology/hardware/addMemory.html",
    "revision": "4ae3756cc89ec0afc7bd5339234602c6"
  },
  {
    "url": "technology/hardware/cache.html",
    "revision": "14bed18363ce429219acf4aeb033ca2e"
  },
  {
    "url": "technology/hardware/ssdRepaire.html",
    "revision": "cf81c3f61c1b20edbfd9e958059e15a9"
  },
  {
    "url": "technology/index.html",
    "revision": "fa6bb51513cc0c3fb83f01241234a182"
  },
  {
    "url": "technology/systemTools/fileShare.html",
    "revision": "04c4f5dadc3b887c0bd1465063d9c74e"
  },
  {
    "url": "technology/systemTools/namesiloDNS.html",
    "revision": "d556f48dc063d4068f28a771cd506b06"
  },
  {
    "url": "technology/systemTools/ss.html",
    "revision": "a0baca398131ed897dde06c455d66bd7"
  },
  {
    "url": "technology/vue/20180601_myblog.html",
    "revision": "c7750559095050d3a85a02b5f71431fd"
  },
  {
    "url": "technology/web/wordpress.html",
    "revision": "4ba9537eb929b65def4d6e27cbc1170c"
  },
  {
    "url": "timeLine/index.html",
    "revision": "43a5bb14668fda71e7c87b1d17628253"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
