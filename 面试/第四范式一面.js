[
  {
    "label": "div",
    "children": [
      {
        "label": "div",
        "children": [
          {
            "label": "p",
            "children": []
          },
          {
            "label": "span",
            "children": []
          }
        ]
      },
      {
        "label": "input"
      }
    ]
  }
]
// < div ><div><p id="testP"></p><span></span></div><input type="text"/></div >

// 把dom解析成json思路



var i = 0;
function create() {
  var i = 1;
  return function () {
    setTimeout(function () {
      i++;
    }, 0);
    console.log(i);
  }
}
var print1 = create();
print1();
print1();
var print2 = create();
print2();

// 输出


// 判断一个点在不在三角形内