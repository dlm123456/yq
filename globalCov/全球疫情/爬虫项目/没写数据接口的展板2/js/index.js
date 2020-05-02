// 柱状图1模块
(function() {
  // 实例化对象
  var bar1_myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  var bar1_option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: ["德国", "意大利", "法国", "美国", "西班牙"],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "10"
          }
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
            // width: 1,
            // type: "solid"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "",
        type: "bar",
        barWidth: "35%",
        data: [158434, 199414, 165962, 1008043, 229422],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };

  // 把配置给实例对象
  bar1_myChart.setOption(bar1_option);
  window.addEventListener("resize", function() {
    bar1_myChart.resize();
  });

  // 数据变化
  var dataAll = [
    { year: "全球", city:["德国", "意大利", "法国", "美国", "西班牙"],data: [158434, 199414, 165962, 1008043, 229422] },
    { year: "美国", city:["伊利诺伊", "加利福尼亚", "新泽西", "纽约", "马萨诸塞"],data: [43903, 43717, 109038, 293696, 54938] }
  ];

  $(".bar h2 ").on("click", "a", function() {
    bar1_option.xAxis[0].data = dataAll[$(this).index()].city;
    bar1_option.series[0].data = dataAll[$(this).index()].data;
    bar1_myChart.setOption(bar1_option);
  });
})();
// 柱状图2
(function() {
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#F57474","#8B78F6"];
  // 1. 实例化对象
  var bar2_myChart = echarts.init(document.querySelector(".bar2 .chart"));
  // 2. 指定配置和数据
  var bar2_option = {
    grid: {
      top: "5%",
      left: "22%",
      bottom: "12%"
      // containLabel: true
    },
    // 不显示x轴的相关信息
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        data: ["亚洲", "北美洲", "南美洲", "大洋洲", "欧洲","非洲"],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      },
      {
        data: [],
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        data: [13.29, 36.28, 4.79, 0.28, 43.26,1.10],
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 10,
          // 此时的color 可以修改柱子的颜色
          color: function(params) {
            // params 传进来的是柱子对象
            // console.log(params);
            // dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex];
          }
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: true,
          position: "inside",
          // {c} 会自动的解析为 数据  data里面的数据
          formatter: "{c}%"
        }
      },
      {
        name: "框",
        type: "bar",
        barCategoryGap: 50,
        barWidth: 15,
        yAxisIndex: 1,
        data: [ 90, 90, 90, 90, 90, 90],
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 2,
          barBorderRadius: 15
        }
      }
    ]
  };

  // 3. 把配置给实例对象
  bar2_myChart.setOption(bar2_option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    bar2_myChart.resize();
  });
})();
// 折线图1模块制作
(function() {
  var yearData1 = [
    {
      year: "国内",
      data: [
        // 两个数组是因为有三条线
        
        [55, 75, 66, 86, 92, 56, 64, 113, 115, 99, 49, 52, 27, 31, 21, 36, 13, 37, 15, 9, 13, 14, 3, 6, 22, 4],
        [226, 138, 102, 136, 125, 127, 97, 85, 125, 117, 127, 115, 96, 109, 81, 70, 131, 156, 105, 89, 126, 88, 108, 106, 65, 56],
        [3, 1, 0, 2, 2, 1, 4, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ]
    },
    {
      year: "国外",
      data: [
        // 两个数组是因为有三条线
        
        [39642, 40603, 49092, 46354, 62362, 63031, 58305, 57402, 72699, 75745, 81932, 76274, 71674, 70013, 76544, 82546, 85647, 81132, 72810, 82993, 73883, 73642, 81520, 93702, 84886, 85527],
        [2587, 6011, 5886, 9075, 8924, 8667, 10417, 773, 600, 0, 6, 103, 0, 0, 47916, 12017, 4280, 6331, 4157, 2522, 2149, 1382, 3873, 33205, 109712, 1237],
        [1876, 2390, 2481, 2957, 3450, 3403, 3186, 527, 11, 1, 1, 64, 0, 14, 28489, 14591, 3762, 2008, 1607, 1756, 2695, 1706, 3207, 4318, 17811, 907]
      ]
    }
  ];
  // 1. 实例化对象
  var zexian1_myChart = echarts.init(document.querySelector(".line .chart"));
  // 2.指定配置
  var zexian1_option = {
    // 通过这个color修改两条线的颜色
    color: ["#ed3f35","#00f2f1","#F8F8FF"],
    tooltip: {
      trigger: "axis"
    },
    legend: {
      // 如果series 对象有name 值，则 legend可以不用写data
      // 修改图例组件 文字颜色
      textStyle: {
        color: "#4c9bfd"
      },
      // 这个10% 必须加引号
      right: "10%"
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true, // 显示边框
      borderColor: "#012f4a", // 边框颜色
      containLabel: true // 包含刻度文字在内
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ['04-04', '04-05', '04-06', '04-07', '04-08', '04-09', '04-10', '04-11', '04-12', '04-13', '04-14', '04-15', '04-16', '04-17', '04-18', '04-19', '04-20', '04-21', '04-22', '04-23', '04-24', '04-25', '04-26', '04-27', '04-28', '04-29'],
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a" // 分割线颜色
        }
      }
    },
    series: [
      {
        name: "新增确诊",
        type: "line",
        // 是否让线条圆滑显示
        smooth: true,
        data: [55, 75, 66, 86, 92, 56, 64, 113, 115, 99, 49, 52, 27, 31, 21, 36, 13, 37, 15, 9, 13, 14, 3, 6, 22, 4],
      },
      {
        name: "新增治愈",
        type: "line",
        smooth: true,
        data: [226, 138, 102, 136, 125, 127, 97, 85, 125, 117, 127, 115, 96, 109, 81, 70, 131, 156, 105, 89, 126, 88, 108, 106, 65, 56],
      },
      {
        name: "新增死亡",
        type: "line",
        smooth: true,
        data: [3, 1, 0, 2, 2, 1, 4, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      }
    ]
  };

  // 3. 把配置给实例对象
  zexian1_myChart.setOption(zexian1_option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    zexian1_myChart.resize();
  });

  // 5.点击切换效果
  $(".line h2").on("click", "a", function() {
    // alert(1);
    // console.log($(this).index());
    // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
    // console.log(yearData[$(this).index()]);
    var obj = yearData1[$(this).index()];
    //zexian1_option.xAxis[0].data = obj.data[0];
    zexian1_option.series[0].data = obj.data[0];
    zexian1_option.series[1].data = obj.data[1];
    zexian1_option.series[2].data = obj.data[2];
    // 需要重新渲染
    zexian1_myChart.setOption(zexian1_option);
  });
})();

// 折线图2模块制作
(function() {
  // 1. 实例化对象
  var zexian2_myChart = echarts.init(document.querySelector(".line2  .chart"));
  // 2.指定配置
  var zexian2_option = {
    // 通过这个color修改两条线的颜色
    color: ["#ed3f35","#00f2f1","#F8F8FF"],
    tooltip: {
      trigger: "axis"
    },
    legend: {
      // 如果series 对象有name 值，则 legend可以不用写data
      // 修改图例组件 文字颜色
      textStyle: {
        color: "#4c9bfd"
      },
      // 这个10% 必须加引号
      right: "10%"
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true, // 显示边框
      borderColor: "#012f4a", // 边框颜色
      containLabel: true // 包含刻度文字在内
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ['02-04', '02-05', '02-06', '02-07', '02-08', '02-09', '02-10', '02-11', '02-12', '02-13', '02-14',
        '02-15', '02-16', '02-17', '02-18', '02-19', '02-20', '02-21', '02-22', '02-23', '02-24', '02-25', '02-26',
        '02-27', '02-28', '02-29', '03-01', '03-02', '03-03', '03-04', '03-05', '03-06', '03-07', '03-08', '03-09',
        '03-10', '03-11', '03-12', '03-13', '03-14', '03-15', '03-16', '03-17', '03-18', '03-19', '03-20', '03-21',
        '03-22', '03-23', '03-24', '03-25', '03-26', '03-27', '03-28', '03-29', '03-30', '03-31', '04-02', '04-03',
        '04-05', '04-13', '04-14', '04-15', '04-16', '04-17', '04-18', '04-19', '04-20', '04-21', '04-22', '04-23',
        '04-24', '04-25'],
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a" // 分割线颜色
        }
      }
    },
    series: [
      {
        name: "累计确诊",
        type: "line",
        // 是否让线条圆滑显示
        smooth: true,
        data: [24363, 28060, 31211, 34598, 37251, 40235, 42708, 44730, 59882, 63932, 66576, 68584, 70635, 72528, 74279, 75002, 75993, 76392, 77041, 77262, 77779, 78190, 78630, 78959, 79389, 79968, 80174, 80302, 80422, 80565, 80710, 80813, 80859, 80904, 80924, 80955, 80992, 81003, 81021, 81048, 81077, 81116, 81151, 81235, 81300, 81416, 81498, 81600, 81747, 81846, 81960, 82078, 82213, 82341, 82447, 82545, 82631, 82724, 82802, 82861, 82930, 83005, 83071, 83157, 83249, 83305, 83369, 83482, 83602, 83696, 83745, 83797, 83824, 84180, 84201, 84237, 84250, 84287, 84302, 84311, 84324, 84338],
      },
      {
        name: "累计治愈",
        type: "line",
        smooth: true,
        data: [892, 1153, 1542, 2052, 2651, 3283, 3998, 4742, 5915, 6728, 8101, 9425, 10853, 12561, 14387, 16157, 18266, 20673, 22907, 24757, 27353, 29775, 32531, 36157, 39049, 41675, 44518, 47260, 49914, 52109, 53793, 55477, 57143, 58684, 59982, 61567, 62887, 64216, 65649, 67022, 67863, 68799, 69725, 70547, 71284, 71876, 72382, 72841, 73299, 73791, 74196, 74737, 75122, 75600, 75937, 76225, 76415, 76610, 76785, 76984, 77210, 77348, 77450, 77586, 77711, 77838, 77935, 78020, 78145, 78262, 78389, 78504, 78600, 77744, 77825, 77895, 77978, 78042, 78147, 78236, 78362, 78450],
      },
      {
        name: "累计死亡",
        type: "line",
        smooth: true,
        data: [491, 564, 637, 723, 812, 909, 1017, 1114, 1368, 1381, 1524, 1666, 1772, 1870, 2006, 2121, 2239, 2348, 2445, 2595, 2666, 2718, 2747, 2791, 2838, 2873, 2915, 2946, 2984, 3015, 3045, 3073, 3100, 3123, 3140, 3162, 3173, 3180, 3194, 3204, 3218, 3231, 3242, 3250, 3253, 3261, 3267, 3276, 3283, 3287, 3293, 3298, 3301, 3306, 3311, 3314, 3321, 3327, 3331, 3335, 3338, 3340, 3340, 3342, 3344, 3345, 3349, 3349, 3351, 3351, 3352, 3352, 3352, 4642, 4642, 4642, 4642, 4642, 4642, 4642, 4642, 4642]
      }
    ]
  };

  // 3. 把配置给实例对象
  zexian2_myChart.setOption(zexian2_option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    zexian2_myChart.resize();
  });

  var yearData3= [
    {
      year: "国内",
      data: [
        // 两个数组是因为有三条线
        
        [24363, 28060, 31211, 34598, 37251, 40235, 42708, 44730, 59882, 63932, 66576, 68584, 70635, 72528, 74279, 75002, 75993, 76392, 77041, 77262, 77779, 78190, 78630, 78959, 79389, 79968, 80174, 80302, 80422, 80565, 80710, 80813, 80859, 80904, 80924, 80955, 80992, 81003, 81021, 81048, 81077, 81116, 81151, 81235, 81300, 81416, 81498, 81600, 81747, 81846, 81960, 82078, 82213, 82341, 82447, 82545, 82631, 82724, 82802, 82861, 82930, 83005, 83071, 83157, 83249, 83305, 83369, 83482, 83602, 83696, 83745, 83797, 83824, 84180, 84201, 84237, 84250, 84287, 84302, 84311, 84324, 84338],
        [892, 1153, 1542, 2052, 2651, 3283, 3998, 4742, 5915, 6728, 8101, 9425, 10853, 12561, 14387, 16157, 18266, 20673, 22907, 24757, 27353, 29775, 32531, 36157, 39049, 41675, 44518, 47260, 49914, 52109, 53793, 55477, 57143, 58684, 59982, 61567, 62887, 64216, 65649, 67022, 67863, 68799, 69725, 70547, 71284, 71876, 72382, 72841, 73299, 73791, 74196, 74737, 75122, 75600, 75937, 76225, 76415, 76610, 76785, 76984, 77210, 77348, 77450, 77586, 77711, 77838, 77935, 78020, 78145, 78262, 78389, 78504, 78600, 77744, 77825, 77895, 77978, 78042, 78147, 78236, 78362, 78450],
        [491, 564, 637, 723, 812, 909, 1017, 1114, 1368, 1381, 1524, 1666, 1772, 1870, 2006, 2121, 2239, 2348, 2445, 2595, 2666, 2718, 2747, 2791, 2838, 2873, 2915, 2946, 2984, 3015, 3045, 3073, 3100, 3123, 3140, 3162, 3173, 3180, 3194, 3204, 3218, 3231, 3242, 3250, 3253, 3261, 3267, 3276, 3283, 3287, 3293, 3298, 3301, 3306, 3311, 3314, 3321, 3327, 3331, 3335, 3338, 3340, 3340, 3342, 3344, 3345, 3349, 3349, 3351, 3351, 3352, 3352, 3352, 4642, 4642, 4642, 4642, 4642, 4642, 4642, 4642, 4642]
      ]
    },
    {
      year: "国外",
      data: [
        // 两个数组是因为有三条线
        [],
        [],
        []
      ]
    }
  ];
  // 5.点击切换效果
  $(".line2 h2").on("click", "a", function() {
    // alert(1);
    // console.log($(this).index());
    // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
    // console.log(yearData[$(this).index()]);
    var obj = yearData3[$(this).index()]
    zexian2_option.series[0].data = obj.data[0];
    zexian2_option.series[1].data = obj.data[1];
    zexian2_option.series[2].data = obj.data[2];
    // 需要重新渲染
    zexian2_myChart.setOption(zexian2_option);
  });
})();

// 饼形图1

// 数据变化
  var dataAll_2 = [
    { year: "国内", data: [84347, 78664, 4643] },
    { year: "国外",data: [3053770, 873643, 213191] }
  ];

(function() {
  // 1. 实例化对象
  var pie1_myChart = echarts.init(document.querySelector(".pie .chart"));
  // 2.指定配置
  var pie1_option = {
    color: ["#ed3f35","#00f2f1","#F8F8FF"],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },

    legend: {
      bottom: "0%",
      // 修改小图标的大小
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "疫情病例分布",
        type: "pie",
        // 这个radius可以修改饼形图的大小
        // radius 第一个值是内圆的半径 第二个值是外圆的半径
        radius: ["40%", "60%"],
        center: ["50%", "45%"],
        avoidLabelOverlap: false,
        // 图形上的文字
        label: {
          show: false,
          position: "center"
        },
        // 链接文字和图形的线是否显示
        labelLine: {
          show: false
        },
        data: [
          { value: 84347, name: "累计确诊" },
          { value: 78664, name: "累计治愈" },
          { value: 4643, name: "累计死亡" },
        ]
      }
    ]
  };

  // 3. 把配置给实例对象
  pie1_myChart.setOption(pie1_option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    pie1_myChart.resize();
  });
   // 5.点击切换效果
  $(".pie h2").on("click", "a", function() {
    // alert(1);
    // console.log($(this).index());
    // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
    // console.log(yearData[$(this).index()]);
    var obj = dataAll_2[$(this).index()];
    pie1_option.series[0].data[0].value = obj.data[0];
    pie1_option.series[0].data[1].value = obj.data[1];
    pie1_option.series[0].data[2].value = obj.data[2];

    pie1_myChart.setOption(pie1_option);
  });
})();

// 饼形图2 地区分布模块
(function() {
  var pie2_myChart = echarts.init(document.querySelector(".pie2 .chart"));
  var colorList = [[
    '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
    '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
    '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
    '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5'
    ],
    [
    '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
    '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
    '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
    '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
    ],
    [
    '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
    '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51', 
    '#0780cf', '#765005', '#e75840', '#26ccd8', '#3685fe', 
    '#9977ef', '#f5616f', '#f7b13f', '#f9e264', '#50c48f'
    ]][2];

pie2_option = {
    // 图表标题
    title: {
        show:false,//显示策略，默认值true,可选为：true（显示） | false（隐藏）
        text: '热搜榜话题图谱',//主标题文本，'\n'指定换行
        x: 'center',        // 水平安放位置，默认为左对齐，可选为：
                          // 'center' ¦ 'left' ¦ 'right'
                          // ¦ {number}（x坐标，单位px）
        y: 'bottom',             // 垂直安放位置，默认为全图顶端，可选为：
                          // 'top' ¦ 'bottom' ¦ 'center'
                          // ¦ {number}（y坐标，单位px）
        //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#ccc',    // 标题边框颜色
        borderWidth: 0,         // 标题边框线宽，单位px，默认为0（无边框）
        padding: 5,             // 标题内边距，单位px，默认各方向内边距为5，
                                // 接受数组分别设定上右下左边距，同css
        itemGap: 10,            // 主副标题纵向间隔，单位px，默认为10，
        textStyle: {
            fontSize: 18,
            fontWeight: 'bolder',
            color: '#333'        // 主标题文字颜色
        },
        subtextStyle: {
            color: '#aaa'        // 副标题文字颜色
        }
    },
    backgroundColor: '',
    tooltip: {},
    animationDurationUpdate: function(idx) {
        // 越往后的数据延迟越大
        return idx * 100;
    },
    animationEasingUpdate: 'bounceIn',
    color: ['#fff', '#fff', '#fff'],
    series: [{
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 250,
            edgeLength: 10
        },
        roam: true,
        label: {
            normal: {
                show: true
            }
        },
        data: [
            
            {"name": "杭州小学生戴一米帽上课", "value": 11718475, "symbolSize": 149, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[0], "color": colorList[0] } } },
            {"name": "超20个省份明确高校开学时间", "value": 8842381, "symbolSize": 131, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[1], "color": colorList[1] } } },
            {"name": "上海39所高校发布返校海报", "value": 7551764, "symbolSize": 123, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[2], "color": colorList[2] } } },
            {"name": "重庆高校5月11日起开学", "value": 2397216, "symbolSize": 123, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[3], "color": colorList[3] } } },
            {"name": "浙大毕业生开学不到一周就毕业", "value": 847720, "symbolSize": 118, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[4], "color": colorList[4] } } },
            {"name": "学生错峰排队上厕所像进考场", "value": 979565, "symbolSize": 115, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[5], "color": colorList[5] } } },
            {"name": "山东初中毕业年级开学时间", "value": 5563521, "symbolSize": 111, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[6], "color": colorList[6] } } },
            {"name": "目前已有36名中国留学生确诊", "value": 116802, "symbolSize": 106, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[7], "color": colorList[7] } } },
            {"name": "山西确定开学时间", "value": 2468532, "symbolSize": 106, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[7], "color": colorList[8] } } },
            {"name": "5月6日起恢复全国收费公路收费", "value": 5421639, "symbolSize": 103, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[9], "color": colorList[9] } } },
            {"name": "多所高校考研复试将线上进行", "value": 2549782, "symbolSize": 95, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[10], "color": colorList[10] } } },
            {"name": "高校为湖北师生设单间隔离14天", "value": 872461, "symbolSize": 95, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[11], "color": colorList[11] } } },
            {"name": "孩子开学家长教学楼前手舞足蹈", "value": 643169, "symbolSize": 92, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[12], "color": colorList[12] } } },
            {"name": "小学生戴N95口罩上体育课", "value": 973461, "symbolSize": 44, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 100, "shadowColor": colorList[9], "color": colorList[9] } } },
        ]
    }]
}
  pie2_myChart.setOption(pie2_option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    pie2_myChart.resize();
  });
})();
// 地图模块，单独制作