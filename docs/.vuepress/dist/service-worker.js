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
    "revision": "1f3ff47922b6a38a63c4ed64c1f0aca3"
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
    "url": "assets/js/10.e3628a40.js",
    "revision": "e7d9820d4b6a2cc654acad0a62401855"
  },
  {
    "url": "assets/js/100.0a2082d8.js",
    "revision": "789b9e1c294751ff05751333253c7205"
  },
  {
    "url": "assets/js/101.3827b652.js",
    "revision": "787a7db9335f5025e6e1a07ac35e3e81"
  },
  {
    "url": "assets/js/102.2a91bb08.js",
    "revision": "9ea67b22df48f4cd40967d7058c8d7f4"
  },
  {
    "url": "assets/js/103.584dd60d.js",
    "revision": "f5564c145bfc6427ccb5e1567cbcd7f5"
  },
  {
    "url": "assets/js/104.459415eb.js",
    "revision": "52cc6d910ec4dd5511831f95f123f0d1"
  },
  {
    "url": "assets/js/105.1c75eaa8.js",
    "revision": "435e9e6afb86853fed2c147f6012a049"
  },
  {
    "url": "assets/js/106.ac069b3c.js",
    "revision": "9d9b759498c7708147701d0ffbfe17a6"
  },
  {
    "url": "assets/js/107.f43161e1.js",
    "revision": "95acefbd3cf7f62e6857e1ce43755a22"
  },
  {
    "url": "assets/js/108.27285cca.js",
    "revision": "be33adc0594b21d1e6834df24bdd2d41"
  },
  {
    "url": "assets/js/109.6913748b.js",
    "revision": "ab0152a0a0179fa98fcc074953d526be"
  },
  {
    "url": "assets/js/11.57c3f95b.js",
    "revision": "4ce5dff0b6e0d35a1b5bc2d1973948e8"
  },
  {
    "url": "assets/js/110.5e79be40.js",
    "revision": "4df62fd12e2be5323dbd528e868a2f84"
  },
  {
    "url": "assets/js/111.3813124c.js",
    "revision": "6e9c7c2d0d7ecf75b971028917121bab"
  },
  {
    "url": "assets/js/112.47173e8c.js",
    "revision": "221e8e2b49a9bbb25303abc7e7852a41"
  },
  {
    "url": "assets/js/113.2af5b2d8.js",
    "revision": "4e9da9101822586729c5e56367eded1e"
  },
  {
    "url": "assets/js/114.fb37137f.js",
    "revision": "bddc26f6938038355e888686cdd4ebda"
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
    "url": "assets/js/117.4f338c32.js",
    "revision": "64af03041da93091f84226ddee7655ab"
  },
  {
    "url": "assets/js/118.2cbe800b.js",
    "revision": "c30c47904089267f2c63f3bcce913a0f"
  },
  {
    "url": "assets/js/119.6549377f.js",
    "revision": "693ed555dae435934938ecebc877e32c"
  },
  {
    "url": "assets/js/12.39f4356a.js",
    "revision": "b237d3882cb47874f8e17706e81fc493"
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
    "url": "assets/js/123.dc5566f3.js",
    "revision": "75d756884305ccf6045f96c2e8a57499"
  },
  {
    "url": "assets/js/124.3a8edfe6.js",
    "revision": "c39c6f4e7abe2c990d6ca28c883f4890"
  },
  {
    "url": "assets/js/125.d9e406fa.js",
    "revision": "734ec5a50d2d7d93878a0fa833c38a9c"
  },
  {
    "url": "assets/js/126.c0299777.js",
    "revision": "feba6895284cee3fa9334a2d58cd9d33"
  },
  {
    "url": "assets/js/127.f20c1f48.js",
    "revision": "743e3a57a42754038126c4b6715e958f"
  },
  {
    "url": "assets/js/128.7d544547.js",
    "revision": "5e3a1484f57382e778666bf2f8b3d834"
  },
  {
    "url": "assets/js/129.901aabee.js",
    "revision": "3706d28751bb359cd076e79a7b3c52dd"
  },
  {
    "url": "assets/js/13.16a2a363.js",
    "revision": "553ac38328ea9f59b63f88129d33fb10"
  },
  {
    "url": "assets/js/130.90d30532.js",
    "revision": "4b2f8a098062891e753cfc7c78422484"
  },
  {
    "url": "assets/js/131.b2a6b15d.js",
    "revision": "3a169fdd526bbc9fd986b387107c63a3"
  },
  {
    "url": "assets/js/132.90969967.js",
    "revision": "24e2096d86660d6c8b9ae67e2083a417"
  },
  {
    "url": "assets/js/133.2f86af0a.js",
    "revision": "e8952e7291869fcc3013d135ff8c551d"
  },
  {
    "url": "assets/js/134.55b78f79.js",
    "revision": "efcd70dbd0ad1f6f2fe2aa8532a6cdb1"
  },
  {
    "url": "assets/js/135.c6d3b02b.js",
    "revision": "11d35cc1e5e41fd7dafb3a5bb7e6e94c"
  },
  {
    "url": "assets/js/136.5a7b1c55.js",
    "revision": "ae3d9724185543ed9f38ab624d7c70bd"
  },
  {
    "url": "assets/js/137.3769c820.js",
    "revision": "111f032473c14dcf96331a6317184325"
  },
  {
    "url": "assets/js/138.3a338eff.js",
    "revision": "7e699ef526aa0860eb01aded73467ad2"
  },
  {
    "url": "assets/js/139.9c0059a0.js",
    "revision": "aca062bc0e1c78bb6570af75e3427187"
  },
  {
    "url": "assets/js/14.e9e008b2.js",
    "revision": "5feb79a6a8d8d9b0f532fd97079005f7"
  },
  {
    "url": "assets/js/140.c353e0d0.js",
    "revision": "f8d418de8b5e000d73814e0d0245c981"
  },
  {
    "url": "assets/js/141.9c9fcc62.js",
    "revision": "137b4278f2044026e88bec9dbc9e2d5c"
  },
  {
    "url": "assets/js/142.55ca6cc6.js",
    "revision": "597d9c1b69a4ab2fbe89b3c33f6d1eb8"
  },
  {
    "url": "assets/js/143.46f8cf9e.js",
    "revision": "dfc10a6897c8fb562c94f26b99113893"
  },
  {
    "url": "assets/js/144.e635a7ba.js",
    "revision": "90a9c9e4b4917a62daaa4aaf7f7c1be3"
  },
  {
    "url": "assets/js/145.f3875de3.js",
    "revision": "9ed8e23c76ec49a512ba79cbe9344780"
  },
  {
    "url": "assets/js/146.4aba607e.js",
    "revision": "d27a00f7f0cc748a5cd462ea1542da46"
  },
  {
    "url": "assets/js/147.7139d6ad.js",
    "revision": "7fb9dbaf7563d4f9c7152fa74b4a1694"
  },
  {
    "url": "assets/js/148.8438ba6e.js",
    "revision": "a86685c67153cb7e2b57c5cbd8826399"
  },
  {
    "url": "assets/js/149.1318e7b7.js",
    "revision": "30952e5417c49c645e92256b596b52e1"
  },
  {
    "url": "assets/js/15.6599e797.js",
    "revision": "9695de6ef4393e0707c697a13330f216"
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
    "url": "assets/js/152.d7850f48.js",
    "revision": "b5a2636c6587c0c02fb50edbe60c27d5"
  },
  {
    "url": "assets/js/153.8cc52438.js",
    "revision": "6db1c1b3e68b9355f79f5fed950c90e3"
  },
  {
    "url": "assets/js/154.debfd919.js",
    "revision": "8f686bd652cd8b6aab871e8e31d29606"
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
    "url": "assets/js/162.38c150ce.js",
    "revision": "cec2811e36237910b6344c50456f58f9"
  },
  {
    "url": "assets/js/163.d4a0b80d.js",
    "revision": "8904d97a918599b18f7d1145ea3e7530"
  },
  {
    "url": "assets/js/164.d86a83a0.js",
    "revision": "f820b06abed6aced68d13e040ce5de3c"
  },
  {
    "url": "assets/js/165.16887c31.js",
    "revision": "68a8455af139d6e01db089b935e9aecf"
  },
  {
    "url": "assets/js/166.3468db64.js",
    "revision": "383183ced8f0c2d7447447503385684e"
  },
  {
    "url": "assets/js/167.5e1fa6c0.js",
    "revision": "4d0082c26fcca60b763696ac725e13e0"
  },
  {
    "url": "assets/js/168.f425f322.js",
    "revision": "ba3be1e70d7269522402748ed18f8965"
  },
  {
    "url": "assets/js/169.4639b4f3.js",
    "revision": "d71b59e5a4c44050436c8f1455c443dc"
  },
  {
    "url": "assets/js/17.a3e2e15f.js",
    "revision": "000a0431efa9ee7a8e902846460ce10f"
  },
  {
    "url": "assets/js/170.2b76a615.js",
    "revision": "a26e64fee152d097f9d5a8ea249f7e16"
  },
  {
    "url": "assets/js/171.e9d4e9d6.js",
    "revision": "bb655af760b6a27c9afbde5fa4fec0d5"
  },
  {
    "url": "assets/js/172.1dda7e6c.js",
    "revision": "ff2942df3c59184b907084331669fd58"
  },
  {
    "url": "assets/js/173.23751378.js",
    "revision": "72c5077fd355922c85c79308212c3fef"
  },
  {
    "url": "assets/js/174.6bb7110d.js",
    "revision": "fe4d415b4a6e35b820e32b03bb559708"
  },
  {
    "url": "assets/js/175.134502f6.js",
    "revision": "c6c734692073fb6ebc461276ca13bdc6"
  },
  {
    "url": "assets/js/176.ba44ea70.js",
    "revision": "11c4b06821cc6720a621b4eae4a941bd"
  },
  {
    "url": "assets/js/177.18fbf734.js",
    "revision": "c5a346dcccf9254ac62c32633ac17fd5"
  },
  {
    "url": "assets/js/178.926bceaf.js",
    "revision": "3eec1dbe442f8805b522a4749c3c6d5c"
  },
  {
    "url": "assets/js/179.9284ae5d.js",
    "revision": "f77b0ef40f25de452fbcaee3fd60f5d5"
  },
  {
    "url": "assets/js/18.08c15640.js",
    "revision": "afa6221c759c83d57d8d961d876734d0"
  },
  {
    "url": "assets/js/180.8fb9e9a9.js",
    "revision": "33f647daf4878dcbe92f69251f8b424c"
  },
  {
    "url": "assets/js/181.ec951dde.js",
    "revision": "52bea14a34e7622e3fbd7327ab3acd3c"
  },
  {
    "url": "assets/js/182.742bee0e.js",
    "revision": "dd43a1606d81580febc88779ceed5c78"
  },
  {
    "url": "assets/js/183.61975fd2.js",
    "revision": "21758c5f0d93a3f7d789a5f6d7fc4278"
  },
  {
    "url": "assets/js/184.cf250be2.js",
    "revision": "16e986ec1e828de8f92b5a2bc06515b9"
  },
  {
    "url": "assets/js/185.3cc37153.js",
    "revision": "51ba61d422ed1f3dbeb03b88ca2f1726"
  },
  {
    "url": "assets/js/186.45f50b95.js",
    "revision": "cf2cbded1d1a1b4633acd0ff599b73ba"
  },
  {
    "url": "assets/js/187.2bb64230.js",
    "revision": "fb286640dc7aff822f3f528d6353c7c5"
  },
  {
    "url": "assets/js/188.12bf4b98.js",
    "revision": "f8c2d43de914328fe86920be33df0044"
  },
  {
    "url": "assets/js/189.9cefd043.js",
    "revision": "ada130fbc7978cf37dca16edf5998fd4"
  },
  {
    "url": "assets/js/19.5a49c334.js",
    "revision": "ddc863726901e418057548a32ff304b4"
  },
  {
    "url": "assets/js/190.f5e241f0.js",
    "revision": "49bfb6f248ed1b88ce2174c78d6d829e"
  },
  {
    "url": "assets/js/191.14b084d9.js",
    "revision": "0eb72f455d7e112848af23dac4f027d9"
  },
  {
    "url": "assets/js/192.5f106d6f.js",
    "revision": "6d6c15c1ca65a968ff95ce8135c7172f"
  },
  {
    "url": "assets/js/193.7e5baa98.js",
    "revision": "58f4cb96fba9705e4e97be160709a28c"
  },
  {
    "url": "assets/js/194.3a06bc31.js",
    "revision": "9086c7fa36a4d4ca042a4ca05dc4ad5a"
  },
  {
    "url": "assets/js/195.bd167bcd.js",
    "revision": "c129ed8ada7f2c5c92c160c75ede7f7b"
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
    "url": "assets/js/198.a47313f6.js",
    "revision": "060474b1bda26fd9f322da6e20d10d6b"
  },
  {
    "url": "assets/js/199.6741f684.js",
    "revision": "0cba71378ef929dd1681fd11fd5ca628"
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
    "url": "assets/js/201.6b895e05.js",
    "revision": "2e3b7bbf1c23e56d115de358dabf4d47"
  },
  {
    "url": "assets/js/202.68e669f4.js",
    "revision": "a199a302deaff41e8ff17556b4883bd1"
  },
  {
    "url": "assets/js/203.79a5799c.js",
    "revision": "27dbd299ebc10a489674857af4a7b86c"
  },
  {
    "url": "assets/js/204.b5fbd31f.js",
    "revision": "58485e1dacfdaa419dae4399c6ee6cb3"
  },
  {
    "url": "assets/js/205.5a87abd9.js",
    "revision": "491f6e1a8d1ee5ee3d7a84af59027409"
  },
  {
    "url": "assets/js/206.594d4af3.js",
    "revision": "aa2a15d3f9ed6eda4fdd36837e124c69"
  },
  {
    "url": "assets/js/207.e185621a.js",
    "revision": "54a9f9f5f439cb3e141ccd0503dae603"
  },
  {
    "url": "assets/js/208.161f8e9d.js",
    "revision": "3cc935d6c9ebdc373918257f41ddb59b"
  },
  {
    "url": "assets/js/209.dbadc451.js",
    "revision": "ca974b0e31d74aad05610f1ab2e4c9b9"
  },
  {
    "url": "assets/js/21.a357a4e0.js",
    "revision": "6dd0ea44a2dbd6a2e15bb1273478d8d3"
  },
  {
    "url": "assets/js/210.1c31ffb2.js",
    "revision": "9bb2cefd471493f011ca15212d40a113"
  },
  {
    "url": "assets/js/211.455f64ce.js",
    "revision": "24cc4d7a610831fc2732918d13e998cd"
  },
  {
    "url": "assets/js/212.cc1dc006.js",
    "revision": "532a5b7aef11db8ad2cad167c7dd31e0"
  },
  {
    "url": "assets/js/213.76ec5b4d.js",
    "revision": "58cda174a823222c77b71f7223d0e40b"
  },
  {
    "url": "assets/js/214.1835a2d6.js",
    "revision": "b7a7b59d94d47605a508349ee3cdd284"
  },
  {
    "url": "assets/js/215.4030efc9.js",
    "revision": "2fcb78f0c4914ae067168cc538b01721"
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
    "url": "assets/js/220.f1a1c38b.js",
    "revision": "5f1159ac06d1fbfc12bc5aad6783bb43"
  },
  {
    "url": "assets/js/221.0d5566ab.js",
    "revision": "77f617740de20509b644fc22c1ad31f1"
  },
  {
    "url": "assets/js/222.769ec46b.js",
    "revision": "4e0976df2ba8c37a2fa37ba71f15878e"
  },
  {
    "url": "assets/js/223.3751781f.js",
    "revision": "5db91a51ee66c66fd5c3ae6c0689eed3"
  },
  {
    "url": "assets/js/224.df67d835.js",
    "revision": "187f6936cd5cefd15b2d123e569f5f2f"
  },
  {
    "url": "assets/js/225.5c7f7c27.js",
    "revision": "859039731412b0ab02edf31682f6edf7"
  },
  {
    "url": "assets/js/226.3821dc30.js",
    "revision": "87f4ee1bb1bb580e59e4f9d03781acf0"
  },
  {
    "url": "assets/js/227.fc9c766a.js",
    "revision": "2b5dd354d50feb762f487ba9a1ca233e"
  },
  {
    "url": "assets/js/228.1a869cbb.js",
    "revision": "83727b6214e6650e26e7da96bbe5629e"
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
    "url": "assets/js/230.07ecfcc9.js",
    "revision": "7b594a350f11318734617aa34bc3cc99"
  },
  {
    "url": "assets/js/231.e802a588.js",
    "revision": "53d35c7f42cc8631ce24b30e3c3c6d37"
  },
  {
    "url": "assets/js/232.ec64c74d.js",
    "revision": "33e0f077b51320c9d09bc8da89d77751"
  },
  {
    "url": "assets/js/233.7c92ed24.js",
    "revision": "5e0ef08416136a6bb6ca426b410c2996"
  },
  {
    "url": "assets/js/234.2cf5be8d.js",
    "revision": "261381089e31ccb11f005d45f7906827"
  },
  {
    "url": "assets/js/235.64e1422c.js",
    "revision": "0368748f979bc09a62fc364efede7a48"
  },
  {
    "url": "assets/js/236.55a3cb0b.js",
    "revision": "ed326d1259701d471e40cf31f48f8558"
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
    "url": "assets/js/240.7a0b4d6d.js",
    "revision": "6722d615cbac8215a664647138f26121"
  },
  {
    "url": "assets/js/241.d4a960fa.js",
    "revision": "ad0b6cb42d25c90881b85c53fdffbaa0"
  },
  {
    "url": "assets/js/242.833c3734.js",
    "revision": "6b6efbe4ec1cdd8bae46d75d43a11396"
  },
  {
    "url": "assets/js/243.95719049.js",
    "revision": "df47e755defe018ba91ad319b916badf"
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
    "url": "assets/js/250.95b92c69.js",
    "revision": "2a5102812a5201b77430c8018b893ae0"
  },
  {
    "url": "assets/js/251.b725d4cf.js",
    "revision": "bae76f873299caf7cd2f2281a8e544f0"
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
    "url": "assets/js/254.ddfa72d8.js",
    "revision": "6fdbb1094ca1783993b87f6d9cd13d63"
  },
  {
    "url": "assets/js/255.8722dc3d.js",
    "revision": "fc15382e50f866db74788e43c8fcee5d"
  },
  {
    "url": "assets/js/256.848d7cb5.js",
    "revision": "b7220436f93b9ebcb5c38cdafb065775"
  },
  {
    "url": "assets/js/257.202134a5.js",
    "revision": "4911f44cadeab7470cf2871942369ecc"
  },
  {
    "url": "assets/js/258.a636a9b2.js",
    "revision": "f60202ea417c7dfd8f44237b7e4b4803"
  },
  {
    "url": "assets/js/259.a4fbc062.js",
    "revision": "50b93fcc30432ac1822523cb148d1103"
  },
  {
    "url": "assets/js/26.ae364930.js",
    "revision": "8147fef01171e9ed91b0377d97628721"
  },
  {
    "url": "assets/js/260.af141f2e.js",
    "revision": "9a3c0b37c97cf37ca74f3c0ce7cb8ae3"
  },
  {
    "url": "assets/js/261.19142a58.js",
    "revision": "294655b975a6ec7d2813e4222e80339e"
  },
  {
    "url": "assets/js/262.72809c8d.js",
    "revision": "63f1200a02715af57c5223655e4aedb0"
  },
  {
    "url": "assets/js/263.b82c28d2.js",
    "revision": "6e6bb27e3b149a226b59a488ddff609c"
  },
  {
    "url": "assets/js/264.24f56bb0.js",
    "revision": "d67865cb18764989c2e418386ecd7075"
  },
  {
    "url": "assets/js/265.6e62c155.js",
    "revision": "df116f5e85ee954e0cc541204187b1c8"
  },
  {
    "url": "assets/js/266.dba01e6d.js",
    "revision": "6fa036994cc1602bca2ca9f6a4163f8d"
  },
  {
    "url": "assets/js/267.4fe6ad54.js",
    "revision": "e698b32147af38f773451cc04cbaae0c"
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
    "url": "assets/js/273.090a0b6a.js",
    "revision": "d8c35f5a19e20f45d6a60c56d45b6a14"
  },
  {
    "url": "assets/js/274.ebbbaf27.js",
    "revision": "b1239383aa0e7a435f560c0c901e86be"
  },
  {
    "url": "assets/js/275.f46f8ea7.js",
    "revision": "b31109da7907310125408f8659352135"
  },
  {
    "url": "assets/js/276.2b974953.js",
    "revision": "e3380c664a42ad872b0e40703e1a1380"
  },
  {
    "url": "assets/js/277.e88c74bc.js",
    "revision": "88482b6a9a6493d63a5ee2b4e628bef4"
  },
  {
    "url": "assets/js/278.b65c4d37.js",
    "revision": "d32f6599221ebc86aed6c5f77c038534"
  },
  {
    "url": "assets/js/279.fdd98cac.js",
    "revision": "b1cecc634bc77db4ac0b7c9e96b2d264"
  },
  {
    "url": "assets/js/28.9cfa31f1.js",
    "revision": "93989a026fc9d73369b81309bb241760"
  },
  {
    "url": "assets/js/280.4906f212.js",
    "revision": "b297e7b3cb9352cc09dad347c4df853d"
  },
  {
    "url": "assets/js/281.ddd6df90.js",
    "revision": "981479ae4f1259843838b2f920a20dcf"
  },
  {
    "url": "assets/js/282.467c59e1.js",
    "revision": "b6f807e0ef95a309d4ab293d65bca5e1"
  },
  {
    "url": "assets/js/283.2d1fda26.js",
    "revision": "139814f2f73256ef5b7aa8f6190f265c"
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
    "url": "assets/js/286.08c4ce02.js",
    "revision": "a607984d517adc9f2ca5ab7b295ba6a8"
  },
  {
    "url": "assets/js/287.386b10b4.js",
    "revision": "5485de461022f5df9d66cee83d1ddf44"
  },
  {
    "url": "assets/js/288.c4de001d.js",
    "revision": "c570fe1dbc7ef148e35569d496f5b494"
  },
  {
    "url": "assets/js/289.974c06b7.js",
    "revision": "7a4bd7d16b02c6a240c96b22330f1def"
  },
  {
    "url": "assets/js/29.30d55647.js",
    "revision": "89ea66994f848154bd958c447bedfbbf"
  },
  {
    "url": "assets/js/290.3cb0e39a.js",
    "revision": "43b9761994bf3280c3229f57b6faf781"
  },
  {
    "url": "assets/js/291.67aa3286.js",
    "revision": "68ccfe88cf69a7195be5b4f393a14b0c"
  },
  {
    "url": "assets/js/292.d7e2c014.js",
    "revision": "7668ef466eb42f70200dd15ae3115d7e"
  },
  {
    "url": "assets/js/293.1d7b6030.js",
    "revision": "9db38298f61b183d80132c0314a88345"
  },
  {
    "url": "assets/js/294.4f94bb6d.js",
    "revision": "a7e672cd62847c4a75b0731e95a70b1a"
  },
  {
    "url": "assets/js/295.f235d38f.js",
    "revision": "84e1d50e735cd56e80d53afcf9848013"
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
    "url": "assets/js/299.57cb7176.js",
    "revision": "66b72564ce3e8df79ac13254c4aed803"
  },
  {
    "url": "assets/js/3.7ba7d1f1.js",
    "revision": "88420c3b378f1ff7ec0f9c83d1ffce32"
  },
  {
    "url": "assets/js/30.3689aa65.js",
    "revision": "ccce172845e2f7adebdd7b448e52dff5"
  },
  {
    "url": "assets/js/300.4fa5bc33.js",
    "revision": "ae740c10d431e914c0671f804fbf11a8"
  },
  {
    "url": "assets/js/301.224e37e1.js",
    "revision": "c69e3b5476d2e15f395bdfe20c7e5381"
  },
  {
    "url": "assets/js/302.b6467b86.js",
    "revision": "60d1ddb9ec53ddc31357f8d06df9c9d2"
  },
  {
    "url": "assets/js/303.f585c6c1.js",
    "revision": "097419709094c7d5cb3e69228814b29d"
  },
  {
    "url": "assets/js/304.3215ef82.js",
    "revision": "c3445b73d962cbb24c9cf34edaa5f71f"
  },
  {
    "url": "assets/js/305.82bcbbe6.js",
    "revision": "0341c2b74bdf9a0a7cecfa418b251fcf"
  },
  {
    "url": "assets/js/306.62f73ef9.js",
    "revision": "b128125c327f14e0220990059141c65a"
  },
  {
    "url": "assets/js/307.624e0aa4.js",
    "revision": "a400ac87efa9c9aa80f834347aa14652"
  },
  {
    "url": "assets/js/308.cd8b78bc.js",
    "revision": "8a6046e7df33cbf9be055a7e8f414cd4"
  },
  {
    "url": "assets/js/309.f7483f1c.js",
    "revision": "417cdd4cf1ad731c3c5ab6b57e9bd316"
  },
  {
    "url": "assets/js/31.615d79fd.js",
    "revision": "b94e2a5ab247adc3b67d3fd6f447cc9b"
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
    "url": "assets/js/32.840a7979.js",
    "revision": "a7f9b70be65000085516f1633888cfa7"
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
    "url": "assets/js/35.a6aeee5e.js",
    "revision": "e5a2da6491b846602da3967b3f0fd451"
  },
  {
    "url": "assets/js/36.9039bf42.js",
    "revision": "2f96265f18cb05f3502b2b899dbf61ba"
  },
  {
    "url": "assets/js/37.67ea5fad.js",
    "revision": "e21573389d77013edba11baffc8491ab"
  },
  {
    "url": "assets/js/38.556eaf8d.js",
    "revision": "c3ce494256f39f45de715752c8e2b6c5"
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
    "url": "assets/js/40.233697cc.js",
    "revision": "f41474d5f5e1a561ad320ac257fd7e90"
  },
  {
    "url": "assets/js/41.41654649.js",
    "revision": "5c43584aa60230b7086db13f909e5fa9"
  },
  {
    "url": "assets/js/42.340c716b.js",
    "revision": "ba1c112479c778eb27e1d3815fee5fa5"
  },
  {
    "url": "assets/js/43.96309fb5.js",
    "revision": "fd742217e9b40af475c5d992b97d3e03"
  },
  {
    "url": "assets/js/44.7f9073db.js",
    "revision": "3653f03d862d5625df7fda1150c40d1b"
  },
  {
    "url": "assets/js/45.4844a160.js",
    "revision": "75e93104f54924a9bb0eebc7c7c6cd7b"
  },
  {
    "url": "assets/js/46.9967613c.js",
    "revision": "1e65a7885f9bc0adf7084ae69142a351"
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
    "url": "assets/js/49.2cb3d816.js",
    "revision": "8790a2e7c9cb50e7419def6c5ed86bfb"
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
    "url": "assets/js/51.5db9228e.js",
    "revision": "7a01db730450064d032453a3383247f2"
  },
  {
    "url": "assets/js/52.d342a866.js",
    "revision": "17cf0eb62f1e8aa5d28ff6865b31e044"
  },
  {
    "url": "assets/js/53.a5bec445.js",
    "revision": "0b5a390503cfef8d6a37be71a7e009ae"
  },
  {
    "url": "assets/js/54.ff2b104a.js",
    "revision": "0e5a43618254a76bfa5fed4795fc9766"
  },
  {
    "url": "assets/js/55.2f8eb373.js",
    "revision": "3de4b2b3f0bce167959a96dbb4d8ac3b"
  },
  {
    "url": "assets/js/56.e85a48f6.js",
    "revision": "0f222337089a439fd8d0b9306f1ca951"
  },
  {
    "url": "assets/js/57.32360ecf.js",
    "revision": "40e59bad6adb769a7aee25953371ce85"
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
    "url": "assets/js/6.139c4d56.js",
    "revision": "f39a11bae34a343a74563b241c11d840"
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
    "url": "assets/js/63.e3f766cc.js",
    "revision": "b3a0b7326b463413af6241c7b5ead211"
  },
  {
    "url": "assets/js/64.ff13e14c.js",
    "revision": "80f403268df3a09f0603c1dc79793a93"
  },
  {
    "url": "assets/js/65.a0156f79.js",
    "revision": "345ca6ea30a8f18d21ec099c88125b13"
  },
  {
    "url": "assets/js/66.db743ac4.js",
    "revision": "1f5c934a7b471623b379046a3b3c2197"
  },
  {
    "url": "assets/js/67.fd367084.js",
    "revision": "f653fdd01df75fa095f185900093b742"
  },
  {
    "url": "assets/js/68.d393f7cb.js",
    "revision": "5a0a8f9496049983f2f13568ad079c12"
  },
  {
    "url": "assets/js/69.73dbebb6.js",
    "revision": "bfcb2b8c12071271cc0ad80e147ae3f2"
  },
  {
    "url": "assets/js/7.00bab86b.js",
    "revision": "615c938176ca22695549535b04a0bde9"
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
    "url": "assets/js/73.8ff52606.js",
    "revision": "21f200407cee4dee452bf8ab493b102a"
  },
  {
    "url": "assets/js/74.948b3a58.js",
    "revision": "f8991f77fd44863fb0281bcc9ea40d18"
  },
  {
    "url": "assets/js/75.91f0ac68.js",
    "revision": "1adcb8694c77db1d73205d452b941687"
  },
  {
    "url": "assets/js/76.99dd1a7f.js",
    "revision": "ecbb58fa0b8dcfddfcb4cdf090d561fd"
  },
  {
    "url": "assets/js/77.96a3a9f4.js",
    "revision": "fe56ab96ae536e36286fa4eba3e62992"
  },
  {
    "url": "assets/js/78.b8e83691.js",
    "revision": "24e81abbc299a0a653500ef3932b89de"
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
    "url": "assets/js/81.96e72ab4.js",
    "revision": "a6674178b5eee5da863a0f394757ee96"
  },
  {
    "url": "assets/js/82.192c34ff.js",
    "revision": "415d8d81da66eaa0daf0ef2aca95b658"
  },
  {
    "url": "assets/js/83.6e06e1b0.js",
    "revision": "d0fed6b5340ba2266fbb6b9b7e145a68"
  },
  {
    "url": "assets/js/84.5a00512f.js",
    "revision": "b6fabf8049a9ce3d604f00e0c5a79f6c"
  },
  {
    "url": "assets/js/85.16635f0f.js",
    "revision": "dc2c9703aa02261b83cbea286e03d685"
  },
  {
    "url": "assets/js/86.76b46b06.js",
    "revision": "31ee778c6b562282b7bf957d511c2cd8"
  },
  {
    "url": "assets/js/87.56d3dba7.js",
    "revision": "009baf60a1af7c206cea7184f28b03c9"
  },
  {
    "url": "assets/js/88.a804a607.js",
    "revision": "50aefe2169f3f7a2acb187ab2175d9c0"
  },
  {
    "url": "assets/js/89.b0c644b6.js",
    "revision": "15011d078d2c7f912f1f98429ff052c1"
  },
  {
    "url": "assets/js/9.c5f82c22.js",
    "revision": "74956a861fecf21f184c8e6b445f9af7"
  },
  {
    "url": "assets/js/90.eda36b3e.js",
    "revision": "991697674a5d38dbb4dd74e9867af059"
  },
  {
    "url": "assets/js/91.67e9a19f.js",
    "revision": "2d19ec4057b64b477817399bd72d1324"
  },
  {
    "url": "assets/js/92.ea5b0e87.js",
    "revision": "baa328f22b29647d7bbb66947ef19e49"
  },
  {
    "url": "assets/js/93.599334f2.js",
    "revision": "f0ec22f46bd24cfcbe420f15d60157d3"
  },
  {
    "url": "assets/js/94.a0137b2f.js",
    "revision": "ad13bbc34290080abbee4ef9817650cd"
  },
  {
    "url": "assets/js/95.b30c986b.js",
    "revision": "a26b9250d14bff9857b3b7681a7d2fb2"
  },
  {
    "url": "assets/js/96.68b9a46f.js",
    "revision": "c0a0892646df5f834f57fb363c81de89"
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
    "url": "assets/js/99.d40b945f.js",
    "revision": "a54d8274c54e29f884e00401eab8127d"
  },
  {
    "url": "assets/js/app.70390cac.js",
    "revision": "b092cc322cb6026cc9a1b00d898ea07c"
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
    "revision": "16152b276b816edf3dc648a3857efc09"
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
    "revision": "841f395948c156bb062dce620cbf8281"
  },
  {
    "url": "mx/cora/courses/intermediate/index.html",
    "revision": "74f8073fcd085563a18095f10faf39cb"
  },
  {
    "url": "mx/cora/dictionary/glossary.html",
    "revision": "83db1eb44c551f472943ccd91295f054"
  },
  {
    "url": "mx/cora/dictionary/index.html",
    "revision": "193741f42d750bfb7b7debf439e2d21a"
  },
  {
    "url": "mx/cora/grammar/adjective/index.html",
    "revision": "cc1fffd070d9bbdf285bc53cc5e4cbc3"
  },
  {
    "url": "mx/cora/grammar/adverb/index.html",
    "revision": "6033c521a2d4db731d40671647a490b2"
  },
  {
    "url": "mx/cora/grammar/alphabet/index.html",
    "revision": "e45e767aa66293024fa2839302594a33"
  },
  {
    "url": "mx/cora/grammar/article/index.html",
    "revision": "dc8552697cc2cc7fff14d2585ce32777"
  },
  {
    "url": "mx/cora/grammar/guide/index.html",
    "revision": "3f130534c7d94af1cbcf674ad0a3588f"
  },
  {
    "url": "mx/cora/grammar/verbs/index.html",
    "revision": "849eacb4d7fae91296ed98d319435d42"
  },
  {
    "url": "mx/cora/vocabulary/animals/index.html",
    "revision": "8900d2d8d9190a174c625080598d9d47"
  },
  {
    "url": "mx/cora/vocabulary/greetings/index.html",
    "revision": "e9d51f26860034de18de3b299ffdf693"
  },
  {
    "url": "mx/cora/vocabulary/more_used/index.html",
    "revision": "4539e960f0249eeebbb18333edb8aacf"
  },
  {
    "url": "mx/cora/vocabulary/people/index.html",
    "revision": "b62b10ea0a24fd86792d39c280eca76a"
  },
  {
    "url": "mx/cora/vocabulary/phrases/index.html",
    "revision": "6efb299af1072214d4cb47d32bc51acd"
  },
  {
    "url": "mx/guarijio/courses/basic/index.html",
    "revision": "3f2f2102798555a9e25bcf15a0d38d8d"
  },
  {
    "url": "mx/guarijio/courses/intermediate/index.html",
    "revision": "17f188107496f0484f3c953579169036"
  },
  {
    "url": "mx/guarijio/dictionary/glossary.html",
    "revision": "9cc5ff1176e1ae9f4ccbde9466aa7f7d"
  },
  {
    "url": "mx/guarijio/dictionary/index.html",
    "revision": "2d35e45799650a6fdaaca30ee42c11f1"
  },
  {
    "url": "mx/guarijio/grammar/adjective/index.html",
    "revision": "1676643515d66de854354ed320c9cf8b"
  },
  {
    "url": "mx/guarijio/grammar/adverb/index.html",
    "revision": "dbe8614402cd9b3d57b8b9c531f96e61"
  },
  {
    "url": "mx/guarijio/grammar/alphabet/index.html",
    "revision": "80719fcb46af4684fb33f29ef7e0c93d"
  },
  {
    "url": "mx/guarijio/grammar/article/index.html",
    "revision": "257552859e4daac79bb4d99d98df3dd9"
  },
  {
    "url": "mx/guarijio/grammar/guide/index.html",
    "revision": "b1983437414eeb8c113df499cf01131a"
  },
  {
    "url": "mx/guarijio/grammar/verbs/index.html",
    "revision": "8494913931431665e7247f9d2bcead2b"
  },
  {
    "url": "mx/guarijio/index.html",
    "revision": "8fc0c37584bda4b806083bb26e41ab31"
  },
  {
    "url": "mx/guarijio/vocabulary/animals/index.html",
    "revision": "85956565068a96f4613e3a4c1062f771"
  },
  {
    "url": "mx/guarijio/vocabulary/greetings/index.html",
    "revision": "a89b06b5aa10725426b01ade4ce2f250"
  },
  {
    "url": "mx/guarijio/vocabulary/more_used/index.html",
    "revision": "4ac850dfb58baa7c93433312d9cb0df9"
  },
  {
    "url": "mx/guarijio/vocabulary/people/index.html",
    "revision": "053212f528d2a75907c2e5410b299113"
  },
  {
    "url": "mx/guarijio/vocabulary/phrases/index.html",
    "revision": "be43ea6775fd478d29ece6795cee19fa"
  },
  {
    "url": "mx/huichol/courses/basic/index.html",
    "revision": "0977d0624326ed9d66cbcb28cdffd123"
  },
  {
    "url": "mx/huichol/courses/intermediate/index.html",
    "revision": "372e8e2e808b0108fb55938eb35372e8"
  },
  {
    "url": "mx/huichol/dictionary/glossary.html",
    "revision": "6b6c6a2b4fddc4580998b18fc24f11d1"
  },
  {
    "url": "mx/huichol/dictionary/index.html",
    "revision": "acd384063b3dd9e5bf0b4b1935ea12db"
  },
  {
    "url": "mx/huichol/grammar/adjective/index.html",
    "revision": "d0a84d31a64afea1504658aa1ad5325a"
  },
  {
    "url": "mx/huichol/grammar/adverb/index.html",
    "revision": "bb7cd37714bba404e77bddfd28dc6806"
  },
  {
    "url": "mx/huichol/grammar/alphabet/index.html",
    "revision": "6cd2be20798a74623ff579918cc215c7"
  },
  {
    "url": "mx/huichol/grammar/article/index.html",
    "revision": "0c3590f3e413661762e6394015a3178a"
  },
  {
    "url": "mx/huichol/grammar/guide/index.html",
    "revision": "0f2b540a18fcfcb6021df0cfee4b59f3"
  },
  {
    "url": "mx/huichol/grammar/verbs/index.html",
    "revision": "e630e762fc76f0f3e4b28764cdbed007"
  },
  {
    "url": "mx/huichol/index.html",
    "revision": "5faf40219a270954c8b82885807721d6"
  },
  {
    "url": "mx/huichol/vocabulary/animals/index.html",
    "revision": "8548728d0cdc0e94b39464cffaa9dc9e"
  },
  {
    "url": "mx/huichol/vocabulary/greetings/index.html",
    "revision": "39bb375fd136a4fd0debd3dd6d36e4bd"
  },
  {
    "url": "mx/huichol/vocabulary/more_used/index.html",
    "revision": "a3fc2c3c438a452644d919b1c34b49f7"
  },
  {
    "url": "mx/huichol/vocabulary/people/index.html",
    "revision": "16c8fb9601d21c5c0b2c837b69673f90"
  },
  {
    "url": "mx/huichol/vocabulary/phrases/index.html",
    "revision": "6a824857772e29b1c28ae3322c61568f"
  },
  {
    "url": "mx/mayo/courses/basic/index.html",
    "revision": "17d5016be57d1f644e873ad40daba497"
  },
  {
    "url": "mx/mayo/courses/intermediate/index.html",
    "revision": "8c3cdbbd2e8b5a69c0a52697b5601293"
  },
  {
    "url": "mx/mayo/dictionary/glossary.html",
    "revision": "8b5db1659606231ddc39e418c23aa279"
  },
  {
    "url": "mx/mayo/dictionary/index.html",
    "revision": "7665ed47af8aa7262fb1076c501c745b"
  },
  {
    "url": "mx/mayo/grammar/adjective/index.html",
    "revision": "949fd86742d7855d6da53f61f47c6ba3"
  },
  {
    "url": "mx/mayo/grammar/adverb/index.html",
    "revision": "b1be0daa9702b277b3e3aac8e1833b43"
  },
  {
    "url": "mx/mayo/grammar/alphabet/index.html",
    "revision": "b9c6a700c13f26760d5494f9f1254da5"
  },
  {
    "url": "mx/mayo/grammar/article/index.html",
    "revision": "3b4cc7345950efb02ce71a35373fb3ff"
  },
  {
    "url": "mx/mayo/grammar/guide/index.html",
    "revision": "42da46f3a0b00a03212be912e4403fc4"
  },
  {
    "url": "mx/mayo/grammar/verbs/index.html",
    "revision": "24b591f97623ae5aee7ac4ed06b6c027"
  },
  {
    "url": "mx/mayo/index.html",
    "revision": "b7f95276ec29460d1211a9dae6ba6e94"
  },
  {
    "url": "mx/mayo/vocabulary/animals/index.html",
    "revision": "9c03393af1daee4841dc07e96072f2c6"
  },
  {
    "url": "mx/mayo/vocabulary/greetings/index.html",
    "revision": "c06630701767e4ebebce654df7bdb17d"
  },
  {
    "url": "mx/mayo/vocabulary/more_used/index.html",
    "revision": "4df2751b037c13d83734c6456d72e6b2"
  },
  {
    "url": "mx/mayo/vocabulary/people/index.html",
    "revision": "a8dcbf8794fe06df4019b58a8c27c2d4"
  },
  {
    "url": "mx/mayo/vocabulary/phrases/index.html",
    "revision": "4a9a2ef58cb7f3d742ae4c5f7e047af1"
  },
  {
    "url": "mx/mazateco/courses/basic/index.html",
    "revision": "538e46c5b5df2eac0f19a04da27f9cd3"
  },
  {
    "url": "mx/mazateco/courses/intermediate/index.html",
    "revision": "0df75d61928bdef49950caee8b654c38"
  },
  {
    "url": "mx/mazateco/dictionary/glossary.html",
    "revision": "00ec133feba657769f5f5c5e4278d4bf"
  },
  {
    "url": "mx/mazateco/dictionary/index.html",
    "revision": "eba939c90b661a7fd29958131cac4e4e"
  },
  {
    "url": "mx/mazateco/grammar/adjective/index.html",
    "revision": "5c163b1031a1481c74eb9140b665933f"
  },
  {
    "url": "mx/mazateco/grammar/adverb/index.html",
    "revision": "6afb872ed29bcbe7e738b82d0920f387"
  },
  {
    "url": "mx/mazateco/grammar/alphabet/index.html",
    "revision": "aed380405c752a7bb9f80867029ecdf3"
  },
  {
    "url": "mx/mazateco/grammar/article/index.html",
    "revision": "e2c074300d696487ff6cd079e64f878e"
  },
  {
    "url": "mx/mazateco/grammar/guide/index.html",
    "revision": "d020d1f216aa6c829ee9448db940775f"
  },
  {
    "url": "mx/mazateco/grammar/verbs/index.html",
    "revision": "6b55d06faf01f40a7b23d6aba97a2dfc"
  },
  {
    "url": "mx/mazateco/index.html",
    "revision": "7aa48a7c3d41274ad676486502526ee5"
  },
  {
    "url": "mx/mazateco/vocabulary/animals/index.html",
    "revision": "73d60b7e6d97a64f63616bd4fa78fe6f"
  },
  {
    "url": "mx/mazateco/vocabulary/greetings/index.html",
    "revision": "9bff3f467cebb47b7df289eb720c1206"
  },
  {
    "url": "mx/mazateco/vocabulary/more_used/index.html",
    "revision": "cb8a10a8b4af28edd6ac54ced037b51f"
  },
  {
    "url": "mx/mazateco/vocabulary/people/index.html",
    "revision": "e28f4206dc20700a455732ed615f9a41"
  },
  {
    "url": "mx/mazateco/vocabulary/phrases/index.html",
    "revision": "325354b6cbd2fdf5182f3634dff5f31a"
  },
  {
    "url": "mx/mixteco/courses/basic/index.html",
    "revision": "d753c99c4510d9805e3483a4cebbac8c"
  },
  {
    "url": "mx/mixteco/courses/intermediate/index.html",
    "revision": "5e8ceb23eecc88159b6668cbe7785a24"
  },
  {
    "url": "mx/mixteco/dictionary/glossary.html",
    "revision": "890770fce1edf09d63003b0ab761252e"
  },
  {
    "url": "mx/mixteco/dictionary/index.html",
    "revision": "d6c1fb2b79db0e3bc3a4825de5caa0b9"
  },
  {
    "url": "mx/mixteco/grammar/adjective/index.html",
    "revision": "b15e5b74e233bae070f7c196ecd77518"
  },
  {
    "url": "mx/mixteco/grammar/adverb/index.html",
    "revision": "f4ccd5bb94174c76462ffa1ef4c6b5b1"
  },
  {
    "url": "mx/mixteco/grammar/alphabet/index.html",
    "revision": "331c41de69c572ee2daeb6687ee31c35"
  },
  {
    "url": "mx/mixteco/grammar/article/index.html",
    "revision": "3418933b51f024ff117df6beea29a81a"
  },
  {
    "url": "mx/mixteco/grammar/guide/index.html",
    "revision": "4a49e2c9d89a9d90d6169ddf336c65a3"
  },
  {
    "url": "mx/mixteco/grammar/verbs/index.html",
    "revision": "6c38383f8b10c91e5ad7b12b633b312a"
  },
  {
    "url": "mx/mixteco/index.html",
    "revision": "a72895bef10af65abeeaebe6dcc45d82"
  },
  {
    "url": "mx/mixteco/vocabulary/animals/index.html",
    "revision": "441b1f475edb2091cebaa5b6411c770c"
  },
  {
    "url": "mx/mixteco/vocabulary/greetings/index.html",
    "revision": "7d9a49f58a1bd1e65095662e98d9e3b4"
  },
  {
    "url": "mx/mixteco/vocabulary/more_used/index.html",
    "revision": "f6f314a2be9cef24ba74feb89cd76147"
  },
  {
    "url": "mx/mixteco/vocabulary/people/index.html",
    "revision": "225358735278c3146c72651acb0c980c"
  },
  {
    "url": "mx/mixteco/vocabulary/phrases/index.html",
    "revision": "ac2c016d9e1ae1206cb4465710e34a4b"
  },
  {
    "url": "mx/nahuatl/courses/basic/index.html",
    "revision": "f8a8accd000d5f48761dd41dc331a220"
  },
  {
    "url": "mx/nahuatl/courses/intermediate/index.html",
    "revision": "a14cdeb2f7aa65a9073a6b705e23585b"
  },
  {
    "url": "mx/nahuatl/dictionary/glossary.html",
    "revision": "40130db7a335044f5dd5178949379f1f"
  },
  {
    "url": "mx/nahuatl/dictionary/index.html",
    "revision": "cc978c081e88e63ff82a4738634edb66"
  },
  {
    "url": "mx/nahuatl/grammar/adjective/index.html",
    "revision": "07ab25efecd8f7a8e1c80d5361b6d504"
  },
  {
    "url": "mx/nahuatl/grammar/adverb/index.html",
    "revision": "ee483c8de61c9210067d6f131e29cf04"
  },
  {
    "url": "mx/nahuatl/grammar/alphabet/index.html",
    "revision": "6a03fbc3ecdb31be08e7a49b8ed02626"
  },
  {
    "url": "mx/nahuatl/grammar/article/index.html",
    "revision": "be29bc83a332171e2b50469856420acd"
  },
  {
    "url": "mx/nahuatl/grammar/guide/index.html",
    "revision": "651a6c0b83fa3319ba26f1e9048bbc40"
  },
  {
    "url": "mx/nahuatl/grammar/verbs/index.html",
    "revision": "9d310de0623c436f520121962df69300"
  },
  {
    "url": "mx/nahuatl/index.html",
    "revision": "e1043fad9380c0d87b1ffbd3ff207b82"
  },
  {
    "url": "mx/nahuatl/vocabulary/animals/index.html",
    "revision": "07b1bd9936ac41d23aa486b7b1753d00"
  },
  {
    "url": "mx/nahuatl/vocabulary/greetings/index.html",
    "revision": "4e7e9cd421742a13d37143a0a56a2b5e"
  },
  {
    "url": "mx/nahuatl/vocabulary/more_used/index.html",
    "revision": "d50da831a3bd94d3e98386afc5c412ec"
  },
  {
    "url": "mx/nahuatl/vocabulary/people/index.html",
    "revision": "63e2726c5c73ea97f6bb56c72eee1be9"
  },
  {
    "url": "mx/nahuatl/vocabulary/phrases/index.html",
    "revision": "5f100554c6efbea107ce3e35d7263985"
  },
  {
    "url": "mx/otomi/courses/basic/index.html",
    "revision": "bd626d21d1adf1d557aaf825d6e5acc0"
  },
  {
    "url": "mx/otomi/courses/intermediate/index.html",
    "revision": "2730d00493986a286ec2bc5870a466b0"
  },
  {
    "url": "mx/otomi/dictionary/glossary.html",
    "revision": "9262c4e5d330229cd2b67f82eb184d8e"
  },
  {
    "url": "mx/otomi/dictionary/index.html",
    "revision": "2f11e796c3adacd80ff3761225b3de07"
  },
  {
    "url": "mx/otomi/grammar/adjective/index.html",
    "revision": "f588c4b64575571ced6b4247053242bf"
  },
  {
    "url": "mx/otomi/grammar/adverb/index.html",
    "revision": "f3e77bf9ffb2aeda51a9f6efc25d11b2"
  },
  {
    "url": "mx/otomi/grammar/alphabet/index.html",
    "revision": "1079e808f006e180dc14e9266299a32a"
  },
  {
    "url": "mx/otomi/grammar/article/index.html",
    "revision": "46f5f4e1e3741a86578f7b3eb4acc720"
  },
  {
    "url": "mx/otomi/grammar/guide/index.html",
    "revision": "f283fc97fa1b5417557afe0acf2f1c18"
  },
  {
    "url": "mx/otomi/grammar/verbs/index.html",
    "revision": "0c583112393c7b6e786ad7078b5dd763"
  },
  {
    "url": "mx/otomi/index.html",
    "revision": "dfea7e55da7f9bebaebe61cde4f85dd5"
  },
  {
    "url": "mx/otomi/vocabulary/animals/index.html",
    "revision": "5b25d0a59ad2ea0e965d3c96deafff12"
  },
  {
    "url": "mx/otomi/vocabulary/greetings/index.html",
    "revision": "37bc13dbe7100d771bc17089ff0f4c59"
  },
  {
    "url": "mx/otomi/vocabulary/more_used/index.html",
    "revision": "56c2c690688f4d358e7a0f981f77d76d"
  },
  {
    "url": "mx/otomi/vocabulary/people/index.html",
    "revision": "efce6f890a7aa443b1b6e1847ea639ea"
  },
  {
    "url": "mx/otomi/vocabulary/phrases/index.html",
    "revision": "5884a81614d733e90027393834049019"
  },
  {
    "url": "mx/pame/courses/basic/index.html",
    "revision": "cf9898aa45b60dd776344249e6a3bb09"
  },
  {
    "url": "mx/pame/courses/intermediate/index.html",
    "revision": "90ee8790b2f9514975a40d2bbd4b3529"
  },
  {
    "url": "mx/pame/dictionary/glossary.html",
    "revision": "1e21ec938dd91ee0380d99a9d5158e2a"
  },
  {
    "url": "mx/pame/dictionary/index.html",
    "revision": "56a2f41223de5af2e3eaa17ea4c85d2b"
  },
  {
    "url": "mx/pame/grammar/adjective/index.html",
    "revision": "785a425bd4c312dc1c03ff11fae110d1"
  },
  {
    "url": "mx/pame/grammar/adverb/index.html",
    "revision": "c6c1c7ce185a9096ae4dae669f9713d6"
  },
  {
    "url": "mx/pame/grammar/alphabet/index.html",
    "revision": "dc30b0a072a3ba96010206a680b37ec2"
  },
  {
    "url": "mx/pame/grammar/article/index.html",
    "revision": "89ec4dc41742d0973422c3001b6956ac"
  },
  {
    "url": "mx/pame/grammar/guide/index.html",
    "revision": "809dc2d7a87b7dcf23e85cabcf3da3f7"
  },
  {
    "url": "mx/pame/grammar/verbs/index.html",
    "revision": "81db1b89857b3314a02c548cc3b7467e"
  },
  {
    "url": "mx/pame/index.html",
    "revision": "12e4db6a961ec4fad26609adecb58602"
  },
  {
    "url": "mx/pame/vocabulary/animals/index.html",
    "revision": "de0dcd9a4fcf6af3dbcc0fb26f7afe31"
  },
  {
    "url": "mx/pame/vocabulary/greetings/index.html",
    "revision": "45c49be48aa74ab0b5ea52a5e838929d"
  },
  {
    "url": "mx/pame/vocabulary/more_used/index.html",
    "revision": "9fd8fb0797ef49746153d793a96e6954"
  },
  {
    "url": "mx/pame/vocabulary/people/index.html",
    "revision": "7912888f500ca54969a7f844c0543913"
  },
  {
    "url": "mx/pame/vocabulary/phrases/index.html",
    "revision": "3000cd4e97ae502d97d348fb53fc8ce9"
  },
  {
    "url": "mx/papago/courses/basic/index.html",
    "revision": "598f63dac2f736ac1b749c6b64eaf6bf"
  },
  {
    "url": "mx/papago/courses/intermediate/index.html",
    "revision": "6b8537cb609414fea7cbe87672b4dbb7"
  },
  {
    "url": "mx/papago/dictionary/glossary.html",
    "revision": "3f560125ee29258ef517747772708750"
  },
  {
    "url": "mx/papago/dictionary/index.html",
    "revision": "1d0e4ffc70b7f5add2bb25b7b49ac961"
  },
  {
    "url": "mx/papago/grammar/adjective/index.html",
    "revision": "5a50c825b84ad4a25219b4c70a772c59"
  },
  {
    "url": "mx/papago/grammar/adverb/index.html",
    "revision": "da4d5c39469ea523d7ec285dff345f0a"
  },
  {
    "url": "mx/papago/grammar/alphabet/index.html",
    "revision": "7d91f0cd0472dbdd56e40ec922dc599a"
  },
  {
    "url": "mx/papago/grammar/article/index.html",
    "revision": "8007a2116a0fe7e391e4e54d24b8ab84"
  },
  {
    "url": "mx/papago/grammar/guide/index.html",
    "revision": "7c9450bb36bdf7d4d354b282bf15bfe7"
  },
  {
    "url": "mx/papago/grammar/verbs/index.html",
    "revision": "83aba4a73c557faaad4792f1ba588b24"
  },
  {
    "url": "mx/papago/index.html",
    "revision": "16ef5d9de345fe144ba0817e8a13fe82"
  },
  {
    "url": "mx/papago/vocabulary/animals/index.html",
    "revision": "f9e7b538e32ecde68e25bb8cd8ab720a"
  },
  {
    "url": "mx/papago/vocabulary/greetings/index.html",
    "revision": "89bab9ec5e7e7a39ad19a2e9b41810ae"
  },
  {
    "url": "mx/papago/vocabulary/more_used/index.html",
    "revision": "ef74e9c2209de98d4d066cd745ffa6f1"
  },
  {
    "url": "mx/papago/vocabulary/people/index.html",
    "revision": "4a90e2e5e56c9ac0b8dbff57c82c0223"
  },
  {
    "url": "mx/papago/vocabulary/phrases/index.html",
    "revision": "60f0dcd2abc73e9c788db3e8a4c59f2c"
  },
  {
    "url": "mx/pima/courses/basic/index.html",
    "revision": "ebaa2f56e3d9ed8d8141a2cd1e0cbf86"
  },
  {
    "url": "mx/pima/courses/intermediate/index.html",
    "revision": "5e30c0e1a46c62bcbfcd1253a880c84c"
  },
  {
    "url": "mx/pima/dictionary/glossary.html",
    "revision": "c7b8b30b40df31f7773f50433006ab1a"
  },
  {
    "url": "mx/pima/dictionary/index.html",
    "revision": "495c5f9bd48e3239b311532cc60f07c1"
  },
  {
    "url": "mx/pima/grammar/adjective/index.html",
    "revision": "22181b8b33a1b9b64c6f793a00c7db9a"
  },
  {
    "url": "mx/pima/grammar/adverb/index.html",
    "revision": "4daf724f1f2b51042c54b1fae4ef4c9b"
  },
  {
    "url": "mx/pima/grammar/alphabet/index.html",
    "revision": "5557fc5aa3b31a0459bd97c4bfd701fe"
  },
  {
    "url": "mx/pima/grammar/article/index.html",
    "revision": "eaf624c5edd5e5593d728d9ad2e10f40"
  },
  {
    "url": "mx/pima/grammar/guide/index.html",
    "revision": "23836900b5b2bb29d518535c40f92197"
  },
  {
    "url": "mx/pima/grammar/verbs/index.html",
    "revision": "9d776b4056d92c13a8c62b4410b5b9bf"
  },
  {
    "url": "mx/pima/index.html",
    "revision": "c39b3453080307d42759cd209a5fca75"
  },
  {
    "url": "mx/pima/vocabulary/animals/index.html",
    "revision": "17f38cc8aad9da8571f548744855eb3b"
  },
  {
    "url": "mx/pima/vocabulary/greetings/index.html",
    "revision": "64e77a3fd3cbc7dbef12f2dc376c1f55"
  },
  {
    "url": "mx/pima/vocabulary/more_used/index.html",
    "revision": "7876b14795f9a397eeae8c2a5f15cbac"
  },
  {
    "url": "mx/pima/vocabulary/people/index.html",
    "revision": "ad0f97c866af7b250449cff5119489d3"
  },
  {
    "url": "mx/pima/vocabulary/phrases/index.html",
    "revision": "d6edd96d4ddfc702aa71d9b76ef3677e"
  },
  {
    "url": "mx/popoloca/courses/basic/index.html",
    "revision": "d19c4504d4a71b3e47586ab8cc2327bb"
  },
  {
    "url": "mx/popoloca/courses/intermediate/index.html",
    "revision": "3891b907341bd518239ab5fa2a9877d6"
  },
  {
    "url": "mx/popoloca/dictionary/glossary.html",
    "revision": "1a887e7830f142104ad2c22d3a2e1c97"
  },
  {
    "url": "mx/popoloca/dictionary/index.html",
    "revision": "e1bfc9daea691e84af061cb182406c53"
  },
  {
    "url": "mx/popoloca/grammar/adjective/index.html",
    "revision": "07e5e9913ed145316c8cd41796f07d50"
  },
  {
    "url": "mx/popoloca/grammar/adverb/index.html",
    "revision": "42bdc69d8ecd7c298c0e29c2d9cc4746"
  },
  {
    "url": "mx/popoloca/grammar/alphabet/index.html",
    "revision": "900a4e8c42c70372ac16efa6d759d893"
  },
  {
    "url": "mx/popoloca/grammar/article/index.html",
    "revision": "6bec82b18a93bb645b1a8f0bc7ecf12f"
  },
  {
    "url": "mx/popoloca/grammar/guide/index.html",
    "revision": "007d71f8b89f88c547d5776ea9028491"
  },
  {
    "url": "mx/popoloca/grammar/verbs/index.html",
    "revision": "165878eecc91cc8573985726a0273687"
  },
  {
    "url": "mx/popoloca/index.html",
    "revision": "4c3132d421b13ba0464485bc85bb6ac0"
  },
  {
    "url": "mx/popoloca/vocabulary/animals/index.html",
    "revision": "41c0fcd0d118f8308fed9c2dac387eeb"
  },
  {
    "url": "mx/popoloca/vocabulary/greetings/index.html",
    "revision": "4eb6e6750ab9684aed3b6daa319d4ba9"
  },
  {
    "url": "mx/popoloca/vocabulary/more_used/index.html",
    "revision": "1fc540cccffca73bbba1e52422665429"
  },
  {
    "url": "mx/popoloca/vocabulary/people/index.html",
    "revision": "894d7a0ff0ed1b9e4deb773e19883e18"
  },
  {
    "url": "mx/popoloca/vocabulary/phrases/index.html",
    "revision": "df2b111767c7db0a1efe8f06df1ce5a6"
  },
  {
    "url": "mx/raramuri/courses/basic/index.html",
    "revision": "540c4389f103019f019117e708fd0e3a"
  },
  {
    "url": "mx/raramuri/courses/intermediate/index.html",
    "revision": "114a6a547b55c3d03abb0f4818291621"
  },
  {
    "url": "mx/raramuri/dictionary/glossary.html",
    "revision": "353085d594fca5afa62e68023c955a78"
  },
  {
    "url": "mx/raramuri/dictionary/index.html",
    "revision": "4aa363622458d1ec2774a2cce71f27f8"
  },
  {
    "url": "mx/raramuri/grammar/adjective/index.html",
    "revision": "73249a4ba5b214d65bd591e42c09e294"
  },
  {
    "url": "mx/raramuri/grammar/adverb/index.html",
    "revision": "82c3d79b036e12af4c4b425c10b755a7"
  },
  {
    "url": "mx/raramuri/grammar/alphabet/index.html",
    "revision": "39d116014fa9ce191f3e7e7dbeb68551"
  },
  {
    "url": "mx/raramuri/grammar/article/index.html",
    "revision": "7203aee8cabd50469173451277f98fd8"
  },
  {
    "url": "mx/raramuri/grammar/guide/index.html",
    "revision": "ab9d5fa1cfd4088af977a115564517bb"
  },
  {
    "url": "mx/raramuri/grammar/verbs/index.html",
    "revision": "4777194cde9ad60db636c5cb52586c0f"
  },
  {
    "url": "mx/raramuri/index.html",
    "revision": "973a1551a2615e93a29b7806795a1807"
  },
  {
    "url": "mx/raramuri/vocabulary/animals/index.html",
    "revision": "c9f9ee7b634d6b9626a2fb2bbd27de86"
  },
  {
    "url": "mx/raramuri/vocabulary/greetings/index.html",
    "revision": "47ba620bb6a7984a64109d130fe2c5f3"
  },
  {
    "url": "mx/raramuri/vocabulary/more_used/index.html",
    "revision": "991241ccfbd47dfb762a2086d279c794"
  },
  {
    "url": "mx/raramuri/vocabulary/people/index.html",
    "revision": "4160e886ecb75aa6c5597abc13cf8adc"
  },
  {
    "url": "mx/raramuri/vocabulary/phrases/index.html",
    "revision": "a72db8c3f17292c7b72ceddf983e0bd4"
  },
  {
    "url": "mx/seri/courses/basic/index.html",
    "revision": "82d459055db50a61390c7264f5035985"
  },
  {
    "url": "mx/seri/courses/intermediate/index.html",
    "revision": "071f9b068b0330bf12ad0aef4fd1196b"
  },
  {
    "url": "mx/seri/dictionary/glossary.html",
    "revision": "67b3d7286eb133c6d3986388e648569f"
  },
  {
    "url": "mx/seri/dictionary/index.html",
    "revision": "6d991494f9404fa879b2ef2931f17544"
  },
  {
    "url": "mx/seri/grammar/adjective/index.html",
    "revision": "052fdf79a81d866806488bdc190b6994"
  },
  {
    "url": "mx/seri/grammar/adverb/index.html",
    "revision": "0fa8512165b7fa9187d9c58afa927540"
  },
  {
    "url": "mx/seri/grammar/alphabet/index.html",
    "revision": "e73328c8a01ba756b123e9741ec84f2d"
  },
  {
    "url": "mx/seri/grammar/article/index.html",
    "revision": "8a86bc504d6ce28322fef9486360f87f"
  },
  {
    "url": "mx/seri/grammar/guide/index.html",
    "revision": "14eaee2d806741ff60dad87420414969"
  },
  {
    "url": "mx/seri/grammar/verbs/index.html",
    "revision": "418f27704972f1f2b9cf113ac15e8847"
  },
  {
    "url": "mx/seri/index.html",
    "revision": "3366caeb1d519b86ceb5b90f8b537bad"
  },
  {
    "url": "mx/seri/vocabulary/animals/index.html",
    "revision": "e386b472a3623e95af3b54a48390942f"
  },
  {
    "url": "mx/seri/vocabulary/greetings/index.html",
    "revision": "50243149e602cc2f2b02f7f8baf87e1a"
  },
  {
    "url": "mx/seri/vocabulary/more_used/index.html",
    "revision": "4166b02874cd2b97f1197ecbf332ab07"
  },
  {
    "url": "mx/seri/vocabulary/people/index.html",
    "revision": "d0ce5135eae89242a97d7c8aa878b5c8"
  },
  {
    "url": "mx/seri/vocabulary/phrases/index.html",
    "revision": "7121d6b6f122369240a134cc54cd11ee"
  },
  {
    "url": "mx/tarasco/courses/basic/index.html",
    "revision": "c4397cbad13ead156e9181cfab1d0d10"
  },
  {
    "url": "mx/tarasco/courses/intermediate/index.html",
    "revision": "6ddbfc6caf2051837ba65e72574c28b0"
  },
  {
    "url": "mx/tarasco/dictionary/glossary.html",
    "revision": "3c63f3fdb18af25480375b9d7241d695"
  },
  {
    "url": "mx/tarasco/dictionary/index.html",
    "revision": "116381c40f574b0b4ffc1095b17c8b30"
  },
  {
    "url": "mx/tarasco/grammar/adjective/index.html",
    "revision": "0b76dfeb63870bd842fa7daefc6b9006"
  },
  {
    "url": "mx/tarasco/grammar/adverb/index.html",
    "revision": "cf7e8b5bd725478de130a98a1032a65c"
  },
  {
    "url": "mx/tarasco/grammar/alphabet/index.html",
    "revision": "c34515202e98121a43da5f32ff261a0d"
  },
  {
    "url": "mx/tarasco/grammar/article/index.html",
    "revision": "f09d55188ba73246c5136fb693432b92"
  },
  {
    "url": "mx/tarasco/grammar/guide/index.html",
    "revision": "76f1255fd24ce4dc74fcfb4394fd5ac0"
  },
  {
    "url": "mx/tarasco/grammar/verbs/index.html",
    "revision": "e90b9767144fdf1d11294d03a89f1c5f"
  },
  {
    "url": "mx/tarasco/index.html",
    "revision": "ce48f7e63110a3d2f05f571e3e901911"
  },
  {
    "url": "mx/tarasco/vocabulary/animals/index.html",
    "revision": "3efc3dcab2a38be2109d08a68644524e"
  },
  {
    "url": "mx/tarasco/vocabulary/greetings/index.html",
    "revision": "017b5a1b3a8962c13f77e46cb7d51fc9"
  },
  {
    "url": "mx/tarasco/vocabulary/more_used/index.html",
    "revision": "535b7c01abdefaa2f3a9c63c97d29742"
  },
  {
    "url": "mx/tarasco/vocabulary/people/index.html",
    "revision": "c1aff5887f9498cc46667c62cf34fdaf"
  },
  {
    "url": "mx/tarasco/vocabulary/phrases/index.html",
    "revision": "87dadd966288ce9929cfbc9caf86bbff"
  },
  {
    "url": "mx/tepehua/courses/basic/index.html",
    "revision": "71ab003fdcff53f47b3229aa1f042051"
  },
  {
    "url": "mx/tepehua/courses/intermediate/index.html",
    "revision": "395346cae834b04ae73d033428e6b051"
  },
  {
    "url": "mx/tepehua/dictionary/glossary.html",
    "revision": "f25496d6467032b42bc5a491e9b5ff43"
  },
  {
    "url": "mx/tepehua/dictionary/index.html",
    "revision": "b10f92ece7f268ea4b350bf3c1bcde84"
  },
  {
    "url": "mx/tepehua/grammar/adjective/index.html",
    "revision": "97a351609ad7fef89049e92935c730ec"
  },
  {
    "url": "mx/tepehua/grammar/adverb/index.html",
    "revision": "811be32adc8d1c911ca56ee7267008a0"
  },
  {
    "url": "mx/tepehua/grammar/alphabet/index.html",
    "revision": "967e9c0a49aa0aff76bdf5694c1acc34"
  },
  {
    "url": "mx/tepehua/grammar/article/index.html",
    "revision": "a54ef4d3cdb52c96396189ff30bee2f5"
  },
  {
    "url": "mx/tepehua/grammar/guide/index.html",
    "revision": "90e71bb82d59aa78ba29407ae00b22e5"
  },
  {
    "url": "mx/tepehua/grammar/verbs/index.html",
    "revision": "f99a8a87ac43169880daf3ed9ab9cd18"
  },
  {
    "url": "mx/tepehua/index.html",
    "revision": "28a6131e120040bf71c595a649f426ba"
  },
  {
    "url": "mx/tepehua/vocabulary/animals/index.html",
    "revision": "c02fa571387237b23730e59e561bba5c"
  },
  {
    "url": "mx/tepehua/vocabulary/greetings/index.html",
    "revision": "29124566a67384c5b130d61b979fc85b"
  },
  {
    "url": "mx/tepehua/vocabulary/more_used/index.html",
    "revision": "50c0c3e30aac74f3747b5b86bd49f4a3"
  },
  {
    "url": "mx/tepehua/vocabulary/people/index.html",
    "revision": "975c1147c5128415691a5f2ad6ae6ae1"
  },
  {
    "url": "mx/tepehua/vocabulary/phrases/index.html",
    "revision": "bea03cfee6361b38faac9e972dd34c97"
  },
  {
    "url": "mx/totonaco/courses/basic/index.html",
    "revision": "f57b804232dc55375553e6c5c79d615f"
  },
  {
    "url": "mx/totonaco/courses/intermediate/index.html",
    "revision": "a742f9fa4861d1b745ea3c99a6dca29e"
  },
  {
    "url": "mx/totonaco/dictionary/glossary.html",
    "revision": "b421dffdf70ec464cad45e4a735e5fd7"
  },
  {
    "url": "mx/totonaco/dictionary/index.html",
    "revision": "319131fa75937429fb5b2adf8241cb21"
  },
  {
    "url": "mx/totonaco/grammar/adjective/index.html",
    "revision": "8b21db36c4ab275de180e3bf6d24b1d4"
  },
  {
    "url": "mx/totonaco/grammar/adverb/index.html",
    "revision": "be220be80e915f1de1120cd47607abd9"
  },
  {
    "url": "mx/totonaco/grammar/alphabet/index.html",
    "revision": "5325b98875e7423734ab2ad7dd06a848"
  },
  {
    "url": "mx/totonaco/grammar/article/index.html",
    "revision": "9b3c1421861b3ac1fc5d8a0f437f9ef9"
  },
  {
    "url": "mx/totonaco/grammar/guide/index.html",
    "revision": "dc2452e07ce7c892deaeed32ff20344e"
  },
  {
    "url": "mx/totonaco/grammar/verbs/index.html",
    "revision": "5a0cb85df7ad6a2e3aaf6b0357a84f22"
  },
  {
    "url": "mx/totonaco/index.html",
    "revision": "477f9a770b107feb6a39eab7a90d75de"
  },
  {
    "url": "mx/totonaco/vocabulary/animals/index.html",
    "revision": "bd0af5107c7ac254dbd840194f73dcf0"
  },
  {
    "url": "mx/totonaco/vocabulary/greetings/index.html",
    "revision": "5f8fac1a3ddb0650fca4625820d7a169"
  },
  {
    "url": "mx/totonaco/vocabulary/more_used/index.html",
    "revision": "6fb9d10ac93281d5a820d92b4dc97206"
  },
  {
    "url": "mx/totonaco/vocabulary/people/index.html",
    "revision": "f7134a06bec1e0c4c6fbf4e0dbdd4070"
  },
  {
    "url": "mx/totonaco/vocabulary/phrases/index.html",
    "revision": "3e671ead6a715f87b3dc0fcf2e28e278"
  },
  {
    "url": "mx/yaqui/courses/basic/index.html",
    "revision": "0d3a7ee721a1f0fbce878684bbfa46ae"
  },
  {
    "url": "mx/yaqui/courses/intermediate/index.html",
    "revision": "3e5feb6ae46bce30de6595b77fb7ef58"
  },
  {
    "url": "mx/yaqui/dictionary/glossary.html",
    "revision": "e2ddf059e1cf9a3bfcaeafe8b2430826"
  },
  {
    "url": "mx/yaqui/dictionary/index.html",
    "revision": "532e2e1c00138bd0abf93f24f8921303"
  },
  {
    "url": "mx/yaqui/grammar/adjective/index.html",
    "revision": "53cea6ce71d138a07ba6de6eccb2988f"
  },
  {
    "url": "mx/yaqui/grammar/adverb/index.html",
    "revision": "51144c7fe4c56e91b06cc34770f23916"
  },
  {
    "url": "mx/yaqui/grammar/alphabet/index.html",
    "revision": "80be016c88340f1c878444736cf2f742"
  },
  {
    "url": "mx/yaqui/grammar/article/index.html",
    "revision": "48614153c7e6f3756c98e9b564317931"
  },
  {
    "url": "mx/yaqui/grammar/guide/index.html",
    "revision": "0e3b2a7563831bcca9f10d6e29a24fe6"
  },
  {
    "url": "mx/yaqui/grammar/verbs/index.html",
    "revision": "01e1bcdbc9fa46d4315358b991c2348c"
  },
  {
    "url": "mx/yaqui/index.html",
    "revision": "be7c3fd7be3868d1f379b7cfcb3c9e4d"
  },
  {
    "url": "mx/yaqui/vocabulary/animals/index.html",
    "revision": "0e7df0ca0848334611268d3535eb43dd"
  },
  {
    "url": "mx/yaqui/vocabulary/greetings/index.html",
    "revision": "98a6c4626413af796186eecd950ac744"
  },
  {
    "url": "mx/yaqui/vocabulary/more_used/index.html",
    "revision": "c1bf0389956231d79722099fa5fe0063"
  },
  {
    "url": "mx/yaqui/vocabulary/people/index.html",
    "revision": "17b1bc3de01d45859ef2f17a0b4eee19"
  },
  {
    "url": "mx/yaqui/vocabulary/phrases/index.html",
    "revision": "a3237492f5e19951d39ddf90a1dd45bc"
  },
  {
    "url": "mx/zapoteco/courses/basic/index.html",
    "revision": "e180caf4cfba45223b62c6788c1c4caf"
  },
  {
    "url": "mx/zapoteco/courses/intermediate/index.html",
    "revision": "1994d0ac8047b5ef6e4af9bc97b7b029"
  },
  {
    "url": "mx/zapoteco/dictionary/glossary.html",
    "revision": "7df315fdebc5af96c2ac48fb69963cf4"
  },
  {
    "url": "mx/zapoteco/dictionary/index.html",
    "revision": "4c2a853785bb8d997895aaf2dbf33fa4"
  },
  {
    "url": "mx/zapoteco/grammar/adjective/index.html",
    "revision": "dc3d083b72ac359bbc5015b5a624dcbb"
  },
  {
    "url": "mx/zapoteco/grammar/adverb/index.html",
    "revision": "3bb9c235bb3ff2a0bd44dc90f378b2d1"
  },
  {
    "url": "mx/zapoteco/grammar/alphabet/index.html",
    "revision": "e12c2b1ca3becdf569ce409bc73fe423"
  },
  {
    "url": "mx/zapoteco/grammar/article/index.html",
    "revision": "e7f1e1ed92e91a3bda2c774dcbfd8a22"
  },
  {
    "url": "mx/zapoteco/grammar/guide/index.html",
    "revision": "50ea54291a1c7a0df3ca9efea3a9f4a6"
  },
  {
    "url": "mx/zapoteco/grammar/verbs/index.html",
    "revision": "c40a70a9baefaa2f15ae90e426307fbd"
  },
  {
    "url": "mx/zapoteco/index.html",
    "revision": "aa84c2545efea9a0ce0d37e5c6b636e2"
  },
  {
    "url": "mx/zapoteco/vocabulary/animals/index.html",
    "revision": "04ead376045993b8a8ebc14a1c14282e"
  },
  {
    "url": "mx/zapoteco/vocabulary/greetings/index.html",
    "revision": "8d373748f29e78f505505809a6f2fac1"
  },
  {
    "url": "mx/zapoteco/vocabulary/more_used/index.html",
    "revision": "c98d45ae6086c13d6beeedbeab39d77b"
  },
  {
    "url": "mx/zapoteco/vocabulary/people/index.html",
    "revision": "557e743efd002c1cb365200e86d86206"
  },
  {
    "url": "mx/zapoteco/vocabulary/phrases/index.html",
    "revision": "b563ae2b23281333568a20a4afca61e8"
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
