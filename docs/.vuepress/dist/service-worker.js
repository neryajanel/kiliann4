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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "289f1b50232ef8b661635aad6e266c36"
  },
  {
    "url": "assets/css/0.styles.0d80bffb.css",
    "revision": "56ab64da30a1a153b0afe27434be8f20"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4406595f.js",
    "revision": "0757f96304a7f21484ef46bcc4b1a636"
  },
  {
    "url": "assets/js/100.0d17d636.js",
    "revision": "e0dcab304b919a02d75dfde290b71cf0"
  },
  {
    "url": "assets/js/101.e0b42252.js",
    "revision": "b70ffe6ec5b9a686e4aa4cceded1b057"
  },
  {
    "url": "assets/js/102.59b57470.js",
    "revision": "c8cd083df4038fed14b98e4374e38655"
  },
  {
    "url": "assets/js/103.d37caae8.js",
    "revision": "b8053c3c77cc2af49181bf093f9c69f6"
  },
  {
    "url": "assets/js/104.1dd8adbe.js",
    "revision": "e86d73624ce74d7434fd1ad5582f135c"
  },
  {
    "url": "assets/js/105.37b2f7df.js",
    "revision": "2fcd7cc433b71e5a3c5f30c7b74970bf"
  },
  {
    "url": "assets/js/106.21b3d58f.js",
    "revision": "d67a019c4dc8ed70f892a9df0313a1f0"
  },
  {
    "url": "assets/js/107.dab18dd8.js",
    "revision": "5fcf432f2bcada5256f7df548683d706"
  },
  {
    "url": "assets/js/108.53d052f6.js",
    "revision": "3572204cf10e9de99d46031f4f5ce7de"
  },
  {
    "url": "assets/js/109.d8fe267a.js",
    "revision": "609cb12384e5664e28e7828039c5613e"
  },
  {
    "url": "assets/js/11.2405256a.js",
    "revision": "9c7c0290308ea1c0b1a88abe24d91df5"
  },
  {
    "url": "assets/js/110.1f7327ff.js",
    "revision": "4b6cbece9e791c740f57928eb65a4f1c"
  },
  {
    "url": "assets/js/111.4658edf3.js",
    "revision": "380b28d42a556de7f8a71487b3b0a8e2"
  },
  {
    "url": "assets/js/112.83f5dffb.js",
    "revision": "47a1f7fd7586270214e8dfbfb19add07"
  },
  {
    "url": "assets/js/113.bfc094e4.js",
    "revision": "fc90b495a3604c236aa6f27e1196260f"
  },
  {
    "url": "assets/js/114.8ad734d2.js",
    "revision": "ecfcc99ff874e6ddd8826f9495652f2b"
  },
  {
    "url": "assets/js/115.7da91b47.js",
    "revision": "c69f5b2335e3f09ab598e5065943f09c"
  },
  {
    "url": "assets/js/116.34dfb47c.js",
    "revision": "9933570c47fe409575f098b59d3b0b8a"
  },
  {
    "url": "assets/js/117.8c0d5e53.js",
    "revision": "59bde1c66530a9239f277a7230bb8e1e"
  },
  {
    "url": "assets/js/118.51d36aa7.js",
    "revision": "c0ed72b653ac58ef5e9ffaaeb8459048"
  },
  {
    "url": "assets/js/119.c63578ca.js",
    "revision": "a136c27bb2192506a77662ee83601141"
  },
  {
    "url": "assets/js/12.333b3235.js",
    "revision": "941936f044843009dc409d58b02d9539"
  },
  {
    "url": "assets/js/120.6dee7fb1.js",
    "revision": "38503b48ea8c55f4dd87cf9590902d7c"
  },
  {
    "url": "assets/js/121.96be91d3.js",
    "revision": "8f0c278a941f4dacf783160b9f6a8fea"
  },
  {
    "url": "assets/js/122.04d9a097.js",
    "revision": "0302326499da0bde6505b1db22ab06cc"
  },
  {
    "url": "assets/js/123.5d06e0a1.js",
    "revision": "d2d75c79171184847c7949df211659c2"
  },
  {
    "url": "assets/js/124.573c7024.js",
    "revision": "e8170cb708ce84941c52213ff505d336"
  },
  {
    "url": "assets/js/125.b1d18dce.js",
    "revision": "aeb3aed36e043ca2c6546a4339b8b175"
  },
  {
    "url": "assets/js/126.ea92bc79.js",
    "revision": "f274bddecb9549020f59739b45e3fb70"
  },
  {
    "url": "assets/js/127.6521716b.js",
    "revision": "baaf4d84aaa70b030ddf8123472ef6eb"
  },
  {
    "url": "assets/js/128.1e8ddd16.js",
    "revision": "23d86c73413d18d73a1886684fc9c141"
  },
  {
    "url": "assets/js/129.c9aca8ec.js",
    "revision": "6a3e0568cd3951beefeaeb8865f2b348"
  },
  {
    "url": "assets/js/13.8dab6040.js",
    "revision": "51db59ef875965e8e0b78a12f01b4dd5"
  },
  {
    "url": "assets/js/130.aa616a13.js",
    "revision": "f22f8528958a8aa357708473f4e684ae"
  },
  {
    "url": "assets/js/131.6b8f8887.js",
    "revision": "81e7fa07f968c268f968fcc38f294d0d"
  },
  {
    "url": "assets/js/132.61ea6111.js",
    "revision": "fbe6c1efbbec0808d753cc55fb8d9a12"
  },
  {
    "url": "assets/js/133.f0800636.js",
    "revision": "f343f365117c29b5358f91846fb17f0f"
  },
  {
    "url": "assets/js/134.7f32f2bf.js",
    "revision": "25abc44cbc6ee80c3a118b34c1cb0fa1"
  },
  {
    "url": "assets/js/135.6573b7df.js",
    "revision": "9b761c18fd357325e9d3c5e924cd7658"
  },
  {
    "url": "assets/js/136.cba59381.js",
    "revision": "80a5ff95a897cb93d19c9d8e163ff1e2"
  },
  {
    "url": "assets/js/137.ae0d2077.js",
    "revision": "53f691139c2e664cd25695ce38989bea"
  },
  {
    "url": "assets/js/138.68f3fc90.js",
    "revision": "559a484468914ff53aa1ed5c99c6f82b"
  },
  {
    "url": "assets/js/139.d7d61897.js",
    "revision": "44eeaff342aa4e66fab5f4974c2fd953"
  },
  {
    "url": "assets/js/14.3ef414ae.js",
    "revision": "837664995d068b9cd6b94365a740bb56"
  },
  {
    "url": "assets/js/140.18f7c1a0.js",
    "revision": "f21e7f283c22b8f3d0f752d4fcd559bb"
  },
  {
    "url": "assets/js/141.d689b2e8.js",
    "revision": "6b04c03c8969d14f6c10713f15103f71"
  },
  {
    "url": "assets/js/142.c3481819.js",
    "revision": "e2c9bd93124da2fdee2990e1573e4104"
  },
  {
    "url": "assets/js/143.bceda219.js",
    "revision": "c6ac62a7ff0be908082d533dabe96522"
  },
  {
    "url": "assets/js/144.d59863de.js",
    "revision": "e24a72f70bbae8dfc71da83f82de9bb5"
  },
  {
    "url": "assets/js/145.7fe37926.js",
    "revision": "c2af16d5757f89e4ec793d43408b84b7"
  },
  {
    "url": "assets/js/146.73128d98.js",
    "revision": "ced5d21f043611dd7ea772204da65f64"
  },
  {
    "url": "assets/js/147.86855769.js",
    "revision": "f178ac0fd015b6a34e24ddc4012ab364"
  },
  {
    "url": "assets/js/148.dcd12399.js",
    "revision": "e6f336f4ad25a3f024106c35f8345885"
  },
  {
    "url": "assets/js/149.a5376a8a.js",
    "revision": "a81451ea406ed21d2912b211d4a31023"
  },
  {
    "url": "assets/js/15.74edcc74.js",
    "revision": "b18ed1f60d4b65f0ffa145d97747f6ea"
  },
  {
    "url": "assets/js/150.9eac70ce.js",
    "revision": "c184770f8f2407360fbb1c284f097db7"
  },
  {
    "url": "assets/js/151.e33a087d.js",
    "revision": "31e6bb1af007370ef3402ee7e30a92ec"
  },
  {
    "url": "assets/js/152.fcc30ac8.js",
    "revision": "67c960618ba2e857d3a02f5297eec326"
  },
  {
    "url": "assets/js/153.6b6414ca.js",
    "revision": "30f9f1c51602743840b3e5062f972635"
  },
  {
    "url": "assets/js/154.90a7e48e.js",
    "revision": "2747ea2054f00b4e69d9fa422fd6d773"
  },
  {
    "url": "assets/js/155.b2b2a58a.js",
    "revision": "baacf759c6e289d783372b6f9efea2f7"
  },
  {
    "url": "assets/js/156.885c05b2.js",
    "revision": "dacb1be02980e18c06121e7dfcbfdef7"
  },
  {
    "url": "assets/js/157.985b5a5b.js",
    "revision": "a177cbd7492b74d79ba835e8b3455732"
  },
  {
    "url": "assets/js/158.d9243d21.js",
    "revision": "97309037d07a8ed43a3a6ba7d20efdec"
  },
  {
    "url": "assets/js/159.163c377d.js",
    "revision": "7093cf273b6020495567b58f9a4b2219"
  },
  {
    "url": "assets/js/16.5ad22e3c.js",
    "revision": "83bd9762169402b43a95616a6250d7cd"
  },
  {
    "url": "assets/js/160.e9eb86d3.js",
    "revision": "e6589129c3e15637ffa14f263a3f46e3"
  },
  {
    "url": "assets/js/161.c4d4dcd2.js",
    "revision": "556f8a7617ac8a0d9d3df2d7bdc0d2cb"
  },
  {
    "url": "assets/js/162.e1b20d56.js",
    "revision": "b6f29edf0d0cd1662fd41299240b699c"
  },
  {
    "url": "assets/js/163.91cfff67.js",
    "revision": "60661f166dde82c8d3f4fbdb2afdc4ee"
  },
  {
    "url": "assets/js/164.95002496.js",
    "revision": "f60687a275fbab6ad3cdd6ce9df2c5b2"
  },
  {
    "url": "assets/js/165.cf4807e7.js",
    "revision": "acde0950c36aac914e2aea233eac4400"
  },
  {
    "url": "assets/js/166.effc738e.js",
    "revision": "9898415829c967fb50b0639dea9ae2b6"
  },
  {
    "url": "assets/js/167.b930cd67.js",
    "revision": "526b53c735ed4cf616919ef0bde20072"
  },
  {
    "url": "assets/js/168.80f22572.js",
    "revision": "621c821fc47ec4834e20cce1b293b7a7"
  },
  {
    "url": "assets/js/169.6e957b2f.js",
    "revision": "be876027485e0478661d227b31ffab3b"
  },
  {
    "url": "assets/js/17.cfca287c.js",
    "revision": "a51b01b8550be583ac9d96d13ab68f81"
  },
  {
    "url": "assets/js/170.580a1eb2.js",
    "revision": "d001f0fcb645f91427a62cb3422573be"
  },
  {
    "url": "assets/js/171.b8d28745.js",
    "revision": "d6daf0762146a0295498da446008f463"
  },
  {
    "url": "assets/js/172.2604e644.js",
    "revision": "8a47bc8c3491eecf9a09f10ee0073209"
  },
  {
    "url": "assets/js/173.30b37bf4.js",
    "revision": "bbae4478f4eab9b3e92abef4f9d1ab4d"
  },
  {
    "url": "assets/js/174.89bd7bdf.js",
    "revision": "49000d23f91462d1c1e46ebba6b87cfe"
  },
  {
    "url": "assets/js/175.8fb5aa20.js",
    "revision": "6c438eafb0eada979f0d7cf859c04aec"
  },
  {
    "url": "assets/js/176.fe427e60.js",
    "revision": "ae2bf3fc76efc24fb9e0a85f8baf5260"
  },
  {
    "url": "assets/js/177.5ae197d9.js",
    "revision": "dfc1218dde38db4455dfd095f4496e2f"
  },
  {
    "url": "assets/js/178.446a9e1e.js",
    "revision": "6d5f960b805719f42c4d10cfa0a9864c"
  },
  {
    "url": "assets/js/179.2cf9df0d.js",
    "revision": "0512bcb31a883acddd19f6c7f8979cd1"
  },
  {
    "url": "assets/js/18.f7665996.js",
    "revision": "50ac7a0f9ea7254119bcca9553b7ebc3"
  },
  {
    "url": "assets/js/180.4a16728c.js",
    "revision": "400346fcb278af81ef10a5fad66141f4"
  },
  {
    "url": "assets/js/181.cbef3233.js",
    "revision": "9ff4646477bb5500d933a2b0905c5d92"
  },
  {
    "url": "assets/js/182.73283ad6.js",
    "revision": "4b07e4693e95218ea0b2cfebf26aea53"
  },
  {
    "url": "assets/js/183.aa76d997.js",
    "revision": "554f12036dde662a339d5170ff39fffd"
  },
  {
    "url": "assets/js/184.8357c198.js",
    "revision": "2323564b8f31a7b533061d0d026dfaba"
  },
  {
    "url": "assets/js/185.40c1e690.js",
    "revision": "c20dd81db7a603e5d3859aa835b9c4cc"
  },
  {
    "url": "assets/js/186.a5242b83.js",
    "revision": "6e680be04e30c0d7df5618e76e1e9e69"
  },
  {
    "url": "assets/js/187.91df4c63.js",
    "revision": "d6c4e957043fd3a92d1eb09aa3bd4e05"
  },
  {
    "url": "assets/js/188.f983347c.js",
    "revision": "3c6a1d20b5698fdfa7474fb149b06dd7"
  },
  {
    "url": "assets/js/189.f3ee2ab7.js",
    "revision": "b18b169fd1b9c77afa9a20b5a706f612"
  },
  {
    "url": "assets/js/19.01ac851e.js",
    "revision": "01d9353e614564fa65b321062e284a98"
  },
  {
    "url": "assets/js/190.34032d5f.js",
    "revision": "61bce8f195716c0a55046c0759b94dab"
  },
  {
    "url": "assets/js/191.17195e65.js",
    "revision": "98bbe0f20eae244872865dadac6c4bde"
  },
  {
    "url": "assets/js/192.5a888293.js",
    "revision": "ce9c310538e373f7688934e48b12c128"
  },
  {
    "url": "assets/js/193.f6800979.js",
    "revision": "c0a8ef3a91ac1156c24714cfd3c9bef7"
  },
  {
    "url": "assets/js/194.53c6d8f1.js",
    "revision": "0caa9c561887abf286be4e9a3714e3c7"
  },
  {
    "url": "assets/js/195.fec84c82.js",
    "revision": "406404fee3de2d6bebdd97d3ae7ac7cb"
  },
  {
    "url": "assets/js/196.af785198.js",
    "revision": "77a379c4068c8cc0ecec8b4511a47f4c"
  },
  {
    "url": "assets/js/197.9b126e33.js",
    "revision": "737206a8bf620858b4d307bce221174c"
  },
  {
    "url": "assets/js/198.dbb8aba5.js",
    "revision": "9a3bbaa13f672a86a26a2ada82a8e315"
  },
  {
    "url": "assets/js/199.3c748117.js",
    "revision": "3a6576bb8d7023c0318b4b204284213f"
  },
  {
    "url": "assets/js/2.e601e59f.js",
    "revision": "ee72fc2084673713d637298538c1310e"
  },
  {
    "url": "assets/js/20.575e5938.js",
    "revision": "c11d596a7d37c37e13e0c153a9ad6d19"
  },
  {
    "url": "assets/js/200.6668ef2d.js",
    "revision": "40027f3568940ddaa00fd95fb22e7b41"
  },
  {
    "url": "assets/js/201.c89622dd.js",
    "revision": "88739ab0a8066aa82afe5618113ce52d"
  },
  {
    "url": "assets/js/202.40d15758.js",
    "revision": "fae4a6550cf74ea68219327d25ddf799"
  },
  {
    "url": "assets/js/203.2185034b.js",
    "revision": "5714fc03ad87e5bcda70286fe1991edf"
  },
  {
    "url": "assets/js/204.fd20226a.js",
    "revision": "f0a3f773644b2747c348aacdffea7a89"
  },
  {
    "url": "assets/js/205.c1ad032d.js",
    "revision": "8effd6b021f9b0910b6f622db045c783"
  },
  {
    "url": "assets/js/206.aaad8e48.js",
    "revision": "5330d83e697adde2d3e62bdd95845e39"
  },
  {
    "url": "assets/js/207.fa734ec0.js",
    "revision": "162932b6b3d8f9b49a3ef710a5940f99"
  },
  {
    "url": "assets/js/208.43edb1f7.js",
    "revision": "cbf982a3de4b1ca0518cf41409b6d5fe"
  },
  {
    "url": "assets/js/209.da12d12b.js",
    "revision": "fac2c676618a864ca5522d97e907e33e"
  },
  {
    "url": "assets/js/21.1861e565.js",
    "revision": "8d83d298c027b476ba673e3ba8485cc8"
  },
  {
    "url": "assets/js/210.fd1979f9.js",
    "revision": "ea848e71002eaece7e179d47b87a2fb6"
  },
  {
    "url": "assets/js/211.a3a627f8.js",
    "revision": "79e2dd2fd633c19085a9b25377fbab8f"
  },
  {
    "url": "assets/js/212.b3617c62.js",
    "revision": "dfca71782d61c4f8019bd5c1068c05d7"
  },
  {
    "url": "assets/js/213.f7d0a421.js",
    "revision": "122fd2ed4323ca31a2eef0f10cd0453a"
  },
  {
    "url": "assets/js/214.17337069.js",
    "revision": "3de7cbfbd668cb713396bd21497da49c"
  },
  {
    "url": "assets/js/215.f0dbf1ca.js",
    "revision": "6c6154b7645393c90f664074973833a6"
  },
  {
    "url": "assets/js/216.fb291cae.js",
    "revision": "ead9ad60dee482a1a512243f624ea5fb"
  },
  {
    "url": "assets/js/217.e81c9cde.js",
    "revision": "a329b5cb17b0ed5c4d1fb53e1f4ea6bc"
  },
  {
    "url": "assets/js/218.32db33d6.js",
    "revision": "d002f6a23a86cec9ff87392f54b946e3"
  },
  {
    "url": "assets/js/219.a1b284d4.js",
    "revision": "480761537c206515eed779179a1cb7cb"
  },
  {
    "url": "assets/js/22.a1cc65ea.js",
    "revision": "fdbd6a5139a8160fae433ef13b403be6"
  },
  {
    "url": "assets/js/220.0d3bf3f5.js",
    "revision": "693478dc361f53b7c56e2ed48460d18e"
  },
  {
    "url": "assets/js/221.fe058c6b.js",
    "revision": "36f35a2ba5ca515fcb3fcc73bb04352e"
  },
  {
    "url": "assets/js/222.0ab907bd.js",
    "revision": "47cd896e5e5947354923a6ee4a034e24"
  },
  {
    "url": "assets/js/223.9703398d.js",
    "revision": "14b076142aac87f065fc3ada0b8405bd"
  },
  {
    "url": "assets/js/224.c0dd4875.js",
    "revision": "5ad48152feafaa1581d36219d181e91c"
  },
  {
    "url": "assets/js/225.ef5b94ac.js",
    "revision": "75a46be5075c6990f1b6d82b8f04dec4"
  },
  {
    "url": "assets/js/226.4d19d04e.js",
    "revision": "28971671fe7db16784e76fbfccfd91cb"
  },
  {
    "url": "assets/js/227.429e1984.js",
    "revision": "47cced68020a04be3fd3d1133f7abc41"
  },
  {
    "url": "assets/js/228.28573f02.js",
    "revision": "a9224a1ae1cc091a8da93dbc8bad318e"
  },
  {
    "url": "assets/js/229.4c228a72.js",
    "revision": "d3d9504b5098f20076f4666c500261e9"
  },
  {
    "url": "assets/js/23.b374c406.js",
    "revision": "1d0b9726403a97b6b31d135f4774655c"
  },
  {
    "url": "assets/js/230.3149ff81.js",
    "revision": "aeb541c327ef65163aa22aff6e42c0c9"
  },
  {
    "url": "assets/js/231.6fc24f6e.js",
    "revision": "16b698e0af16156a5e2fa178b9a537c3"
  },
  {
    "url": "assets/js/232.87c3c3a2.js",
    "revision": "115502bbc15a27dcf1ac8c80ec955d9d"
  },
  {
    "url": "assets/js/233.452011a0.js",
    "revision": "00edcb29ec8e5051841a2cefa4fd4572"
  },
  {
    "url": "assets/js/234.9ad98d86.js",
    "revision": "3f1ba5355c8c721a4a734e8135c4ea2e"
  },
  {
    "url": "assets/js/235.95f61265.js",
    "revision": "0ea166f35d179f240665bc0c2e70e417"
  },
  {
    "url": "assets/js/236.dff22778.js",
    "revision": "e2eb1073845b522d2f2e1f5b733b13b4"
  },
  {
    "url": "assets/js/237.acf17802.js",
    "revision": "fac28e867e36f262ff76870f11c3960d"
  },
  {
    "url": "assets/js/238.78c256c3.js",
    "revision": "72fef6883de53519ba0ca1e0b369c23f"
  },
  {
    "url": "assets/js/239.7a5a2de9.js",
    "revision": "d582053953823ceb4d6263a1e570b833"
  },
  {
    "url": "assets/js/24.59a96b54.js",
    "revision": "dd64bca3c85d4c4195dc21851e8c1a10"
  },
  {
    "url": "assets/js/240.49878c0b.js",
    "revision": "7a3cf1eae7aac6e12020178fbc4b3911"
  },
  {
    "url": "assets/js/241.bca3f224.js",
    "revision": "5cb2c7ff598ed821f56c0374d4da8025"
  },
  {
    "url": "assets/js/242.dde70914.js",
    "revision": "f65946c1f21311a7e5976d07ad8735df"
  },
  {
    "url": "assets/js/243.a1523b8d.js",
    "revision": "290798db91b2b4eb82531d59e594f3d1"
  },
  {
    "url": "assets/js/244.4096ce17.js",
    "revision": "7c126069f8b80e640894664b937473bc"
  },
  {
    "url": "assets/js/245.a3085e6f.js",
    "revision": "ca4c86334baa5920b5f1b0112bf79564"
  },
  {
    "url": "assets/js/246.27cb6afb.js",
    "revision": "4ec94b93bec026d0d5dd617ac304c8a6"
  },
  {
    "url": "assets/js/247.2d83fc17.js",
    "revision": "c3f1cd4c7024bb3aaed406baf3b94c1d"
  },
  {
    "url": "assets/js/248.dc38ae4f.js",
    "revision": "6add2d206e128f2247e9e2cf0cd42dba"
  },
  {
    "url": "assets/js/249.2d79e619.js",
    "revision": "7e794c65048dee4b0b8f1260e7637d94"
  },
  {
    "url": "assets/js/25.fa8451a8.js",
    "revision": "4855a6b8672c790809eb7f0541937817"
  },
  {
    "url": "assets/js/250.80cfe625.js",
    "revision": "56cca4296d600297fe3fd116ac4e1076"
  },
  {
    "url": "assets/js/251.53eaf750.js",
    "revision": "bf245225576a2f8dc1125a02370390f8"
  },
  {
    "url": "assets/js/252.31c0464b.js",
    "revision": "82982fed603c432ffa3913a6d6c6597f"
  },
  {
    "url": "assets/js/253.60496ffc.js",
    "revision": "3cb73af35d2d5eae66250af658efe104"
  },
  {
    "url": "assets/js/254.d8224a56.js",
    "revision": "36a8bf340be06a58e460206de7436c4f"
  },
  {
    "url": "assets/js/255.88160048.js",
    "revision": "d48ece680a49a0d6d7c95c7213ab4894"
  },
  {
    "url": "assets/js/256.c728f6e4.js",
    "revision": "c3f1bf0b88ab692b5b913a5694e8c78a"
  },
  {
    "url": "assets/js/257.6ca39f7b.js",
    "revision": "a364799080e68aecf0504a84b268e065"
  },
  {
    "url": "assets/js/258.75c9df51.js",
    "revision": "eb22bd70b612687f06124e637ce1d23a"
  },
  {
    "url": "assets/js/259.d74d0133.js",
    "revision": "4dfe50491e847c039f7d676af62d5962"
  },
  {
    "url": "assets/js/26.6204f2a8.js",
    "revision": "6cb7733494f259f95ca5c8eec4159de0"
  },
  {
    "url": "assets/js/260.c498170d.js",
    "revision": "9da39b5bdf749dddc61ba43b07847619"
  },
  {
    "url": "assets/js/261.f9a57b0f.js",
    "revision": "2c2bd5899dad2a4f5d9c78bc04dbc330"
  },
  {
    "url": "assets/js/262.b621460e.js",
    "revision": "54bad73c379fc3526fa5852040f4cf78"
  },
  {
    "url": "assets/js/263.4216a9b2.js",
    "revision": "1c6c58e06a828a2a78944e1e2013c382"
  },
  {
    "url": "assets/js/264.ecd2ea58.js",
    "revision": "4915940ad7f762c96240406336b7d55c"
  },
  {
    "url": "assets/js/265.d0b86b3d.js",
    "revision": "61c1b45bd03810fc6854f9b5121c5714"
  },
  {
    "url": "assets/js/266.6774dc66.js",
    "revision": "f1dd3624791a9047cfdc646d32ee7b1a"
  },
  {
    "url": "assets/js/267.6fb8e644.js",
    "revision": "590c2eacb7191d6c0c92b5ce43d60f13"
  },
  {
    "url": "assets/js/268.48c2162d.js",
    "revision": "bc51fa6b9d169f3d56a6cc9cf94cf6cc"
  },
  {
    "url": "assets/js/269.11965467.js",
    "revision": "8a69d3715f4982d60871d273ad2823f7"
  },
  {
    "url": "assets/js/27.da6fe3e9.js",
    "revision": "4fd0252bf0b1a90e97ac65d90dc467be"
  },
  {
    "url": "assets/js/270.d95e6562.js",
    "revision": "abe1648ffb927b12ac4c945e99d0cdff"
  },
  {
    "url": "assets/js/271.6b167a8d.js",
    "revision": "d362dc0d33f356033ec50518e774a278"
  },
  {
    "url": "assets/js/272.27a2ce95.js",
    "revision": "3299dee64d85130f77ef0bbdd89f2ddc"
  },
  {
    "url": "assets/js/273.da1c6591.js",
    "revision": "47127e463d276bd0b059bc3d686b07f3"
  },
  {
    "url": "assets/js/274.6dbd83d1.js",
    "revision": "5dd8777def2cae1ff53d463eea887d93"
  },
  {
    "url": "assets/js/275.b157e418.js",
    "revision": "ce4956048e999c3564ba7c5a25f0e600"
  },
  {
    "url": "assets/js/276.d0d12bc8.js",
    "revision": "ebbeabc32ac3514d80c814dcb34bdcf1"
  },
  {
    "url": "assets/js/277.82e5221c.js",
    "revision": "fce6310adbee02f51407afa9663c3b46"
  },
  {
    "url": "assets/js/278.117af73f.js",
    "revision": "b343e0f27ed8dc93fe5e42e13c47d2c3"
  },
  {
    "url": "assets/js/279.7f302eaa.js",
    "revision": "366298fdd9bd6801ae153935fd495847"
  },
  {
    "url": "assets/js/28.81703093.js",
    "revision": "736a931b7e2e01034d34201ca2450614"
  },
  {
    "url": "assets/js/280.9b05f52e.js",
    "revision": "7c40e16328800b6c1de13cd8002d3906"
  },
  {
    "url": "assets/js/281.fa41cca9.js",
    "revision": "8441a3d3a12b8e953f4c810a549fef6e"
  },
  {
    "url": "assets/js/282.03d9f0c6.js",
    "revision": "0af1c32ee6f7971c469da4b0ce11a833"
  },
  {
    "url": "assets/js/283.b65a784d.js",
    "revision": "ff05ee0c23269a5214c67c29292127d1"
  },
  {
    "url": "assets/js/284.8d1c64e1.js",
    "revision": "7d3c81745d8806bd47cbf4594c67d195"
  },
  {
    "url": "assets/js/285.ad368228.js",
    "revision": "b5abd4d6d87f9733fc581ed9678165a6"
  },
  {
    "url": "assets/js/286.40dc6bba.js",
    "revision": "c91f1cbe61d8573b56522c67b9a7684f"
  },
  {
    "url": "assets/js/287.5dcca7a9.js",
    "revision": "ec51d02a97632fb86c69af889667cf71"
  },
  {
    "url": "assets/js/288.dff9b389.js",
    "revision": "26944091db6b4e50918ee84f33d857a9"
  },
  {
    "url": "assets/js/289.8ae9f588.js",
    "revision": "42106db19f3597c40441411404f1c398"
  },
  {
    "url": "assets/js/29.dcddb990.js",
    "revision": "4bebe1f0e066ea983029dc68d076ff39"
  },
  {
    "url": "assets/js/290.ec1b471f.js",
    "revision": "5a8fbd4d76933e9e74538983df56118b"
  },
  {
    "url": "assets/js/291.f45e7615.js",
    "revision": "d1ef3f658271303098dfe61acdc22eba"
  },
  {
    "url": "assets/js/292.ec6da444.js",
    "revision": "8775acce4f709b73ac2fb9950ec6f2e5"
  },
  {
    "url": "assets/js/293.1c692434.js",
    "revision": "9537ac473971eb2a85a8ad5478ae132b"
  },
  {
    "url": "assets/js/294.37fd1465.js",
    "revision": "619f469203c2910fdf98a67aa5d7235b"
  },
  {
    "url": "assets/js/295.720ada7e.js",
    "revision": "8166836e9b2b6e3dac11d95ace2d6559"
  },
  {
    "url": "assets/js/296.91446fd1.js",
    "revision": "222606b537b4516a45dd79b412a95f55"
  },
  {
    "url": "assets/js/297.48b6e160.js",
    "revision": "37221036e9133bebc2b7c1b28ae914f1"
  },
  {
    "url": "assets/js/298.970505aa.js",
    "revision": "53dee92a7625f4ef661087ce25f22ed7"
  },
  {
    "url": "assets/js/299.36b3f506.js",
    "revision": "53fc50947b4d81ea6e72e759a398dcd6"
  },
  {
    "url": "assets/js/3.173c9da2.js",
    "revision": "960cc214978188dd7ea6631d9e5e5c5b"
  },
  {
    "url": "assets/js/30.a227a7d7.js",
    "revision": "4e7007244260eacb0cdac74ad67e9269"
  },
  {
    "url": "assets/js/300.b70f2953.js",
    "revision": "95081f49c6853c46615f290aa2b072f6"
  },
  {
    "url": "assets/js/301.768a76d7.js",
    "revision": "87100bbd92095a49b787fbf899a98697"
  },
  {
    "url": "assets/js/302.1187b7a1.js",
    "revision": "9579e3738a6caac0b2fac2ebc739aa94"
  },
  {
    "url": "assets/js/303.8b41d030.js",
    "revision": "544c3cb5246840beb219c23ab2901a83"
  },
  {
    "url": "assets/js/304.d9acd8a0.js",
    "revision": "25f11d06c07c4102201e5a049f981a8e"
  },
  {
    "url": "assets/js/305.606b6845.js",
    "revision": "beb3e9b6140fa95064f4d1eb6e0d79f2"
  },
  {
    "url": "assets/js/306.5ab73c29.js",
    "revision": "4389ba660234d605599296b9c599ce3b"
  },
  {
    "url": "assets/js/307.472cdb46.js",
    "revision": "c87d1511f90436845876a5cb4b9281bf"
  },
  {
    "url": "assets/js/308.c92d93fe.js",
    "revision": "a60f54c1ffda6444aeaf02262cecf10c"
  },
  {
    "url": "assets/js/309.a58c99c6.js",
    "revision": "85957b49a408dbdefd49393e49bf2c7e"
  },
  {
    "url": "assets/js/31.eca442cf.js",
    "revision": "49fdace40fea92006e3ef230e5650780"
  },
  {
    "url": "assets/js/310.dfccef56.js",
    "revision": "7fa2638104feccc3bfb89dc77a1cd92e"
  },
  {
    "url": "assets/js/311.d3c8392f.js",
    "revision": "61cc8b0aa9247c909a8d3473b91ef9a5"
  },
  {
    "url": "assets/js/312.df103f73.js",
    "revision": "2199ecbbbed69a462f1c4cfc99af4f48"
  },
  {
    "url": "assets/js/313.fd4fc781.js",
    "revision": "9ed653f0f737e408e5bdabc7de168806"
  },
  {
    "url": "assets/js/32.40010d6b.js",
    "revision": "0d5126f8bfb02ca9a29414b359353e46"
  },
  {
    "url": "assets/js/33.0b5b5cc3.js",
    "revision": "c29d9552fccdde6b51edc2e73aef40c0"
  },
  {
    "url": "assets/js/34.b82f74b3.js",
    "revision": "3c1763364df30c8fc90bdf25f544654f"
  },
  {
    "url": "assets/js/35.e664e65f.js",
    "revision": "d603b83b195334382ba5ef1ced9e5af3"
  },
  {
    "url": "assets/js/36.13f4193a.js",
    "revision": "8c599ac7f4eb729809e2517a49c1d5b0"
  },
  {
    "url": "assets/js/37.0ae4210b.js",
    "revision": "4cc4dce2161fee92e6acf2c1d6663aa2"
  },
  {
    "url": "assets/js/38.11177cef.js",
    "revision": "06bb55dfff3bdd7a160f1f7796547db5"
  },
  {
    "url": "assets/js/39.745e6f24.js",
    "revision": "f6c4a3ed15a4eb9527484c5ca58749f3"
  },
  {
    "url": "assets/js/4.f802b025.js",
    "revision": "ef80e4fa179f97c4d4c4c88fbd37db8e"
  },
  {
    "url": "assets/js/40.fe218ad3.js",
    "revision": "cede8028b6506b94c9f6e2a9de2e2a66"
  },
  {
    "url": "assets/js/41.31143bfd.js",
    "revision": "208b3007efba4de620b9f167c18b33f8"
  },
  {
    "url": "assets/js/42.c96e702f.js",
    "revision": "d549f965de5c8a106642b41bba14bc4d"
  },
  {
    "url": "assets/js/43.47b2cc65.js",
    "revision": "f92fbc1b0a8b9916df3237bc2aa4a9f6"
  },
  {
    "url": "assets/js/44.53c9a6d1.js",
    "revision": "f896c86bc2d21e1ebd31bc98fecc49a8"
  },
  {
    "url": "assets/js/45.0bb32946.js",
    "revision": "e5f398c91db40d920831a06da532f6f0"
  },
  {
    "url": "assets/js/46.5db20826.js",
    "revision": "119b1ccec17fe891566d5e0c3c9486d2"
  },
  {
    "url": "assets/js/47.00859e15.js",
    "revision": "1e39897b10897ed0316505d3efe8837f"
  },
  {
    "url": "assets/js/48.52674a32.js",
    "revision": "a5cc3688b3563aac8d5fd60beb6ae9bd"
  },
  {
    "url": "assets/js/49.a6fd5e89.js",
    "revision": "8e929db31a41bac13fa76c7a65ff8b8e"
  },
  {
    "url": "assets/js/5.3c4a5109.js",
    "revision": "05c16b95bffe657e44c81f26976e3161"
  },
  {
    "url": "assets/js/50.3f080171.js",
    "revision": "7c34394a6801a09214e618da69a817a4"
  },
  {
    "url": "assets/js/51.9813e432.js",
    "revision": "52731c08b9aa2e8802c3a50ef9282c26"
  },
  {
    "url": "assets/js/52.feee3052.js",
    "revision": "968d05e70310bf8db04c60f6a1a0fb90"
  },
  {
    "url": "assets/js/53.aea5638d.js",
    "revision": "cfc5b475d377f402fde05b2bf2f07d8d"
  },
  {
    "url": "assets/js/54.294863ca.js",
    "revision": "62fc099f3261ba5b7a02df0e2c88b208"
  },
  {
    "url": "assets/js/55.17f14900.js",
    "revision": "e2a91f15761313bbf1923ad71e89c1eb"
  },
  {
    "url": "assets/js/56.24bb8fd1.js",
    "revision": "63a7676cea20ee8db533a1f421ec5b0c"
  },
  {
    "url": "assets/js/57.b81bd077.js",
    "revision": "51cc237d27582144f912a27e08ee5565"
  },
  {
    "url": "assets/js/58.efa085b4.js",
    "revision": "e796ad4560ea285e9dd41e904296c4a2"
  },
  {
    "url": "assets/js/59.3ee7de02.js",
    "revision": "2f8da88a1e4266a2199967013b490b73"
  },
  {
    "url": "assets/js/6.ddf23737.js",
    "revision": "3f0fcff9493183934fd372fd8bb2c3a7"
  },
  {
    "url": "assets/js/60.0bcd33f4.js",
    "revision": "0398d9a71eda9386678d553d30fab3be"
  },
  {
    "url": "assets/js/61.96227222.js",
    "revision": "500336bb0fac06b733fc377fc473afca"
  },
  {
    "url": "assets/js/62.c98d29d7.js",
    "revision": "ace3e881f4915ec5e3e3c51f8b6c1194"
  },
  {
    "url": "assets/js/63.eb4989bc.js",
    "revision": "0190597505b9e699732d3dc502c5c4d4"
  },
  {
    "url": "assets/js/64.0de39d4d.js",
    "revision": "f979a87fc0df8fb9d518302303784b49"
  },
  {
    "url": "assets/js/65.2e1fdef7.js",
    "revision": "e04995cb0ff446c7df854a76e6d46f13"
  },
  {
    "url": "assets/js/66.bda3e183.js",
    "revision": "08587bcc3dd9defa67bb740112903faf"
  },
  {
    "url": "assets/js/67.05724acb.js",
    "revision": "4ee85b455bd193d6571b0914cd6ab2f6"
  },
  {
    "url": "assets/js/68.599d171d.js",
    "revision": "d70f3a8982afc6da5d8206ed7fcc0a94"
  },
  {
    "url": "assets/js/69.f3561071.js",
    "revision": "f746d2bafccae372527360353f9a13c2"
  },
  {
    "url": "assets/js/7.77dbfb3a.js",
    "revision": "fd6febd5aee891dba62754ac05f0d659"
  },
  {
    "url": "assets/js/70.3e838f1a.js",
    "revision": "bc857e70e81695004d08c5b92b0390fa"
  },
  {
    "url": "assets/js/71.5466b8ce.js",
    "revision": "0e2e9f4a2fcfb0b8775f0a9dcd947e43"
  },
  {
    "url": "assets/js/72.4cae54a9.js",
    "revision": "393cae6f3addf8b0be49dd980062765b"
  },
  {
    "url": "assets/js/73.aef9c195.js",
    "revision": "3528acbb006a1b99e0b560e5e2df9bf8"
  },
  {
    "url": "assets/js/74.8c29e450.js",
    "revision": "42f37111fa975039de9cae49567abf41"
  },
  {
    "url": "assets/js/75.d31dc6bb.js",
    "revision": "00fbf89198b86f3282460dabb87e7ae7"
  },
  {
    "url": "assets/js/76.7197dd00.js",
    "revision": "22e644dcd43dd793258f6dc1ef46a9c6"
  },
  {
    "url": "assets/js/77.dc741184.js",
    "revision": "aa4eb18cd11daf1492ae7275713accff"
  },
  {
    "url": "assets/js/78.8d85d404.js",
    "revision": "c70b7ef7049bdbb3919ee116930c3de8"
  },
  {
    "url": "assets/js/79.fe71e0eb.js",
    "revision": "352abb0929d5ddd25069e42f8c1aab8f"
  },
  {
    "url": "assets/js/8.e3ee8025.js",
    "revision": "c22a6f1f732dbfbf063c2f28fbd84a7b"
  },
  {
    "url": "assets/js/80.2157c115.js",
    "revision": "1e14c6b2e13c673602bac292d8a88799"
  },
  {
    "url": "assets/js/81.c698b2ba.js",
    "revision": "d03436ad00e0e472a8642b64eb2060e3"
  },
  {
    "url": "assets/js/82.0d28440e.js",
    "revision": "3f9e238dea43d051e667618d251c8839"
  },
  {
    "url": "assets/js/83.73946960.js",
    "revision": "323a5f3c543b6c9b3aa3233ec14458a5"
  },
  {
    "url": "assets/js/84.eb65c9be.js",
    "revision": "e2cc7bf148f552c043dfcde5570ae23c"
  },
  {
    "url": "assets/js/85.ffe69b25.js",
    "revision": "830105fe300b426f699bb1865c418cd2"
  },
  {
    "url": "assets/js/86.92a78140.js",
    "revision": "65fc35a61e21cdc49270c1a1133ab6b3"
  },
  {
    "url": "assets/js/87.de4bb02f.js",
    "revision": "5b3278d2cd28dc89737f9458f6b5ed59"
  },
  {
    "url": "assets/js/88.bf86ac4f.js",
    "revision": "83123e559df92897e2a34dddd03e52d0"
  },
  {
    "url": "assets/js/89.beae534c.js",
    "revision": "802133ae4bdd7f6f30e2b6dab0f5d34b"
  },
  {
    "url": "assets/js/9.b58d22c0.js",
    "revision": "d74b2790650a6882a0e474f781d6ff06"
  },
  {
    "url": "assets/js/90.0e3416c0.js",
    "revision": "fb9ed213e5bf0361f45f51195e360dfe"
  },
  {
    "url": "assets/js/91.b7f5e82c.js",
    "revision": "f74e40f4fa11c61718dd482bcaf6cc13"
  },
  {
    "url": "assets/js/92.190a2557.js",
    "revision": "03cdc44d70cba176f7b7df7e7c3668f1"
  },
  {
    "url": "assets/js/93.d992f3ec.js",
    "revision": "d0f972259a9c0b4ecb0c618db6413bc8"
  },
  {
    "url": "assets/js/94.5bb510a1.js",
    "revision": "b2854612aeb93fe7e9077aee5771ff7c"
  },
  {
    "url": "assets/js/95.eded568a.js",
    "revision": "661ee9fc827b77617960b34417389a90"
  },
  {
    "url": "assets/js/96.7f9cc6ed.js",
    "revision": "29219236730d0e5fe97bd64b3cb61886"
  },
  {
    "url": "assets/js/97.95c2ce70.js",
    "revision": "8acc7c1396f1849c59bae259eaa318f1"
  },
  {
    "url": "assets/js/98.b4f12259.js",
    "revision": "cce7599d8f025b6594207902b9eb4eee"
  },
  {
    "url": "assets/js/99.9593d6b9.js",
    "revision": "735d28b9cdcf463519d65034f2de4c6f"
  },
  {
    "url": "assets/js/app.cb715010.js",
    "revision": "64885418637ba215622ad350e076eba5"
  },
  {
    "url": "hero.png",
    "revision": "bf9756f0771c9499e8ebfadcb5da4151"
  },
  {
    "url": "home/alphabet.jpg",
    "revision": "3499ee8f00cecd931ddf8f90409f361f"
  },
  {
    "url": "home/courses.jpg",
    "revision": "d75d32ad3d7e119cf3564ee31cb863e9"
  },
  {
    "url": "home/dictionary.jpg",
    "revision": "69462af706a12fbaa64d4324dcc7fc8e"
  },
  {
    "url": "home/grammar.jpg",
    "revision": "19c23bcff850d7083f294259a6e05977"
  },
  {
    "url": "home/greetings.jpg",
    "revision": "a23babe3dc3675e83f6abbbeb9ed581a"
  },
  {
    "url": "home/kitchen.jpg",
    "revision": "b4190ca045f8ae89a3da7c47dc8b75bb"
  },
  {
    "url": "home/more_used.jpg",
    "revision": "165819f5607365d63f49e790ff9f40bb"
  },
  {
    "url": "home/people.jpg",
    "revision": "a1f601ae7dc06dbfa1643b634ee77a21"
  },
  {
    "url": "home/phrases.jpg",
    "revision": "e7801ece1f5fb8c75aacbe76e8f8a0c7"
  },
  {
    "url": "home/profession.jpg",
    "revision": "32cf7bf34c383f34ae89482c39f28568"
  },
  {
    "url": "home/vegetables.jpg",
    "revision": "06d39f1177690ae2e29a0786a23a2cbc"
  },
  {
    "url": "home/verbs.png",
    "revision": "1db334303ca05b1bb790c30014a28d28"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "46fa3968db394b2f4e815b47fb446d1a"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "913fc39bfe4be9583714f754b0e2efb6"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "10905b3ea7bccb4254b38cf5bbcb2f90"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "a5a610a2694eb9beae67c9cbfca8cffc"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "4e32be38a5e5362420686ef2146f31ef"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "2f544c46cd8621894cea3d80e914dab7"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "34f37b51f20a948f5ff637750c735630"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "4e32be38a5e5362420686ef2146f31ef"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "d59cdc20e530b9ddc159586961d0cbe9"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "ccc08661fa5948820b70c11e4f2e2f7b"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "26e25c5eb8e7061c44fa603d3f31296f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "90ff0ebc522d5841e3442bfe280035d9"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "81491474ad58360ee6552309bf5ebc4e"
  },
  {
    "url": "index.html",
    "revision": "9f15fcc968c1aa6764d8bc0a3c29757c"
  },
  {
    "url": "logo.png",
    "revision": "55b3058e403b667ac365966735bc6e5f"
  },
  {
    "url": "logo/achi.jpg",
    "revision": "5f42e091f4da1990f87f7ae04b4394d7"
  },
  {
    "url": "logo/akateko.jpg",
    "revision": "df5e1de23381cdc56e6e12f433a8a3db"
  },
  {
    "url": "logo/chol.jpg",
    "revision": "1cb6e98841b10d4d93cf47746640e91e"
  },
  {
    "url": "logo/chontal.jpg",
    "revision": "ce69f253b98408900618738dd5281e08"
  },
  {
    "url": "logo/chorti.jpg",
    "revision": "397aa54e698ec3e8742d8b6764f15742"
  },
  {
    "url": "logo/chuj.jpg",
    "revision": "99be6300b7c585b8d671644c77c21977"
  },
  {
    "url": "logo/huasteco.jpg",
    "revision": "b9b2e15cbaff690508d533d9b657f9b0"
  },
  {
    "url": "logo/ixil.jpg",
    "revision": "22878bdb2fed10fe02d79727a453db8f"
  },
  {
    "url": "logo/kaqchikel.jpg",
    "revision": "49f14ae22328f9a397b2346b9ab88636"
  },
  {
    "url": "logo/kiche.jpg",
    "revision": "7148e3e3e77a2c12bae66805c82a780a"
  },
  {
    "url": "logo/mam.jpg",
    "revision": "f98ded722ed492f1d8b8605d0db2630c"
  },
  {
    "url": "logo/maya.jpg",
    "revision": "59806bbfdbfaa423716d251ebb818c01"
  },
  {
    "url": "mx/cora/courses/basic/index.html",
    "revision": "ba8bbe4f140db3b6fa927c43e0c5f834"
  },
  {
    "url": "mx/cora/courses/intermediate/index.html",
    "revision": "aac2f9a31a37a152b13def118e7beb46"
  },
  {
    "url": "mx/cora/dictionary/glossary.html",
    "revision": "75a6bb9bfecdcaccd8ffe08710a93c18"
  },
  {
    "url": "mx/cora/dictionary/index.html",
    "revision": "b03b858b95eff2ef4e97b7b757f07ab1"
  },
  {
    "url": "mx/cora/grammar/adjective/index.html",
    "revision": "b8bb9e42e0a3a8eae2286bcafbddadd0"
  },
  {
    "url": "mx/cora/grammar/adverb/index.html",
    "revision": "91b9c6b02e8de9ab27df26a36de86018"
  },
  {
    "url": "mx/cora/grammar/alphabet/index.html",
    "revision": "e715589b4d05bd4595771be59390475d"
  },
  {
    "url": "mx/cora/grammar/article/index.html",
    "revision": "399e67693fac2acc1e8ae4e6c003bfc1"
  },
  {
    "url": "mx/cora/grammar/guide/index.html",
    "revision": "0f838947b47d843ff36a74818e68656b"
  },
  {
    "url": "mx/cora/grammar/verbs/index.html",
    "revision": "1b62c3dc82c137ab2fa8f07530c38128"
  },
  {
    "url": "mx/cora/vocabulary/animals/index.html",
    "revision": "a39a093b6cc808f93bba7a345418347e"
  },
  {
    "url": "mx/cora/vocabulary/greetings/index.html",
    "revision": "d988a3d22f592c0dd64f16116fc88ecc"
  },
  {
    "url": "mx/cora/vocabulary/more_used/index.html",
    "revision": "80c3629790cdd3b8d7240ab2a47aaa8e"
  },
  {
    "url": "mx/cora/vocabulary/people/index.html",
    "revision": "0bb3ac653ae6ee75d15cedd415761177"
  },
  {
    "url": "mx/cora/vocabulary/phrases/index.html",
    "revision": "51c527fe76e5e2a6d14cefab808e0cab"
  },
  {
    "url": "mx/guarijio/courses/basic/index.html",
    "revision": "2c6d64badb54933184d51290b133b9a4"
  },
  {
    "url": "mx/guarijio/courses/intermediate/index.html",
    "revision": "98cd6920398979a79fb55a71930dd8fa"
  },
  {
    "url": "mx/guarijio/dictionary/glossary.html",
    "revision": "76b03dfc58f32e97191692e354db5a25"
  },
  {
    "url": "mx/guarijio/dictionary/index.html",
    "revision": "3c451b3831c8c115bca22534abbc4d78"
  },
  {
    "url": "mx/guarijio/grammar/adjective/index.html",
    "revision": "5c16c249a76aa9d2444888eacfdab518"
  },
  {
    "url": "mx/guarijio/grammar/adverb/index.html",
    "revision": "3fa74bbada3d4cd41de215af10970066"
  },
  {
    "url": "mx/guarijio/grammar/alphabet/index.html",
    "revision": "d2c2526d83a7054524d419b1619f7056"
  },
  {
    "url": "mx/guarijio/grammar/article/index.html",
    "revision": "ce52bcf1c72810b8d26a78552c5057f2"
  },
  {
    "url": "mx/guarijio/grammar/guide/index.html",
    "revision": "65e04efeaba1222e19cf4ba5349f7f4f"
  },
  {
    "url": "mx/guarijio/grammar/verbs/index.html",
    "revision": "1c478b0cc7dff2d88681772995ca3dc8"
  },
  {
    "url": "mx/guarijio/index.html",
    "revision": "c4f7e433e76a12cc837acc0b4818cebb"
  },
  {
    "url": "mx/guarijio/vocabulary/animals/index.html",
    "revision": "4b90f4a0ea8d8bfcfc3008c8032c6fe1"
  },
  {
    "url": "mx/guarijio/vocabulary/greetings/index.html",
    "revision": "6575567029e43e079c5b0fe5bd1fff5b"
  },
  {
    "url": "mx/guarijio/vocabulary/more_used/index.html",
    "revision": "1a6f42d78d65aca07be7d4f5d1539d9f"
  },
  {
    "url": "mx/guarijio/vocabulary/people/index.html",
    "revision": "7ca1c38d84042a9423042b9741489172"
  },
  {
    "url": "mx/guarijio/vocabulary/phrases/index.html",
    "revision": "2d7d65a050a3e46d9234c79f64192c0e"
  },
  {
    "url": "mx/huichol/courses/basic/index.html",
    "revision": "2ca7a724c2ed2adf64646edeeca6e876"
  },
  {
    "url": "mx/huichol/courses/intermediate/index.html",
    "revision": "441a123b4d4a8d86fb7eca33a31b72c0"
  },
  {
    "url": "mx/huichol/dictionary/glossary.html",
    "revision": "54b33ab73660ec754bf051ae530fffcf"
  },
  {
    "url": "mx/huichol/dictionary/index.html",
    "revision": "0493917cc1d4d65ea3f29cd3ca778a38"
  },
  {
    "url": "mx/huichol/grammar/adjective/index.html",
    "revision": "570eb665a79d9718c1d3d421c80d9758"
  },
  {
    "url": "mx/huichol/grammar/adverb/index.html",
    "revision": "a3113a442b7f3fcb3e545b497144b7ca"
  },
  {
    "url": "mx/huichol/grammar/alphabet/index.html",
    "revision": "79f6d0e56c34f4d48a64427b0f64558c"
  },
  {
    "url": "mx/huichol/grammar/article/index.html",
    "revision": "fa014eada512d0a5c9f59604462fdffb"
  },
  {
    "url": "mx/huichol/grammar/guide/index.html",
    "revision": "5bdcaf6cbdc6dc9780f0860e95cf6195"
  },
  {
    "url": "mx/huichol/grammar/verbs/index.html",
    "revision": "b67784e53c1b634666ec3a179e3685de"
  },
  {
    "url": "mx/huichol/index.html",
    "revision": "c8e6d3b1f18ba76a50d3f2afc97ffe40"
  },
  {
    "url": "mx/huichol/vocabulary/animals/index.html",
    "revision": "92bb55906e2b355691fd9abc8ddc18ee"
  },
  {
    "url": "mx/huichol/vocabulary/greetings/index.html",
    "revision": "1790132fd736a8ef7a0778b14b412d78"
  },
  {
    "url": "mx/huichol/vocabulary/more_used/index.html",
    "revision": "63ddbcb11683c130a4060b4223743891"
  },
  {
    "url": "mx/huichol/vocabulary/people/index.html",
    "revision": "61b4257f68bc3c541bad7a39c9e72866"
  },
  {
    "url": "mx/huichol/vocabulary/phrases/index.html",
    "revision": "51e8e7aaa8a8db3534708d38fdb54789"
  },
  {
    "url": "mx/mayo/courses/basic/index.html",
    "revision": "9265c1a6d069238e121fcf93a18ce441"
  },
  {
    "url": "mx/mayo/courses/intermediate/index.html",
    "revision": "67ee9d5e028b044064525c1a853bf879"
  },
  {
    "url": "mx/mayo/dictionary/glossary.html",
    "revision": "43c0266cf72246d829e21b0af189be61"
  },
  {
    "url": "mx/mayo/dictionary/index.html",
    "revision": "024aa9e6b58f77f423f5b7d3a56b76e4"
  },
  {
    "url": "mx/mayo/grammar/adjective/index.html",
    "revision": "e30bf93cd795c4140faf6ff8113a0936"
  },
  {
    "url": "mx/mayo/grammar/adverb/index.html",
    "revision": "b864e82a4dbac117dc843543a80c9aeb"
  },
  {
    "url": "mx/mayo/grammar/alphabet/index.html",
    "revision": "a932e453b8ec368eccddeac61dd11060"
  },
  {
    "url": "mx/mayo/grammar/article/index.html",
    "revision": "de7edfb63b89f8250ab44e5472b641a7"
  },
  {
    "url": "mx/mayo/grammar/guide/index.html",
    "revision": "875908d14b071103751d77f6fbf36224"
  },
  {
    "url": "mx/mayo/grammar/verbs/index.html",
    "revision": "44e15152c5161818240752f2d6a0fb56"
  },
  {
    "url": "mx/mayo/index.html",
    "revision": "e7a8cad55d19e796bbf26622cde2c95c"
  },
  {
    "url": "mx/mayo/vocabulary/animals/index.html",
    "revision": "08c50a28acd71f8286b96bf22557b0b5"
  },
  {
    "url": "mx/mayo/vocabulary/greetings/index.html",
    "revision": "9759207489aff6a8a1d9419bf52b69fc"
  },
  {
    "url": "mx/mayo/vocabulary/more_used/index.html",
    "revision": "07a6150d59da521999faa39c413f5d47"
  },
  {
    "url": "mx/mayo/vocabulary/people/index.html",
    "revision": "1d7048d726440cc72b5da83f79756b70"
  },
  {
    "url": "mx/mayo/vocabulary/phrases/index.html",
    "revision": "bcf90dd93caaace102bdb56e7d209727"
  },
  {
    "url": "mx/mazateco/courses/basic/index.html",
    "revision": "8b50054e0375987295b79a67db2bce5b"
  },
  {
    "url": "mx/mazateco/courses/intermediate/index.html",
    "revision": "01c28682bedfa593c7c8270d08b9c365"
  },
  {
    "url": "mx/mazateco/dictionary/glossary.html",
    "revision": "74ad9c81eb50a8b18d9a7a355a3a0f92"
  },
  {
    "url": "mx/mazateco/dictionary/index.html",
    "revision": "c3ecf6e6e0721864fe2c7f51721aa33a"
  },
  {
    "url": "mx/mazateco/grammar/adjective/index.html",
    "revision": "e015b15408bc007162ce9f00f81cc135"
  },
  {
    "url": "mx/mazateco/grammar/adverb/index.html",
    "revision": "f4d5bdb2cef499bb33c04c768ec308dd"
  },
  {
    "url": "mx/mazateco/grammar/alphabet/index.html",
    "revision": "f3ba3e252f257dfcef95a60ed1317fa1"
  },
  {
    "url": "mx/mazateco/grammar/article/index.html",
    "revision": "a7cbb11b91bdff3acb194187a22b630d"
  },
  {
    "url": "mx/mazateco/grammar/guide/index.html",
    "revision": "d9da3a64a92f0e0c1604956971d0f15f"
  },
  {
    "url": "mx/mazateco/grammar/verbs/index.html",
    "revision": "bdc7fa485ade23752fa8c71aefb59a0e"
  },
  {
    "url": "mx/mazateco/index.html",
    "revision": "0e34207708b68c1b67bd136ca9b56d94"
  },
  {
    "url": "mx/mazateco/vocabulary/animals/index.html",
    "revision": "b7d17b043319d527eba41ab6de1c432a"
  },
  {
    "url": "mx/mazateco/vocabulary/greetings/index.html",
    "revision": "33842e4e0c54bca3b714d2da0fc4c6f7"
  },
  {
    "url": "mx/mazateco/vocabulary/more_used/index.html",
    "revision": "8b1cf6cffcdf45c8abc3913f513bebf5"
  },
  {
    "url": "mx/mazateco/vocabulary/people/index.html",
    "revision": "174fdea556a1b077e657d164de07b7f7"
  },
  {
    "url": "mx/mazateco/vocabulary/phrases/index.html",
    "revision": "b1651586231d044d7db782217944159a"
  },
  {
    "url": "mx/mixteco/courses/basic/index.html",
    "revision": "79670269988494e5b411acb7f16f5c66"
  },
  {
    "url": "mx/mixteco/courses/intermediate/index.html",
    "revision": "638829d5d551da3379608f640f9677e3"
  },
  {
    "url": "mx/mixteco/dictionary/glossary.html",
    "revision": "30d5618872147ea69916179e19eaa4c6"
  },
  {
    "url": "mx/mixteco/dictionary/index.html",
    "revision": "f3202ae70a2630a7367c1f27abbcceb6"
  },
  {
    "url": "mx/mixteco/grammar/adjective/index.html",
    "revision": "24e97c238e6ad7ce7afd4e95635b7d79"
  },
  {
    "url": "mx/mixteco/grammar/adverb/index.html",
    "revision": "e34f96e781f1e7af89e317290bb4fe22"
  },
  {
    "url": "mx/mixteco/grammar/alphabet/index.html",
    "revision": "e5606a3314839183e72ef6a1a9495a32"
  },
  {
    "url": "mx/mixteco/grammar/article/index.html",
    "revision": "cc41c9898754d5b551ae731891d5bd78"
  },
  {
    "url": "mx/mixteco/grammar/guide/index.html",
    "revision": "c49e25e8505e872dcd75e7b79d846b48"
  },
  {
    "url": "mx/mixteco/grammar/verbs/index.html",
    "revision": "93377130f06f8bc904470f3b191c6854"
  },
  {
    "url": "mx/mixteco/index.html",
    "revision": "2317145ccce517b89d73e1abf69d1d42"
  },
  {
    "url": "mx/mixteco/vocabulary/animals/index.html",
    "revision": "ca22d2a8c63c10173551c5301dcfbe04"
  },
  {
    "url": "mx/mixteco/vocabulary/greetings/index.html",
    "revision": "b2d627e06f935012744abd8004acdada"
  },
  {
    "url": "mx/mixteco/vocabulary/more_used/index.html",
    "revision": "e4ad3f78edbd899fa35a6d215552a211"
  },
  {
    "url": "mx/mixteco/vocabulary/people/index.html",
    "revision": "bfcc63dfefc7f913bec91ac53e0a534e"
  },
  {
    "url": "mx/mixteco/vocabulary/phrases/index.html",
    "revision": "6a5903a83c76a1eee851d3553c077783"
  },
  {
    "url": "mx/nahuatl/courses/basic/index.html",
    "revision": "eada3175fc51e66fcec4ca53cdd9c53f"
  },
  {
    "url": "mx/nahuatl/courses/intermediate/index.html",
    "revision": "80dc01922794aabab640d1d60175378a"
  },
  {
    "url": "mx/nahuatl/dictionary/glossary.html",
    "revision": "02c2feb05050bd4655e0268c5b68f39d"
  },
  {
    "url": "mx/nahuatl/dictionary/index.html",
    "revision": "0ef17256293c651edee00374e7a38fb1"
  },
  {
    "url": "mx/nahuatl/grammar/adjective/index.html",
    "revision": "e72fb8e6139162ecea08c7f3cc11d257"
  },
  {
    "url": "mx/nahuatl/grammar/adverb/index.html",
    "revision": "8aa50b4455747d820d926b2a1e703be5"
  },
  {
    "url": "mx/nahuatl/grammar/alphabet/index.html",
    "revision": "085f696f033026b2c8688d350d13deb0"
  },
  {
    "url": "mx/nahuatl/grammar/article/index.html",
    "revision": "15198713e216241c9abd98572dcc3f7a"
  },
  {
    "url": "mx/nahuatl/grammar/guide/index.html",
    "revision": "b97514d791849b1a164a66b949350abe"
  },
  {
    "url": "mx/nahuatl/grammar/verbs/index.html",
    "revision": "20c84c2c389e3bd023f26968f434a3b2"
  },
  {
    "url": "mx/nahuatl/index.html",
    "revision": "3a3e78b9445cd559f0a71dccc87042a7"
  },
  {
    "url": "mx/nahuatl/vocabulary/animals/index.html",
    "revision": "637e4880f938355e4c373f0c102ed4cd"
  },
  {
    "url": "mx/nahuatl/vocabulary/greetings/index.html",
    "revision": "976c698519574b8f795d248ee40d9563"
  },
  {
    "url": "mx/nahuatl/vocabulary/more_used/index.html",
    "revision": "701f5f38452baa81a705a07ebb0cd333"
  },
  {
    "url": "mx/nahuatl/vocabulary/people/index.html",
    "revision": "f08fb2be4fdfe2f571a1b6c90457256b"
  },
  {
    "url": "mx/nahuatl/vocabulary/phrases/index.html",
    "revision": "7adb534728cabcab1adcbff26c3a5a1e"
  },
  {
    "url": "mx/otomi/courses/basic/index.html",
    "revision": "2ca579759819a8f18212b96b5c92f784"
  },
  {
    "url": "mx/otomi/courses/intermediate/index.html",
    "revision": "5ed3c957dc2b774c861b0563cfd633bb"
  },
  {
    "url": "mx/otomi/dictionary/glossary.html",
    "revision": "002c1d390ec2b05533eedee5cc517dc3"
  },
  {
    "url": "mx/otomi/dictionary/index.html",
    "revision": "1270d2664fe2a135dbebb014148e43b1"
  },
  {
    "url": "mx/otomi/grammar/adjective/index.html",
    "revision": "d391098f0b2483f12965bdf5c7c46d93"
  },
  {
    "url": "mx/otomi/grammar/adverb/index.html",
    "revision": "74b6bfd75341c23e5d9d7feb2c4718b5"
  },
  {
    "url": "mx/otomi/grammar/alphabet/index.html",
    "revision": "2e41ca19d4c13818a1cebda3d46c2c5c"
  },
  {
    "url": "mx/otomi/grammar/article/index.html",
    "revision": "d076af432365000931c9d15aa95d0ba1"
  },
  {
    "url": "mx/otomi/grammar/guide/index.html",
    "revision": "9f81b3bf6dcc349977036c9a6409ff37"
  },
  {
    "url": "mx/otomi/grammar/verbs/index.html",
    "revision": "dc9083c2e6bfa0823930c904af5f9518"
  },
  {
    "url": "mx/otomi/index.html",
    "revision": "81b9a39728b69124870aeb760eff5000"
  },
  {
    "url": "mx/otomi/vocabulary/animals/index.html",
    "revision": "17773d671f02dae66ba136af8ef022f7"
  },
  {
    "url": "mx/otomi/vocabulary/greetings/index.html",
    "revision": "052730852c3635003366c840e352bf49"
  },
  {
    "url": "mx/otomi/vocabulary/more_used/index.html",
    "revision": "8776ce7286b5bd83e7fc10f61f9b5053"
  },
  {
    "url": "mx/otomi/vocabulary/people/index.html",
    "revision": "ea1a15dac79395777dea31bbc819e64c"
  },
  {
    "url": "mx/otomi/vocabulary/phrases/index.html",
    "revision": "4a0b2eefd535068664db5d8db2b0712c"
  },
  {
    "url": "mx/pame/courses/basic/index.html",
    "revision": "226e79b5325acad43b0d9ae97f0e5ab4"
  },
  {
    "url": "mx/pame/courses/intermediate/index.html",
    "revision": "fefaa9da987b079c24f68deb11a4d9bb"
  },
  {
    "url": "mx/pame/dictionary/glossary.html",
    "revision": "a6b3ec15c0d58891e055fdfce14aabca"
  },
  {
    "url": "mx/pame/dictionary/index.html",
    "revision": "b3e4d3457aca6857b2b445503b6d024a"
  },
  {
    "url": "mx/pame/grammar/adjective/index.html",
    "revision": "de6156b10c86f11fb8186b160a4c7157"
  },
  {
    "url": "mx/pame/grammar/adverb/index.html",
    "revision": "006c3ea65bcf336de1bb9cc1a15f4170"
  },
  {
    "url": "mx/pame/grammar/alphabet/index.html",
    "revision": "5e16cd0724c24135d47ff419e96fb35d"
  },
  {
    "url": "mx/pame/grammar/article/index.html",
    "revision": "783722625d881e49dafbcb08550ebbb2"
  },
  {
    "url": "mx/pame/grammar/guide/index.html",
    "revision": "18bcad9d0aefa69d2beebac6a4ac7dd1"
  },
  {
    "url": "mx/pame/grammar/verbs/index.html",
    "revision": "60872899a5b89713ff68499487755f09"
  },
  {
    "url": "mx/pame/index.html",
    "revision": "398a93c4eea7f26894d8a3dec831253f"
  },
  {
    "url": "mx/pame/vocabulary/animals/index.html",
    "revision": "1c00a10a504c901f41672481c6a8ac42"
  },
  {
    "url": "mx/pame/vocabulary/greetings/index.html",
    "revision": "115ba2c257dada0326628f8e451bfedb"
  },
  {
    "url": "mx/pame/vocabulary/more_used/index.html",
    "revision": "ec0a47ce56ba6dfcea790844dbab601d"
  },
  {
    "url": "mx/pame/vocabulary/people/index.html",
    "revision": "ec59b098733dd194072563ca5bc5e436"
  },
  {
    "url": "mx/pame/vocabulary/phrases/index.html",
    "revision": "aca55e626547ae3c2c5f4af751eee21a"
  },
  {
    "url": "mx/papago/courses/basic/index.html",
    "revision": "d38baf23368f7020574d35d5abfdc533"
  },
  {
    "url": "mx/papago/courses/intermediate/index.html",
    "revision": "a95ad03ffabc76e43b504ec4a185ab85"
  },
  {
    "url": "mx/papago/dictionary/glossary.html",
    "revision": "de8c03a06ff0d6dad30db8c977848dae"
  },
  {
    "url": "mx/papago/dictionary/index.html",
    "revision": "cc5a066f6ddeeb43da566887867ee240"
  },
  {
    "url": "mx/papago/grammar/adjective/index.html",
    "revision": "b550f6733b1c864334683ac3047b67fc"
  },
  {
    "url": "mx/papago/grammar/adverb/index.html",
    "revision": "40787a61ee0f5b1332525168ba41d008"
  },
  {
    "url": "mx/papago/grammar/alphabet/index.html",
    "revision": "10f7988a97e774433aa0927e91c8be64"
  },
  {
    "url": "mx/papago/grammar/article/index.html",
    "revision": "0c5778a57714f58bcae88fd0a79cb782"
  },
  {
    "url": "mx/papago/grammar/guide/index.html",
    "revision": "ddeb56dfedbf70b77607a119f95c47ed"
  },
  {
    "url": "mx/papago/grammar/verbs/index.html",
    "revision": "0f62034779ed4d33bb87764e36299787"
  },
  {
    "url": "mx/papago/index.html",
    "revision": "c969d1f5d7ee60c2aa850412d3ca5374"
  },
  {
    "url": "mx/papago/vocabulary/animals/index.html",
    "revision": "80f41fd41fe8bfae5d685ca2b29761fe"
  },
  {
    "url": "mx/papago/vocabulary/greetings/index.html",
    "revision": "bba71320b97b32c5999069d8b83db103"
  },
  {
    "url": "mx/papago/vocabulary/more_used/index.html",
    "revision": "0c8e8082b3fda39f2928988730f2f1be"
  },
  {
    "url": "mx/papago/vocabulary/people/index.html",
    "revision": "d72a2d5c94b11d0bb74933f491f46878"
  },
  {
    "url": "mx/papago/vocabulary/phrases/index.html",
    "revision": "3e690f1dec6924489d47e0daf4dc3f4d"
  },
  {
    "url": "mx/pima/courses/basic/index.html",
    "revision": "4e236978746c1711ccc8f7ebfd2fd06d"
  },
  {
    "url": "mx/pima/courses/intermediate/index.html",
    "revision": "535d7caad881e8c5af7c29ce8e2c5ea7"
  },
  {
    "url": "mx/pima/dictionary/glossary.html",
    "revision": "9ab71114065ff3f9b87ef3f697855eb8"
  },
  {
    "url": "mx/pima/dictionary/index.html",
    "revision": "e0eba7a23d89dd37202a1c6d5ceeee5c"
  },
  {
    "url": "mx/pima/grammar/adjective/index.html",
    "revision": "08f60020709d3541e228439afaedf94b"
  },
  {
    "url": "mx/pima/grammar/adverb/index.html",
    "revision": "9369815a14e6f800401e369c574b4813"
  },
  {
    "url": "mx/pima/grammar/alphabet/index.html",
    "revision": "90e73d9927805f81c96b3b9b5d172345"
  },
  {
    "url": "mx/pima/grammar/article/index.html",
    "revision": "ddee3aaed15e6903a15aa0237de39383"
  },
  {
    "url": "mx/pima/grammar/guide/index.html",
    "revision": "6cc6e971186aa71b2e6a5ad1cb7a301d"
  },
  {
    "url": "mx/pima/grammar/verbs/index.html",
    "revision": "92869c37c3174634b6b247b056480dee"
  },
  {
    "url": "mx/pima/index.html",
    "revision": "ec0c5b460e098a1d4ad5528ff5be786d"
  },
  {
    "url": "mx/pima/vocabulary/animals/index.html",
    "revision": "09bc94a4a11b0bd39c626355ce7d3da8"
  },
  {
    "url": "mx/pima/vocabulary/greetings/index.html",
    "revision": "fdb9d6e51cfdfd74b9de8422705e06ca"
  },
  {
    "url": "mx/pima/vocabulary/more_used/index.html",
    "revision": "dee5aabc0b54a29e2a5d89be58ed0378"
  },
  {
    "url": "mx/pima/vocabulary/people/index.html",
    "revision": "9c48ad33ebb5242f267167f22b12c59e"
  },
  {
    "url": "mx/pima/vocabulary/phrases/index.html",
    "revision": "0cb528f64d3f5b171955bad530076789"
  },
  {
    "url": "mx/popoloca/courses/basic/index.html",
    "revision": "fe87c74bbca96c2ccefd37f22fa6cf9d"
  },
  {
    "url": "mx/popoloca/courses/intermediate/index.html",
    "revision": "1730822649e6957ef7fc4c2095bbb3a5"
  },
  {
    "url": "mx/popoloca/dictionary/glossary.html",
    "revision": "5eefd6aae76426a46d73ab910680722c"
  },
  {
    "url": "mx/popoloca/dictionary/index.html",
    "revision": "bb82becbd748334d3d5b029d1ded9589"
  },
  {
    "url": "mx/popoloca/grammar/adjective/index.html",
    "revision": "5819217900abe3a28c280908f5954449"
  },
  {
    "url": "mx/popoloca/grammar/adverb/index.html",
    "revision": "ed58058cfcf1fd47fda5e5e25997c541"
  },
  {
    "url": "mx/popoloca/grammar/alphabet/index.html",
    "revision": "36b16e040ff94e1e369361d1549559e1"
  },
  {
    "url": "mx/popoloca/grammar/article/index.html",
    "revision": "df1e194efbac5f7d74e741303b9058f0"
  },
  {
    "url": "mx/popoloca/grammar/guide/index.html",
    "revision": "87186b7442361c41b9e80ee76c9aa0c5"
  },
  {
    "url": "mx/popoloca/grammar/verbs/index.html",
    "revision": "2b2618b0daadc43f1cd35357d3bc5640"
  },
  {
    "url": "mx/popoloca/index.html",
    "revision": "6a58fa7125246959fb57d4ec6af75a72"
  },
  {
    "url": "mx/popoloca/vocabulary/animals/index.html",
    "revision": "385ae0c81df7c3af92b22ca63e85b10d"
  },
  {
    "url": "mx/popoloca/vocabulary/greetings/index.html",
    "revision": "4c7b61482c0714051401642cb2083778"
  },
  {
    "url": "mx/popoloca/vocabulary/more_used/index.html",
    "revision": "4da6a4df4881baf03dfb15af1baa6bff"
  },
  {
    "url": "mx/popoloca/vocabulary/people/index.html",
    "revision": "d2fcff92090f0fe920d9ff2ac6e73ff4"
  },
  {
    "url": "mx/popoloca/vocabulary/phrases/index.html",
    "revision": "3e9f8990638c289206461e9302051e44"
  },
  {
    "url": "mx/raramuri/courses/basic/index.html",
    "revision": "db5bb162f0855b13499137b8d6184d44"
  },
  {
    "url": "mx/raramuri/courses/intermediate/index.html",
    "revision": "7efe3f1ee79769742615d59b69c5c5ac"
  },
  {
    "url": "mx/raramuri/dictionary/glossary.html",
    "revision": "21b02fdba1cdf30c6b6bf8b69351ed96"
  },
  {
    "url": "mx/raramuri/dictionary/index.html",
    "revision": "b08bf02222eac6f2088837fdc0ed7af6"
  },
  {
    "url": "mx/raramuri/grammar/adjective/index.html",
    "revision": "8db615f4e703e7df9f859b238966f754"
  },
  {
    "url": "mx/raramuri/grammar/adverb/index.html",
    "revision": "45ffc6f930aad11be6b6e352e0c5791e"
  },
  {
    "url": "mx/raramuri/grammar/alphabet/index.html",
    "revision": "27b2989f3c3ea8f313dc0b0f66e6ac54"
  },
  {
    "url": "mx/raramuri/grammar/article/index.html",
    "revision": "0f60449e08d54bf9c03217bec9d2207a"
  },
  {
    "url": "mx/raramuri/grammar/guide/index.html",
    "revision": "3687323622696ba09e1ecfcca8a31e20"
  },
  {
    "url": "mx/raramuri/grammar/verbs/index.html",
    "revision": "599c6d7ce49aea24942569b64a4dc1b7"
  },
  {
    "url": "mx/raramuri/index.html",
    "revision": "f225f9787d608f211b6f8dd362e4c56a"
  },
  {
    "url": "mx/raramuri/vocabulary/animals/index.html",
    "revision": "1ad170dc980e8ac1346ae6b91ccf88ee"
  },
  {
    "url": "mx/raramuri/vocabulary/greetings/index.html",
    "revision": "40a7df67419865f064aeb5ee4a7f9df0"
  },
  {
    "url": "mx/raramuri/vocabulary/more_used/index.html",
    "revision": "95e60e4d1e9dd95bc1a70e04952a25eb"
  },
  {
    "url": "mx/raramuri/vocabulary/people/index.html",
    "revision": "0cb93966a2ed9629d697c0d40c5ef21e"
  },
  {
    "url": "mx/raramuri/vocabulary/phrases/index.html",
    "revision": "ddc9a0e180cce1072d6797f215b76559"
  },
  {
    "url": "mx/seri/courses/basic/index.html",
    "revision": "81f81fe857dce24c78fe5298723c5585"
  },
  {
    "url": "mx/seri/courses/intermediate/index.html",
    "revision": "7d66a2065cef24651ebd923320dcb204"
  },
  {
    "url": "mx/seri/dictionary/glossary.html",
    "revision": "2d945e463a45f5929ad37b91d0254fcf"
  },
  {
    "url": "mx/seri/dictionary/index.html",
    "revision": "ed7dfc83159d5bbd2c7f4fbde9d5e260"
  },
  {
    "url": "mx/seri/grammar/adjective/index.html",
    "revision": "3832a6417b15018829d13614e92839e1"
  },
  {
    "url": "mx/seri/grammar/adverb/index.html",
    "revision": "28905e3b7c1fa3ee1c7fb63e2382af2e"
  },
  {
    "url": "mx/seri/grammar/alphabet/index.html",
    "revision": "374db14f264ffb665c2364c6a716991c"
  },
  {
    "url": "mx/seri/grammar/article/index.html",
    "revision": "bea4f4cbd30c45d897c0c910ab9f5b2b"
  },
  {
    "url": "mx/seri/grammar/guide/index.html",
    "revision": "5901e73f396320fbeac80bdd67ef8a8f"
  },
  {
    "url": "mx/seri/grammar/verbs/index.html",
    "revision": "9a1b4ad4ba5a857dbdf7fc0cffa7e620"
  },
  {
    "url": "mx/seri/index.html",
    "revision": "15e0501165804f5421d8cb56a14baafb"
  },
  {
    "url": "mx/seri/vocabulary/animals/index.html",
    "revision": "82e3cf6963dcf0944ca93c274ff884f7"
  },
  {
    "url": "mx/seri/vocabulary/greetings/index.html",
    "revision": "a11bd6cc0bce88d658dda3fe35706a00"
  },
  {
    "url": "mx/seri/vocabulary/more_used/index.html",
    "revision": "af20d5bccb2e1b4ab0eaa4bc575ccf40"
  },
  {
    "url": "mx/seri/vocabulary/people/index.html",
    "revision": "5e0082c419da6c0ac3d615389f1528ac"
  },
  {
    "url": "mx/seri/vocabulary/phrases/index.html",
    "revision": "62a0ef8587d1bd2542064417d0f5c840"
  },
  {
    "url": "mx/tarasco/courses/basic/index.html",
    "revision": "eebff763d2881db15d9a571083d8017b"
  },
  {
    "url": "mx/tarasco/courses/intermediate/index.html",
    "revision": "e70e0e89d11858ad910631d01a5130ba"
  },
  {
    "url": "mx/tarasco/dictionary/glossary.html",
    "revision": "111104e6766a064e08a535a889fc9a8f"
  },
  {
    "url": "mx/tarasco/dictionary/index.html",
    "revision": "c3d4f3ece2b1bf0ad60a23500ae0b59f"
  },
  {
    "url": "mx/tarasco/grammar/adjective/index.html",
    "revision": "65470b569dc34079096e4fbe674c6f7f"
  },
  {
    "url": "mx/tarasco/grammar/adverb/index.html",
    "revision": "7068a20e4409af2743eccb60e82f11cb"
  },
  {
    "url": "mx/tarasco/grammar/alphabet/index.html",
    "revision": "e69f5ced0a376bc200ac721212e168af"
  },
  {
    "url": "mx/tarasco/grammar/article/index.html",
    "revision": "665eedff4873699cc35fdab2d722d3b3"
  },
  {
    "url": "mx/tarasco/grammar/guide/index.html",
    "revision": "3d025e43adb803995df4745feba1fbab"
  },
  {
    "url": "mx/tarasco/grammar/verbs/index.html",
    "revision": "de725748d53df5054c1fbfd73282f521"
  },
  {
    "url": "mx/tarasco/index.html",
    "revision": "e6f2678e81a772efd7952dfe1ce820b5"
  },
  {
    "url": "mx/tarasco/vocabulary/animals/index.html",
    "revision": "cd9627478b4cd8caae2d6f770bfc36e0"
  },
  {
    "url": "mx/tarasco/vocabulary/greetings/index.html",
    "revision": "743d94db753735d0669b2d718da4e9e8"
  },
  {
    "url": "mx/tarasco/vocabulary/more_used/index.html",
    "revision": "e89320ecb3f2dfa566693d218168dacd"
  },
  {
    "url": "mx/tarasco/vocabulary/people/index.html",
    "revision": "7fc659e9c8f175908e3ea601a64c761d"
  },
  {
    "url": "mx/tarasco/vocabulary/phrases/index.html",
    "revision": "d74b77dff586a1b7b9e9edd30e7aa16e"
  },
  {
    "url": "mx/tepehua/courses/basic/index.html",
    "revision": "e35dfca6f057e4d8bf833ff9abb5fdb9"
  },
  {
    "url": "mx/tepehua/courses/intermediate/index.html",
    "revision": "ec6674e05e91d6a668ccb58f79cc3452"
  },
  {
    "url": "mx/tepehua/dictionary/glossary.html",
    "revision": "f574958950233192e16526e353f9cc50"
  },
  {
    "url": "mx/tepehua/dictionary/index.html",
    "revision": "73d087e5892f09a0536352ace65df4a8"
  },
  {
    "url": "mx/tepehua/grammar/adjective/index.html",
    "revision": "a0171357dfd1140d81c3c101b3a775ce"
  },
  {
    "url": "mx/tepehua/grammar/adverb/index.html",
    "revision": "8b8e7ce53205cb246e0ec7472d2b5aac"
  },
  {
    "url": "mx/tepehua/grammar/alphabet/index.html",
    "revision": "c9955ef4ee95d42d8695fbd77ce3581f"
  },
  {
    "url": "mx/tepehua/grammar/article/index.html",
    "revision": "7020f385cd246b1e459c4f5b1603866f"
  },
  {
    "url": "mx/tepehua/grammar/guide/index.html",
    "revision": "1adb09a275a4409e28d26a0dda5f4909"
  },
  {
    "url": "mx/tepehua/grammar/verbs/index.html",
    "revision": "adecb516b2c1d9cb0a851f5bbefc445c"
  },
  {
    "url": "mx/tepehua/index.html",
    "revision": "95a5a702f2e7596b396937f78a1d2cb5"
  },
  {
    "url": "mx/tepehua/vocabulary/animals/index.html",
    "revision": "542669b9eed9c612f4ae71ec686a783f"
  },
  {
    "url": "mx/tepehua/vocabulary/greetings/index.html",
    "revision": "c38671632a16d5f8706565a4be86df70"
  },
  {
    "url": "mx/tepehua/vocabulary/more_used/index.html",
    "revision": "154c15fb03119e37cb245f600da0bbe6"
  },
  {
    "url": "mx/tepehua/vocabulary/people/index.html",
    "revision": "0eddc3e8ae7504112aa178efa266bccb"
  },
  {
    "url": "mx/tepehua/vocabulary/phrases/index.html",
    "revision": "6c639f8d4788bd63d9dc5c116a46e28b"
  },
  {
    "url": "mx/totonaco/courses/basic/index.html",
    "revision": "9982e47e34a97b42102b0c68f02933e9"
  },
  {
    "url": "mx/totonaco/courses/intermediate/index.html",
    "revision": "eea4465ea0e8c0df2f3baa5527b5de0d"
  },
  {
    "url": "mx/totonaco/dictionary/glossary.html",
    "revision": "1b7cc119ae89ed69069b902eeb1f5eb7"
  },
  {
    "url": "mx/totonaco/dictionary/index.html",
    "revision": "7ef9a804d62f2f6864e38eb7b9582b3e"
  },
  {
    "url": "mx/totonaco/grammar/adjective/index.html",
    "revision": "51ca4b34c86a7bf6b7c87ba6ce6b135e"
  },
  {
    "url": "mx/totonaco/grammar/adverb/index.html",
    "revision": "f340367bbc079c1d57f65f0e0b569062"
  },
  {
    "url": "mx/totonaco/grammar/alphabet/index.html",
    "revision": "47318b17b7f5182b4875667229632650"
  },
  {
    "url": "mx/totonaco/grammar/article/index.html",
    "revision": "41a2c0528fb3055537386efd383245a9"
  },
  {
    "url": "mx/totonaco/grammar/guide/index.html",
    "revision": "8d73484a3ee253d0a580ff0c57f24904"
  },
  {
    "url": "mx/totonaco/grammar/verbs/index.html",
    "revision": "dedebc8cd434caa572f7f79684299069"
  },
  {
    "url": "mx/totonaco/index.html",
    "revision": "5525c89d6d43f57fecd523a812de06dd"
  },
  {
    "url": "mx/totonaco/vocabulary/animals/index.html",
    "revision": "7b31893c3e46a786d59e3ea3b6926898"
  },
  {
    "url": "mx/totonaco/vocabulary/greetings/index.html",
    "revision": "4dcc94f0a296c91a7d48267d6a42540a"
  },
  {
    "url": "mx/totonaco/vocabulary/more_used/index.html",
    "revision": "2104a163955baae261ac360eee724a62"
  },
  {
    "url": "mx/totonaco/vocabulary/people/index.html",
    "revision": "55adaa407138cafde1a274496ca98dd1"
  },
  {
    "url": "mx/totonaco/vocabulary/phrases/index.html",
    "revision": "6d17c2e3ef62920d2dee7bcacc313d67"
  },
  {
    "url": "mx/yaqui/courses/basic/index.html",
    "revision": "eb0bfa7d32abc43e31522dab3ee0c3e0"
  },
  {
    "url": "mx/yaqui/courses/intermediate/index.html",
    "revision": "1ce1c0f6cd01254a19663c4348ae983a"
  },
  {
    "url": "mx/yaqui/dictionary/glossary.html",
    "revision": "cce306ded3f92248c4ecba9a251ff94a"
  },
  {
    "url": "mx/yaqui/dictionary/index.html",
    "revision": "923e4887e318116ada74505f6f2b613d"
  },
  {
    "url": "mx/yaqui/grammar/adjective/index.html",
    "revision": "48418a5882c052c3f44a2b2fc1736826"
  },
  {
    "url": "mx/yaqui/grammar/adverb/index.html",
    "revision": "99cc419aa38ee6df6a6244d36024ef88"
  },
  {
    "url": "mx/yaqui/grammar/alphabet/index.html",
    "revision": "1dde2e3805951f2a7df9539e0e46457a"
  },
  {
    "url": "mx/yaqui/grammar/article/index.html",
    "revision": "077c1bac04fb1e70ec66f3cb86a79401"
  },
  {
    "url": "mx/yaqui/grammar/guide/index.html",
    "revision": "6314c8a4753f4f0f3ad2f5fbbfce747a"
  },
  {
    "url": "mx/yaqui/grammar/verbs/index.html",
    "revision": "9b4b12ee75e7c2ea8a96ac68959b3862"
  },
  {
    "url": "mx/yaqui/index.html",
    "revision": "f6e22e0dbda65ba3251cee92be7382c8"
  },
  {
    "url": "mx/yaqui/vocabulary/animals/index.html",
    "revision": "32db744f3c1d4b802bbae5621fa568f4"
  },
  {
    "url": "mx/yaqui/vocabulary/greetings/index.html",
    "revision": "efd325845f6a2dac511515d2905a5a99"
  },
  {
    "url": "mx/yaqui/vocabulary/more_used/index.html",
    "revision": "fccdca264d00520efc27dd02b3f0465d"
  },
  {
    "url": "mx/yaqui/vocabulary/people/index.html",
    "revision": "85c0ed66c64dd3ce15189c288a42109f"
  },
  {
    "url": "mx/yaqui/vocabulary/phrases/index.html",
    "revision": "7697149f001e09c56822fa1b9eda59a5"
  },
  {
    "url": "mx/zapoteco/courses/basic/index.html",
    "revision": "b90c4caaeb9fbe0464154c4c8a414999"
  },
  {
    "url": "mx/zapoteco/courses/intermediate/index.html",
    "revision": "82ff770ff5a76e2b4ffb64126eae08bb"
  },
  {
    "url": "mx/zapoteco/dictionary/glossary.html",
    "revision": "399688368d50a4354463c270bbfb10d3"
  },
  {
    "url": "mx/zapoteco/dictionary/index.html",
    "revision": "74d0d96670114c5c80220d5560e8aa1d"
  },
  {
    "url": "mx/zapoteco/grammar/adjective/index.html",
    "revision": "5b5ba3de64fa3fb6396a4178128c907a"
  },
  {
    "url": "mx/zapoteco/grammar/adverb/index.html",
    "revision": "c720c449378d294390566bf98808cee8"
  },
  {
    "url": "mx/zapoteco/grammar/alphabet/index.html",
    "revision": "82f6cef94d03612a46ce544da1306512"
  },
  {
    "url": "mx/zapoteco/grammar/article/index.html",
    "revision": "e0cdf0c65d36b5c088744f53f238e1b3"
  },
  {
    "url": "mx/zapoteco/grammar/guide/index.html",
    "revision": "5cfed245cb86d42e242ec0a0951ae2ec"
  },
  {
    "url": "mx/zapoteco/grammar/verbs/index.html",
    "revision": "4a345f46b4c1e6f12329ced7a27411f5"
  },
  {
    "url": "mx/zapoteco/index.html",
    "revision": "72b7820fa14c5cc6d824f5833832f97e"
  },
  {
    "url": "mx/zapoteco/vocabulary/animals/index.html",
    "revision": "3c67cf974801a39d135c0ee882793669"
  },
  {
    "url": "mx/zapoteco/vocabulary/greetings/index.html",
    "revision": "973c6602f284ebf622caa4ec611bb450"
  },
  {
    "url": "mx/zapoteco/vocabulary/more_used/index.html",
    "revision": "6db5fe265a2dc69c9d0123f85003d6d3"
  },
  {
    "url": "mx/zapoteco/vocabulary/people/index.html",
    "revision": "d024f438e52161f306881fd4afe64792"
  },
  {
    "url": "mx/zapoteco/vocabulary/phrases/index.html",
    "revision": "6b30df9d014fa6843ce5de4bdb8ce62f"
  }
].concat(self.__precacheManifest || []);
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
