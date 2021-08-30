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
    "revision": "78561b39f96799f30c39ec17ab967a70"
  },
  {
    "url": "assets/css/0.styles.1ef26605.css",
    "revision": "02191e84ca3d2381f32623f0d3d43289"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.17016cf9.js",
    "revision": "8876fca6d8d6122bd74b0f07317636c9"
  },
  {
    "url": "assets/js/100.0a2082d8.js",
    "revision": "789b9e1c294751ff05751333253c7205"
  },
  {
    "url": "assets/js/101.59c0e48c.js",
    "revision": "67346097d312b8b1762900eef626bf28"
  },
  {
    "url": "assets/js/102.18c8b018.js",
    "revision": "9c315f67e7179a3fc3e43146fe755835"
  },
  {
    "url": "assets/js/103.bbb7d938.js",
    "revision": "685b09ef4da550a62eb13179668160fc"
  },
  {
    "url": "assets/js/104.50f92604.js",
    "revision": "b3860a174fdedf44a2529805371d0e72"
  },
  {
    "url": "assets/js/105.95403f24.js",
    "revision": "572a106352f7f4bb64dd416d5b85590b"
  },
  {
    "url": "assets/js/106.ac069b3c.js",
    "revision": "9d9b759498c7708147701d0ffbfe17a6"
  },
  {
    "url": "assets/js/107.cd422163.js",
    "revision": "60d618a79e86b838b9200808abdc1020"
  },
  {
    "url": "assets/js/108.d127cb35.js",
    "revision": "6025c76dfd230daa87686cd8b69b8bca"
  },
  {
    "url": "assets/js/109.6913748b.js",
    "revision": "ab0152a0a0179fa98fcc074953d526be"
  },
  {
    "url": "assets/js/11.6e8069fb.js",
    "revision": "69be044f8c28c30263e1b79b10a2dfad"
  },
  {
    "url": "assets/js/110.3878ff9c.js",
    "revision": "a954d4f88b729d6c80bbb2a1030d60d1"
  },
  {
    "url": "assets/js/111.efb2b525.js",
    "revision": "9a2b36fd5bb766cf9be7e427feed2a59"
  },
  {
    "url": "assets/js/112.68c8d2b0.js",
    "revision": "544a8fb24bfebb9730bf9941e064c862"
  },
  {
    "url": "assets/js/113.fb20497f.js",
    "revision": "9755171f396e3c55bc0625e7e6c2e3c7"
  },
  {
    "url": "assets/js/114.c8174e70.js",
    "revision": "3cf6b57a1f9dff14a26c1a804b167ea6"
  },
  {
    "url": "assets/js/115.ac3e06c2.js",
    "revision": "148449cee698a0e3189b907fa307afd5"
  },
  {
    "url": "assets/js/116.5b686546.js",
    "revision": "ac09883e726a73ef0e79cac185f52a59"
  },
  {
    "url": "assets/js/117.ebc1d13f.js",
    "revision": "986a2ba1d4987ef24fb162f904a15dc4"
  },
  {
    "url": "assets/js/118.241bb199.js",
    "revision": "191c01592cda20f373adeec8795a6d52"
  },
  {
    "url": "assets/js/119.6549377f.js",
    "revision": "693ed555dae435934938ecebc877e32c"
  },
  {
    "url": "assets/js/12.d47bd617.js",
    "revision": "6677405def152c0385ea3d247d19f9ff"
  },
  {
    "url": "assets/js/120.c469d790.js",
    "revision": "b653dfb532a75e84bbb9d94c2380a350"
  },
  {
    "url": "assets/js/121.20dfbb33.js",
    "revision": "9df01742a84699523e748ad331f62c77"
  },
  {
    "url": "assets/js/122.de89bf20.js",
    "revision": "c5fd97ec52f3ff8bc80f9c07ea956604"
  },
  {
    "url": "assets/js/123.e4f3ed54.js",
    "revision": "d44194fde1a93ced01e0b06fef24026e"
  },
  {
    "url": "assets/js/124.075f7975.js",
    "revision": "6c08d91ca7ebf1f060b2e88e06736edc"
  },
  {
    "url": "assets/js/125.972262ee.js",
    "revision": "1fe72d0d719597721e45f322b5b792d5"
  },
  {
    "url": "assets/js/126.58f63cc0.js",
    "revision": "4c83137900f83f5026504d0ee0ce5372"
  },
  {
    "url": "assets/js/127.f20c1f48.js",
    "revision": "743e3a57a42754038126c4b6715e958f"
  },
  {
    "url": "assets/js/128.904c193e.js",
    "revision": "b07c6295298c23abba36bca50f97aca7"
  },
  {
    "url": "assets/js/129.8c9f9f60.js",
    "revision": "cb2759e788ace6f8ec1e1410c29e7d0f"
  },
  {
    "url": "assets/js/13.03ad6a67.js",
    "revision": "e4ad045b389d34cefc8488fa0f3f0387"
  },
  {
    "url": "assets/js/130.85ce3961.js",
    "revision": "ee1d469b7fe9af757ec2fd5a36b04d3f"
  },
  {
    "url": "assets/js/131.b2a6b15d.js",
    "revision": "3a169fdd526bbc9fd986b387107c63a3"
  },
  {
    "url": "assets/js/132.34bfceb0.js",
    "revision": "4ba325f0e7d4509e605c05d929284992"
  },
  {
    "url": "assets/js/133.a405e9ba.js",
    "revision": "df43e1193d1c7b54d3e6fafd42053746"
  },
  {
    "url": "assets/js/134.cc06893d.js",
    "revision": "e1cae82581c0404ac2864aca2a3e3345"
  },
  {
    "url": "assets/js/135.18466ac8.js",
    "revision": "ad61b67a15f4bd9473261b2a86780547"
  },
  {
    "url": "assets/js/136.5a7b1c55.js",
    "revision": "ae3d9724185543ed9f38ab624d7c70bd"
  },
  {
    "url": "assets/js/137.7ced8e83.js",
    "revision": "d402e02202f16d96a24856eb3accd8d0"
  },
  {
    "url": "assets/js/138.2b902424.js",
    "revision": "d369c61bcdc07bfc4877db31bd902884"
  },
  {
    "url": "assets/js/139.ed2a4457.js",
    "revision": "3b389958fb5172724846bd0cfc467b2f"
  },
  {
    "url": "assets/js/14.52136273.js",
    "revision": "3934779646481244d8118b7b47a4534e"
  },
  {
    "url": "assets/js/140.54e300cc.js",
    "revision": "f15dc5144148a6285c34bdd74f8fccc0"
  },
  {
    "url": "assets/js/141.a3f93308.js",
    "revision": "29c0b300cc7dc331e8383b44c17a6dd5"
  },
  {
    "url": "assets/js/142.b6a36060.js",
    "revision": "0cd39e3a3aa08573e67348d6cb655239"
  },
  {
    "url": "assets/js/143.05c933dd.js",
    "revision": "45c6edafe0e223303692536a2aa3de3f"
  },
  {
    "url": "assets/js/144.956bdf3d.js",
    "revision": "5665a3a15729469d7851388711ef9786"
  },
  {
    "url": "assets/js/145.f3875de3.js",
    "revision": "9ed8e23c76ec49a512ba79cbe9344780"
  },
  {
    "url": "assets/js/146.2fcc388c.js",
    "revision": "3e4da6cc1af9f8a60daaf1572a9a6261"
  },
  {
    "url": "assets/js/147.b43f1cb2.js",
    "revision": "abef2e0f605cfb3f77b11548247584b0"
  },
  {
    "url": "assets/js/148.986b29e5.js",
    "revision": "ab7d4c0c6026e5759987490d521a07a3"
  },
  {
    "url": "assets/js/149.8c335b28.js",
    "revision": "672afa7f5aad9da12e408d9e0b4ccccc"
  },
  {
    "url": "assets/js/15.b278d18e.js",
    "revision": "09d3f8eb93b8f866e460c8eb6a1e303d"
  },
  {
    "url": "assets/js/150.94717c0f.js",
    "revision": "2edb3e249c7abbf09ea0815cf7cb24f9"
  },
  {
    "url": "assets/js/151.0c085e64.js",
    "revision": "494b988959d2b859702d22fd3303047e"
  },
  {
    "url": "assets/js/152.31f48b38.js",
    "revision": "990abd9c999ab82e6f37d3fb1c2c6fd3"
  },
  {
    "url": "assets/js/153.2687b872.js",
    "revision": "e350d334d775158212d7a85c00d76c87"
  },
  {
    "url": "assets/js/154.98970b96.js",
    "revision": "bacbf1151d10cd5f7c6a3755042e0d2c"
  },
  {
    "url": "assets/js/155.8f82ba4e.js",
    "revision": "2de1c25ff419311b41da1fe239e77943"
  },
  {
    "url": "assets/js/156.ea80eac3.js",
    "revision": "cd2502bd567f604fc53113def30c08c6"
  },
  {
    "url": "assets/js/157.03674c74.js",
    "revision": "35899597a3f89956dc35e599d743ace4"
  },
  {
    "url": "assets/js/158.cd9ff377.js",
    "revision": "a117590974cac81247bb37b5a6d72d16"
  },
  {
    "url": "assets/js/159.03de9ecf.js",
    "revision": "84aefefae713054cd58d7f47f1afad12"
  },
  {
    "url": "assets/js/16.3665be79.js",
    "revision": "1b4c8cec123c707c5045028c0d415a4a"
  },
  {
    "url": "assets/js/160.d4008190.js",
    "revision": "9f462bd15f6daa23e19f75bbdc646a95"
  },
  {
    "url": "assets/js/161.5c011bc0.js",
    "revision": "12e6b491f430ae742dc20e1c3e12776d"
  },
  {
    "url": "assets/js/162.b79ee322.js",
    "revision": "0a7b21065032b14ceccd90327daaf539"
  },
  {
    "url": "assets/js/163.55c90ad3.js",
    "revision": "6272c9de58d837faecd36119f42bc8d2"
  },
  {
    "url": "assets/js/164.0e31134d.js",
    "revision": "692903acdf3e14a9678cf07a5b06fc3f"
  },
  {
    "url": "assets/js/165.e42856c6.js",
    "revision": "d472764915ba15a34d66809caeaae4ce"
  },
  {
    "url": "assets/js/166.7a018625.js",
    "revision": "b6ad82aeed200145dea1d4490835466a"
  },
  {
    "url": "assets/js/167.1271f9d7.js",
    "revision": "47b7de48ed870b8c58ff4f3141e3fdab"
  },
  {
    "url": "assets/js/168.cb0fd0fa.js",
    "revision": "bebc60e9259764473866f2287e467044"
  },
  {
    "url": "assets/js/169.bbc7e42e.js",
    "revision": "eca4025812e674be0ceb5d9ace64f5e1"
  },
  {
    "url": "assets/js/17.d82412d9.js",
    "revision": "eb77bb9bcc0e2cdab10aaf1daf6dbf19"
  },
  {
    "url": "assets/js/170.e3e53fa6.js",
    "revision": "1607fa45f2d48d3659f45c1e725ec624"
  },
  {
    "url": "assets/js/171.e9d4e9d6.js",
    "revision": "bb655af760b6a27c9afbde5fa4fec0d5"
  },
  {
    "url": "assets/js/172.2a741537.js",
    "revision": "9c437e2ac46ea7e4d1e3499c7700378c"
  },
  {
    "url": "assets/js/173.d285480d.js",
    "revision": "886d0e612761849a04780a9b99a0b8ee"
  },
  {
    "url": "assets/js/174.6bb7110d.js",
    "revision": "fe4d415b4a6e35b820e32b03bb559708"
  },
  {
    "url": "assets/js/175.332ee6ba.js",
    "revision": "fd0c587e32668d3ce4f30cd436b5b5c4"
  },
  {
    "url": "assets/js/176.c9d8f717.js",
    "revision": "fec5524ef5fc50f52cd7b9e1f81b27a4"
  },
  {
    "url": "assets/js/177.25a2b055.js",
    "revision": "dca977c8015b4eb7041b96fafb11d816"
  },
  {
    "url": "assets/js/178.86f3752a.js",
    "revision": "b70f62b95d45dada7e16ce793d964179"
  },
  {
    "url": "assets/js/179.a86ca328.js",
    "revision": "eebcd462430370089e747cc7a339bcef"
  },
  {
    "url": "assets/js/18.ff341e31.js",
    "revision": "53e3d864e41c7e4c03ad435aeb2c7545"
  },
  {
    "url": "assets/js/180.d7d158d4.js",
    "revision": "a77235133dc12a3b393591df24915ad4"
  },
  {
    "url": "assets/js/181.9a7170ca.js",
    "revision": "edee5a86bf3e4071f2d00c439baebc2c"
  },
  {
    "url": "assets/js/182.37c2f479.js",
    "revision": "85371a68902e5499a991f9cbc3519b85"
  },
  {
    "url": "assets/js/183.8886a237.js",
    "revision": "793f5fd36581442590ca5128ea50b9ef"
  },
  {
    "url": "assets/js/184.2f01c7ab.js",
    "revision": "13eb60a5f0c18c906af0c6c39e2d2135"
  },
  {
    "url": "assets/js/185.39946c1c.js",
    "revision": "3e1bea8304eb82dccfa5b94b8223fb38"
  },
  {
    "url": "assets/js/186.56bda265.js",
    "revision": "75f6629300a92daf993632fb3574cb7a"
  },
  {
    "url": "assets/js/187.2bb64230.js",
    "revision": "fb286640dc7aff822f3f528d6353c7c5"
  },
  {
    "url": "assets/js/188.75e2da65.js",
    "revision": "ba36250fa8c7a0a8a887dd8efbb30cae"
  },
  {
    "url": "assets/js/189.381d5f00.js",
    "revision": "f0c8b95f66ae15fb454b90ca2aa36ff6"
  },
  {
    "url": "assets/js/19.5a49c334.js",
    "revision": "ddc863726901e418057548a32ff304b4"
  },
  {
    "url": "assets/js/190.5e9b9117.js",
    "revision": "d474d56aa8634dea0f79bdc90ba4b2d4"
  },
  {
    "url": "assets/js/191.9217c527.js",
    "revision": "a80350c9a797b6ddbd05f32ef3435c83"
  },
  {
    "url": "assets/js/192.5f106d6f.js",
    "revision": "6d6c15c1ca65a968ff95ce8135c7172f"
  },
  {
    "url": "assets/js/193.f7287622.js",
    "revision": "7fa1a23e5e5812782c535f5df7837792"
  },
  {
    "url": "assets/js/194.f06af35b.js",
    "revision": "40b27e39534ce294673262cc6e4422c5"
  },
  {
    "url": "assets/js/195.d0d5a410.js",
    "revision": "8a24692f6afd2267624b1cc190961e21"
  },
  {
    "url": "assets/js/196.9796e0de.js",
    "revision": "fc8cbeaf291e101866f1e9055f946d18"
  },
  {
    "url": "assets/js/197.4678397a.js",
    "revision": "eb31161160907ba31ea12192df0bb2a8"
  },
  {
    "url": "assets/js/198.93e5e96f.js",
    "revision": "29f5706e010f52a8e51fad733f454c52"
  },
  {
    "url": "assets/js/199.c523788f.js",
    "revision": "ac0fd49a262884efc450b4f55130e0c7"
  },
  {
    "url": "assets/js/2.d969e08b.js",
    "revision": "446804a68808232bd16a15614f01d0ad"
  },
  {
    "url": "assets/js/20.1a4c452d.js",
    "revision": "e14056f77af578d1eecf6ae9f848c4e4"
  },
  {
    "url": "assets/js/200.1a934e71.js",
    "revision": "1a84029b3c11c9d96ae9f06efeb1ceaa"
  },
  {
    "url": "assets/js/201.6ea8e1fc.js",
    "revision": "f828288403faab2b8bacd21681ab8615"
  },
  {
    "url": "assets/js/202.80691f18.js",
    "revision": "09913a68f8ca8fe10889ec2f06bd5a76"
  },
  {
    "url": "assets/js/203.484c39fd.js",
    "revision": "dd1c89dbe67be12c50dd8b6ec276cb9c"
  },
  {
    "url": "assets/js/204.16a99619.js",
    "revision": "c4841f2caebe8eee7a8dc56a836acf59"
  },
  {
    "url": "assets/js/205.9ff4708b.js",
    "revision": "f17272665867af37fa16253b100b5b9c"
  },
  {
    "url": "assets/js/206.c64be836.js",
    "revision": "09846c2f85ba2d914aa16876a5ae623e"
  },
  {
    "url": "assets/js/207.9ab542d5.js",
    "revision": "e9ee3bffbc422c5cc0358ddc68000ce4"
  },
  {
    "url": "assets/js/208.75e542c8.js",
    "revision": "26a44cfeec98cc6a2a11341586951f49"
  },
  {
    "url": "assets/js/209.e1a72e5d.js",
    "revision": "b31ae6a6ae9a4353ec79259af081c722"
  },
  {
    "url": "assets/js/21.a357a4e0.js",
    "revision": "6dd0ea44a2dbd6a2e15bb1273478d8d3"
  },
  {
    "url": "assets/js/210.6855da56.js",
    "revision": "f7ecd56d2b47a1b1f4e4dd57d0229f6f"
  },
  {
    "url": "assets/js/211.d94dcdeb.js",
    "revision": "42bb061e95214c9e6fc8de31ef225aba"
  },
  {
    "url": "assets/js/212.cc1dc006.js",
    "revision": "532a5b7aef11db8ad2cad167c7dd31e0"
  },
  {
    "url": "assets/js/213.92bef0f2.js",
    "revision": "9cda15eb0c1431d5dd1f2c3223d500ba"
  },
  {
    "url": "assets/js/214.6209a602.js",
    "revision": "afa9d05139f31a80562a929ea48468da"
  },
  {
    "url": "assets/js/215.3930afac.js",
    "revision": "16066e321426481d70c15d304332b7eb"
  },
  {
    "url": "assets/js/216.28e0159e.js",
    "revision": "dcf5d8954a6b26fa966ab9902147685d"
  },
  {
    "url": "assets/js/217.c007b84e.js",
    "revision": "65232d5f8312a84e6a4c5c4d8e03a78d"
  },
  {
    "url": "assets/js/218.46208d01.js",
    "revision": "6d2b52fb90de5c5ec5b92d97de52be34"
  },
  {
    "url": "assets/js/219.38e6bc36.js",
    "revision": "94e5bf5825319595d790e59c41fead98"
  },
  {
    "url": "assets/js/22.cd21bcbd.js",
    "revision": "cfc0d30466d266c9fd1271051909e9c8"
  },
  {
    "url": "assets/js/220.f19b48eb.js",
    "revision": "ff158e2eaee11aff2fc5657574017f71"
  },
  {
    "url": "assets/js/221.b56c1cb3.js",
    "revision": "60286ba054501f11259ac06f993f9af0"
  },
  {
    "url": "assets/js/222.567c944b.js",
    "revision": "1b17fff173663855e6bada17d6c504e2"
  },
  {
    "url": "assets/js/223.a0a2129c.js",
    "revision": "95c6b97f232d7b9319365ebac4a64bae"
  },
  {
    "url": "assets/js/224.df67d835.js",
    "revision": "187f6936cd5cefd15b2d123e569f5f2f"
  },
  {
    "url": "assets/js/225.78db6cf6.js",
    "revision": "ebf1f3edbce2633533284415025a7259"
  },
  {
    "url": "assets/js/226.1cba8d73.js",
    "revision": "ca4cd349bb70444b932e320976095687"
  },
  {
    "url": "assets/js/227.9c0874d8.js",
    "revision": "d9fdf08634db4c7a0927ceefab17afb8"
  },
  {
    "url": "assets/js/228.7841ef14.js",
    "revision": "7b0fa6c71e8cc2253e3a7da086a73561"
  },
  {
    "url": "assets/js/229.32c394e4.js",
    "revision": "48669a9e85b08c6782b04b85f11d50f1"
  },
  {
    "url": "assets/js/23.85ee4185.js",
    "revision": "cfac0febca09dd63d1a3a237e2005960"
  },
  {
    "url": "assets/js/230.732fbfab.js",
    "revision": "f63032614e6fb8a7b624c171a95c167f"
  },
  {
    "url": "assets/js/231.e802a588.js",
    "revision": "53d35c7f42cc8631ce24b30e3c3c6d37"
  },
  {
    "url": "assets/js/232.6d090990.js",
    "revision": "19d9aa6455c47c3a95cd2e3281401ee9"
  },
  {
    "url": "assets/js/233.e652d234.js",
    "revision": "f64398299aa9c2fdb7572d571daef4cf"
  },
  {
    "url": "assets/js/234.7598df63.js",
    "revision": "0203435011f8c251e9689c5d8f34e92f"
  },
  {
    "url": "assets/js/235.da91c53a.js",
    "revision": "ef40825302a8ebf65b1b2a3625a33b91"
  },
  {
    "url": "assets/js/236.7464d1a4.js",
    "revision": "e24e570fee1ed6e2a39927e93204314c"
  },
  {
    "url": "assets/js/237.044a94ad.js",
    "revision": "5517226d9afaee1740f4f669a68d137e"
  },
  {
    "url": "assets/js/238.944dc159.js",
    "revision": "7681ef6c741111a84bd8fd98dc84a0f9"
  },
  {
    "url": "assets/js/239.d7d18fa4.js",
    "revision": "9acaffac123a2b8385630beed7e9eba4"
  },
  {
    "url": "assets/js/24.75cc22f5.js",
    "revision": "0c1651e3de3544d4e72c21198af66dee"
  },
  {
    "url": "assets/js/240.af5c88cc.js",
    "revision": "e4881fdcfe39c4a1e55cb65e54306c7e"
  },
  {
    "url": "assets/js/241.6dec21f6.js",
    "revision": "7b9de690300fc1b879aaeefeed253338"
  },
  {
    "url": "assets/js/242.cefc7dce.js",
    "revision": "de4a810094176649b92f170d1253e2c6"
  },
  {
    "url": "assets/js/243.08ab6b2e.js",
    "revision": "f50b1325c839e288a62c6e4862c098ff"
  },
  {
    "url": "assets/js/244.7e275231.js",
    "revision": "c347a35f8a1c3912d2a2024742289c64"
  },
  {
    "url": "assets/js/245.3aa0a353.js",
    "revision": "94e14fcd3a7272d50d0116034c008bce"
  },
  {
    "url": "assets/js/246.03431225.js",
    "revision": "b0c3b64c97330de485302457877d54d6"
  },
  {
    "url": "assets/js/247.5b5ec804.js",
    "revision": "dfa1197483a3a9ee47a710e5fa966b0b"
  },
  {
    "url": "assets/js/248.f28ae223.js",
    "revision": "75bc60a526ca0f08041fb577626c4bd0"
  },
  {
    "url": "assets/js/249.0941df1e.js",
    "revision": "181d1d84584271b869d156ba4fa87c11"
  },
  {
    "url": "assets/js/25.97d7b120.js",
    "revision": "69cb8c2eb8f46eed87048935b86477b7"
  },
  {
    "url": "assets/js/250.76002222.js",
    "revision": "72518240c2afcbc712053a273b01b1aa"
  },
  {
    "url": "assets/js/251.3b893d9d.js",
    "revision": "08aca15c183075c5870b1d0e0eb28ae1"
  },
  {
    "url": "assets/js/252.47eca78d.js",
    "revision": "8cb298efe18be718aa9308560ac19c88"
  },
  {
    "url": "assets/js/253.f5757dc0.js",
    "revision": "a333f318f53707c7e883656a962152f4"
  },
  {
    "url": "assets/js/254.294ddad5.js",
    "revision": "01da56c9d520dda4a814884ed828bf44"
  },
  {
    "url": "assets/js/255.6a665b1e.js",
    "revision": "f561d6b7d6cbd91caee118725e0b3108"
  },
  {
    "url": "assets/js/256.848d7cb5.js",
    "revision": "b7220436f93b9ebcb5c38cdafb065775"
  },
  {
    "url": "assets/js/257.504c99f3.js",
    "revision": "83ae556549d31d90fa89940261312541"
  },
  {
    "url": "assets/js/258.72105eb8.js",
    "revision": "f63fe4b9743830ba4fcec8f702931feb"
  },
  {
    "url": "assets/js/259.90792ddb.js",
    "revision": "b7b0b0b44c761c68fc62e68b2a0756df"
  },
  {
    "url": "assets/js/26.79804c35.js",
    "revision": "ca31e911fa9bc8d5872ac59fc5bbffd0"
  },
  {
    "url": "assets/js/260.af141f2e.js",
    "revision": "9a3c0b37c97cf37ca74f3c0ce7cb8ae3"
  },
  {
    "url": "assets/js/261.359c53b8.js",
    "revision": "91d843d57e7043eb40903ca11737a9b4"
  },
  {
    "url": "assets/js/262.992c9ebb.js",
    "revision": "7398d1f192db0aeddaacce6bc2884fd5"
  },
  {
    "url": "assets/js/263.199c3919.js",
    "revision": "00d3db575db6d01234b5118c95bcf4a0"
  },
  {
    "url": "assets/js/264.3cf08c9d.js",
    "revision": "cad8ad0b6672063f876a35bae829f0a4"
  },
  {
    "url": "assets/js/265.6e62c155.js",
    "revision": "df116f5e85ee954e0cc541204187b1c8"
  },
  {
    "url": "assets/js/266.4ec23c93.js",
    "revision": "cd602013ab6200f18917fc728c0fbc59"
  },
  {
    "url": "assets/js/267.667fe9fd.js",
    "revision": "6159c0fd6a7d1e2baa8d9911ef991e06"
  },
  {
    "url": "assets/js/268.1551c348.js",
    "revision": "c1a0bd78f6cad8a860bd9ba69b092d02"
  },
  {
    "url": "assets/js/269.8f4a4cfc.js",
    "revision": "be3ea9389e4717148213b79fd8d83b83"
  },
  {
    "url": "assets/js/27.591d9aaa.js",
    "revision": "c61cf438c8733e09cf69d0e2345bcbe3"
  },
  {
    "url": "assets/js/270.0b23f3f4.js",
    "revision": "a7e51a0c9b295c0f44f232a99a59bb04"
  },
  {
    "url": "assets/js/271.9fa71b3d.js",
    "revision": "8eaedabc7d3609889876209f2249f469"
  },
  {
    "url": "assets/js/272.fdd5b984.js",
    "revision": "f03f43f1238da63407d21e3a76cf6e55"
  },
  {
    "url": "assets/js/273.bdb4d06f.js",
    "revision": "722977a6d4fa0c788bb90471bd39de70"
  },
  {
    "url": "assets/js/274.4e3b64a7.js",
    "revision": "1eeb5143ba680b2eef573193b21c6389"
  },
  {
    "url": "assets/js/275.ff90e97c.js",
    "revision": "b61266d89f92aba84ca32611d88df5f2"
  },
  {
    "url": "assets/js/276.e57185b1.js",
    "revision": "a9a9b8957b2cfd46599c32209f65be53"
  },
  {
    "url": "assets/js/277.6de65e8f.js",
    "revision": "d0843cdd3d2b8f12869e52837397fd6c"
  },
  {
    "url": "assets/js/278.f84da9bb.js",
    "revision": "b557cd2b82e3437b5c94fc38a001c24a"
  },
  {
    "url": "assets/js/279.f9b9bb23.js",
    "revision": "7830b156513a746c0d2ce627ab892ae1"
  },
  {
    "url": "assets/js/28.0274635c.js",
    "revision": "2461410c6ad78418b8d7eb7c7ed09be7"
  },
  {
    "url": "assets/js/280.a98bbbbd.js",
    "revision": "480ab9be67a6ea1fd644626154b2882c"
  },
  {
    "url": "assets/js/281.ddd6df90.js",
    "revision": "981479ae4f1259843838b2f920a20dcf"
  },
  {
    "url": "assets/js/282.07875af9.js",
    "revision": "2986622bd89a16a929d432fbec8436f4"
  },
  {
    "url": "assets/js/283.43f141e2.js",
    "revision": "4b20e0ee672c85d1f6c3d901020d75f1"
  },
  {
    "url": "assets/js/284.df636ed4.js",
    "revision": "96c4c8faa1858003868bb8ebdcab617c"
  },
  {
    "url": "assets/js/285.19d80fe2.js",
    "revision": "8be7c406f2d620b3b0e28398e155cd4b"
  },
  {
    "url": "assets/js/286.5898aa6d.js",
    "revision": "ebd00ad6dcfffcc64181eb8319537b58"
  },
  {
    "url": "assets/js/287.71a765ec.js",
    "revision": "e16cbe705fd1d136621b7274b8ec53b4"
  },
  {
    "url": "assets/js/288.c4de001d.js",
    "revision": "c570fe1dbc7ef148e35569d496f5b494"
  },
  {
    "url": "assets/js/289.a0d32641.js",
    "revision": "533d708ca1c777f232c34cf8e86de1c1"
  },
  {
    "url": "assets/js/29.0dd260c1.js",
    "revision": "472783bd37a37de91085cf5cc8fc97b6"
  },
  {
    "url": "assets/js/290.8fe2b5f4.js",
    "revision": "2ab415e1c8e21e66c9fe7cbc107c8650"
  },
  {
    "url": "assets/js/291.67aa3286.js",
    "revision": "68ccfe88cf69a7195be5b4f393a14b0c"
  },
  {
    "url": "assets/js/292.b49b7b72.js",
    "revision": "fbbe7524b278745ed5f6eed70132270f"
  },
  {
    "url": "assets/js/293.1d7b6030.js",
    "revision": "9db38298f61b183d80132c0314a88345"
  },
  {
    "url": "assets/js/294.354f9044.js",
    "revision": "86ad4fa85f2c38138312bf13c23c9953"
  },
  {
    "url": "assets/js/295.c6f256c9.js",
    "revision": "a68a5fa9a093a8ffd2aee1ce50b6ce35"
  },
  {
    "url": "assets/js/296.fdb3f83d.js",
    "revision": "77329bcb7c1dca4a5506524fa9833448"
  },
  {
    "url": "assets/js/297.5e2251bd.js",
    "revision": "09e998bddf2c6ce18d8f063b53f47290"
  },
  {
    "url": "assets/js/298.2525a997.js",
    "revision": "eb1a3f41ce78b28bb7726e0675f95622"
  },
  {
    "url": "assets/js/299.88296ba3.js",
    "revision": "de951fdc47790bd4c74c64aac0e9774e"
  },
  {
    "url": "assets/js/3.7ba7d1f1.js",
    "revision": "88420c3b378f1ff7ec0f9c83d1ffce32"
  },
  {
    "url": "assets/js/30.9dcb029a.js",
    "revision": "ee6a76acfe9b8d72d45bb54fbb4dde2f"
  },
  {
    "url": "assets/js/300.4fa5bc33.js",
    "revision": "ae740c10d431e914c0671f804fbf11a8"
  },
  {
    "url": "assets/js/301.af7452b5.js",
    "revision": "9c5a75b10c780ec10d332480c2c2b63b"
  },
  {
    "url": "assets/js/302.b6467b86.js",
    "revision": "60d1ddb9ec53ddc31357f8d06df9c9d2"
  },
  {
    "url": "assets/js/303.81d40a8d.js",
    "revision": "d1f7b89a59180f9000c95b49d663283a"
  },
  {
    "url": "assets/js/304.27332864.js",
    "revision": "2aed056fe60b5c46517562bae745a9a7"
  },
  {
    "url": "assets/js/305.1fcd8b8e.js",
    "revision": "1ad3d8dbfbd6862cf813873960df2cae"
  },
  {
    "url": "assets/js/306.170d0aaa.js",
    "revision": "cf9547c416b65b373cba0af41a837e97"
  },
  {
    "url": "assets/js/307.6df13527.js",
    "revision": "392aca20889bff3a073d3a3d1912bf5a"
  },
  {
    "url": "assets/js/308.d3b42313.js",
    "revision": "51dd78f1aff888ea3281907bdbbdd0fb"
  },
  {
    "url": "assets/js/309.ceb2ae73.js",
    "revision": "4275e1091d658ad6fbf25fc27c413aff"
  },
  {
    "url": "assets/js/31.565119aa.js",
    "revision": "2e986aaec761524713df8f9b9f41c381"
  },
  {
    "url": "assets/js/310.2bda052b.js",
    "revision": "b59f2a6f5eee9dd0992d9a6067848fdf"
  },
  {
    "url": "assets/js/311.ad8cda6b.js",
    "revision": "c23e5712752d27cdf520b34828d3b46a"
  },
  {
    "url": "assets/js/312.66864598.js",
    "revision": "c78de895f33b8c0232545f7e22b2b31b"
  },
  {
    "url": "assets/js/313.d934498c.js",
    "revision": "0b136460076a9e34397553d5f169de34"
  },
  {
    "url": "assets/js/32.0e8d9661.js",
    "revision": "a536e79d6153da57b0ea39799923d133"
  },
  {
    "url": "assets/js/33.7f23196c.js",
    "revision": "b5cb440595b936df72696d9e9ad7a77b"
  },
  {
    "url": "assets/js/34.09f7b4c9.js",
    "revision": "a3bd658d04fb1b57ff6aa406973c9c02"
  },
  {
    "url": "assets/js/35.13438333.js",
    "revision": "4a1bd4e7269819f68e02ec5723fdfee1"
  },
  {
    "url": "assets/js/36.b988ef45.js",
    "revision": "a54c802d8b111ac13346f453595a9852"
  },
  {
    "url": "assets/js/37.0d8e0316.js",
    "revision": "d6a6d7071ad793452302b0332cf99556"
  },
  {
    "url": "assets/js/38.2dcd4fe0.js",
    "revision": "780483d8d20b423eff9e3d64a912b0c7"
  },
  {
    "url": "assets/js/39.9e885c55.js",
    "revision": "a36179e56b1b3c38c9b788fd97ead545"
  },
  {
    "url": "assets/js/4.499fcb2f.js",
    "revision": "8898f0a9e5a56bea3b2ecb24884194e6"
  },
  {
    "url": "assets/js/40.3ba8cd1d.js",
    "revision": "2680044bc00c5b65e256434729fbb843"
  },
  {
    "url": "assets/js/41.bfe9f4bd.js",
    "revision": "00711d238d3710676fad254b5444d3d5"
  },
  {
    "url": "assets/js/42.3337f9a9.js",
    "revision": "b9617c63379fd6acaaa5db37e4c6ed9a"
  },
  {
    "url": "assets/js/43.251df9fb.js",
    "revision": "948c2f0156eb820aecc8392df414b467"
  },
  {
    "url": "assets/js/44.3340ba2c.js",
    "revision": "4da289d80ee999731bef7b8e43e8b9ae"
  },
  {
    "url": "assets/js/45.a16eae17.js",
    "revision": "f19019a6e1e48a28a9081bb6fe52fc3f"
  },
  {
    "url": "assets/js/46.5050388c.js",
    "revision": "bf01fb6488e295c3146ca494e0f30f96"
  },
  {
    "url": "assets/js/47.55de82f9.js",
    "revision": "b242fc69901db13aab14dca2a2f08ac2"
  },
  {
    "url": "assets/js/48.a689051f.js",
    "revision": "8ff865e70cf0e4e162561052641b971b"
  },
  {
    "url": "assets/js/49.f9569f78.js",
    "revision": "edc69dbe7410d181ef488e7adeaae10f"
  },
  {
    "url": "assets/js/5.67c6cc95.js",
    "revision": "91b47bc9a564f1c68e8d9d99527ee764"
  },
  {
    "url": "assets/js/50.25600c81.js",
    "revision": "f40b9783a932d512a920e7943b25a17d"
  },
  {
    "url": "assets/js/51.3a3421ec.js",
    "revision": "089db34e4207ad3104d98b3735ac2b4c"
  },
  {
    "url": "assets/js/52.09ae0c6c.js",
    "revision": "8f5b69397d3c0dc751b622d94344d4e9"
  },
  {
    "url": "assets/js/53.e329400c.js",
    "revision": "dbc1edfaded2ec99a369547ada5611de"
  },
  {
    "url": "assets/js/54.4761f68a.js",
    "revision": "e84e891b035d3d56799dcd4868da3a93"
  },
  {
    "url": "assets/js/55.1b31887d.js",
    "revision": "b968bb04f0bbca8bfee0f72957249831"
  },
  {
    "url": "assets/js/56.e85a48f6.js",
    "revision": "0f222337089a439fd8d0b9306f1ca951"
  },
  {
    "url": "assets/js/57.9d892baf.js",
    "revision": "54f2be45fd339de5650385315f1f8c9e"
  },
  {
    "url": "assets/js/58.1eead417.js",
    "revision": "aa1b222cd104f6a8229cdb611a390d31"
  },
  {
    "url": "assets/js/59.52dee953.js",
    "revision": "ef96895cdfbcd4bb2cb6db2c30d7edb3"
  },
  {
    "url": "assets/js/6.51721f4f.js",
    "revision": "763c0e07549b2547b6bfc578141656b1"
  },
  {
    "url": "assets/js/60.51c1c89e.js",
    "revision": "e1df1f9fc81cedd54723a9ba1a05a336"
  },
  {
    "url": "assets/js/61.df360f07.js",
    "revision": "89bd0e3454952d1415f66b6fb5ce2f6a"
  },
  {
    "url": "assets/js/62.06f93ad2.js",
    "revision": "d3e22e41fa93f7fabac0de452630e7f6"
  },
  {
    "url": "assets/js/63.cffbabd3.js",
    "revision": "1864bc136a7310fba126052ab214278d"
  },
  {
    "url": "assets/js/64.ff13e14c.js",
    "revision": "80f403268df3a09f0603c1dc79793a93"
  },
  {
    "url": "assets/js/65.f52634bb.js",
    "revision": "0544d1476f05bede7f5930d5a37fac0c"
  },
  {
    "url": "assets/js/66.6cc3252f.js",
    "revision": "95d20716186ed0df56804ef522980eac"
  },
  {
    "url": "assets/js/67.3612462c.js",
    "revision": "0440ff78f422022367f283febd6e827a"
  },
  {
    "url": "assets/js/68.c7cc7fa3.js",
    "revision": "5b910a99e247dc8bf393b73ab8f48355"
  },
  {
    "url": "assets/js/69.3ba6747c.js",
    "revision": "3b066e1427f73432c064ea9f66717dcf"
  },
  {
    "url": "assets/js/7.b62aa025.js",
    "revision": "6001ff60860def3ef91c4fe0eae5b1bf"
  },
  {
    "url": "assets/js/70.9ea16174.js",
    "revision": "82a94c28d6f98ccd6072099465362176"
  },
  {
    "url": "assets/js/71.23b4ac53.js",
    "revision": "50750223532c35af71bc7ee3c16f71e4"
  },
  {
    "url": "assets/js/72.5ddf8648.js",
    "revision": "ff9797142c666ea287ab0e077fbd37e3"
  },
  {
    "url": "assets/js/73.aa7c16b8.js",
    "revision": "90fa942b5d834990dcb5a8982d72e865"
  },
  {
    "url": "assets/js/74.91649bf6.js",
    "revision": "4592eea10548ac89be6de7141edb3e58"
  },
  {
    "url": "assets/js/75.51ac8d94.js",
    "revision": "afa83d77d45ec7ad78da8edb41ed5c9f"
  },
  {
    "url": "assets/js/76.3159bdc1.js",
    "revision": "e5b37b3236354a81f398c032cc5b73f9"
  },
  {
    "url": "assets/js/77.26c34f65.js",
    "revision": "bdcc5fb99df0d6ff957b5ff4f33751f4"
  },
  {
    "url": "assets/js/78.de4983c8.js",
    "revision": "2a1caca7386142c239f36f73600deb0d"
  },
  {
    "url": "assets/js/79.58f5ceeb.js",
    "revision": "19facac0283c96719e07d1055cda2207"
  },
  {
    "url": "assets/js/8.c0afbd91.js",
    "revision": "fcd4b89b127b59be9ebdf75f38aea306"
  },
  {
    "url": "assets/js/80.569afb57.js",
    "revision": "5878fb1938c7a3286649e6135edacd55"
  },
  {
    "url": "assets/js/81.6c8b742e.js",
    "revision": "36261c5c9d27b9c1a81d6f3c72e6d97e"
  },
  {
    "url": "assets/js/82.baf61ed9.js",
    "revision": "d5175c562d91ad478cd9b85d18f99b63"
  },
  {
    "url": "assets/js/83.8c91142e.js",
    "revision": "4881d17a7a43bd815f7c8496ed886bef"
  },
  {
    "url": "assets/js/84.0b3bd642.js",
    "revision": "8679636c4d2d6e7c0bc1903f527dc716"
  },
  {
    "url": "assets/js/85.5c9731cf.js",
    "revision": "cfdc1b78bc442cdef9f57b1ae038db6e"
  },
  {
    "url": "assets/js/86.611d7d95.js",
    "revision": "67ae20ca114bbb6b49d7367983458dcc"
  },
  {
    "url": "assets/js/87.9f8aba6e.js",
    "revision": "96d645a92b70fe6dd04acdb8e7c3cff2"
  },
  {
    "url": "assets/js/88.1a5ebcfa.js",
    "revision": "102405e9cf1a637fda9efce2b0c20f43"
  },
  {
    "url": "assets/js/89.63103360.js",
    "revision": "80f798e346ec8227f3d8ae4f0aa50425"
  },
  {
    "url": "assets/js/9.b0ae7608.js",
    "revision": "be077e4afa6c92ec50cac2eaf39b551d"
  },
  {
    "url": "assets/js/90.feebcbe3.js",
    "revision": "de6f6b24c3a360ef3a25844a080951a9"
  },
  {
    "url": "assets/js/91.85ebab37.js",
    "revision": "9e06db41f5675f1520d3c2e09945a3e7"
  },
  {
    "url": "assets/js/92.d93b8dd4.js",
    "revision": "cb949386c46b3604e012f3cb702304a3"
  },
  {
    "url": "assets/js/93.b336cc2d.js",
    "revision": "692e1b91bd3336527f0c7ae40fb264ba"
  },
  {
    "url": "assets/js/94.8913b885.js",
    "revision": "7cce17cdbbbdc7b5c3eca72089d3badf"
  },
  {
    "url": "assets/js/95.b30c986b.js",
    "revision": "a26b9250d14bff9857b3b7681a7d2fb2"
  },
  {
    "url": "assets/js/96.ae6dde14.js",
    "revision": "4142d3081a4a86c0ec228bd72f9ca982"
  },
  {
    "url": "assets/js/97.fe985a51.js",
    "revision": "6875e011d45ba16a246ec979a0e3a6f5"
  },
  {
    "url": "assets/js/98.faa9a75c.js",
    "revision": "368f615b73d5733bd812308227592c5f"
  },
  {
    "url": "assets/js/99.31f46659.js",
    "revision": "c2791b3a6dffe8617dbad3cc7f8b30a8"
  },
  {
    "url": "assets/js/app.a783215c.js",
    "revision": "662a20f7685a00f4b2fb861d9bff2a48"
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
    "revision": "4c147df001e9ceb45f61e5d38799e3a2"
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
    "revision": "50eb08328c20383b63e307061da2d9ff"
  },
  {
    "url": "mx/cora/courses/intermediate/index.html",
    "revision": "608478f0e0dd099de025a11e0e404352"
  },
  {
    "url": "mx/cora/dictionary/glossary.html",
    "revision": "5ebf321681b8628c004ab07c93625816"
  },
  {
    "url": "mx/cora/dictionary/index.html",
    "revision": "ca1fa93d0f5cd0cdd45998e64e82efca"
  },
  {
    "url": "mx/cora/grammar/adjective/index.html",
    "revision": "e7828781e61ff3a368f8649b9b263ccc"
  },
  {
    "url": "mx/cora/grammar/adverb/index.html",
    "revision": "80a58720f518e3fd88f3f10a90afbb81"
  },
  {
    "url": "mx/cora/grammar/alphabet/index.html",
    "revision": "9146e170587174ffdccfec844a7abc76"
  },
  {
    "url": "mx/cora/grammar/article/index.html",
    "revision": "b6197998f48c1cf6d321ec5b06615eb0"
  },
  {
    "url": "mx/cora/grammar/guide/index.html",
    "revision": "774cea614b6a9903d5eb654813aa50d5"
  },
  {
    "url": "mx/cora/grammar/verbs/index.html",
    "revision": "5e628308322ed8ca12593a90f975cc05"
  },
  {
    "url": "mx/cora/vocabulary/animals/index.html",
    "revision": "7aa9d86df2919f0cd23ea1ec27e0b578"
  },
  {
    "url": "mx/cora/vocabulary/greetings/index.html",
    "revision": "fa048722a762411be025326dc5eb544a"
  },
  {
    "url": "mx/cora/vocabulary/more_used/index.html",
    "revision": "8a6d227428c173f400cf259c285a3021"
  },
  {
    "url": "mx/cora/vocabulary/people/index.html",
    "revision": "af6e49d4fc351e862f1ecd25e43f113c"
  },
  {
    "url": "mx/cora/vocabulary/phrases/index.html",
    "revision": "7b442df497cd6a5e7e06632bac7be988"
  },
  {
    "url": "mx/guarijio/courses/basic/index.html",
    "revision": "21461ddb532c50ad90a6e3e5948b47be"
  },
  {
    "url": "mx/guarijio/courses/intermediate/index.html",
    "revision": "466cf0f29a58d19010db006f2fc183f5"
  },
  {
    "url": "mx/guarijio/dictionary/glossary.html",
    "revision": "201b6eaa904d5dd8e1e200fe7c1bdb84"
  },
  {
    "url": "mx/guarijio/dictionary/index.html",
    "revision": "62d0c89cd356bef65a9a877db113189f"
  },
  {
    "url": "mx/guarijio/grammar/adjective/index.html",
    "revision": "60cf05c7a9233837dd8de6c8346668e1"
  },
  {
    "url": "mx/guarijio/grammar/adverb/index.html",
    "revision": "54e85039c9d14d3edd7c0820f3e0acf2"
  },
  {
    "url": "mx/guarijio/grammar/alphabet/index.html",
    "revision": "6dc3150a57576f3b68ea4ffe83ca3a94"
  },
  {
    "url": "mx/guarijio/grammar/article/index.html",
    "revision": "8052d104804f36785aa14e8475c7b5f5"
  },
  {
    "url": "mx/guarijio/grammar/guide/index.html",
    "revision": "39ca6426e227cc262e86252eeae001cd"
  },
  {
    "url": "mx/guarijio/grammar/verbs/index.html",
    "revision": "c4c46b0979a3b80fb62a7a89f4e33c76"
  },
  {
    "url": "mx/guarijio/index.html",
    "revision": "e2c7ebb348e12d6edbf6625a86f33e0c"
  },
  {
    "url": "mx/guarijio/vocabulary/animals/index.html",
    "revision": "93a478d352bd86606ed1cbbfaf892cec"
  },
  {
    "url": "mx/guarijio/vocabulary/greetings/index.html",
    "revision": "3170656b52d345611ed4b1fae86586d1"
  },
  {
    "url": "mx/guarijio/vocabulary/more_used/index.html",
    "revision": "e4b9b97b1033aefba971701ca7801e10"
  },
  {
    "url": "mx/guarijio/vocabulary/people/index.html",
    "revision": "cef33a6aefb36ca70b4feb75201f7fa7"
  },
  {
    "url": "mx/guarijio/vocabulary/phrases/index.html",
    "revision": "def113bb3432173a403d75520ae8a371"
  },
  {
    "url": "mx/huichol/courses/basic/index.html",
    "revision": "a463dd5a5d1643d7cbe9e7306749f176"
  },
  {
    "url": "mx/huichol/courses/intermediate/index.html",
    "revision": "198d63e0a9653095bf6ad85c78b683ee"
  },
  {
    "url": "mx/huichol/dictionary/glossary.html",
    "revision": "1f3e8d99494e11ca6cdaa88a22ad9c8c"
  },
  {
    "url": "mx/huichol/dictionary/index.html",
    "revision": "dc3625b59b197bdd1397df23c0f6fd10"
  },
  {
    "url": "mx/huichol/grammar/adjective/index.html",
    "revision": "09fccc54a8281fd866b42c23a826f4e9"
  },
  {
    "url": "mx/huichol/grammar/adverb/index.html",
    "revision": "2f9f95797bdcc78598499fc747f16105"
  },
  {
    "url": "mx/huichol/grammar/alphabet/index.html",
    "revision": "9bd4d336fd7fe8d8583ab863c8da8a19"
  },
  {
    "url": "mx/huichol/grammar/article/index.html",
    "revision": "361ea64c960d7e7cb78e8f059334482d"
  },
  {
    "url": "mx/huichol/grammar/guide/index.html",
    "revision": "d1f7017bfca0e7a652c73a070c41f3a9"
  },
  {
    "url": "mx/huichol/grammar/verbs/index.html",
    "revision": "822c97c5abd52b22de020344c84fa2e4"
  },
  {
    "url": "mx/huichol/index.html",
    "revision": "4309b69e54fdcb74216bc87419e58a5c"
  },
  {
    "url": "mx/huichol/vocabulary/animals/index.html",
    "revision": "2cfb58f88e94f511d41001c532cb7064"
  },
  {
    "url": "mx/huichol/vocabulary/greetings/index.html",
    "revision": "b42429cc7336a3189857140be562e451"
  },
  {
    "url": "mx/huichol/vocabulary/more_used/index.html",
    "revision": "d9bf6fbd83460f461bb5d2a2b93854d4"
  },
  {
    "url": "mx/huichol/vocabulary/people/index.html",
    "revision": "2219f7e4d8b6a167c9728f4eee4abe68"
  },
  {
    "url": "mx/huichol/vocabulary/phrases/index.html",
    "revision": "1a16412a571a9f41baca5258588f27f1"
  },
  {
    "url": "mx/mayo/courses/basic/index.html",
    "revision": "fdcaace780671405647c37396583ca89"
  },
  {
    "url": "mx/mayo/courses/intermediate/index.html",
    "revision": "7a0c7e01caf1a9704882ea12b42c8661"
  },
  {
    "url": "mx/mayo/dictionary/glossary.html",
    "revision": "4ec2e33a86b04c54884700d1a5eeefb9"
  },
  {
    "url": "mx/mayo/dictionary/index.html",
    "revision": "7ac2dbd158d731941d6288be16c6e05f"
  },
  {
    "url": "mx/mayo/grammar/adjective/index.html",
    "revision": "77c584f67953038d65236d0788a0c7ba"
  },
  {
    "url": "mx/mayo/grammar/adverb/index.html",
    "revision": "07346122139b696638ccd94201f9371c"
  },
  {
    "url": "mx/mayo/grammar/alphabet/index.html",
    "revision": "21c7d220c6991c839c507f665577cfd2"
  },
  {
    "url": "mx/mayo/grammar/article/index.html",
    "revision": "ed726bdd9b2bbfec165a762698837e84"
  },
  {
    "url": "mx/mayo/grammar/guide/index.html",
    "revision": "fd0ad3bbb1e65b0e9a8e2b96f2f134e9"
  },
  {
    "url": "mx/mayo/grammar/verbs/index.html",
    "revision": "da59597ab8e6378ebf4a909d8c9a2153"
  },
  {
    "url": "mx/mayo/index.html",
    "revision": "640723cdbedca8adeb4786ddb2a4d7da"
  },
  {
    "url": "mx/mayo/vocabulary/animals/index.html",
    "revision": "0bd79f085b60928415e88317d53ee6a6"
  },
  {
    "url": "mx/mayo/vocabulary/greetings/index.html",
    "revision": "54b07afabb6ba2eed85156563d6e6b0c"
  },
  {
    "url": "mx/mayo/vocabulary/more_used/index.html",
    "revision": "5ecd70ff0fecc417e95946ad8aa36f04"
  },
  {
    "url": "mx/mayo/vocabulary/people/index.html",
    "revision": "ca7573f3cd3add9cab4722cc3fc21fe3"
  },
  {
    "url": "mx/mayo/vocabulary/phrases/index.html",
    "revision": "94f7e5102d42abd46bdb5832c23b3167"
  },
  {
    "url": "mx/mazateco/courses/basic/index.html",
    "revision": "a4ee2388492166ad95545edbf124ba75"
  },
  {
    "url": "mx/mazateco/courses/intermediate/index.html",
    "revision": "2fbfd74d92ffb7382efebb3c875d847e"
  },
  {
    "url": "mx/mazateco/dictionary/glossary.html",
    "revision": "307baa0b93fec11831eb57d6bfae8cb9"
  },
  {
    "url": "mx/mazateco/dictionary/index.html",
    "revision": "9344f5bf637a6fcf0c4e14d763ff8908"
  },
  {
    "url": "mx/mazateco/grammar/adjective/index.html",
    "revision": "679d62374861105c004de87dd72b52c0"
  },
  {
    "url": "mx/mazateco/grammar/adverb/index.html",
    "revision": "5288cabb9c2554579fa92257d777b136"
  },
  {
    "url": "mx/mazateco/grammar/alphabet/index.html",
    "revision": "557420a2eb0bca2050997ce47f3e5360"
  },
  {
    "url": "mx/mazateco/grammar/article/index.html",
    "revision": "1d48382612c27b1d08c16df1a372b861"
  },
  {
    "url": "mx/mazateco/grammar/guide/index.html",
    "revision": "f348554639a45a1920ca418317dba8d2"
  },
  {
    "url": "mx/mazateco/grammar/verbs/index.html",
    "revision": "f50c8b8fb46bb70e780a2da09515afdc"
  },
  {
    "url": "mx/mazateco/index.html",
    "revision": "2012c81e82981b6192adb17acc7976f1"
  },
  {
    "url": "mx/mazateco/vocabulary/animals/index.html",
    "revision": "e40c0d95d94475b95ce978f8d22416ee"
  },
  {
    "url": "mx/mazateco/vocabulary/greetings/index.html",
    "revision": "cd18681b84f5ed89521e1797f0f0cdb8"
  },
  {
    "url": "mx/mazateco/vocabulary/more_used/index.html",
    "revision": "609c4901be0583b45c091ca333e50d25"
  },
  {
    "url": "mx/mazateco/vocabulary/people/index.html",
    "revision": "8e87be16d5decd973fd69a9db800c3f8"
  },
  {
    "url": "mx/mazateco/vocabulary/phrases/index.html",
    "revision": "800358fe1055f53115413ccab4c0ff83"
  },
  {
    "url": "mx/mixteco/courses/basic/index.html",
    "revision": "d3b1e5c52e3babf5c7f5cc962fdc38fd"
  },
  {
    "url": "mx/mixteco/courses/intermediate/index.html",
    "revision": "ab93d94ceff32d46ae1cbdb6befb09e5"
  },
  {
    "url": "mx/mixteco/dictionary/glossary.html",
    "revision": "3097310e3303208c544a905d92ba7efe"
  },
  {
    "url": "mx/mixteco/dictionary/index.html",
    "revision": "addd2e2fca29255d42909f9231185ea6"
  },
  {
    "url": "mx/mixteco/grammar/adjective/index.html",
    "revision": "c5a52930f3387932da52d4ebf23664d7"
  },
  {
    "url": "mx/mixteco/grammar/adverb/index.html",
    "revision": "0dadc66153e5d2e455040d68ad51536c"
  },
  {
    "url": "mx/mixteco/grammar/alphabet/index.html",
    "revision": "5a8d247c93a6c173e2a9e6cddb0bf4ee"
  },
  {
    "url": "mx/mixteco/grammar/article/index.html",
    "revision": "7f96fe12a551ddc0f67280dc9c6333af"
  },
  {
    "url": "mx/mixteco/grammar/guide/index.html",
    "revision": "bde299c8df6b1a0013dce94abae28c30"
  },
  {
    "url": "mx/mixteco/grammar/verbs/index.html",
    "revision": "38854c05d48eee5c999335b37e354d7f"
  },
  {
    "url": "mx/mixteco/index.html",
    "revision": "848ce396c832e1bb7896e23ccc19a828"
  },
  {
    "url": "mx/mixteco/vocabulary/animals/index.html",
    "revision": "94e883f54efee6d1ae2e3af230f7f4cd"
  },
  {
    "url": "mx/mixteco/vocabulary/greetings/index.html",
    "revision": "82838cdf0e5255761fbd4f82fbd41205"
  },
  {
    "url": "mx/mixteco/vocabulary/more_used/index.html",
    "revision": "c7bd880e10772f6824c3b63753566548"
  },
  {
    "url": "mx/mixteco/vocabulary/people/index.html",
    "revision": "6ba4b5cdde340eef671ab8883d6be912"
  },
  {
    "url": "mx/mixteco/vocabulary/phrases/index.html",
    "revision": "46e90dab39db09a8caec7a0567921146"
  },
  {
    "url": "mx/nahuatl/courses/basic/index.html",
    "revision": "fd2ac3165101e3fbb0315d12399886be"
  },
  {
    "url": "mx/nahuatl/courses/intermediate/index.html",
    "revision": "03c76e4240599ab666b09d19143da9b7"
  },
  {
    "url": "mx/nahuatl/dictionary/glossary.html",
    "revision": "03d1755be2ebd3486a7e0ec5a285552c"
  },
  {
    "url": "mx/nahuatl/dictionary/index.html",
    "revision": "1207bd12a4386adf8be7b8965250eccd"
  },
  {
    "url": "mx/nahuatl/grammar/adjective/index.html",
    "revision": "5f4da342323de688de3e28428e4f8c55"
  },
  {
    "url": "mx/nahuatl/grammar/adverb/index.html",
    "revision": "d15d836f60a70632da4f911fae20d59d"
  },
  {
    "url": "mx/nahuatl/grammar/alphabet/index.html",
    "revision": "da47a41470e7f384d004f7ceaecfd0b7"
  },
  {
    "url": "mx/nahuatl/grammar/article/index.html",
    "revision": "0a8fd4cbe739bb43ffcf9e7d874467f6"
  },
  {
    "url": "mx/nahuatl/grammar/guide/index.html",
    "revision": "89848a6b945f5f5286fa91c36da36ffe"
  },
  {
    "url": "mx/nahuatl/grammar/verbs/index.html",
    "revision": "5a9e9b02f074ca1194ac8b192d50c246"
  },
  {
    "url": "mx/nahuatl/index.html",
    "revision": "e2ea42d0a8e4fddcd9223a259a06f57e"
  },
  {
    "url": "mx/nahuatl/vocabulary/animals/index.html",
    "revision": "86fc9ee3d87fa97512875eccf3b8b2e2"
  },
  {
    "url": "mx/nahuatl/vocabulary/greetings/index.html",
    "revision": "58daa6cd185fec8e54d26656e3fff6ed"
  },
  {
    "url": "mx/nahuatl/vocabulary/more_used/index.html",
    "revision": "748d486fbe413bd8bcd7c94e9bd9d0c8"
  },
  {
    "url": "mx/nahuatl/vocabulary/people/index.html",
    "revision": "9bfc8571391712e98042ac96df4e9274"
  },
  {
    "url": "mx/nahuatl/vocabulary/phrases/index.html",
    "revision": "5d53e92d21b580ab081eddfbdcd22629"
  },
  {
    "url": "mx/otomi/courses/basic/index.html",
    "revision": "cc4e3118583f97614d3392f724bc3aae"
  },
  {
    "url": "mx/otomi/courses/intermediate/index.html",
    "revision": "964719fdb2019e4632578c578106db76"
  },
  {
    "url": "mx/otomi/dictionary/glossary.html",
    "revision": "84f01064f1afb8586022632378e96962"
  },
  {
    "url": "mx/otomi/dictionary/index.html",
    "revision": "44a681bf9358af16e5184878f3ccfa2b"
  },
  {
    "url": "mx/otomi/grammar/adjective/index.html",
    "revision": "03721a9282e14439f59db4e65aca05fd"
  },
  {
    "url": "mx/otomi/grammar/adverb/index.html",
    "revision": "f60b2e0c198af89fabda9c610a1ae26c"
  },
  {
    "url": "mx/otomi/grammar/alphabet/index.html",
    "revision": "ea6104d7e8824ead7ca028c413ca676d"
  },
  {
    "url": "mx/otomi/grammar/article/index.html",
    "revision": "96d50934c5e03bda15eda7696344a9f9"
  },
  {
    "url": "mx/otomi/grammar/guide/index.html",
    "revision": "3bc78a0934eb241ae438c993ee2b83d5"
  },
  {
    "url": "mx/otomi/grammar/verbs/index.html",
    "revision": "e17a0ffd601ecab3a2439bc2c71d0618"
  },
  {
    "url": "mx/otomi/index.html",
    "revision": "dde9b8fe559974516d34f765c059ec5d"
  },
  {
    "url": "mx/otomi/vocabulary/animals/index.html",
    "revision": "389f83471978587e27cbac0b7bf1c230"
  },
  {
    "url": "mx/otomi/vocabulary/greetings/index.html",
    "revision": "ff27d7a7484a6097af26053adb2131f7"
  },
  {
    "url": "mx/otomi/vocabulary/more_used/index.html",
    "revision": "c57e0370d0b13ba4a3689ac50b358515"
  },
  {
    "url": "mx/otomi/vocabulary/people/index.html",
    "revision": "dad9c6fc7237034f3e8315b2b6276136"
  },
  {
    "url": "mx/otomi/vocabulary/phrases/index.html",
    "revision": "e1a3227b26ef8eb950e73e80ff913cef"
  },
  {
    "url": "mx/pame/courses/basic/index.html",
    "revision": "5dc5df42407b3540cd63830f4be32dbb"
  },
  {
    "url": "mx/pame/courses/intermediate/index.html",
    "revision": "93963eae2a3b1a173408b254e0654dcb"
  },
  {
    "url": "mx/pame/dictionary/glossary.html",
    "revision": "e05a85105b8883fb881090a40e83d7ca"
  },
  {
    "url": "mx/pame/dictionary/index.html",
    "revision": "4f9f5d1f256bca143177f9f92877310d"
  },
  {
    "url": "mx/pame/grammar/adjective/index.html",
    "revision": "53cb37978afab356d2c585550a759994"
  },
  {
    "url": "mx/pame/grammar/adverb/index.html",
    "revision": "0200a3ae7dd803f85360ebe12c71072c"
  },
  {
    "url": "mx/pame/grammar/alphabet/index.html",
    "revision": "f3b2e6b22f1f51ecd560db8438168ee4"
  },
  {
    "url": "mx/pame/grammar/article/index.html",
    "revision": "afb47705905e776c2f291c5f35eed7e2"
  },
  {
    "url": "mx/pame/grammar/guide/index.html",
    "revision": "aab57facfb6cf09daa6fb83ce4e89c35"
  },
  {
    "url": "mx/pame/grammar/verbs/index.html",
    "revision": "d97b3cd75a006159d36f542c0ab626ee"
  },
  {
    "url": "mx/pame/index.html",
    "revision": "8f021b2dff33d366ead4633840d13a5a"
  },
  {
    "url": "mx/pame/vocabulary/animals/index.html",
    "revision": "dfc8c60e35b3955d092cd7f8279013e0"
  },
  {
    "url": "mx/pame/vocabulary/greetings/index.html",
    "revision": "c69ebbc0b619f09722e2ceba49b687df"
  },
  {
    "url": "mx/pame/vocabulary/more_used/index.html",
    "revision": "f6ebf0909358fbd776d021b35bb89631"
  },
  {
    "url": "mx/pame/vocabulary/people/index.html",
    "revision": "b3317f924faca89f927f86a0fc653203"
  },
  {
    "url": "mx/pame/vocabulary/phrases/index.html",
    "revision": "5cd62077f17d3307deb975b75cd54711"
  },
  {
    "url": "mx/papago/courses/basic/index.html",
    "revision": "85833b637f094dd0729af4159706488d"
  },
  {
    "url": "mx/papago/courses/intermediate/index.html",
    "revision": "07616831c9096f1ef04578ad3d0533db"
  },
  {
    "url": "mx/papago/dictionary/glossary.html",
    "revision": "51835a64b0a7a92a4fb5d0a843098b64"
  },
  {
    "url": "mx/papago/dictionary/index.html",
    "revision": "f18e106edc8b9b077bf51137bc6884f8"
  },
  {
    "url": "mx/papago/grammar/adjective/index.html",
    "revision": "858a3e4b554cbb1788e172963bc0646d"
  },
  {
    "url": "mx/papago/grammar/adverb/index.html",
    "revision": "2be29d196c8fe4163b742a7ad3b7a630"
  },
  {
    "url": "mx/papago/grammar/alphabet/index.html",
    "revision": "f80aac684ec06dc514052dfc1349bea2"
  },
  {
    "url": "mx/papago/grammar/article/index.html",
    "revision": "43a1ed9fcc967621ccabd0c51cdbc4a3"
  },
  {
    "url": "mx/papago/grammar/guide/index.html",
    "revision": "9cd04aa71599d345286f5f037aa1b528"
  },
  {
    "url": "mx/papago/grammar/verbs/index.html",
    "revision": "8e4ef1e3a3b0068ff190ab8142ae46c7"
  },
  {
    "url": "mx/papago/index.html",
    "revision": "f084f3e335fd7ee1dd07ec6ebaf8ab36"
  },
  {
    "url": "mx/papago/vocabulary/animals/index.html",
    "revision": "4c55c3654b37a74386122a12742bbb22"
  },
  {
    "url": "mx/papago/vocabulary/greetings/index.html",
    "revision": "df5a3f5c2f634374c78ccbb2201c61d9"
  },
  {
    "url": "mx/papago/vocabulary/more_used/index.html",
    "revision": "2b801c053f59fabd92367d0e60ad13c6"
  },
  {
    "url": "mx/papago/vocabulary/people/index.html",
    "revision": "c8543db137f519b5d41a37f67922426d"
  },
  {
    "url": "mx/papago/vocabulary/phrases/index.html",
    "revision": "d4babd36d6dd37c6efcd9c51bd59da2a"
  },
  {
    "url": "mx/pima/courses/basic/index.html",
    "revision": "49c993e3b161522c380f74f728267e2a"
  },
  {
    "url": "mx/pima/courses/intermediate/index.html",
    "revision": "a3b46d88f23ca9c7a4f4a529876975be"
  },
  {
    "url": "mx/pima/dictionary/glossary.html",
    "revision": "8ab45138bed583750ccb1c398626ed10"
  },
  {
    "url": "mx/pima/dictionary/index.html",
    "revision": "2aecde1187b5c035b169b3d9b4a04504"
  },
  {
    "url": "mx/pima/grammar/adjective/index.html",
    "revision": "eb3768ec966f03a72d8127af1ae46362"
  },
  {
    "url": "mx/pima/grammar/adverb/index.html",
    "revision": "35f87bd679f4a44dad34299a763cad2f"
  },
  {
    "url": "mx/pima/grammar/alphabet/index.html",
    "revision": "c6be937f8e76407a78353ce54cea8280"
  },
  {
    "url": "mx/pima/grammar/article/index.html",
    "revision": "2828d6c42910fef583d9bfb6b9907098"
  },
  {
    "url": "mx/pima/grammar/guide/index.html",
    "revision": "2a5d841347e668c5d15d556dd65d3c63"
  },
  {
    "url": "mx/pima/grammar/verbs/index.html",
    "revision": "59435eda5dcfbf0b43d9b07cd9cd0593"
  },
  {
    "url": "mx/pima/index.html",
    "revision": "bb08067d9583cf7f1efe434ffbe8da41"
  },
  {
    "url": "mx/pima/vocabulary/animals/index.html",
    "revision": "04ac42c8622a21c1ace9d8cbc0c906e1"
  },
  {
    "url": "mx/pima/vocabulary/greetings/index.html",
    "revision": "2c732411194e18a1e38cd57582dfbb7c"
  },
  {
    "url": "mx/pima/vocabulary/more_used/index.html",
    "revision": "94fcceed277ff79233c78098c542f01f"
  },
  {
    "url": "mx/pima/vocabulary/people/index.html",
    "revision": "66944fab42b37f2a0ee151f2af961786"
  },
  {
    "url": "mx/pima/vocabulary/phrases/index.html",
    "revision": "e2c12e45b8342acdd77d978b6aa66086"
  },
  {
    "url": "mx/popoloca/courses/basic/index.html",
    "revision": "814a19777ac68a06322b7e16b59f03fc"
  },
  {
    "url": "mx/popoloca/courses/intermediate/index.html",
    "revision": "4a2a5acb0bb0e79ad783f83b24f09b56"
  },
  {
    "url": "mx/popoloca/dictionary/glossary.html",
    "revision": "63bd3b1c592d189f28d11692fcee6ab7"
  },
  {
    "url": "mx/popoloca/dictionary/index.html",
    "revision": "a8dca225ba92468e0b2e9bfd38f6ee9a"
  },
  {
    "url": "mx/popoloca/grammar/adjective/index.html",
    "revision": "bbc293dda16a8fb2951dfba36e13d74a"
  },
  {
    "url": "mx/popoloca/grammar/adverb/index.html",
    "revision": "dbe885b43c14bed46b245f6e89fe8091"
  },
  {
    "url": "mx/popoloca/grammar/alphabet/index.html",
    "revision": "52714ecbd93199e91b11111b654f3c74"
  },
  {
    "url": "mx/popoloca/grammar/article/index.html",
    "revision": "e6a3479e534ab72df8db6cec1896c02a"
  },
  {
    "url": "mx/popoloca/grammar/guide/index.html",
    "revision": "e4b61298d2d185faf310757e9d02dfe9"
  },
  {
    "url": "mx/popoloca/grammar/verbs/index.html",
    "revision": "7ae9098d8b52456611ab8e6071ec557e"
  },
  {
    "url": "mx/popoloca/index.html",
    "revision": "443decca48179214657b871921e88e5c"
  },
  {
    "url": "mx/popoloca/vocabulary/animals/index.html",
    "revision": "3bbc37edcb628fc0dc790478664ab3a0"
  },
  {
    "url": "mx/popoloca/vocabulary/greetings/index.html",
    "revision": "bdc1cc6a67992a0fcee9b0f7053d06e6"
  },
  {
    "url": "mx/popoloca/vocabulary/more_used/index.html",
    "revision": "d962f7e12f798c10a9f53282a723e01e"
  },
  {
    "url": "mx/popoloca/vocabulary/people/index.html",
    "revision": "3fe2e11d1cd18dbed186de5f6f0051ff"
  },
  {
    "url": "mx/popoloca/vocabulary/phrases/index.html",
    "revision": "4e7a3c120aacf497584a66579dbe97c1"
  },
  {
    "url": "mx/raramuri/courses/basic/index.html",
    "revision": "136cfbc9387e0f3ce946648867035bbf"
  },
  {
    "url": "mx/raramuri/courses/intermediate/index.html",
    "revision": "2b0783725693ce3d886353c57773f837"
  },
  {
    "url": "mx/raramuri/dictionary/glossary.html",
    "revision": "3ab354255cf34f2c76bda9c72254a9f1"
  },
  {
    "url": "mx/raramuri/dictionary/index.html",
    "revision": "43c7b30840213e663ff4f0a57cd2a6ec"
  },
  {
    "url": "mx/raramuri/grammar/adjective/index.html",
    "revision": "d8043a71ce69b685596983a859651b68"
  },
  {
    "url": "mx/raramuri/grammar/adverb/index.html",
    "revision": "5ce2f01c9b5275a1a599f6a6d6fad305"
  },
  {
    "url": "mx/raramuri/grammar/alphabet/index.html",
    "revision": "67345b4be7fa9cb928bd2ec40167adb1"
  },
  {
    "url": "mx/raramuri/grammar/article/index.html",
    "revision": "6d92d8f89cb8e29d1a19b8dc87ef6c00"
  },
  {
    "url": "mx/raramuri/grammar/guide/index.html",
    "revision": "3184640844fd038a245c119136148ffe"
  },
  {
    "url": "mx/raramuri/grammar/verbs/index.html",
    "revision": "3696863f6ef99dba2942c257ebf0e250"
  },
  {
    "url": "mx/raramuri/index.html",
    "revision": "66109a50552ee58ce70aa190a8824278"
  },
  {
    "url": "mx/raramuri/vocabulary/animals/index.html",
    "revision": "f3ea694726bdfc29b93d46c0b9af6958"
  },
  {
    "url": "mx/raramuri/vocabulary/greetings/index.html",
    "revision": "ca5838ebfd5f24c43e61c3529862b03e"
  },
  {
    "url": "mx/raramuri/vocabulary/more_used/index.html",
    "revision": "162c80a855421e0fd8244994bcc6af0a"
  },
  {
    "url": "mx/raramuri/vocabulary/people/index.html",
    "revision": "f171229ac762ea331bf4c3ef86c7b620"
  },
  {
    "url": "mx/raramuri/vocabulary/phrases/index.html",
    "revision": "4387ed2ed42a78a10005aa0537da04dd"
  },
  {
    "url": "mx/seri/courses/basic/index.html",
    "revision": "eeb79570b95693fedf5d4dc07ceaa5f0"
  },
  {
    "url": "mx/seri/courses/intermediate/index.html",
    "revision": "f10f11935aee5e249e8f445ce24f82d5"
  },
  {
    "url": "mx/seri/dictionary/glossary.html",
    "revision": "3c69db8a924d8ee1f0c7f034036d384b"
  },
  {
    "url": "mx/seri/dictionary/index.html",
    "revision": "869d243b9a26b300a203e3472299989c"
  },
  {
    "url": "mx/seri/grammar/adjective/index.html",
    "revision": "cb72454a505778951d89fc3992fee8b5"
  },
  {
    "url": "mx/seri/grammar/adverb/index.html",
    "revision": "0313e3d5b8439e43e960e7d7ca31ea98"
  },
  {
    "url": "mx/seri/grammar/alphabet/index.html",
    "revision": "fa4cdfec1458d4aa66c4a6376e58af97"
  },
  {
    "url": "mx/seri/grammar/article/index.html",
    "revision": "75e04786bb9755ed3d43450724899601"
  },
  {
    "url": "mx/seri/grammar/guide/index.html",
    "revision": "eadd03f9b8f99f134509ae0dac796f2c"
  },
  {
    "url": "mx/seri/grammar/verbs/index.html",
    "revision": "35a56b70b79ad0ee8dfa23063f67ec4e"
  },
  {
    "url": "mx/seri/index.html",
    "revision": "9c0527fc69831d08b1a4e64ee0858de1"
  },
  {
    "url": "mx/seri/vocabulary/animals/index.html",
    "revision": "4181f5ee93b52557d91f719d07102d00"
  },
  {
    "url": "mx/seri/vocabulary/greetings/index.html",
    "revision": "c94af29bec9fde23409ded7fe6e0a91a"
  },
  {
    "url": "mx/seri/vocabulary/more_used/index.html",
    "revision": "d08550a171e56642816b11a05858c8e0"
  },
  {
    "url": "mx/seri/vocabulary/people/index.html",
    "revision": "b5526a88526d8d97a7ce3ce6cb7aba9a"
  },
  {
    "url": "mx/seri/vocabulary/phrases/index.html",
    "revision": "64eeb4b998e89e36f7e0f3330606adf8"
  },
  {
    "url": "mx/tarasco/courses/basic/index.html",
    "revision": "f2b8c8f95c8f4d57600e70a5fdc32bd3"
  },
  {
    "url": "mx/tarasco/courses/intermediate/index.html",
    "revision": "620e6dea2a2e2e45e9f2dbc3bb657ab5"
  },
  {
    "url": "mx/tarasco/dictionary/glossary.html",
    "revision": "de4fab95f94461259c227e413ac00381"
  },
  {
    "url": "mx/tarasco/dictionary/index.html",
    "revision": "b33f5c68fc9bfe48dc658c8189581f8d"
  },
  {
    "url": "mx/tarasco/grammar/adjective/index.html",
    "revision": "b50232f578095e03eaccd063bb7b4984"
  },
  {
    "url": "mx/tarasco/grammar/adverb/index.html",
    "revision": "d93bf4dae0dd91cb0f3f384b4a5b7a97"
  },
  {
    "url": "mx/tarasco/grammar/alphabet/index.html",
    "revision": "e59a5ae58297f5b9f1ad1e53e397bb54"
  },
  {
    "url": "mx/tarasco/grammar/article/index.html",
    "revision": "942934d9af7a78b3fa41b0a78b518400"
  },
  {
    "url": "mx/tarasco/grammar/guide/index.html",
    "revision": "7186bd65dfc2fd270f4ebe47be5141fb"
  },
  {
    "url": "mx/tarasco/grammar/verbs/index.html",
    "revision": "66b794a9d414c6a1f7ce37dc40b3180f"
  },
  {
    "url": "mx/tarasco/index.html",
    "revision": "83ea92fed996c4c65fdd6aadf806b588"
  },
  {
    "url": "mx/tarasco/vocabulary/animals/index.html",
    "revision": "0a9455e182de0cf10566568958ad05fe"
  },
  {
    "url": "mx/tarasco/vocabulary/greetings/index.html",
    "revision": "134cfc8d1bde53e54a0d41dd74841296"
  },
  {
    "url": "mx/tarasco/vocabulary/more_used/index.html",
    "revision": "37097b64da033af4d50e90fdb82026f8"
  },
  {
    "url": "mx/tarasco/vocabulary/people/index.html",
    "revision": "924dffbd473e43ed264f91179be37629"
  },
  {
    "url": "mx/tarasco/vocabulary/phrases/index.html",
    "revision": "131857db3abd09be77b6fb8574319067"
  },
  {
    "url": "mx/tepehua/courses/basic/index.html",
    "revision": "7b7667ab19a6798081ce9c54c35301bc"
  },
  {
    "url": "mx/tepehua/courses/intermediate/index.html",
    "revision": "cd39cd6defc2077bad29be16930e8e71"
  },
  {
    "url": "mx/tepehua/dictionary/glossary.html",
    "revision": "29639d7223644b3ff4603e19b17c1ad5"
  },
  {
    "url": "mx/tepehua/dictionary/index.html",
    "revision": "cee5aaa67ffa37b84a84cf5dfd3eed68"
  },
  {
    "url": "mx/tepehua/grammar/adjective/index.html",
    "revision": "ebbad58de9a9bce29bae16188eb8a986"
  },
  {
    "url": "mx/tepehua/grammar/adverb/index.html",
    "revision": "4023b8aec8d4fc5b96d3406f76db3430"
  },
  {
    "url": "mx/tepehua/grammar/alphabet/index.html",
    "revision": "52dc8351514bfae96ab700dc1368330e"
  },
  {
    "url": "mx/tepehua/grammar/article/index.html",
    "revision": "212fa3f8e5651280fe32fe751d59af56"
  },
  {
    "url": "mx/tepehua/grammar/guide/index.html",
    "revision": "91590140c1bb85303f224dfbb9fcf88c"
  },
  {
    "url": "mx/tepehua/grammar/verbs/index.html",
    "revision": "9bf91619c4fc31bafe8eba40cb25257b"
  },
  {
    "url": "mx/tepehua/index.html",
    "revision": "e828d037b15dc3e14cd9d94fd0b329a3"
  },
  {
    "url": "mx/tepehua/vocabulary/animals/index.html",
    "revision": "967e4d8b9fd5e0858fd3b212ec3334ac"
  },
  {
    "url": "mx/tepehua/vocabulary/greetings/index.html",
    "revision": "7749aafcdf4db80310c33eb76276ec57"
  },
  {
    "url": "mx/tepehua/vocabulary/more_used/index.html",
    "revision": "c280b01b1ff9c5cd64606f214401b9c6"
  },
  {
    "url": "mx/tepehua/vocabulary/people/index.html",
    "revision": "e21b8746b5cb72bbab2cbbb64622c66f"
  },
  {
    "url": "mx/tepehua/vocabulary/phrases/index.html",
    "revision": "5d56dded04b253fd3f645f6c17947559"
  },
  {
    "url": "mx/totonaco/courses/basic/index.html",
    "revision": "46622f6816482855f293fdb5863c0a56"
  },
  {
    "url": "mx/totonaco/courses/intermediate/index.html",
    "revision": "0c2f070b81ad20775c61db1321c2aa77"
  },
  {
    "url": "mx/totonaco/dictionary/glossary.html",
    "revision": "e016b7a08db5094d14f76729abb53585"
  },
  {
    "url": "mx/totonaco/dictionary/index.html",
    "revision": "df88dd639d152bddd24b403799257959"
  },
  {
    "url": "mx/totonaco/grammar/adjective/index.html",
    "revision": "159c7e09a268631eeb9f140182d6c38b"
  },
  {
    "url": "mx/totonaco/grammar/adverb/index.html",
    "revision": "8207a230446942460106013d256258d6"
  },
  {
    "url": "mx/totonaco/grammar/alphabet/index.html",
    "revision": "6973fabe5abbe8b7ae81739370fcd391"
  },
  {
    "url": "mx/totonaco/grammar/article/index.html",
    "revision": "0a3c0a12ad8b5c7d189892cd17e2a505"
  },
  {
    "url": "mx/totonaco/grammar/guide/index.html",
    "revision": "d45f6225a49840ee288119a97f02c5da"
  },
  {
    "url": "mx/totonaco/grammar/verbs/index.html",
    "revision": "6aeaa5d6632b3c3e989bade1f004c2c2"
  },
  {
    "url": "mx/totonaco/index.html",
    "revision": "b4b507986ddedfe630f89dfed69134ce"
  },
  {
    "url": "mx/totonaco/vocabulary/animals/index.html",
    "revision": "995d91595e7b3e15dc818e6deb10b6b7"
  },
  {
    "url": "mx/totonaco/vocabulary/greetings/index.html",
    "revision": "9a3b9beb305d235cd5c7349c6e989d8c"
  },
  {
    "url": "mx/totonaco/vocabulary/more_used/index.html",
    "revision": "7ad567083ad669cdd7cea0bb471acb71"
  },
  {
    "url": "mx/totonaco/vocabulary/people/index.html",
    "revision": "cfecd3a0b9d54ffdaad2f182ea76a478"
  },
  {
    "url": "mx/totonaco/vocabulary/phrases/index.html",
    "revision": "e1105656a86d2dd290fb9a243553573f"
  },
  {
    "url": "mx/yaqui/courses/basic/index.html",
    "revision": "c0e124573e6f9b89d9318bb5a43c0de1"
  },
  {
    "url": "mx/yaqui/courses/intermediate/index.html",
    "revision": "8b8829234fba335e7dad338e6f1e38a7"
  },
  {
    "url": "mx/yaqui/dictionary/glossary.html",
    "revision": "bd7c592f037e09062ea2bb2dfe54f7ec"
  },
  {
    "url": "mx/yaqui/dictionary/index.html",
    "revision": "0e8e8dd3f9fa2d3d85aad97933e5ed50"
  },
  {
    "url": "mx/yaqui/grammar/adjective/index.html",
    "revision": "2a3fce9f98ff8d5f97128406d41c4d36"
  },
  {
    "url": "mx/yaqui/grammar/adverb/index.html",
    "revision": "1d5425cb307830a56b5298684453e656"
  },
  {
    "url": "mx/yaqui/grammar/alphabet/index.html",
    "revision": "a63806586594022ad2c21c8da9f9cf35"
  },
  {
    "url": "mx/yaqui/grammar/article/index.html",
    "revision": "d33f3a350a578f803442342daf0750e4"
  },
  {
    "url": "mx/yaqui/grammar/guide/index.html",
    "revision": "2a21bddffab28e14ae04401de3eb9ade"
  },
  {
    "url": "mx/yaqui/grammar/verbs/index.html",
    "revision": "a20c4ca50a139055ee6032adab9013fd"
  },
  {
    "url": "mx/yaqui/index.html",
    "revision": "11decfaf97edfa5056bfc0c9865711c2"
  },
  {
    "url": "mx/yaqui/vocabulary/animals/index.html",
    "revision": "747e05063637dfd68038e251663bd33c"
  },
  {
    "url": "mx/yaqui/vocabulary/greetings/index.html",
    "revision": "f3c3730b8475a8fab5e2eb60633bb844"
  },
  {
    "url": "mx/yaqui/vocabulary/more_used/index.html",
    "revision": "5d8065d9a04ca5c78859e2d977baae0c"
  },
  {
    "url": "mx/yaqui/vocabulary/people/index.html",
    "revision": "3ef5dbabb1aa6e039de654f01c7a8b0d"
  },
  {
    "url": "mx/yaqui/vocabulary/phrases/index.html",
    "revision": "e6be5ddf456e61167f5e6778a0ff5356"
  },
  {
    "url": "mx/zapoteco/courses/basic/index.html",
    "revision": "896f5310a6a7d5bbfd37763194af4956"
  },
  {
    "url": "mx/zapoteco/courses/intermediate/index.html",
    "revision": "46e6cf2d3eca6608338c9436fe657799"
  },
  {
    "url": "mx/zapoteco/dictionary/glossary.html",
    "revision": "227a98b73b79df5fd706964c0adaa401"
  },
  {
    "url": "mx/zapoteco/dictionary/index.html",
    "revision": "ac650dfc92f921447b27dced85d9227c"
  },
  {
    "url": "mx/zapoteco/grammar/adjective/index.html",
    "revision": "c6cba6adb59b8dc02cb1b3bf6263d73e"
  },
  {
    "url": "mx/zapoteco/grammar/adverb/index.html",
    "revision": "3a5ff23746690648e5ea97569b01e59a"
  },
  {
    "url": "mx/zapoteco/grammar/alphabet/index.html",
    "revision": "11d66fcda3d38164efab03a2b404ea9e"
  },
  {
    "url": "mx/zapoteco/grammar/article/index.html",
    "revision": "2dd67305d7035b8b8772017a219bd15b"
  },
  {
    "url": "mx/zapoteco/grammar/guide/index.html",
    "revision": "34d96f7602bd873c48d0be689e319150"
  },
  {
    "url": "mx/zapoteco/grammar/verbs/index.html",
    "revision": "50330d94a58ad58cdac6a94d3862515d"
  },
  {
    "url": "mx/zapoteco/index.html",
    "revision": "34a9ed1ba5bedb9e7d8ae406b840c901"
  },
  {
    "url": "mx/zapoteco/vocabulary/animals/index.html",
    "revision": "40b9d7aeb1fefeb32a009baae317aa29"
  },
  {
    "url": "mx/zapoteco/vocabulary/greetings/index.html",
    "revision": "6354bc36920430ed660367caea4dae36"
  },
  {
    "url": "mx/zapoteco/vocabulary/more_used/index.html",
    "revision": "594ded1e67618320746f4426cbfef9d9"
  },
  {
    "url": "mx/zapoteco/vocabulary/people/index.html",
    "revision": "a60b5aa9a07563fea4cca8b00f5fd277"
  },
  {
    "url": "mx/zapoteco/vocabulary/phrases/index.html",
    "revision": "9b62f35e474709455a32124456d85d58"
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
