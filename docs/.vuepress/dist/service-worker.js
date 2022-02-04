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
    "revision": "71aaa9ac5d956b5aa429db5b892cd849"
  },
  {
    "url": "assets/css/0.styles.31bfc00c.css",
    "revision": "7b69551e0589498093330439bdda9ec3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f3ad1178.js",
    "revision": "ffac289c72bc7cf35537b2eb698c9e64"
  },
  {
    "url": "assets/js/100.e31d29ff.js",
    "revision": "7c6cf2da19cdbd44bf0fef4dbf88f67c"
  },
  {
    "url": "assets/js/101.e0b42252.js",
    "revision": "b70ffe6ec5b9a686e4aa4cceded1b057"
  },
  {
    "url": "assets/js/102.0011130e.js",
    "revision": "19429a442bb476fc559ba25c1d5f9e36"
  },
  {
    "url": "assets/js/103.cd614826.js",
    "revision": "ae6afd9361d35cadd1d3d896c77b6fe4"
  },
  {
    "url": "assets/js/104.88207c11.js",
    "revision": "a810f0dd230eebc0305b4c9cb24eaa4c"
  },
  {
    "url": "assets/js/105.942f0876.js",
    "revision": "daf02ab62247a6f8d337483cafc0c5ee"
  },
  {
    "url": "assets/js/106.c4d142fd.js",
    "revision": "983b97b33d2fc57bd225b37b4195cf94"
  },
  {
    "url": "assets/js/107.7cfc8a91.js",
    "revision": "ba38b079153d1601cde16fce859f3d63"
  },
  {
    "url": "assets/js/108.af25fa0f.js",
    "revision": "47bd23ed66392980df85872bb1bf8c8e"
  },
  {
    "url": "assets/js/109.4c5e53af.js",
    "revision": "e21f27c384f4efb53a0c027e378cb048"
  },
  {
    "url": "assets/js/11.7243fa94.js",
    "revision": "b77a2de0042e10c6d8a0d02da0ef90b4"
  },
  {
    "url": "assets/js/110.a731ad34.js",
    "revision": "01700a847cac5fdee042ea1d3bc9ac0e"
  },
  {
    "url": "assets/js/111.422122ef.js",
    "revision": "c2f167ee3c69460e8018c1c5b7e0ec5e"
  },
  {
    "url": "assets/js/112.1e8810fe.js",
    "revision": "f2c21b463b218b9dc886050e1fd69ea5"
  },
  {
    "url": "assets/js/113.f8d8f916.js",
    "revision": "2a5fcb55bc594716d2c0257a19ed69ba"
  },
  {
    "url": "assets/js/114.ab425eba.js",
    "revision": "c15ff82a1278fbb0b041618da6060d19"
  },
  {
    "url": "assets/js/115.506f73a6.js",
    "revision": "798a945a7ff018b8295f9b75f1044531"
  },
  {
    "url": "assets/js/116.0a623133.js",
    "revision": "129aab6f61d92af49db539ad5dcf6c3d"
  },
  {
    "url": "assets/js/117.b9024157.js",
    "revision": "0f4190685d7aeb12700edb6c681eb85e"
  },
  {
    "url": "assets/js/118.a5905d17.js",
    "revision": "900240b7a0e80d60df5ee675454f3f89"
  },
  {
    "url": "assets/js/119.173d0407.js",
    "revision": "c8cbb3875d7612d3235bc764af9483a8"
  },
  {
    "url": "assets/js/12.333b3235.js",
    "revision": "941936f044843009dc409d58b02d9539"
  },
  {
    "url": "assets/js/120.52370704.js",
    "revision": "42f8d711baaa7e9e19762348f7fdb4e6"
  },
  {
    "url": "assets/js/121.e141c646.js",
    "revision": "81208e4bc4bd71d4ae35ea0f614492eb"
  },
  {
    "url": "assets/js/122.0e559939.js",
    "revision": "548b8fa3125a361d44139fdb2d44c63f"
  },
  {
    "url": "assets/js/123.02fd2d50.js",
    "revision": "f8172aa4210fe3b5feafc79eb0d10581"
  },
  {
    "url": "assets/js/124.e6c80147.js",
    "revision": "bc65cf0cfbf336a50e89afcb630bc763"
  },
  {
    "url": "assets/js/125.b967b6a5.js",
    "revision": "6947c84762d7505c77381210f503b6f0"
  },
  {
    "url": "assets/js/126.70e03709.js",
    "revision": "88346619d42555c982004eb8c5da6ba6"
  },
  {
    "url": "assets/js/127.595161ba.js",
    "revision": "64a8707b5360b5a5d57c542588c6d583"
  },
  {
    "url": "assets/js/128.105e2df5.js",
    "revision": "257098009d901697c37e61f4c294a2b8"
  },
  {
    "url": "assets/js/129.c26c82a8.js",
    "revision": "cbd4100721b963558941ddc4e0f9a0bb"
  },
  {
    "url": "assets/js/13.62db9e8e.js",
    "revision": "30475983c728e1f6c0c4d2aa424fc6a0"
  },
  {
    "url": "assets/js/130.aa616a13.js",
    "revision": "f22f8528958a8aa357708473f4e684ae"
  },
  {
    "url": "assets/js/131.69af48d4.js",
    "revision": "c120cc4c13c5a362232bec3c272b2951"
  },
  {
    "url": "assets/js/132.f56dea6e.js",
    "revision": "aa8f3baffcc10250f7bb266acee886ba"
  },
  {
    "url": "assets/js/133.f05afc05.js",
    "revision": "f53ad919cf4592601a4457e3e9513179"
  },
  {
    "url": "assets/js/134.c5e2ba9a.js",
    "revision": "59bd5bc1d3fea12b3018c543c7556f93"
  },
  {
    "url": "assets/js/135.73cb7222.js",
    "revision": "9e4422061f7c1aea36c789e0aa25422d"
  },
  {
    "url": "assets/js/136.60d512d6.js",
    "revision": "f0dd2ce798a9c17e0150b64ba361a000"
  },
  {
    "url": "assets/js/137.d3444d16.js",
    "revision": "233e29a27f88df686949118a5cfd4059"
  },
  {
    "url": "assets/js/138.ecd7a92b.js",
    "revision": "77a52e62239f86a48428d053d4daebcc"
  },
  {
    "url": "assets/js/139.c0e10116.js",
    "revision": "791d4a2de4e19b1d2a9e19cf3a6b0a5b"
  },
  {
    "url": "assets/js/14.c3bf4387.js",
    "revision": "816058456b3ef03a703febc6c8cf8b4a"
  },
  {
    "url": "assets/js/140.88f706fa.js",
    "revision": "365b81ab3587b6614c019dd5ce4b0df8"
  },
  {
    "url": "assets/js/141.fe681bb7.js",
    "revision": "c9de0f9d200de70747ebaf2117115ee9"
  },
  {
    "url": "assets/js/142.ee2dd0fa.js",
    "revision": "b79eed938bb4e798e33fc71b4aca3fe2"
  },
  {
    "url": "assets/js/143.edbccfc9.js",
    "revision": "9fd7c3e97ff7494a0d06fed3b3f7a5b3"
  },
  {
    "url": "assets/js/144.473ea67a.js",
    "revision": "c9488204c8a517bc439abc798f66a860"
  },
  {
    "url": "assets/js/145.026ed68c.js",
    "revision": "5321450fd7c426d27b1e92b9a375f4cf"
  },
  {
    "url": "assets/js/146.73128d98.js",
    "revision": "ced5d21f043611dd7ea772204da65f64"
  },
  {
    "url": "assets/js/147.25f6a80b.js",
    "revision": "75c304ef5518f6f433730363ee53bcdb"
  },
  {
    "url": "assets/js/148.4741209a.js",
    "revision": "d0d545121eab690ce00666fc450979af"
  },
  {
    "url": "assets/js/149.25f8fda0.js",
    "revision": "b5a7b3c1a64802093da6a34340944745"
  },
  {
    "url": "assets/js/15.43ac72ff.js",
    "revision": "0de14891491e34f45e3c43582f9021b7"
  },
  {
    "url": "assets/js/150.f3ea150e.js",
    "revision": "75538d05d81122886cbc4c408fdcbfb5"
  },
  {
    "url": "assets/js/151.f5acd65a.js",
    "revision": "ff4aef02b78bbcc4750831276b93a0a3"
  },
  {
    "url": "assets/js/152.d94f4083.js",
    "revision": "03532fd9fc48f0514d003245435654b1"
  },
  {
    "url": "assets/js/153.97c240c8.js",
    "revision": "25e34fd7e417397cf6630f488ff7c545"
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
    "url": "assets/js/156.96b65b8a.js",
    "revision": "045437d22d382e74980b71115784c309"
  },
  {
    "url": "assets/js/157.01b9c16d.js",
    "revision": "b94caa95111e30ccff9c4974d15c3eb1"
  },
  {
    "url": "assets/js/158.d0d93655.js",
    "revision": "4062f53c077fb0853d8fea2cb1dc7090"
  },
  {
    "url": "assets/js/159.5596c780.js",
    "revision": "5ac9abb4726098054cee8e9fa42f4227"
  },
  {
    "url": "assets/js/16.4570f901.js",
    "revision": "e58fc308ff94b4653a7a865f03992962"
  },
  {
    "url": "assets/js/160.6a4332bd.js",
    "revision": "149a30aec39a3fd0b6d7d7cb08578509"
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
    "url": "assets/js/163.8cadb413.js",
    "revision": "c1ac9ea0fa09a7cf059e34bfee3a8eb6"
  },
  {
    "url": "assets/js/164.e7fda198.js",
    "revision": "a925499af0c1f822b58019b9c784f793"
  },
  {
    "url": "assets/js/165.8c41f6fb.js",
    "revision": "48c199728059ba846736ef55429660bf"
  },
  {
    "url": "assets/js/166.a2a09af8.js",
    "revision": "6c2b7c2da86f7edb3538d89b970941fa"
  },
  {
    "url": "assets/js/167.34c25b81.js",
    "revision": "e61c32715092cdf3363a9811ca584fd9"
  },
  {
    "url": "assets/js/168.a4041103.js",
    "revision": "8f4ea9936908b71db7ebdc1239c5c54a"
  },
  {
    "url": "assets/js/169.107983d8.js",
    "revision": "970c0ec4d32abc881f6060576dcf2a34"
  },
  {
    "url": "assets/js/17.35a7ad3a.js",
    "revision": "23065b7764f9a8e47441dc49d3e087a0"
  },
  {
    "url": "assets/js/170.30f76f2f.js",
    "revision": "47b976550643564f9fb74d8c53d9506a"
  },
  {
    "url": "assets/js/171.0b0cf77e.js",
    "revision": "5a362100d691821dc3a517a16fcb679f"
  },
  {
    "url": "assets/js/172.b8bb04f9.js",
    "revision": "d184763c0060f14cf02e17ed5c71464c"
  },
  {
    "url": "assets/js/173.367339c0.js",
    "revision": "a5f30b1ecf3bbe094aa5720ede667e42"
  },
  {
    "url": "assets/js/174.89bd7bdf.js",
    "revision": "49000d23f91462d1c1e46ebba6b87cfe"
  },
  {
    "url": "assets/js/175.93bb616d.js",
    "revision": "4818aa0e132c4264616eef45203e1140"
  },
  {
    "url": "assets/js/176.b49de96f.js",
    "revision": "eb06ba96ca3cd55466a7f900384c0771"
  },
  {
    "url": "assets/js/177.e439a12a.js",
    "revision": "dec545a9b6f6f1f88812d90e56a03dc2"
  },
  {
    "url": "assets/js/178.b6297c8a.js",
    "revision": "7053cc84b56bca22cd44110179251ed6"
  },
  {
    "url": "assets/js/179.9b10e807.js",
    "revision": "1335e8c82c59f6a2ece6ac46ad71b76d"
  },
  {
    "url": "assets/js/18.f563d9ae.js",
    "revision": "8bce3f473665c6c39bd7beb114d642f2"
  },
  {
    "url": "assets/js/180.a48d0089.js",
    "revision": "fbb65b719fd101cb3aa7757dd191385d"
  },
  {
    "url": "assets/js/181.d158c6c6.js",
    "revision": "e7340c162139bc58bf166a960a29e9b2"
  },
  {
    "url": "assets/js/182.7fa068cd.js",
    "revision": "c7c1a516133fd5ea7fbc384b643c4eb7"
  },
  {
    "url": "assets/js/183.53887041.js",
    "revision": "06ecba8950d369daf6b0436eed1979f1"
  },
  {
    "url": "assets/js/184.a8977d10.js",
    "revision": "e08639b605bfa3cc00bad25f4a60dc74"
  },
  {
    "url": "assets/js/185.f88f158c.js",
    "revision": "c10bf76787cbada6e128a31152959190"
  },
  {
    "url": "assets/js/186.2d7c6af9.js",
    "revision": "959b8e3cd1170b2d28d6b8f7b2ad5c2a"
  },
  {
    "url": "assets/js/187.91df4c63.js",
    "revision": "d6c4e957043fd3a92d1eb09aa3bd4e05"
  },
  {
    "url": "assets/js/188.3aa0eb21.js",
    "revision": "f65147b05e11b4bb33f744bbf6b6cf08"
  },
  {
    "url": "assets/js/189.f3ee2ab7.js",
    "revision": "b18b169fd1b9c77afa9a20b5a706f612"
  },
  {
    "url": "assets/js/19.859c944b.js",
    "revision": "b393c945d18a8256361739483949abe0"
  },
  {
    "url": "assets/js/190.34032d5f.js",
    "revision": "61bce8f195716c0a55046c0759b94dab"
  },
  {
    "url": "assets/js/191.c7d25f61.js",
    "revision": "4c685d9df09de80c83afacf5cf70067c"
  },
  {
    "url": "assets/js/192.ef68c552.js",
    "revision": "fd7dfb448b5271092e2ce88b2d1260c8"
  },
  {
    "url": "assets/js/193.e39623c4.js",
    "revision": "b02e10b5495d354ab35c988ff6e7a54e"
  },
  {
    "url": "assets/js/194.e1ae733d.js",
    "revision": "b450c9f674cbab1c3d973e82921702bf"
  },
  {
    "url": "assets/js/195.c533e8d1.js",
    "revision": "a4a18265598aea6987c84db73bd987fe"
  },
  {
    "url": "assets/js/196.ce21fde4.js",
    "revision": "8014e0826bf789bd7e216e0a388a3930"
  },
  {
    "url": "assets/js/197.9b126e33.js",
    "revision": "737206a8bf620858b4d307bce221174c"
  },
  {
    "url": "assets/js/198.38bbc7c3.js",
    "revision": "86835b0fe5811e7f9cf1c76a364709f3"
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
    "url": "assets/js/20.7b87791f.js",
    "revision": "ffeceb2a8d119e2b4cf49cd30e948d2e"
  },
  {
    "url": "assets/js/200.ca433c82.js",
    "revision": "3d114dc9115bba071127d3ef28fbbfd2"
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
    "url": "assets/js/203.bf5ec252.js",
    "revision": "f8d54a19f263cac9e61ec512a20d2196"
  },
  {
    "url": "assets/js/204.05afddd9.js",
    "revision": "6d96baa6811f660e1c5078cf7a2cc0b1"
  },
  {
    "url": "assets/js/205.896c31d4.js",
    "revision": "827e074d122b333489fb4dcfb94d7922"
  },
  {
    "url": "assets/js/206.8a1373c5.js",
    "revision": "0ee06e05155a3553aff8c85576441d72"
  },
  {
    "url": "assets/js/207.f5154c8b.js",
    "revision": "8659042de1154f2636a43868f0efe926"
  },
  {
    "url": "assets/js/208.0a7cf0b0.js",
    "revision": "9c2913a29107b00ae5b5b4ecbd6e9452"
  },
  {
    "url": "assets/js/209.b39aa2b4.js",
    "revision": "2c5a28b7375f00479c72922f911fb8aa"
  },
  {
    "url": "assets/js/21.98c8ae4e.js",
    "revision": "33dc458eb0bca552c74c2b6e4bacc370"
  },
  {
    "url": "assets/js/210.08b783c3.js",
    "revision": "428e0f62932d765ed970dc4c2326d480"
  },
  {
    "url": "assets/js/211.ac9d8643.js",
    "revision": "8e63775b8df8ca30be1294a07e2a3c2d"
  },
  {
    "url": "assets/js/212.2b18527f.js",
    "revision": "6446b24cc95813b0e050952690c388b8"
  },
  {
    "url": "assets/js/213.8a5420c6.js",
    "revision": "be8e0b912162f5281b0257d949d2f31e"
  },
  {
    "url": "assets/js/214.0863f50d.js",
    "revision": "a67881fc23d4454913149ab6a8ace168"
  },
  {
    "url": "assets/js/215.25961e35.js",
    "revision": "34ad554720c3c69719b16f2bdb1674e1"
  },
  {
    "url": "assets/js/216.b698ad9c.js",
    "revision": "f71084ef3538273c6c572d80f182b284"
  },
  {
    "url": "assets/js/217.8d0caa8f.js",
    "revision": "2d4011b2eac7ba08e27cae19651a4f23"
  },
  {
    "url": "assets/js/218.7af5fc20.js",
    "revision": "c9221c38d691a03b35636ba295ddf556"
  },
  {
    "url": "assets/js/219.36d8ff3a.js",
    "revision": "7d942a9662d732e66e0d4c37f829885c"
  },
  {
    "url": "assets/js/22.5c797a1e.js",
    "revision": "1a87fc083a0fbffccb45ba273c4e6205"
  },
  {
    "url": "assets/js/220.0d3bf3f5.js",
    "revision": "693478dc361f53b7c56e2ed48460d18e"
  },
  {
    "url": "assets/js/221.46ec8c61.js",
    "revision": "4db01ba05de71562165551232d3ef210"
  },
  {
    "url": "assets/js/222.d35462e2.js",
    "revision": "ad018ad7e1c084dba1122bb5cd381a8c"
  },
  {
    "url": "assets/js/223.62d74144.js",
    "revision": "b93baf150c0a541a30bac4a37f73e307"
  },
  {
    "url": "assets/js/224.09e44f37.js",
    "revision": "c0ab3d1c6bc202caef9ba709f3430f5d"
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
    "url": "assets/js/227.bbeb4b08.js",
    "revision": "03d35f12f1f85f7e09f2e8697403539b"
  },
  {
    "url": "assets/js/228.fcd97380.js",
    "revision": "6b29313bee8dd4703f22aa33a3d21ce9"
  },
  {
    "url": "assets/js/229.4c228a72.js",
    "revision": "d3d9504b5098f20076f4666c500261e9"
  },
  {
    "url": "assets/js/23.63d95204.js",
    "revision": "ec5bdf9929b172fdf1e2b1ce801491cf"
  },
  {
    "url": "assets/js/230.38e9a0be.js",
    "revision": "93ae4c2da429931d833b49be36aee5bd"
  },
  {
    "url": "assets/js/231.7fb040e8.js",
    "revision": "42c6fa16755251f54f2014d333d00f91"
  },
  {
    "url": "assets/js/232.18d40752.js",
    "revision": "a23aeca7bbbd4bf91fb7e7772d8863d9"
  },
  {
    "url": "assets/js/233.66f01ce9.js",
    "revision": "fa5f7fb7038db373cd9ab64279569e97"
  },
  {
    "url": "assets/js/234.ecedc2dd.js",
    "revision": "729740d4ba887b2a3f0bc78fe9920432"
  },
  {
    "url": "assets/js/235.95f61265.js",
    "revision": "0ea166f35d179f240665bc0c2e70e417"
  },
  {
    "url": "assets/js/236.1db01287.js",
    "revision": "80ed4b568f121051d15408dbcafa6c39"
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
    "url": "assets/js/24.695e6fb1.js",
    "revision": "6f6ba061a5cf63e04adf5ec85d16bda5"
  },
  {
    "url": "assets/js/240.71c51bd7.js",
    "revision": "c77d74a3d2b5b6fcf07ad6ae279a7ea2"
  },
  {
    "url": "assets/js/241.65e10610.js",
    "revision": "ae62d141424ba052b51ee88a197f29ce"
  },
  {
    "url": "assets/js/242.f06b260f.js",
    "revision": "41f67118f7f9b78bfff3333e83b627be"
  },
  {
    "url": "assets/js/243.426302d1.js",
    "revision": "234ce2b26775bc0c7360e5e85a7a4935"
  },
  {
    "url": "assets/js/244.4096ce17.js",
    "revision": "7c126069f8b80e640894664b937473bc"
  },
  {
    "url": "assets/js/245.eef2ac1a.js",
    "revision": "0774eb80533ae1210c11a0b2aa3c419b"
  },
  {
    "url": "assets/js/246.a7017aae.js",
    "revision": "9e4027c434c29ac11b5f651839bc296a"
  },
  {
    "url": "assets/js/247.390c9c9b.js",
    "revision": "68a50359af0b733ceac87c3f4dcc4fe4"
  },
  {
    "url": "assets/js/248.efee21eb.js",
    "revision": "506a348a3bca71e661414ede6e019af8"
  },
  {
    "url": "assets/js/249.2d79e619.js",
    "revision": "7e794c65048dee4b0b8f1260e7637d94"
  },
  {
    "url": "assets/js/25.51f2f6be.js",
    "revision": "3199deea1bb9312071ecc9af2d7f3a02"
  },
  {
    "url": "assets/js/250.dc9a4ea8.js",
    "revision": "a301437057fca9aed4d49bb48d9e19c9"
  },
  {
    "url": "assets/js/251.a46a5e53.js",
    "revision": "089d91b707d94cc4a5bcc70c350ab4c7"
  },
  {
    "url": "assets/js/252.60a97fa2.js",
    "revision": "ea280350e101386d08373418a4a5d14d"
  },
  {
    "url": "assets/js/253.84231fc2.js",
    "revision": "685c2fbfaddef5c9420dd602c52dd7da"
  },
  {
    "url": "assets/js/254.d8224a56.js",
    "revision": "36a8bf340be06a58e460206de7436c4f"
  },
  {
    "url": "assets/js/255.e531e1e9.js",
    "revision": "697dd1ad9498e87229513df6c47129d5"
  },
  {
    "url": "assets/js/256.d29c0e8e.js",
    "revision": "2b031580b5f2eeebac77e48cababf368"
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
    "url": "assets/js/259.a2b52406.js",
    "revision": "57eb7cdee9825b9a0fcaa4a972f5cde7"
  },
  {
    "url": "assets/js/26.c997ecf7.js",
    "revision": "751a3b1ab5a4986a34dd9406bef24fb0"
  },
  {
    "url": "assets/js/260.76c4a10e.js",
    "revision": "2ff15a0ee0abda4dd1e6f36a255c8b70"
  },
  {
    "url": "assets/js/261.d7300ca2.js",
    "revision": "d70236e4e6338192f71653503812c827"
  },
  {
    "url": "assets/js/262.284e2596.js",
    "revision": "ca53d65d2a28a6d105a54f1befaf3e14"
  },
  {
    "url": "assets/js/263.78751394.js",
    "revision": "167ad022d9fc93923ce02ca3dd8f0572"
  },
  {
    "url": "assets/js/264.5c24487c.js",
    "revision": "6a93c3f734bc41d87ce40ec98d042581"
  },
  {
    "url": "assets/js/265.d0b86b3d.js",
    "revision": "61c1b45bd03810fc6854f9b5121c5714"
  },
  {
    "url": "assets/js/266.09392adc.js",
    "revision": "968e5552b1ffef8a69182d81805a24e0"
  },
  {
    "url": "assets/js/267.104348bf.js",
    "revision": "9e9d9ef49376901016d46ee65a99b58c"
  },
  {
    "url": "assets/js/268.bde35308.js",
    "revision": "ae3fd99bca11d31884147a1012ec439b"
  },
  {
    "url": "assets/js/269.1a613634.js",
    "revision": "74ce41cdab6e17be7087e9283c78b923"
  },
  {
    "url": "assets/js/27.7b0fbeb7.js",
    "revision": "ef0db3d47a4780a41deea1f7e48cdb81"
  },
  {
    "url": "assets/js/270.b582d8ce.js",
    "revision": "78006d5b90d2fb40f46f97346499c04c"
  },
  {
    "url": "assets/js/271.40a6413d.js",
    "revision": "3ab5701be58479bcaa986fc1ce0d6553"
  },
  {
    "url": "assets/js/272.39cccc4d.js",
    "revision": "141df9a31c380255bc23fdb6eabad93d"
  },
  {
    "url": "assets/js/273.6ddf91a6.js",
    "revision": "3890de6b0aed896e231374edf1db74f9"
  },
  {
    "url": "assets/js/274.6dbd83d1.js",
    "revision": "5dd8777def2cae1ff53d463eea887d93"
  },
  {
    "url": "assets/js/275.d9edc600.js",
    "revision": "17a1117758edcccd3e3d0b9f77ada00e"
  },
  {
    "url": "assets/js/276.f97368ee.js",
    "revision": "f8984c15ae087f496cd119b1dec0808f"
  },
  {
    "url": "assets/js/277.d236fe3d.js",
    "revision": "678b28734b738cff9c3183175e60ca6b"
  },
  {
    "url": "assets/js/278.dd8542e0.js",
    "revision": "df513801b27378cd3ecd516ea47d0eac"
  },
  {
    "url": "assets/js/279.7f302eaa.js",
    "revision": "366298fdd9bd6801ae153935fd495847"
  },
  {
    "url": "assets/js/28.60d47a63.js",
    "revision": "2ba33443f59971138d3b5a8d03f08ea0"
  },
  {
    "url": "assets/js/280.b2800ebd.js",
    "revision": "90e15a86d9b3e58c7e3d5a3ceecb0a6b"
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
    "url": "assets/js/284.cf608297.js",
    "revision": "fdced47a6fc60ffa4fddd1a515fd2934"
  },
  {
    "url": "assets/js/285.20d9593e.js",
    "revision": "fa4f135952d585cbc0018a429971274b"
  },
  {
    "url": "assets/js/286.3ae9a28f.js",
    "revision": "bae112e2e6a2a7be8a71f1b104eb1cc7"
  },
  {
    "url": "assets/js/287.c07abbfb.js",
    "revision": "5588bf913ee456afdadc466ddfd5374c"
  },
  {
    "url": "assets/js/288.dff9b389.js",
    "revision": "26944091db6b4e50918ee84f33d857a9"
  },
  {
    "url": "assets/js/289.d0ef2200.js",
    "revision": "b7ec53112a81e79b3dda7f475971936b"
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
    "url": "assets/js/291.545afffb.js",
    "revision": "234ceae25965b0ed6f3cf023293db972"
  },
  {
    "url": "assets/js/292.849bf6b8.js",
    "revision": "73f3b73e2ddd2bdc9b5886543823247a"
  },
  {
    "url": "assets/js/293.1c692434.js",
    "revision": "9537ac473971eb2a85a8ad5478ae132b"
  },
  {
    "url": "assets/js/294.9fd4d1d6.js",
    "revision": "04eba2a67acb0186bf11c6c4a0105dfd"
  },
  {
    "url": "assets/js/295.f713db08.js",
    "revision": "a48859fc8128a201aa2cad24aa979b02"
  },
  {
    "url": "assets/js/296.5e6bcc85.js",
    "revision": "bea460b7c0e078ef8d4913ec6154cd63"
  },
  {
    "url": "assets/js/297.70e70b1b.js",
    "revision": "9012a3779ac2a2f65db31242dfe43ea3"
  },
  {
    "url": "assets/js/298.6d8b5c6e.js",
    "revision": "d2293e00480510263b402bbc81e84084"
  },
  {
    "url": "assets/js/299.e33aa39a.js",
    "revision": "acd6be0284d64836a9b300461c6b2773"
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
    "url": "assets/js/300.99232def.js",
    "revision": "3bb4fae7f5474d6a162359d247f4321d"
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
    "url": "assets/js/304.4c8dba3b.js",
    "revision": "0ad33309098aca624955348a7a8e85bb"
  },
  {
    "url": "assets/js/305.fe7b352a.js",
    "revision": "ed5b7abb9567aa01e9a1ad60c39a54ac"
  },
  {
    "url": "assets/js/306.d239485c.js",
    "revision": "0fc4b34687df62505dd958064dea2e9b"
  },
  {
    "url": "assets/js/307.5b82cfab.js",
    "revision": "3b17c2de5676c06ba7cdeca1202d267a"
  },
  {
    "url": "assets/js/308.53ddec07.js",
    "revision": "cd248acb1a32090e915c28ad75c8a2b5"
  },
  {
    "url": "assets/js/309.c4db3837.js",
    "revision": "689a68756d072dd3333df0956c7aee60"
  },
  {
    "url": "assets/js/31.eca442cf.js",
    "revision": "49fdace40fea92006e3ef230e5650780"
  },
  {
    "url": "assets/js/310.cf0925e6.js",
    "revision": "e2d9cb41fef80a98b7119398f8f73365"
  },
  {
    "url": "assets/js/311.6a9c9be6.js",
    "revision": "3d5d89eca2d96930abce73907889169a"
  },
  {
    "url": "assets/js/312.e1fc5de7.js",
    "revision": "ef9068c3105f2a6665a3ca3ee2666a78"
  },
  {
    "url": "assets/js/313.fd4fc781.js",
    "revision": "9ed653f0f737e408e5bdabc7de168806"
  },
  {
    "url": "assets/js/32.afbe64aa.js",
    "revision": "afd60b326a31b7eec33af3ce59dc3d35"
  },
  {
    "url": "assets/js/33.c61ddd2b.js",
    "revision": "e9d8b19d6a6621db0a29fec0ba240598"
  },
  {
    "url": "assets/js/34.f257cae8.js",
    "revision": "9a910098b8a2a5c507fcbc7789ea652c"
  },
  {
    "url": "assets/js/35.48223d27.js",
    "revision": "821153e616f9a0883dabe4ad8ab603a0"
  },
  {
    "url": "assets/js/36.1e64b8e2.js",
    "revision": "e70db89cf6c1dab83af1297ef14a6ecb"
  },
  {
    "url": "assets/js/37.30fce822.js",
    "revision": "364378f0b07445260d2cfb1ca2f02ad6"
  },
  {
    "url": "assets/js/38.11735e08.js",
    "revision": "49e214d99eba3e6dfae049df9916d7fa"
  },
  {
    "url": "assets/js/39.999a60b4.js",
    "revision": "3c301b8542243c9c9fe91b3b5d4cede6"
  },
  {
    "url": "assets/js/4.f802b025.js",
    "revision": "ef80e4fa179f97c4d4c4c88fbd37db8e"
  },
  {
    "url": "assets/js/40.b5c96fc1.js",
    "revision": "e7d002425ea604fd7b053fc6bea4c6d7"
  },
  {
    "url": "assets/js/41.3aa2c294.js",
    "revision": "49044dccd302fbdc20dc390ecf540af3"
  },
  {
    "url": "assets/js/42.c96e702f.js",
    "revision": "d549f965de5c8a106642b41bba14bc4d"
  },
  {
    "url": "assets/js/43.ed0c2926.js",
    "revision": "9aaa6b58c65c2a6d63241d6a4121f56d"
  },
  {
    "url": "assets/js/44.20202088.js",
    "revision": "9a533d1dd8b45d34ffa40a0f9578b5e2"
  },
  {
    "url": "assets/js/45.c1fe1fe4.js",
    "revision": "137278b0e41e2996e5577f22cfa8ef4d"
  },
  {
    "url": "assets/js/46.f4bb4b6b.js",
    "revision": "a8bc1289cb5cf68652db11d8bd7aeb0d"
  },
  {
    "url": "assets/js/47.e689f9e4.js",
    "revision": "f9297c83c8797b7a00dcbe0ab02493e0"
  },
  {
    "url": "assets/js/48.8ab13f7c.js",
    "revision": "a719bab6d23e1b8cb1e0adfca9f409be"
  },
  {
    "url": "assets/js/49.a6fd5e89.js",
    "revision": "8e929db31a41bac13fa76c7a65ff8b8e"
  },
  {
    "url": "assets/js/5.09a4b767.js",
    "revision": "06dab0174add52f88b60b69490b9262f"
  },
  {
    "url": "assets/js/50.3045d7d5.js",
    "revision": "ab672bec611ecb40b1e54263e12f4c8d"
  },
  {
    "url": "assets/js/51.c2146bdd.js",
    "revision": "f4150e1769f207580b0390b83fe4a478"
  },
  {
    "url": "assets/js/52.b9b68f1e.js",
    "revision": "443cdd97a4c57272a946f7af95d7345f"
  },
  {
    "url": "assets/js/53.5a5cafee.js",
    "revision": "0509c50d1d3b12e06989c055e82b55bc"
  },
  {
    "url": "assets/js/54.a5972fdd.js",
    "revision": "6e2b57719f6088cba17cf4eeec236ca9"
  },
  {
    "url": "assets/js/55.37d6b370.js",
    "revision": "79a02c2740cf95f90a64ca770cb2101e"
  },
  {
    "url": "assets/js/56.e5f6f597.js",
    "revision": "6e34d2ea123cb908e4a9b109f0d10f4a"
  },
  {
    "url": "assets/js/57.e107e17b.js",
    "revision": "e713f6bf93f9c4b40f14bf56e6f2df5b"
  },
  {
    "url": "assets/js/58.597aa322.js",
    "revision": "6cb6bf8a2f62710b0f68e5d1c8e59df5"
  },
  {
    "url": "assets/js/59.14aa2260.js",
    "revision": "3abe698bd69b74fe32cebd03d3decc60"
  },
  {
    "url": "assets/js/6.67634804.js",
    "revision": "fdb967af7507b72b572ba401fcfd17d2"
  },
  {
    "url": "assets/js/60.3cc30141.js",
    "revision": "fa7d83ca863aec7ba9a25b67a80230b6"
  },
  {
    "url": "assets/js/61.157b63fd.js",
    "revision": "f57710ef5f94be42603ce0379bb0552d"
  },
  {
    "url": "assets/js/62.c98d29d7.js",
    "revision": "ace3e881f4915ec5e3e3c51f8b6c1194"
  },
  {
    "url": "assets/js/63.bdd2d94a.js",
    "revision": "ee5194ddf6e6e81dfc4e991ed268ef17"
  },
  {
    "url": "assets/js/64.99d70aae.js",
    "revision": "4a43e7f24d34c0c8c2db409696bc01c8"
  },
  {
    "url": "assets/js/65.e7e41ef4.js",
    "revision": "65996ce52e0193a914c41f1fb0d90c39"
  },
  {
    "url": "assets/js/66.2a6895d0.js",
    "revision": "f4c62c4d77158a4f71cf6bb279db79fb"
  },
  {
    "url": "assets/js/67.1a326c24.js",
    "revision": "38c5c58351e8625e0f73591b98b33513"
  },
  {
    "url": "assets/js/68.7b83a587.js",
    "revision": "3888ba8766e2709f4dd719b1dc4a4121"
  },
  {
    "url": "assets/js/69.4f3842ee.js",
    "revision": "135208199fa35243e04d82204543a754"
  },
  {
    "url": "assets/js/7.418215e9.js",
    "revision": "a23d3caf4761531a9bbbf7f6336b425a"
  },
  {
    "url": "assets/js/70.a4586575.js",
    "revision": "f9b840981a8222ba944505d6335fe1df"
  },
  {
    "url": "assets/js/71.1f044864.js",
    "revision": "747667d0a1a699fdece21998c5f0dd72"
  },
  {
    "url": "assets/js/72.c2afe5af.js",
    "revision": "801d1e983fb640233e05d4d43e2180cd"
  },
  {
    "url": "assets/js/73.aef9c195.js",
    "revision": "3528acbb006a1b99e0b560e5e2df9bf8"
  },
  {
    "url": "assets/js/74.33f00aeb.js",
    "revision": "5c7974ba01981afbdb390f88afb2db47"
  },
  {
    "url": "assets/js/75.d31dc6bb.js",
    "revision": "00fbf89198b86f3282460dabb87e7ae7"
  },
  {
    "url": "assets/js/76.555a30ad.js",
    "revision": "c20529a577726998ea80b9483dd2cf9d"
  },
  {
    "url": "assets/js/77.af090faa.js",
    "revision": "352c75d9319a76a22d8796a2af8ddd77"
  },
  {
    "url": "assets/js/78.465182b9.js",
    "revision": "90b2a4a1ba404038f0fd209165b0b6de"
  },
  {
    "url": "assets/js/79.76bf3888.js",
    "revision": "fbadae81d8c543d3e877969c4eb167fa"
  },
  {
    "url": "assets/js/8.e3ee8025.js",
    "revision": "c22a6f1f732dbfbf063c2f28fbd84a7b"
  },
  {
    "url": "assets/js/80.143b313b.js",
    "revision": "436291c1a04288f2461cfca61de5773b"
  },
  {
    "url": "assets/js/81.f7ddd123.js",
    "revision": "bb1ab4008fa9fe59a19356b1979d5d01"
  },
  {
    "url": "assets/js/82.0d28440e.js",
    "revision": "3f9e238dea43d051e667618d251c8839"
  },
  {
    "url": "assets/js/83.5edd8ef6.js",
    "revision": "1a1dd17f804afdded450e2f0c52fcee2"
  },
  {
    "url": "assets/js/84.b4c7c3d1.js",
    "revision": "198ed6ec3c1bb9433a049cecb9a5e9eb"
  },
  {
    "url": "assets/js/85.ffe69b25.js",
    "revision": "830105fe300b426f699bb1865c418cd2"
  },
  {
    "url": "assets/js/86.5afa6cbf.js",
    "revision": "4465f0b1f62fee4e22a87cc7a4a0a60b"
  },
  {
    "url": "assets/js/87.2b89cd2a.js",
    "revision": "668638837183372aa6e6b0828aaaa542"
  },
  {
    "url": "assets/js/88.bf86ac4f.js",
    "revision": "83123e559df92897e2a34dddd03e52d0"
  },
  {
    "url": "assets/js/89.55079acf.js",
    "revision": "f06fbf319cd9dab79b0798641522927c"
  },
  {
    "url": "assets/js/9.391b83f1.js",
    "revision": "125e324a2a7582a6914b0beb2e714fb4"
  },
  {
    "url": "assets/js/90.3b3ae655.js",
    "revision": "7f1d5e3a47f47654d2de206b0ad5bdd7"
  },
  {
    "url": "assets/js/91.b689292b.js",
    "revision": "bb440452f3984ddcae1b78453774c0e7"
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
    "url": "assets/js/94.985957c1.js",
    "revision": "019c81a26bef6e537491812b8933318b"
  },
  {
    "url": "assets/js/95.6e3c2d3b.js",
    "revision": "c3d8df05728a770bc6c296d69e04e665"
  },
  {
    "url": "assets/js/96.e4329f0f.js",
    "revision": "b543a4e2ea776f755e455ce6afe14bfb"
  },
  {
    "url": "assets/js/97.4b5fceaa.js",
    "revision": "dce4841ed087f29e08e4de4ff68ede42"
  },
  {
    "url": "assets/js/98.c6c83dcc.js",
    "revision": "50e9b715cf60940aef80755c1d5a6ddb"
  },
  {
    "url": "assets/js/99.5d11412e.js",
    "revision": "03900b0377509db1ea54095b9d40c594"
  },
  {
    "url": "assets/js/app.16fae744.js",
    "revision": "b85d2614866bb8bed1bd5815b1554595"
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
    "revision": "5675ad56dbcff2acfd5fd0b98cd66165"
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
    "revision": "3c8a0818694a683c9b54e94b0e55419c"
  },
  {
    "url": "mx/cora/courses/intermediate/index.html",
    "revision": "f44af4dfd1395ebfbcb055252ec5f271"
  },
  {
    "url": "mx/cora/dictionary/glossary.html",
    "revision": "3204cf6499e5944c1560f033abc24317"
  },
  {
    "url": "mx/cora/dictionary/index.html",
    "revision": "4a6cc204d725007036a9eeab90e619a1"
  },
  {
    "url": "mx/cora/grammar/adjective/index.html",
    "revision": "b7875e85156ba541fa544808a3c8a444"
  },
  {
    "url": "mx/cora/grammar/adverb/index.html",
    "revision": "e63ad336505f352ef8aa1ba6178fe68d"
  },
  {
    "url": "mx/cora/grammar/alphabet/index.html",
    "revision": "3b7031369e8e89daeb3b40ee18903ce2"
  },
  {
    "url": "mx/cora/grammar/article/index.html",
    "revision": "d19012e2b5944af451d10b0aa5235a24"
  },
  {
    "url": "mx/cora/grammar/guide/index.html",
    "revision": "8c13004450da4799f3062e8641e84e6a"
  },
  {
    "url": "mx/cora/grammar/verbs/index.html",
    "revision": "e29f7909dc2f9af5c08fb6ac7fde7f79"
  },
  {
    "url": "mx/cora/vocabulary/animals/index.html",
    "revision": "5447d9f9aec797ea435ce08707157397"
  },
  {
    "url": "mx/cora/vocabulary/greetings/index.html",
    "revision": "87805bc8cf5423f5154de999008711dd"
  },
  {
    "url": "mx/cora/vocabulary/more_used/index.html",
    "revision": "a4deda6162f4657ca92c7dbcd36babc8"
  },
  {
    "url": "mx/cora/vocabulary/people/index.html",
    "revision": "177e5abd0c00b8ce175f6dec109881ee"
  },
  {
    "url": "mx/cora/vocabulary/phrases/index.html",
    "revision": "fb68cf38076f9fadb2e77e95136a91af"
  },
  {
    "url": "mx/guarijio/courses/basic/index.html",
    "revision": "cbb8323a763b2f4083cf964694f49bf1"
  },
  {
    "url": "mx/guarijio/courses/intermediate/index.html",
    "revision": "2252eeaeb3f44a0c3dc5d97ad5073137"
  },
  {
    "url": "mx/guarijio/dictionary/glossary.html",
    "revision": "a948685380ef6c6cae04eb3eb4ff466d"
  },
  {
    "url": "mx/guarijio/dictionary/index.html",
    "revision": "ad7957bf290ba0a374148934f93cd74a"
  },
  {
    "url": "mx/guarijio/grammar/adjective/index.html",
    "revision": "089abdbcb50e15a9ac0f840423511b90"
  },
  {
    "url": "mx/guarijio/grammar/adverb/index.html",
    "revision": "0d8bdf3499926ebc4a947c6f1652f1fe"
  },
  {
    "url": "mx/guarijio/grammar/alphabet/index.html",
    "revision": "261d58dad36dab5e82ace79c8a667301"
  },
  {
    "url": "mx/guarijio/grammar/article/index.html",
    "revision": "06bae975981c4fe413e8c1b60afb6b14"
  },
  {
    "url": "mx/guarijio/grammar/guide/index.html",
    "revision": "f20772ad9e66cf3cfce1697c5442c909"
  },
  {
    "url": "mx/guarijio/grammar/verbs/index.html",
    "revision": "88b67c2c990f33de3297dcef9f67b6c7"
  },
  {
    "url": "mx/guarijio/index.html",
    "revision": "4540db1086f11d4841732464162a6505"
  },
  {
    "url": "mx/guarijio/vocabulary/animals/index.html",
    "revision": "34139dd293192ce84db8d72bab82fc5e"
  },
  {
    "url": "mx/guarijio/vocabulary/greetings/index.html",
    "revision": "21b6f13f465f80356cbcef9442ee632c"
  },
  {
    "url": "mx/guarijio/vocabulary/more_used/index.html",
    "revision": "8c548462da2052680c6541c04921f244"
  },
  {
    "url": "mx/guarijio/vocabulary/people/index.html",
    "revision": "017465ab60651ed337ae732bdbab8c80"
  },
  {
    "url": "mx/guarijio/vocabulary/phrases/index.html",
    "revision": "66d235be79993e13eb440f226f14d9fb"
  },
  {
    "url": "mx/huichol/courses/basic/index.html",
    "revision": "805e905bbe0e8ca29c49b6019ed6d5d2"
  },
  {
    "url": "mx/huichol/courses/intermediate/index.html",
    "revision": "3e1968e0d38eed94d9783d72e697d686"
  },
  {
    "url": "mx/huichol/dictionary/glossary.html",
    "revision": "86b60c07b5e7e64b61e54c7583672e20"
  },
  {
    "url": "mx/huichol/dictionary/index.html",
    "revision": "c6e329def5611eef3f621bcc1c4007d6"
  },
  {
    "url": "mx/huichol/grammar/adjective/index.html",
    "revision": "8008e308e153bbc2916a71858b9e25a2"
  },
  {
    "url": "mx/huichol/grammar/adverb/index.html",
    "revision": "31f08f42e397098a0b536fb10966ebc0"
  },
  {
    "url": "mx/huichol/grammar/alphabet/index.html",
    "revision": "630fc7dea523d619f8de276d441e819f"
  },
  {
    "url": "mx/huichol/grammar/article/index.html",
    "revision": "388a2be83b7bb48b2005af3f9ed4a100"
  },
  {
    "url": "mx/huichol/grammar/guide/index.html",
    "revision": "45e7f1a343f8c009d35be013de5ca290"
  },
  {
    "url": "mx/huichol/grammar/verbs/index.html",
    "revision": "d5db47ca66ba47d88c2765ef7c455cde"
  },
  {
    "url": "mx/huichol/index.html",
    "revision": "e247e789f355639fc8b1ed9b9866f5d9"
  },
  {
    "url": "mx/huichol/vocabulary/animals/index.html",
    "revision": "362ccd394d8f85e092026502759f8f0c"
  },
  {
    "url": "mx/huichol/vocabulary/greetings/index.html",
    "revision": "66af82d286a2e6da73083db67e7a7f55"
  },
  {
    "url": "mx/huichol/vocabulary/more_used/index.html",
    "revision": "73afb1d4d980c59a1a53d7a2b5d85490"
  },
  {
    "url": "mx/huichol/vocabulary/people/index.html",
    "revision": "80075dfbee650efbf6d9a5a11dd78f46"
  },
  {
    "url": "mx/huichol/vocabulary/phrases/index.html",
    "revision": "170c036db335df714d518c0511e07da6"
  },
  {
    "url": "mx/mayo/courses/basic/index.html",
    "revision": "a9f1b4c7577025093b5549aeeeb71e60"
  },
  {
    "url": "mx/mayo/courses/intermediate/index.html",
    "revision": "d8bcc7e5d85cfb9d0f748f50444fea1f"
  },
  {
    "url": "mx/mayo/dictionary/glossary.html",
    "revision": "096b255aa0304aed15021830330a7d09"
  },
  {
    "url": "mx/mayo/dictionary/index.html",
    "revision": "011a166eed469eb61076061b9e1f7725"
  },
  {
    "url": "mx/mayo/grammar/adjective/index.html",
    "revision": "49184b467d8086c743ad17f83ee3e9a7"
  },
  {
    "url": "mx/mayo/grammar/adverb/index.html",
    "revision": "9a58b5426084971acfddd12b731a81a6"
  },
  {
    "url": "mx/mayo/grammar/alphabet/index.html",
    "revision": "a2ef821b2c3aa544f16323d23efada50"
  },
  {
    "url": "mx/mayo/grammar/article/index.html",
    "revision": "6ebc53ce88c8662757365624c15f8c65"
  },
  {
    "url": "mx/mayo/grammar/guide/index.html",
    "revision": "c9abda1c77a30f3821a7e87cdd0f62b2"
  },
  {
    "url": "mx/mayo/grammar/verbs/index.html",
    "revision": "69e6fc5241c17c5910716f90b98673fb"
  },
  {
    "url": "mx/mayo/index.html",
    "revision": "b8281a91e36f77f12bed86b0d8b9ce57"
  },
  {
    "url": "mx/mayo/vocabulary/animals/index.html",
    "revision": "92571170a6dab866984d0b195028c19f"
  },
  {
    "url": "mx/mayo/vocabulary/greetings/index.html",
    "revision": "db2d22c67838ce71c5a18997f5457bab"
  },
  {
    "url": "mx/mayo/vocabulary/more_used/index.html",
    "revision": "57a13c9685757a41859f29823b015c65"
  },
  {
    "url": "mx/mayo/vocabulary/people/index.html",
    "revision": "6e0342fd38f360cdbffe96e36da9d3f2"
  },
  {
    "url": "mx/mayo/vocabulary/phrases/index.html",
    "revision": "b15f22c672662d506ff41215a01299a7"
  },
  {
    "url": "mx/mazateco/courses/basic/index.html",
    "revision": "4fe1f053e2e424ae61fc0afeba397477"
  },
  {
    "url": "mx/mazateco/courses/intermediate/index.html",
    "revision": "51c021607d663e48f0eeb45dfddb637e"
  },
  {
    "url": "mx/mazateco/dictionary/glossary.html",
    "revision": "c078bb16374434dfd8f648d3efe964f1"
  },
  {
    "url": "mx/mazateco/dictionary/index.html",
    "revision": "22ce0064f46957d8f5f09cba7c777592"
  },
  {
    "url": "mx/mazateco/grammar/adjective/index.html",
    "revision": "880a6c7ef44953e95feb943becf07a1c"
  },
  {
    "url": "mx/mazateco/grammar/adverb/index.html",
    "revision": "3a7cd76f05300ecc98a490fad9888292"
  },
  {
    "url": "mx/mazateco/grammar/alphabet/index.html",
    "revision": "d9af159bceeb1236bcca2a881f0fbaa5"
  },
  {
    "url": "mx/mazateco/grammar/article/index.html",
    "revision": "755631edd733ff7a77ef1a96ddf76bf1"
  },
  {
    "url": "mx/mazateco/grammar/guide/index.html",
    "revision": "072c9bc0db2cc060fe19fb44cff2d369"
  },
  {
    "url": "mx/mazateco/grammar/verbs/index.html",
    "revision": "1d51f39bd3e0b99dc1117a15bf6985a1"
  },
  {
    "url": "mx/mazateco/index.html",
    "revision": "60d70019af17e533e6242657d36c16e3"
  },
  {
    "url": "mx/mazateco/vocabulary/animals/index.html",
    "revision": "0b7cafef8101a0c60438908c20089360"
  },
  {
    "url": "mx/mazateco/vocabulary/greetings/index.html",
    "revision": "1cc93fbd82e57e6c8e352ee9e1f4c48d"
  },
  {
    "url": "mx/mazateco/vocabulary/more_used/index.html",
    "revision": "af8e57c0ab99366d9b725d9df7a61a86"
  },
  {
    "url": "mx/mazateco/vocabulary/people/index.html",
    "revision": "0b190429e7c52286cc68481c9793dc23"
  },
  {
    "url": "mx/mazateco/vocabulary/phrases/index.html",
    "revision": "e8c5a847aed261cfdc8ab63782174171"
  },
  {
    "url": "mx/mixteco/courses/basic/index.html",
    "revision": "1614eb313583621608e2df82243f497a"
  },
  {
    "url": "mx/mixteco/courses/intermediate/index.html",
    "revision": "42e8099715a8a8af37ce5a01c3715693"
  },
  {
    "url": "mx/mixteco/dictionary/glossary.html",
    "revision": "5d8dce465a2cf60e1190513df7854ce8"
  },
  {
    "url": "mx/mixteco/dictionary/index.html",
    "revision": "95523e80f59ddf0ddc0605b0caa1606b"
  },
  {
    "url": "mx/mixteco/grammar/adjective/index.html",
    "revision": "44c64121dc4d363b9df16361f1259270"
  },
  {
    "url": "mx/mixteco/grammar/adverb/index.html",
    "revision": "003ed2673078473c5ed5167c786ed663"
  },
  {
    "url": "mx/mixteco/grammar/alphabet/index.html",
    "revision": "0fca8fbc692b6e90f19ab2217e50954a"
  },
  {
    "url": "mx/mixteco/grammar/article/index.html",
    "revision": "b3ee0e70c8695de2caed1541d1ab3052"
  },
  {
    "url": "mx/mixteco/grammar/guide/index.html",
    "revision": "f9896fc406bc413236df802aa8e9c838"
  },
  {
    "url": "mx/mixteco/grammar/verbs/index.html",
    "revision": "ec931075bc82398febec6bb0a9f4d4b0"
  },
  {
    "url": "mx/mixteco/index.html",
    "revision": "6ca7d29efce4d37ba070a4cfd93f3893"
  },
  {
    "url": "mx/mixteco/vocabulary/animals/index.html",
    "revision": "3551031a68cb1ba28edc979a5847cad1"
  },
  {
    "url": "mx/mixteco/vocabulary/greetings/index.html",
    "revision": "39bc9fb0ace574789cc6f598ab8bb393"
  },
  {
    "url": "mx/mixteco/vocabulary/more_used/index.html",
    "revision": "52a4a3f0111ff407d155f6322a0e0d92"
  },
  {
    "url": "mx/mixteco/vocabulary/people/index.html",
    "revision": "d10f19c1f0289b0e815b000a23dd1b59"
  },
  {
    "url": "mx/mixteco/vocabulary/phrases/index.html",
    "revision": "717d5b750eac120276c2ab863b2b5a23"
  },
  {
    "url": "mx/nahuatl/courses/basic/index.html",
    "revision": "4e3f54e383819f64b545507516404b4f"
  },
  {
    "url": "mx/nahuatl/courses/intermediate/index.html",
    "revision": "9fb49d462da38661f2c36265eaf8876b"
  },
  {
    "url": "mx/nahuatl/dictionary/glossary.html",
    "revision": "66a9e78bb7ff72a7d8393545d27098c0"
  },
  {
    "url": "mx/nahuatl/dictionary/index.html",
    "revision": "17c808eb190cf06cc80469865bb98bb6"
  },
  {
    "url": "mx/nahuatl/grammar/adjective/index.html",
    "revision": "d6c107b6fac0917680760ac9d354aae8"
  },
  {
    "url": "mx/nahuatl/grammar/adverb/index.html",
    "revision": "7a37270f370eac877c9a4635e3988d4d"
  },
  {
    "url": "mx/nahuatl/grammar/alphabet/index.html",
    "revision": "1ac1d7ab8f1c025bf3d84ee59cb5499e"
  },
  {
    "url": "mx/nahuatl/grammar/article/index.html",
    "revision": "e5fe11753fd26dbe29e003dfa629ab6b"
  },
  {
    "url": "mx/nahuatl/grammar/guide/index.html",
    "revision": "1d903cad918880683cc69416253aede0"
  },
  {
    "url": "mx/nahuatl/grammar/verbs/index.html",
    "revision": "34a836682935fe1896ca1af8ce8e4db5"
  },
  {
    "url": "mx/nahuatl/index.html",
    "revision": "64888ba1997b0a2bfcad7362e1831eb3"
  },
  {
    "url": "mx/nahuatl/vocabulary/animals/index.html",
    "revision": "fbf813306694a628c9b6ef20a1f09391"
  },
  {
    "url": "mx/nahuatl/vocabulary/greetings/index.html",
    "revision": "cb22b58f02bd9b7c3b5f4689a57ae99b"
  },
  {
    "url": "mx/nahuatl/vocabulary/more_used/index.html",
    "revision": "3bcae9c32cda2a088c4ba36c818e11a6"
  },
  {
    "url": "mx/nahuatl/vocabulary/people/index.html",
    "revision": "eec388df212a1939dc339e41865c0339"
  },
  {
    "url": "mx/nahuatl/vocabulary/phrases/index.html",
    "revision": "70cef940f373c7b9a4b673b8d1134b12"
  },
  {
    "url": "mx/otomi/courses/basic/index.html",
    "revision": "a1cad23230325439f8ae1d11a4c5e15b"
  },
  {
    "url": "mx/otomi/courses/intermediate/index.html",
    "revision": "a0320a7791dbef5b2976fb8f08a3f274"
  },
  {
    "url": "mx/otomi/dictionary/glossary.html",
    "revision": "6e3bdef0b24d4f612862bcd5d85d5329"
  },
  {
    "url": "mx/otomi/dictionary/index.html",
    "revision": "42b47e80273d876d28740b62130b1cbe"
  },
  {
    "url": "mx/otomi/grammar/adjective/index.html",
    "revision": "58c996ae3616c3b3e6a727242dab299f"
  },
  {
    "url": "mx/otomi/grammar/adverb/index.html",
    "revision": "4c77d903885692c466b8cb6f2b78a6a5"
  },
  {
    "url": "mx/otomi/grammar/alphabet/index.html",
    "revision": "0169e75e38e1daf423fee34a90b4d3a4"
  },
  {
    "url": "mx/otomi/grammar/article/index.html",
    "revision": "9365c6a9540b1d1421226e1a58374b0e"
  },
  {
    "url": "mx/otomi/grammar/guide/index.html",
    "revision": "f0bc75311d7ac04ebbb770544b7b3c84"
  },
  {
    "url": "mx/otomi/grammar/verbs/index.html",
    "revision": "dba7d779109357f510681c22ac59c3d7"
  },
  {
    "url": "mx/otomi/index.html",
    "revision": "b7ef7854c39293c6b9c472ca53ca691c"
  },
  {
    "url": "mx/otomi/vocabulary/animals/index.html",
    "revision": "167ce8b2495faaca5161ccc71034002d"
  },
  {
    "url": "mx/otomi/vocabulary/greetings/index.html",
    "revision": "a9ee17f920b694dcc757e38ff5583458"
  },
  {
    "url": "mx/otomi/vocabulary/more_used/index.html",
    "revision": "44b037fe08fa373066c8da2807dafdb5"
  },
  {
    "url": "mx/otomi/vocabulary/people/index.html",
    "revision": "be1e48b228c26922642485a1c7c96d0f"
  },
  {
    "url": "mx/otomi/vocabulary/phrases/index.html",
    "revision": "072b76724af9cd646e339e0191fd023d"
  },
  {
    "url": "mx/pame/courses/basic/index.html",
    "revision": "38a87505b1cf0a8609203f3bf50b00d4"
  },
  {
    "url": "mx/pame/courses/intermediate/index.html",
    "revision": "82176238f3ef6ebf9a9047fbc98dc818"
  },
  {
    "url": "mx/pame/dictionary/glossary.html",
    "revision": "3027a4d1704f006cd7b1ea3e32209eca"
  },
  {
    "url": "mx/pame/dictionary/index.html",
    "revision": "ae278e5919c43a48e5cf4f9b118edaa0"
  },
  {
    "url": "mx/pame/grammar/adjective/index.html",
    "revision": "28f39cd060d803603a503a3cd2ca3ebf"
  },
  {
    "url": "mx/pame/grammar/adverb/index.html",
    "revision": "38e3f07d3cfbf5b9c54dcdf0c1b61a85"
  },
  {
    "url": "mx/pame/grammar/alphabet/index.html",
    "revision": "f8f7d667a12b78a62653ba261aef24fa"
  },
  {
    "url": "mx/pame/grammar/article/index.html",
    "revision": "dd6594a37b0f7d65e4f61660d5b82c11"
  },
  {
    "url": "mx/pame/grammar/guide/index.html",
    "revision": "0955d870e731f5799da353beb7d654e3"
  },
  {
    "url": "mx/pame/grammar/verbs/index.html",
    "revision": "b7e46fdd2c2b3424077cb2b434531730"
  },
  {
    "url": "mx/pame/index.html",
    "revision": "6d05cc05bbc7b888667f8b8f54d5519d"
  },
  {
    "url": "mx/pame/vocabulary/animals/index.html",
    "revision": "0ef226e62094a4082b1c5e02bffe4383"
  },
  {
    "url": "mx/pame/vocabulary/greetings/index.html",
    "revision": "31d2ff85a6c293ea81783383c76523b5"
  },
  {
    "url": "mx/pame/vocabulary/more_used/index.html",
    "revision": "c5b1751c047ba954ed9ab01e46a7ce01"
  },
  {
    "url": "mx/pame/vocabulary/people/index.html",
    "revision": "6d7536f1e48bde6a35167e894aaa5c90"
  },
  {
    "url": "mx/pame/vocabulary/phrases/index.html",
    "revision": "8a8353fef39e3d53ee43bbbc876e91af"
  },
  {
    "url": "mx/papago/courses/basic/index.html",
    "revision": "be6a7040d54b1988ed2539e96c3f675e"
  },
  {
    "url": "mx/papago/courses/intermediate/index.html",
    "revision": "03842a95291382be98b57c45eaff4af7"
  },
  {
    "url": "mx/papago/dictionary/glossary.html",
    "revision": "2d9de1979a6491fe50cbe50a1f8108d8"
  },
  {
    "url": "mx/papago/dictionary/index.html",
    "revision": "f87a9597091b8fadc852780e38f93156"
  },
  {
    "url": "mx/papago/grammar/adjective/index.html",
    "revision": "c9ab901e52bda3e92d048efe4110e6a9"
  },
  {
    "url": "mx/papago/grammar/adverb/index.html",
    "revision": "4dcdb21a9ecd489f8638dd6a582238d7"
  },
  {
    "url": "mx/papago/grammar/alphabet/index.html",
    "revision": "584b8756a398153d7b79c863f5ace099"
  },
  {
    "url": "mx/papago/grammar/article/index.html",
    "revision": "0fb09331d9d945fe14f6e2ddcde9ad93"
  },
  {
    "url": "mx/papago/grammar/guide/index.html",
    "revision": "16e13558e3f90bcb8fac5a1ce1f85f2a"
  },
  {
    "url": "mx/papago/grammar/verbs/index.html",
    "revision": "6ea7de59fbb1999d5d1b0708a6820aa2"
  },
  {
    "url": "mx/papago/index.html",
    "revision": "5635367f8530dff1457b6f652a26a20e"
  },
  {
    "url": "mx/papago/vocabulary/animals/index.html",
    "revision": "c58f1743079b34de724bf4d210f19978"
  },
  {
    "url": "mx/papago/vocabulary/greetings/index.html",
    "revision": "231b0f325267e36d27bcd29216681793"
  },
  {
    "url": "mx/papago/vocabulary/more_used/index.html",
    "revision": "e298a98abffd17f98a169afdde6b7d1e"
  },
  {
    "url": "mx/papago/vocabulary/people/index.html",
    "revision": "1e06d4af8861df6a155d84e27ff4ea26"
  },
  {
    "url": "mx/papago/vocabulary/phrases/index.html",
    "revision": "e3717b01f583125ef6729028114555fc"
  },
  {
    "url": "mx/pima/courses/basic/index.html",
    "revision": "c95653d64a2447c7fe15e172885f8ddc"
  },
  {
    "url": "mx/pima/courses/intermediate/index.html",
    "revision": "64a398af6a20a9420375685ae5af4026"
  },
  {
    "url": "mx/pima/dictionary/glossary.html",
    "revision": "45965e6c3ff7e2f7410bc7e029520c7d"
  },
  {
    "url": "mx/pima/dictionary/index.html",
    "revision": "ed357cf19c788bb0fe4d3c4f12121054"
  },
  {
    "url": "mx/pima/grammar/adjective/index.html",
    "revision": "2bd061f0ab22c8ea6a73827d9fd17429"
  },
  {
    "url": "mx/pima/grammar/adverb/index.html",
    "revision": "047df4206070c3be26fca3c4fca713b5"
  },
  {
    "url": "mx/pima/grammar/alphabet/index.html",
    "revision": "37411efc7c35232280d1b37bdafe3365"
  },
  {
    "url": "mx/pima/grammar/article/index.html",
    "revision": "66ebc1106855f442cae5c4d35e96b38c"
  },
  {
    "url": "mx/pima/grammar/guide/index.html",
    "revision": "c5b578acc0c17263a59969bf6c6f0b0d"
  },
  {
    "url": "mx/pima/grammar/verbs/index.html",
    "revision": "5e99cf7bc3f0d31fa7ab57d8cdaf0e52"
  },
  {
    "url": "mx/pima/index.html",
    "revision": "7cb038d8fc05893265d0b0c7235446fd"
  },
  {
    "url": "mx/pima/vocabulary/animals/index.html",
    "revision": "e243a273781a2495ee3ee58c0fa5033e"
  },
  {
    "url": "mx/pima/vocabulary/greetings/index.html",
    "revision": "af9804bd4249954150ee35f9077c1293"
  },
  {
    "url": "mx/pima/vocabulary/more_used/index.html",
    "revision": "9d7512020437f67ebffedc576ea41eb2"
  },
  {
    "url": "mx/pima/vocabulary/people/index.html",
    "revision": "2cd6d16f76d1d423aeb291a9ef72276e"
  },
  {
    "url": "mx/pima/vocabulary/phrases/index.html",
    "revision": "67c58d57577bc7c624adaa811e076eb5"
  },
  {
    "url": "mx/popoloca/courses/basic/index.html",
    "revision": "6116bb55f8144908a94ea42bb3c790e4"
  },
  {
    "url": "mx/popoloca/courses/intermediate/index.html",
    "revision": "7454b0781c5567ab34986f1186857fd9"
  },
  {
    "url": "mx/popoloca/dictionary/glossary.html",
    "revision": "2d6d4d733e8b533e769b9f2a7fec5da5"
  },
  {
    "url": "mx/popoloca/dictionary/index.html",
    "revision": "7d693a1375c04747ba9b13f6bb66d5ef"
  },
  {
    "url": "mx/popoloca/grammar/adjective/index.html",
    "revision": "4d4675847ca0494be8ae0e6a24450dae"
  },
  {
    "url": "mx/popoloca/grammar/adverb/index.html",
    "revision": "893311cb3abc44c0b41540d6f4837453"
  },
  {
    "url": "mx/popoloca/grammar/alphabet/index.html",
    "revision": "b6d1239e56bc6dddc35210e17ffad708"
  },
  {
    "url": "mx/popoloca/grammar/article/index.html",
    "revision": "dbbcfe20732fe0785d4229eb935569f7"
  },
  {
    "url": "mx/popoloca/grammar/guide/index.html",
    "revision": "36fff5bea3313852e84d8418eaee5013"
  },
  {
    "url": "mx/popoloca/grammar/verbs/index.html",
    "revision": "adf637050fde2d79092aedabc8d11e06"
  },
  {
    "url": "mx/popoloca/index.html",
    "revision": "0ab3431526e7518565c9db5a639ce1af"
  },
  {
    "url": "mx/popoloca/vocabulary/animals/index.html",
    "revision": "792ac1d8de68b63ce10433347402f9a0"
  },
  {
    "url": "mx/popoloca/vocabulary/greetings/index.html",
    "revision": "2d3f2c1bd9c10dc3be6fb388c57facc4"
  },
  {
    "url": "mx/popoloca/vocabulary/more_used/index.html",
    "revision": "3455de5cc9e38d35e770ea068985ecf6"
  },
  {
    "url": "mx/popoloca/vocabulary/people/index.html",
    "revision": "90cd5f3775630be8304f42a015bb0544"
  },
  {
    "url": "mx/popoloca/vocabulary/phrases/index.html",
    "revision": "1a01b4826018e1abe98fbd4676453a7e"
  },
  {
    "url": "mx/raramuri/courses/basic/index.html",
    "revision": "23c038588e0ae906a17a6fde48f528bc"
  },
  {
    "url": "mx/raramuri/courses/intermediate/index.html",
    "revision": "0b5533156e94fdca866dee8a3f4cecd5"
  },
  {
    "url": "mx/raramuri/dictionary/glossary.html",
    "revision": "43c661f11582fed5fa4b354d04491a31"
  },
  {
    "url": "mx/raramuri/dictionary/index.html",
    "revision": "7e128ee0bdecb081a8a9cfdfec74b6ec"
  },
  {
    "url": "mx/raramuri/grammar/adjective/index.html",
    "revision": "26b60d33196a8b5a9291d5904feb743d"
  },
  {
    "url": "mx/raramuri/grammar/adverb/index.html",
    "revision": "4a4d4409df8c3e758e942625e1cb74a9"
  },
  {
    "url": "mx/raramuri/grammar/alphabet/index.html",
    "revision": "798c1ca70db657b3abe9c35e358a47c7"
  },
  {
    "url": "mx/raramuri/grammar/article/index.html",
    "revision": "4eda2d3ea2e02b8387cc4fc420a0719a"
  },
  {
    "url": "mx/raramuri/grammar/guide/index.html",
    "revision": "fa9336bf8c9684b7edc07b85111fe56d"
  },
  {
    "url": "mx/raramuri/grammar/verbs/index.html",
    "revision": "4a4526d23b4cec9fdf0809e700583bfd"
  },
  {
    "url": "mx/raramuri/index.html",
    "revision": "788bdab0c9b6afe1cdbe79c0417634bc"
  },
  {
    "url": "mx/raramuri/vocabulary/animals/index.html",
    "revision": "bc4522c168ff626cca1998a684179515"
  },
  {
    "url": "mx/raramuri/vocabulary/greetings/index.html",
    "revision": "3b1c3d7fa73114cf0539373ebf9e1746"
  },
  {
    "url": "mx/raramuri/vocabulary/more_used/index.html",
    "revision": "5f9eb1b6fdae420749320f71f349510c"
  },
  {
    "url": "mx/raramuri/vocabulary/people/index.html",
    "revision": "62744e59130afd4ee44b970cfc4b8570"
  },
  {
    "url": "mx/raramuri/vocabulary/phrases/index.html",
    "revision": "69de736edc6e9dbdf61a2559b9bcfcf1"
  },
  {
    "url": "mx/seri/courses/basic/index.html",
    "revision": "d2eb7d2caa26574e21012c4f72acb762"
  },
  {
    "url": "mx/seri/courses/intermediate/index.html",
    "revision": "3333eab096caaf7af21d867b2413e0db"
  },
  {
    "url": "mx/seri/dictionary/glossary.html",
    "revision": "bd92f55776007054762ab3208c2a89aa"
  },
  {
    "url": "mx/seri/dictionary/index.html",
    "revision": "24c9b28f80d8fe820d1d66b320c311a4"
  },
  {
    "url": "mx/seri/grammar/adjective/index.html",
    "revision": "717e9dd8d361c8b02de1cb5c8ceab3a3"
  },
  {
    "url": "mx/seri/grammar/adverb/index.html",
    "revision": "519f3b673f87c157c0d6da2e8a84d33d"
  },
  {
    "url": "mx/seri/grammar/alphabet/index.html",
    "revision": "81821dff5e4692593d7e152a47de1265"
  },
  {
    "url": "mx/seri/grammar/article/index.html",
    "revision": "cc1ca24f2e1030a59f5d858a6f628536"
  },
  {
    "url": "mx/seri/grammar/guide/index.html",
    "revision": "e6dc51420c4047ec293a49d7bf40f54c"
  },
  {
    "url": "mx/seri/grammar/verbs/index.html",
    "revision": "da92e9141c4473e64cbaaeaa58161900"
  },
  {
    "url": "mx/seri/index.html",
    "revision": "8c7c0d60149c43f540f3fd5fb3106ff4"
  },
  {
    "url": "mx/seri/vocabulary/animals/index.html",
    "revision": "1e70cc1f0eddffce4482e5df581a36f5"
  },
  {
    "url": "mx/seri/vocabulary/greetings/index.html",
    "revision": "a7f51b586a28d954fc8fa9b61c7ca6d8"
  },
  {
    "url": "mx/seri/vocabulary/more_used/index.html",
    "revision": "c7cc0a607669cab32625dfa148d8882b"
  },
  {
    "url": "mx/seri/vocabulary/people/index.html",
    "revision": "d43de293a2b32d2441065ef4cf409150"
  },
  {
    "url": "mx/seri/vocabulary/phrases/index.html",
    "revision": "bec0446576ee5b0fea6c4d91fbcab338"
  },
  {
    "url": "mx/tarasco/courses/basic/index.html",
    "revision": "bc974ac70420cbfa887ffcad56789751"
  },
  {
    "url": "mx/tarasco/courses/intermediate/index.html",
    "revision": "03fd8e49993836c7ba5b3c189fb4ceee"
  },
  {
    "url": "mx/tarasco/dictionary/glossary.html",
    "revision": "3a1efd89a6426bbd3fb6a105fbd520c5"
  },
  {
    "url": "mx/tarasco/dictionary/index.html",
    "revision": "014333c3f738cbea3c2626860ed5bf8b"
  },
  {
    "url": "mx/tarasco/grammar/adjective/index.html",
    "revision": "3931c20ca17eb3048cda3ce8d8727ed2"
  },
  {
    "url": "mx/tarasco/grammar/adverb/index.html",
    "revision": "e45bac280b2389fade130c41b748b4f1"
  },
  {
    "url": "mx/tarasco/grammar/alphabet/index.html",
    "revision": "7b002434cba683904183306e13c2a371"
  },
  {
    "url": "mx/tarasco/grammar/article/index.html",
    "revision": "21cb197645aac17768ae41dd96bbe5b1"
  },
  {
    "url": "mx/tarasco/grammar/guide/index.html",
    "revision": "24fc78d0b1457673e7d770604664a82c"
  },
  {
    "url": "mx/tarasco/grammar/verbs/index.html",
    "revision": "d320087a27b69969ebfa306fec3d8f59"
  },
  {
    "url": "mx/tarasco/index.html",
    "revision": "3502d02a6e7ca4e42536a2bbd28c40f8"
  },
  {
    "url": "mx/tarasco/vocabulary/animals/index.html",
    "revision": "e6234eadaa0ad32322794c5c6c443ced"
  },
  {
    "url": "mx/tarasco/vocabulary/greetings/index.html",
    "revision": "73394a161f0e92002b3a7c16fbd8b61d"
  },
  {
    "url": "mx/tarasco/vocabulary/more_used/index.html",
    "revision": "ae1ad3531478a9eec2a7f7698e611ccf"
  },
  {
    "url": "mx/tarasco/vocabulary/people/index.html",
    "revision": "ee10c08bdd4793da6845b2b362a2e0c8"
  },
  {
    "url": "mx/tarasco/vocabulary/phrases/index.html",
    "revision": "512e664f4609bdc4275326998514f907"
  },
  {
    "url": "mx/tepehua/courses/basic/index.html",
    "revision": "328f7119928d1dbe26c99325dcad6e09"
  },
  {
    "url": "mx/tepehua/courses/intermediate/index.html",
    "revision": "43e1563d5d052a6e5b053c531e940b77"
  },
  {
    "url": "mx/tepehua/dictionary/glossary.html",
    "revision": "3a67827cb35ae34399dfcb715b8c145c"
  },
  {
    "url": "mx/tepehua/dictionary/index.html",
    "revision": "5b1abde0b8c83ea53f94140fd707cb8e"
  },
  {
    "url": "mx/tepehua/grammar/adjective/index.html",
    "revision": "bb097ace6dae9da367534bd1f81b73d3"
  },
  {
    "url": "mx/tepehua/grammar/adverb/index.html",
    "revision": "20897c57518ba0b53fe91cc61416ca08"
  },
  {
    "url": "mx/tepehua/grammar/alphabet/index.html",
    "revision": "e5bbfa7d64970700cb566b61167f86d3"
  },
  {
    "url": "mx/tepehua/grammar/article/index.html",
    "revision": "5a977cf3e6949232f8ce038f2ed8bb44"
  },
  {
    "url": "mx/tepehua/grammar/guide/index.html",
    "revision": "01782d3ae3fe9daa8209618f0b9d9fc0"
  },
  {
    "url": "mx/tepehua/grammar/verbs/index.html",
    "revision": "0bf5b164eeee626117089f00a6befa54"
  },
  {
    "url": "mx/tepehua/index.html",
    "revision": "921188a4003d9c9b42bb83d5719904d4"
  },
  {
    "url": "mx/tepehua/vocabulary/animals/index.html",
    "revision": "5b6e5caffc7d22868e83020663e40506"
  },
  {
    "url": "mx/tepehua/vocabulary/greetings/index.html",
    "revision": "7487d5f996de42d245e86095f191faee"
  },
  {
    "url": "mx/tepehua/vocabulary/more_used/index.html",
    "revision": "07aea726e4b91d845411d71f6efde98d"
  },
  {
    "url": "mx/tepehua/vocabulary/people/index.html",
    "revision": "a1ec8f98278ec0c6094f3d2a98f6bb2d"
  },
  {
    "url": "mx/tepehua/vocabulary/phrases/index.html",
    "revision": "6d0d0660cc0b5360b8b6f738deb21764"
  },
  {
    "url": "mx/totonaco/courses/basic/index.html",
    "revision": "b8f9ee0deea8bb884f5516da76fbeac4"
  },
  {
    "url": "mx/totonaco/courses/intermediate/index.html",
    "revision": "779814db8c9a11e6a9c00e6b11e1e60b"
  },
  {
    "url": "mx/totonaco/dictionary/glossary.html",
    "revision": "8fc58dea205ca2cf0aed4eb389f606e2"
  },
  {
    "url": "mx/totonaco/dictionary/index.html",
    "revision": "2198db5deb20a775918aa9d9130c348e"
  },
  {
    "url": "mx/totonaco/grammar/adjective/index.html",
    "revision": "98c615af2f65b60d312b6ea6df1de990"
  },
  {
    "url": "mx/totonaco/grammar/adverb/index.html",
    "revision": "d62e89d0c3c4e0813c2420eea14d93db"
  },
  {
    "url": "mx/totonaco/grammar/alphabet/index.html",
    "revision": "40efc3b22aaa3845517dc23ff8773cca"
  },
  {
    "url": "mx/totonaco/grammar/article/index.html",
    "revision": "6cda4f0ed8c5c4d11d940920953a7914"
  },
  {
    "url": "mx/totonaco/grammar/guide/index.html",
    "revision": "44a3241862c721c5b23aa1b49c7b94c3"
  },
  {
    "url": "mx/totonaco/grammar/verbs/index.html",
    "revision": "8b2bd635a9524a982c71fc2fa7b8ad72"
  },
  {
    "url": "mx/totonaco/index.html",
    "revision": "1c9713fe2387003d15b3c0e51619c0a7"
  },
  {
    "url": "mx/totonaco/vocabulary/animals/index.html",
    "revision": "cfd2843b22c07a3fba80e2ce3adc4b68"
  },
  {
    "url": "mx/totonaco/vocabulary/greetings/index.html",
    "revision": "fe7e1f2ab29e7817cf35c2bda244e75f"
  },
  {
    "url": "mx/totonaco/vocabulary/more_used/index.html",
    "revision": "77910e5836a152f4cb31c33da10ea6fd"
  },
  {
    "url": "mx/totonaco/vocabulary/people/index.html",
    "revision": "0d190f16ddc4923899b95d3865f2a93c"
  },
  {
    "url": "mx/totonaco/vocabulary/phrases/index.html",
    "revision": "1cd9a6a4328ff80ee5d109e6708adeb5"
  },
  {
    "url": "mx/yaqui/courses/basic/index.html",
    "revision": "fc5258d8a83419b3314e51f70ae18377"
  },
  {
    "url": "mx/yaqui/courses/intermediate/index.html",
    "revision": "29c880fae1f1195362df6fdcb3b164c6"
  },
  {
    "url": "mx/yaqui/dictionary/glossary.html",
    "revision": "730057f759996d9dea468d0220ae1b56"
  },
  {
    "url": "mx/yaqui/dictionary/index.html",
    "revision": "5b174422a3054d27a6900a630e06f3c5"
  },
  {
    "url": "mx/yaqui/grammar/adjective/index.html",
    "revision": "b7e8be0ddcf80ab55f1960c3fca1e17d"
  },
  {
    "url": "mx/yaqui/grammar/adverb/index.html",
    "revision": "2065a2f0f8cbb33550c52ecfa4bf3df0"
  },
  {
    "url": "mx/yaqui/grammar/alphabet/index.html",
    "revision": "784121800f0ea6ac0cade4928caf8af1"
  },
  {
    "url": "mx/yaqui/grammar/article/index.html",
    "revision": "794a6632194296249bb6c2d087ee5e75"
  },
  {
    "url": "mx/yaqui/grammar/guide/index.html",
    "revision": "d3cf57ee8ca2cb2407304cb39807dd7c"
  },
  {
    "url": "mx/yaqui/grammar/verbs/index.html",
    "revision": "da9cfc147e1bc088e519bfbf898353ce"
  },
  {
    "url": "mx/yaqui/index.html",
    "revision": "6bc128bfa064a81f4a09617e1da6fef7"
  },
  {
    "url": "mx/yaqui/vocabulary/animals/index.html",
    "revision": "bc2fa83a93a007008a7d99bc9cf8bd9e"
  },
  {
    "url": "mx/yaqui/vocabulary/greetings/index.html",
    "revision": "96a294831de842e32a54eeebfd24e77b"
  },
  {
    "url": "mx/yaqui/vocabulary/more_used/index.html",
    "revision": "87b85efa8df741cf4033c634bbbcd529"
  },
  {
    "url": "mx/yaqui/vocabulary/people/index.html",
    "revision": "8555e474aab1862fd2dad6623cb84f25"
  },
  {
    "url": "mx/yaqui/vocabulary/phrases/index.html",
    "revision": "b9654ac97690d52b6acb6cffca33bd78"
  },
  {
    "url": "mx/zapoteco/courses/basic/index.html",
    "revision": "e6877f0f8713a97b2a4ecc973e37234e"
  },
  {
    "url": "mx/zapoteco/courses/intermediate/index.html",
    "revision": "52bb00b633eef7408b7a1c976427bde8"
  },
  {
    "url": "mx/zapoteco/dictionary/glossary.html",
    "revision": "f9ff2caf3693572d7a000ef0e035aa26"
  },
  {
    "url": "mx/zapoteco/dictionary/index.html",
    "revision": "2671445083c9444907d3d8a9e2d7ece0"
  },
  {
    "url": "mx/zapoteco/grammar/adjective/index.html",
    "revision": "d02c69362e75a57c25a83ca41b373ffe"
  },
  {
    "url": "mx/zapoteco/grammar/adverb/index.html",
    "revision": "417b33034d7d700866d9fa00eae957a3"
  },
  {
    "url": "mx/zapoteco/grammar/alphabet/index.html",
    "revision": "304ba625ab7040c5a2c933ae18562b94"
  },
  {
    "url": "mx/zapoteco/grammar/article/index.html",
    "revision": "a70c068b5bf9c19abf6767855907c00d"
  },
  {
    "url": "mx/zapoteco/grammar/guide/index.html",
    "revision": "d024b38f3e38eea9ae4266e043f53ef4"
  },
  {
    "url": "mx/zapoteco/grammar/verbs/index.html",
    "revision": "68477ee4acd9730a08386baf37b12e5e"
  },
  {
    "url": "mx/zapoteco/index.html",
    "revision": "aa39a89ea3f89615483fbf9d24718cee"
  },
  {
    "url": "mx/zapoteco/vocabulary/animals/index.html",
    "revision": "e48e54a1e97759f3c9e29e78ef70f4a2"
  },
  {
    "url": "mx/zapoteco/vocabulary/greetings/index.html",
    "revision": "75e49c07e8cee785514909fbcee1bc14"
  },
  {
    "url": "mx/zapoteco/vocabulary/more_used/index.html",
    "revision": "26d09bac17723859169058d5ea5f3b4f"
  },
  {
    "url": "mx/zapoteco/vocabulary/people/index.html",
    "revision": "cca14137579bb6f3048ac607d2bce712"
  },
  {
    "url": "mx/zapoteco/vocabulary/phrases/index.html",
    "revision": "1dff83021451b01b3dda3683e6f4f6aa"
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
