// 1、实现数组排平
// let test = {
//   "id": 0,
//   "name": "root",
//   "desc": "根节点",
//   "children": [
//     {
//       "id": 10,
//       "name": "network",
//       "desc": "网络服务",
//       "children": [
//         {
//           "id": 4,
//           "name": "dns",
//           "desc": "域名系统"
//         },
//         {
//           "id": 2,
//           "name": "lvs",
//           "desc": "负载均衡",
//           "children": [
//             {
//               "id": 1,
//               "name": "ilvs",
//               "desc": "内网负载均衡"
//             },
//             {
//               "id": 5,
//               "name": "lvs",
//               "desc": "公网负载均衡"
//             }
//           ]
//         },

//         {
//           "id": 9,
//           "name": "nat",
//           "desc": "NAT"
//         }
//       ]
//     },
//     {
//       "id": 6,
//       "name": "server",
//       "desc": "服务器",
//       "children": [
//         {
//           "id": 8,
//           "name": "ntp",
//           "desc": "授时服务"
//         },
//         {
//           "id": 3,
//           "name": "yum",
//           "desc": "包管理",
//           "children": [
//             {
//               "id": 7,
//               "name": "north",
//               "desc": "北方"
//             },
//             {
//               "id": 11,
//               "name": "sorth",
//               "desc": "南方"
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }


// 2、实现上面结果归并排序、快排