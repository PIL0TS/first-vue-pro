var cities = [
      {
        value: 110000,
        label: "北京",
        shortname: "北京",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 110100,
            label: "北京市",
            shortname: "北京",
            parentvalue: 110000,
            level: 2,

          }
        ]
      },
      {
        value: 120000,
        label: "天津",
        shortname: "天津",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 120100,
            label: "天津市",
            shortname: "天津",
            parentvalue: 120000,
            level: 2,

          }
        ]
      },
      {
        value: 130000,
        label: "河北省",
        shortname: "河北",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 130100,
            label: "石家庄市",
            shortname: "石家庄",
            parentvalue: 130000,
            level: 2,

          },
          {
            value: 130200,
            label: "唐山市",
            shortname: "唐山",
            parentvalue: 130000,
            level: 2,

          },
          {
            value: 130300,
            label: "秦皇岛市",
            shortname: "秦皇岛",
            parentvalue: 130000,
            level: 2,

          },
          {
            value: 130400,
            label: "邯郸市",
            shortname: "邯郸",
            parentvalue: 130000,
            level: 2,

          },
          {
            value: 130500,
            label: "邢台市",
            shortname: "邢台",
            parentvalue: 130000,
            level: 2,

          },
          {
            value: 130600,
            label: "保定市",
            shortname: "保定",
            parentvalue: 130000,
            level: 2,

          },
          {
            value: 130700,
            label: "张家口市",
            shortname: "张家口",
            parentvalue: 130000,
            level: 2,

          },
          {
            value: 130800,
            label: "承德市",
            shortname: "承德",
            parentvalue: 130000,
            level: 2,

          },
          {
            value: 130900,
            label: "沧州市",
            shortname: "沧州",
            parentvalue: 130000,
            level: 2,

          },
          {
            value: 131000,
            label: "廊坊市",
            shortname: "廊坊",
            parentvalue: 130000,
            level: 2,

          },
          {
            value: 131100,
            label: "衡水市",
            shortname: "衡水",
            parentvalue: 130000,
            level: 2,

          }
        ]
      },
      {
        value: 140000,
        label: "山西省",
        shortname: "山西",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 140100,
            label: "太原市",
            shortname: "太原",
            parentvalue: 140000,
            level: 2,

          },
          {
            value: 140200,
            label: "大同市",
            shortname: "大同",
            parentvalue: 140000,
            level: 2,

          },
          {
            value: 140300,
            label: "阳泉市",
            shortname: "阳泉",
            parentvalue: 140000,
            level: 2,

          },
          {
            value: 140400,
            label: "长治市",
            shortname: "长治",
            parentvalue: 140000,
            level: 2,

          },
          {
            value: 140500,
            label: "晋城市",
            shortname: "晋城",
            parentvalue: 140000,
            level: 2,

          },
          {
            value: 140600,
            label: "朔州市",
            shortname: "朔州",
            parentvalue: 140000,
            level: 2,

          },
          {
            value: 140700,
            label: "晋中市",
            shortname: "晋中",
            parentvalue: 140000,
            level: 2,

          },
          {
            value: 140800,
            label: "运城市",
            shortname: "运城",
            parentvalue: 140000,
            level: 2,

          },
          {
            value: 140900,
            label: "忻州市",
            shortname: "忻州",
            parentvalue: 140000,
            level: 2,

          },
          {
            value: 141000,
            label: "临汾市",
            shortname: "临汾",
            parentvalue: 140000,
            level: 2,

          },
          {
            value: 141100,
            label: "吕梁市",
            shortname: "吕梁",
            parentvalue: 140000,
            level: 2,

          }
        ]
      },
      {
        value: 150000,
        label: "内蒙古自治区",
        shortname: "内蒙古",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 150100,
            label: "呼和浩特市",
            shortname: "呼和浩特",
            parentvalue: 150000,
            level: 2,

          },
          {
            value: 150200,
            label: "包头市",
            shortname: "包头",
            parentvalue: 150000,
            level: 2,

          },
          {
            value: 150300,
            label: "乌海市",
            shortname: "乌海",
            parentvalue: 150000,
            level: 2,

          },
          {
            value: 150400,
            label: "赤峰市",
            shortname: "赤峰",
            parentvalue: 150000,
            level: 2,

          },
          {
            value: 150500,
            label: "通辽市",
            shortname: "通辽",
            parentvalue: 150000,
            level: 2,

          },
          {
            value: 150600,
            label: "鄂尔多斯市",
            shortname: "鄂尔多斯",
            parentvalue: 150000,
            level: 2,

          },
          {
            value: 150700,
            label: "呼伦贝尔市",
            shortname: "呼伦贝尔",
            parentvalue: 150000,
            level: 2,

          },
          {
            value: 150800,
            label: "巴彦淖尔市",
            shortname: "巴彦淖尔",
            parentvalue: 150000,
            level: 2,

          },
          {
            value: 150900,
            label: "乌兰察布市",
            shortname: "乌兰察布",
            parentvalue: 150000,
            level: 2,

          },
          {
            value: 152200,
            label: "兴安盟",
            shortname: "兴安",
            parentvalue: 150000,
            level: 2,

          },
          {
            value: 152500,
            label: "锡林郭勒盟",
            shortname: "锡林郭勒",
            parentvalue: 150000,
            level: 2,

          },
          {
            value: 152900,
            label: "阿拉善盟",
            shortname: "阿拉善",
            parentvalue: 150000,
            level: 2,

          }
        ]
      },
      {
        value: 210000,
        label: "辽宁省",
        shortname: "辽宁",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 210100,
            label: "沈阳市",
            shortname: "沈阳",
            parentvalue: 210000,
            level: 2,

          },
          {
            value: 210200,
            label: "大连市",
            shortname: "大连",
            parentvalue: 210000,
            level: 2,

          },
          {
            value: 210300,
            label: "鞍山市",
            shortname: "鞍山",
            parentvalue: 210000,
            level: 2,

          },
          {
            value: 210400,
            label: "抚顺市",
            shortname: "抚顺",
            parentvalue: 210000,
            level: 2,

          },
          {
            value: 210500,
            label: "本溪市",
            shortname: "本溪",
            parentvalue: 210000,
            level: 2,

          },
          {
            value: 210600,
            label: "丹东市",
            shortname: "丹东",
            parentvalue: 210000,
            level: 2,

          },
          {
            value: 210700,
            label: "锦州市",
            shortname: "锦州",
            parentvalue: 210000,
            level: 2,

          },
          {
            value: 210800,
            label: "营口市",
            shortname: "营口",
            parentvalue: 210000,
            level: 2,

          },
          {
            value: 210900,
            label: "阜新市",
            shortname: "阜新",
            parentvalue: 210000,
            level: 2,

          },
          {
            value: 211000,
            label: "辽阳市",
            shortname: "辽阳",
            parentvalue: 210000,
            level: 2,

          },
          {
            value: 211100,
            label: "盘锦市",
            shortname: "盘锦",
            parentvalue: 210000,
            level: 2,

          },
          {
            value: 211200,
            label: "铁岭市",
            shortname: "铁岭",
            parentvalue: 210000,
            level: 2,

          },
          {
            value: 211300,
            label: "朝阳市",
            shortname: "朝阳",
            parentvalue: 210000,
            level: 2,

          },
          {
            value: 211400,
            label: "葫芦岛市",
            shortname: "葫芦岛",
            parentvalue: 210000,
            level: 2,

          }
        ]
      },
      {
        value: 220000,
        label: "吉林省",
        shortname: "吉林",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 220100,
            label: "长春市",
            shortname: "长春",
            parentvalue: 220000,
            level: 2,

          },
          {
            value: 220200,
            label: "吉林市",
            shortname: "吉林",
            parentvalue: 220000,
            level: 2,

          },
          {
            value: 220300,
            label: "四平市",
            shortname: "四平",
            parentvalue: 220000,
            level: 2,

          },
          {
            value: 220400,
            label: "辽源市",
            shortname: "辽源",
            parentvalue: 220000,
            level: 2,

          },
          {
            value: 220500,
            label: "通化市",
            shortname: "通化",
            parentvalue: 220000,
            level: 2,

          },
          {
            value: 220600,
            label: "白山市",
            shortname: "白山",
            parentvalue: 220000,
            level: 2,

          },
          {
            value: 220700,
            label: "松原市",
            shortname: "松原",
            parentvalue: 220000,
            level: 2,

          },
          {
            value: 220800,
            label: "白城市",
            shortname: "白城",
            parentvalue: 220000,
            level: 2,

          },
          {
            value: 222400,
            label: "延边朝鲜族自治州",
            shortname: "延边朝鲜族",
            parentvalue: 220000,
            level: 2,

          }
        ]
      },
      {
        value: 230000,
        label: "黑龙江省",
        shortname: "黑龙江",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 230100,
            label: "哈尔滨市",
            shortname: "哈尔滨",
            parentvalue: 230000,
            level: 2,

          },
          {
            value: 230200,
            label: "齐齐哈尔市",
            shortname: "齐齐哈尔",
            parentvalue: 230000,
            level: 2,

          },
          {
            value: 230300,
            label: "鸡西市",
            shortname: "鸡西",
            parentvalue: 230000,
            level: 2,

          },
          {
            value: 230400,
            label: "鹤岗市",
            shortname: "鹤岗",
            parentvalue: 230000,
            level: 2,

          },
          {
            value: 230500,
            label: "双鸭山市",
            shortname: "双鸭山",
            parentvalue: 230000,
            level: 2,

          },
          {
            value: 230600,
            label: "大庆市",
            shortname: "大庆",
            parentvalue: 230000,
            level: 2,

          },
          {
            value: 230700,
            label: "伊春市",
            shortname: "伊春",
            parentvalue: 230000,
            level: 2,

          },
          {
            value: 230800,
            label: "佳木斯市",
            shortname: "佳木斯",
            parentvalue: 230000,
            level: 2,

          },
          {
            value: 230900,
            label: "七台河市",
            shortname: "七台河",
            parentvalue: 230000,
            level: 2,

          },
          {
            value: 231000,
            label: "牡丹江市",
            shortname: "牡丹江",
            parentvalue: 230000,
            level: 2,

          },
          {
            value: 231100,
            label: "黑河市",
            shortname: "黑河",
            parentvalue: 230000,
            level: 2,

          },
          {
            value: 231200,
            label: "绥化市",
            shortname: "绥化",
            parentvalue: 230000,
            level: 2,

          },
          {
            value: 232700,
            label: "大兴安岭地区",
            shortname: "大兴安岭",
            parentvalue: 230000,
            level: 2,

          }
        ]
      },
      {
        value: 310000,
        label: "上海",
        shortname: "上海",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 310100,
            label: "上海市",
            shortname: "上海",
            parentvalue: 310000,
            level: 2,

          }
        ]
      },
      {
        value: 320000,
        label: "江苏省",
        shortname: "江苏",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 320100,
            label: "南京市",
            shortname: "南京",
            parentvalue: 320000,
            level: 2,

          },
          {
            value: 320200,
            label: "无锡市",
            shortname: "无锡",
            parentvalue: 320000,
            level: 2,

          },
          {
            value: 320300,
            label: "徐州市",
            shortname: "徐州",
            parentvalue: 320000,
            level: 2,

          },
          {
            value: 320400,
            label: "常州市",
            shortname: "常州",
            parentvalue: 320000,
            level: 2,

          },
          {
            value: 320500,
            label: "苏州市",
            shortname: "苏州",
            parentvalue: 320000,
            level: 2,

          },
          {
            value: 320600,
            label: "南通市",
            shortname: "南通",
            parentvalue: 320000,
            level: 2,

          },
          {
            value: 320700,
            label: "连云港市",
            shortname: "连云港",
            parentvalue: 320000,
            level: 2,

          },
          {
            value: 320800,
            label: "淮安市",
            shortname: "淮安",
            parentvalue: 320000,
            level: 2,

          },
          {
            value: 320900,
            label: "盐城市",
            shortname: "盐城",
            parentvalue: 320000,
            level: 2,

          },
          {
            value: 321000,
            label: "扬州市",
            shortname: "扬州",
            parentvalue: 320000,
            level: 2,

          },
          {
            value: 321100,
            label: "镇江市",
            shortname: "镇江",
            parentvalue: 320000,
            level: 2,

          },
          {
            value: 321200,
            label: "泰州市",
            shortname: "泰州",
            parentvalue: 320000,
            level: 2,

          },
          {
            value: 321300,
            label: "宿迁市",
            shortname: "宿迁",
            parentvalue: 320000,
            level: 2,

          }
        ]
      },
      {
        value: 330000,
        label: "浙江省",
        shortname: "浙江",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 330100,
            label: "杭州市",
            shortname: "杭州",
            parentvalue: 330000,
            level: 2,

          },
          {
            value: 330200,
            label: "宁波市",
            shortname: "宁波",
            parentvalue: 330000,
            level: 2,

          },
          {
            value: 330300,
            label: "温州市",
            shortname: "温州",
            parentvalue: 330000,
            level: 2,

          },
          {
            value: 330400,
            label: "嘉兴市",
            shortname: "嘉兴",
            parentvalue: 330000,
            level: 2,

          },
          {
            value: 330500,
            label: "湖州市",
            shortname: "湖州",
            parentvalue: 330000,
            level: 2,

          },
          {
            value: 330600,
            label: "绍兴市",
            shortname: "绍兴",
            parentvalue: 330000,
            level: 2,

          },
          {
            value: 330700,
            label: "金华市",
            shortname: "金华",
            parentvalue: 330000,
            level: 2,

          },
          {
            value: 330800,
            label: "衢州市",
            shortname: "衢州",
            parentvalue: 330000,
            level: 2,

          },
          {
            value: 330900,
            label: "舟山市",
            shortname: "舟山",
            parentvalue: 330000,
            level: 2,

          },
          {
            value: 331000,
            label: "台州市",
            shortname: "台州",
            parentvalue: 330000,
            level: 2,

          },
          {
            value: 331100,
            label: "丽水市",
            shortname: "丽水",
            parentvalue: 330000,
            level: 2,

          }
        ]
      },
      {
        value: 340000,
        label: "安徽省",
        shortname: "安徽",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 340100,
            label: "合肥市",
            shortname: "合肥",
            parentvalue: 340000,
            level: 2,

          },
          {
            value: 340200,
            label: "芜湖市",
            shortname: "芜湖",
            parentvalue: 340000,
            level: 2,

          },
          {
            value: 340300,
            label: "蚌埠市",
            shortname: "蚌埠",
            parentvalue: 340000,
            level: 2,

          },
          {
            value: 340400,
            label: "淮南市",
            shortname: "淮南",
            parentvalue: 340000,
            level: 2,

          },
          {
            value: 340500,
            label: "马鞍山市",
            shortname: "马鞍山",
            parentvalue: 340000,
            level: 2,

          },
          {
            value: 340600,
            label: "淮北市",
            shortname: "淮北",
            parentvalue: 340000,
            level: 2,

          },
          {
            value: 340700,
            label: "铜陵市",
            shortname: "铜陵",
            parentvalue: 340000,
            level: 2,

          },
          {
            value: 340800,
            label: "安庆市",
            shortname: "安庆",
            parentvalue: 340000,
            level: 2,

          },
          {
            value: 341000,
            label: "黄山市",
            shortname: "黄山",
            parentvalue: 340000,
            level: 2,

          },
          {
            value: 341100,
            label: "滁州市",
            shortname: "滁州",
            parentvalue: 340000,
            level: 2,

          },
          {
            value: 341200,
            label: "阜阳市",
            shortname: "阜阳",
            parentvalue: 340000,
            level: 2,

          },
          {
            value: 341300,
            label: "宿州市",
            shortname: "宿州",
            parentvalue: 340000,
            level: 2,

          },
          {
            value: 341500,
            label: "六安市",
            shortname: "六安",
            parentvalue: 340000,
            level: 2,

          },
          {
            value: 341600,
            label: "亳州市",
            shortname: "亳州",
            parentvalue: 340000,
            level: 2,

          },
          {
            value: 341700,
            label: "池州市",
            shortname: "池州",
            parentvalue: 340000,
            level: 2,

          },
          {
            value: 341800,
            label: "宣城市",
            shortname: "宣城",
            parentvalue: 340000,
            level: 2,

          }
        ]
      },
      {
        value: 350000,
        label: "福建省",
        shortname: "福建",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 350100,
            label: "福州市",
            shortname: "福州",
            parentvalue: 350000,
            level: 2,

          },
          {
            value: 350200,
            label: "厦门市",
            shortname: "厦门",
            parentvalue: 350000,
            level: 2,

          },
          {
            value: 350300,
            label: "莆田市",
            shortname: "莆田",
            parentvalue: 350000,
            level: 2,

          },
          {
            value: 350400,
            label: "三明市",
            shortname: "三明",
            parentvalue: 350000,
            level: 2,

          },
          {
            value: 350500,
            label: "泉州市",
            shortname: "泉州",
            parentvalue: 350000,
            level: 2,

          },
          {
            value: 350600,
            label: "漳州市",
            shortname: "漳州",
            parentvalue: 350000,
            level: 2,

          },
          {
            value: 350700,
            label: "南平市",
            shortname: "南平",
            parentvalue: 350000,
            level: 2,

          },
          {
            value: 350800,
            label: "龙岩市",
            shortname: "龙岩",
            parentvalue: 350000,
            level: 2,

          },
          {
            value: 350900,
            label: "宁德市",
            shortname: "宁德",
            parentvalue: 350000,
            level: 2,

          }
        ]
      },
      {
        value: 360000,
        label: "江西省",
        shortname: "江西",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 360100,
            label: "南昌市",
            shortname: "南昌",
            parentvalue: 360000,
            level: 2,

          },
          {
            value: 360200,
            label: "景德镇市",
            shortname: "景德镇",
            parentvalue: 360000,
            level: 2,

          },
          {
            value: 360300,
            label: "萍乡市",
            shortname: "萍乡",
            parentvalue: 360000,
            level: 2,

          },
          {
            value: 360400,
            label: "九江市",
            shortname: "九江",
            parentvalue: 360000,
            level: 2,

          },
          {
            value: 360500,
            label: "新余市",
            shortname: "新余",
            parentvalue: 360000,
            level: 2,

          },
          {
            value: 360600,
            label: "鹰潭市",
            shortname: "鹰潭",
            parentvalue: 360000,
            level: 2,

          },
          {
            value: 360700,
            label: "赣州市",
            shortname: "赣州",
            parentvalue: 360000,
            level: 2,

          },
          {
            value: 360800,
            label: "吉安市",
            shortname: "吉安",
            parentvalue: 360000,
            level: 2,

          },
          {
            value: 360900,
            label: "宜春市",
            shortname: "宜春",
            parentvalue: 360000,
            level: 2,

          },
          {
            value: 361000,
            label: "抚州市",
            shortname: "抚州",
            parentvalue: 360000,
            level: 2,

          },
          {
            value: 361100,
            label: "上饶市",
            shortname: "上饶",
            parentvalue: 360000,
            level: 2,

          }
        ]
      },
      {
        value: 370000,
        label: "山东省",
        shortname: "山东",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 370100,
            label: "济南市",
            shortname: "济南",
            parentvalue: 370000,
            level: 2,

          },
          {
            value: 370200,
            label: "青岛市",
            shortname: "青岛",
            parentvalue: 370000,
            level: 2,

          },
          {
            value: 370300,
            label: "淄博市",
            shortname: "淄博",
            parentvalue: 370000,
            level: 2,

          },
          {
            value: 370400,
            label: "枣庄市",
            shortname: "枣庄",
            parentvalue: 370000,
            level: 2,

          },
          {
            value: 370500,
            label: "东营市",
            shortname: "东营",
            parentvalue: 370000,
            level: 2,

          },
          {
            value: 370600,
            label: "烟台市",
            shortname: "烟台",
            parentvalue: 370000,
            level: 2,

          },
          {
            value: 370700,
            label: "潍坊市",
            shortname: "潍坊",
            parentvalue: 370000,
            level: 2,

          },
          {
            value: 370800,
            label: "济宁市",
            shortname: "济宁",
            parentvalue: 370000,
            level: 2,

          },
          {
            value: 370900,
            label: "泰安市",
            shortname: "泰安",
            parentvalue: 370000,
            level: 2,

          },
          {
            value: 371000,
            label: "威海市",
            shortname: "威海",
            parentvalue: 370000,
            level: 2,

          },
          {
            value: 371100,
            label: "日照市",
            shortname: "日照",
            parentvalue: 370000,
            level: 2,

          },
          {
            value: 371200,
            label: "莱芜市",
            shortname: "莱芜",
            parentvalue: 370000,
            level: 2,

          },
          {
            value: 371300,
            label: "临沂市",
            shortname: "临沂",
            parentvalue: 370000,
            level: 2,

          },
          {
            value: 371400,
            label: "德州市",
            shortname: "德州",
            parentvalue: 370000,
            level: 2,

          },
          {
            value: 371500,
            label: "聊城市",
            shortname: "聊城",
            parentvalue: 370000,
            level: 2,

          },
          {
            value: 371600,
            label: "滨州市",
            shortname: "滨州",
            parentvalue: 370000,
            level: 2,

          },
          {
            value: 371700,
            label: "菏泽市",
            shortname: "菏泽",
            parentvalue: 370000,
            level: 2,

          }
        ]
      },
      {
        value: 410000,
        label: "河南省",
        shortname: "河南",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 410100,
            label: "郑州市",
            shortname: "郑州",
            parentvalue: 410000,
            level: 2,

          },
          {
            value: 410200,
            label: "开封市",
            shortname: "开封",
            parentvalue: 410000,
            level: 2,

          },
          {
            value: 410300,
            label: "洛阳市",
            shortname: "洛阳",
            parentvalue: 410000,
            level: 2,

          },
          {
            value: 410400,
            label: "平顶山市",
            shortname: "平顶山",
            parentvalue: 410000,
            level: 2,

          },
          {
            value: 410500,
            label: "安阳市",
            shortname: "安阳",
            parentvalue: 410000,
            level: 2,

          },
          {
            value: 410600,
            label: "鹤壁市",
            shortname: "鹤壁",
            parentvalue: 410000,
            level: 2,

          },
          {
            value: 410700,
            label: "新乡市",
            shortname: "新乡",
            parentvalue: 410000,
            level: 2,

          },
          {
            value: 410800,
            label: "焦作市",
            shortname: "焦作",
            parentvalue: 410000,
            level: 2,

          },
          {
            value: 410881,
            label: "济源市",
            shortname: "济源",
            parentvalue: 410000,
            level: 2,

          },
          {
            value: 410900,
            label: "濮阳市",
            shortname: "濮阳",
            parentvalue: 410000,
            level: 2,

          },
          {
            value: 411000,
            label: "许昌市",
            shortname: "许昌",
            parentvalue: 410000,
            level: 2,

          },
          {
            value: 411100,
            label: "漯河市",
            shortname: "漯河",
            parentvalue: 410000,
            level: 2,

          },
          {
            value: 411200,
            label: "三门峡市",
            shortname: "三门峡",
            parentvalue: 410000,
            level: 2,

          },
          {
            value: 411300,
            label: "南阳市",
            shortname: "南阳",
            parentvalue: 410000,
            level: 2,

          },
          {
            value: 411400,
            label: "商丘市",
            shortname: "商丘",
            parentvalue: 410000,
            level: 2,

          },
          {
            value: 411500,
            label: "信阳市",
            shortname: "信阳",
            parentvalue: 410000,
            level: 2,

          },
          {
            value: 411600,
            label: "周口市",
            shortname: "周口",
            parentvalue: 410000,
            level: 2,

          },
          {
            value: 411700,
            label: "驻马店市",
            shortname: "驻马店",
            parentvalue: 410000,
            level: 2,

          }
        ]
      },
      {
        value: 420000,
        label: "湖北省",
        shortname: "湖北",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 420100,
            label: "武汉市",
            shortname: "武汉",
            parentvalue: 420000,
            level: 2,

          },
          {
            value: 420200,
            label: "黄石市",
            shortname: "黄石",
            parentvalue: 420000,
            level: 2,

          },
          {
            value: 420300,
            label: "十堰市",
            shortname: "十堰",
            parentvalue: 420000,
            level: 2,

          },
          {
            value: 420500,
            label: "宜昌市",
            shortname: "宜昌",
            parentvalue: 420000,
            level: 2,

          },
          {
            value: 420600,
            label: "襄阳市",
            shortname: "襄阳",
            parentvalue: 420000,
            level: 2,

          },
          {
            value: 420700,
            label: "鄂州市",
            shortname: "鄂州",
            parentvalue: 420000,
            level: 2,

          },
          {
            value: 420800,
            label: "荆门市",
            shortname: "荆门",
            parentvalue: 420000,
            level: 2,

          },
          {
            value: 420900,
            label: "孝感市",
            shortname: "孝感",
            parentvalue: 420000,
            level: 2,

          },
          {
            value: 421000,
            label: "荆州市",
            shortname: "荆州",
            parentvalue: 420000,
            level: 2,

          },
          {
            value: 421100,
            label: "黄冈市",
            shortname: "黄冈",
            parentvalue: 420000,
            level: 2,

          },
          {
            value: 421200,
            label: "咸宁市",
            shortname: "咸宁",
            parentvalue: 420000,
            level: 2,

          },
          {
            value: 421300,
            label: "随州市",
            shortname: "随州",
            parentvalue: 420000,
            level: 2,

          },
          {
            value: 422800,
            label: "恩施土家族苗族自治州",
            shortname: "恩施",
            parentvalue: 420000,
            level: 2,

          },
          {
            value: 429004,
            label: "仙桃市",
            shortname: "仙桃",
            parentvalue: 420000,
            level: 2,

          },
          {
            value: 429005,
            label: "潜江市",
            shortname: "潜江",
            parentvalue: 420000,
            level: 2,

          },
          {
            value: 429006,
            label: "天门市",
            shortname: "天门",
            parentvalue: 420000,
            level: 2,

          },
          {
            value: 429021,
            label: "神农架林区",
            shortname: "神农架",
            parentvalue: 420000,
            level: 2,

          }
        ]
      },
      {
        value: 430000,
        label: "湖南省",
        shortname: "湖南",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 430100,
            label: "长沙市",
            shortname: "长沙",
            parentvalue: 430000,
            level: 2,

          },
          {
            value: 430200,
            label: "株洲市",
            shortname: "株洲",
            parentvalue: 430000,
            level: 2,

          },
          {
            value: 430300,
            label: "湘潭市",
            shortname: "湘潭",
            parentvalue: 430000,
            level: 2,

          },
          {
            value: 430400,
            label: "衡阳市",
            shortname: "衡阳",
            parentvalue: 430000,
            level: 2,

          },
          {
            value: 430500,
            label: "邵阳市",
            shortname: "邵阳",
            parentvalue: 430000,
            level: 2,

          },
          {
            value: 430600,
            label: "岳阳市",
            shortname: "岳阳",
            parentvalue: 430000,
            level: 2,

          },
          {
            value: 430700,
            label: "常德市",
            shortname: "常德",
            parentvalue: 430000,
            level: 2,

          },
          {
            value: 430800,
            label: "张家界市",
            shortname: "张家界",
            parentvalue: 430000,
            level: 2,

          },
          {
            value: 430900,
            label: "益阳市",
            shortname: "益阳",
            parentvalue: 430000,
            level: 2,

          },
          {
            value: 431000,
            label: "郴州市",
            shortname: "郴州",
            parentvalue: 430000,
            level: 2,

          },
          {
            value: 431100,
            label: "永州市",
            shortname: "永州",
            parentvalue: 430000,
            level: 2,

          },
          {
            value: 431200,
            label: "怀化市",
            shortname: "怀化",
            parentvalue: 430000,
            level: 2,

          },
          {
            value: 431300,
            label: "娄底市",
            shortname: "娄底",
            parentvalue: 430000,
            level: 2,

          },
          {
            value: 433100,
            label: "湘西土家族苗族自治州",
            shortname: "湘西",
            parentvalue: 430000,
            level: 2,

          }
        ]
      },
      {
        value: 440000,
        label: "广东省",
        shortname: "广东",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 440100,
            label: "广州市",
            shortname: "广州",
            parentvalue: 440000,
            level: 2,

          },
          {
            value: 440200,
            label: "韶关市",
            shortname: "韶关",
            parentvalue: 440000,
            level: 2,

          },
          {
            value: 440300,
            label: "深圳市",
            shortname: "深圳",
            parentvalue: 440000,
            level: 2,

          },
          {
            value: 440400,
            label: "珠海市",
            shortname: "珠海",
            parentvalue: 440000,
            level: 2,

          },
          {
            value: 440500,
            label: "汕头市",
            shortname: "汕头",
            parentvalue: 440000,
            level: 2,

          },
          {
            value: 440600,
            label: "佛山市",
            shortname: "佛山",
            parentvalue: 440000,
            level: 2,

          },
          {
            value: 440700,
            label: "江门市",
            shortname: "江门",
            parentvalue: 440000,
            level: 2,

          },
          {
            value: 440800,
            label: "湛江市",
            shortname: "湛江",
            parentvalue: 440000,
            level: 2,

          },
          {
            value: 440900,
            label: "茂名市",
            shortname: "茂名",
            parentvalue: 440000,
            level: 2,

          },
          {
            value: 441200,
            label: "肇庆市",
            shortname: "肇庆",
            parentvalue: 440000,
            level: 2,

          },
          {
            value: 441300,
            label: "惠州市",
            shortname: "惠州",
            parentvalue: 440000,
            level: 2,

          },
          {
            value: 441400,
            label: "梅州市",
            shortname: "梅州",
            parentvalue: 440000,
            level: 2,

          },
          {
            value: 441500,
            label: "汕尾市",
            shortname: "汕尾",
            parentvalue: 440000,
            level: 2,

          },
          {
            value: 441600,
            label: "河源市",
            shortname: "河源",
            parentvalue: 440000,
            level: 2,

          },
          {
            value: 441700,
            label: "阳江市",
            shortname: "阳江",
            parentvalue: 440000,
            level: 2,

          },
          {
            value: 441800,
            label: "清远市",
            shortname: "清远",
            parentvalue: 440000,
            level: 2,

          },
          {
            value: 441900,
            label: "东莞市",
            shortname: "东莞",
            parentvalue: 440000,
            level: 2,

          },
          {
            value: 442000,
            label: "中山市",
            shortname: "中山",
            parentvalue: 440000,
            level: 2,

          },
          {
            value: 442101,
            label: "东沙群岛",
            shortname: "东沙",
            parentvalue: 440000,
            level: 2,

          },
          {
            value: 445100,
            label: "潮州市",
            shortname: "潮州",
            parentvalue: 440000,
            level: 2,

          },
          {
            value: 445200,
            label: "揭阳市",
            shortname: "揭阳",
            parentvalue: 440000,
            level: 2,

          },
          {
            value: 445300,
            label: "云浮市",
            shortname: "云浮",
            parentvalue: 440000,
            level: 2,

          }
        ]
      },
      {
        value: 450000,
        label: "广西壮族自治区",
        shortname: "广西",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 450100,
            label: "南宁市",
            shortname: "南宁",
            parentvalue: 450000,
            level: 2,

          },
          {
            value: 450200,
            label: "柳州市",
            shortname: "柳州",
            parentvalue: 450000,
            level: 2,

          },
          {
            value: 450300,
            label: "桂林市",
            shortname: "桂林",
            parentvalue: 450000,
            level: 2,

          },
          {
            value: 450400,
            label: "梧州市",
            shortname: "梧州",
            parentvalue: 450000,
            level: 2,

          },
          {
            value: 450500,
            label: "北海市",
            shortname: "北海",
            parentvalue: 450000,
            level: 2,

          },
          {
            value: 450600,
            label: "防城港市",
            shortname: "防城港",
            parentvalue: 450000,
            level: 2,

          },
          {
            value: 450700,
            label: "钦州市",
            shortname: "钦州",
            parentvalue: 450000,
            level: 2,

          },
          {
            value: 450800,
            label: "贵港市",
            shortname: "贵港",
            parentvalue: 450000,
            level: 2,

          },
          {
            value: 450900,
            label: "玉林市",
            shortname: "玉林",
            parentvalue: 450000,
            level: 2,

          },
          {
            value: 451000,
            label: "百色市",
            shortname: "百色",
            parentvalue: 450000,
            level: 2,

          },
          {
            value: 451100,
            label: "贺州市",
            shortname: "贺州",
            parentvalue: 450000,
            level: 2,

          },
          {
            value: 451200,
            label: "河池市",
            shortname: "河池",
            parentvalue: 450000,
            level: 2,

          },
          {
            value: 451300,
            label: "来宾市",
            shortname: "来宾",
            parentvalue: 450000,
            level: 2,

          },
          {
            value: 451400,
            label: "崇左市",
            shortname: "崇左",
            parentvalue: 450000,
            level: 2,

          }
        ]
      },
      {
        value: 460000,
        label: "海南省",
        shortname: "海南",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 469028,
            label: "临高县",
            shortname: "临高",
            parentvalue: 460000,
            level: 2,

          },
          {
            value: 460100,
            label: "海口市",
            shortname: "海口",
            parentvalue: 460000,
            level: 2,

          },
          {
            value: 460200,
            label: "三亚市",
            shortname: "三亚",
            parentvalue: 460000,
            level: 2,

          },
          {
            value: 460300,
            label: "三沙市",
            shortname: "三沙",
            parentvalue: 460000,
            level: 2,

          },
          {
            value: 469001,
            label: "五指山市",
            shortname: "五指山",
            parentvalue: 460000,
            level: 2,

          },
          {
            value: 469002,
            label: "琼海市",
            shortname: "琼海",
            parentvalue: 460000,
            level: 2,

          },
          {
            value: 469003,
            label: "儋州市",
            shortname: "儋州",
            parentvalue: 460000,
            level: 2,

          },
          {
            value: 469005,
            label: "文昌市",
            shortname: "文昌",
            parentvalue: 460000,
            level: 2,

          },
          {
            value: 469006,
            label: "万宁市",
            shortname: "万宁",
            parentvalue: 460000,
            level: 2,

          },
          {
            value: 469007,
            label: "东方市",
            shortname: "东方",
            parentvalue: 460000,
            level: 2,

          },
          {
            value: 469025,
            label: "定安县",
            shortname: "定安",
            parentvalue: 460000,
            level: 2,

          },
          {
            value: 469026,
            label: "屯昌县",
            shortname: "屯昌",
            parentvalue: 460000,
            level: 2,

          },
          {
            value: 469027,
            label: "澄迈县",
            shortname: "澄迈",
            parentvalue: 460000,
            level: 2,

          },
          {
            value: 469030,
            label: "白沙黎族自治县",
            shortname: "白沙",
            parentvalue: 460000,
            level: 2,

          },
          {
            value: 469031,
            label: "昌江黎族自治县",
            shortname: "昌江",
            parentvalue: 460000,
            level: 2,

          },
          {
            value: 469033,
            label: "乐东黎族自治县",
            shortname: "乐东",
            parentvalue: 460000,
            level: 2,

          },
          {
            value: 469034,
            label: "陵水黎族自治县",
            shortname: "陵水",
            parentvalue: 460000,
            level: 2,

          },
          {
            value: 469035,
            label: "保亭黎族苗族自治县",
            shortname: "保亭",
            parentvalue: 460000,
            level: 2,

          },
          {
            value: 469036,
            label: "琼中黎族苗族自治县",
            shortname: "琼中",
            parentvalue: 460000,
            level: 2,

          }
        ]
      },
      {
        value: 500000,
        label: "重庆",
        shortname: "重庆",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 500100,
            label: "重庆市",
            shortname: "重庆",
            parentvalue: 500000,
            level: 2,

          }
        ]
      },
      {
        value: 510000,
        label: "四川省",
        shortname: "四川",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 510100,
            label: "成都市",
            shortname: "成都",
            parentvalue: 510000,
            level: 2,

          },
          {
            value: 510300,
            label: "自贡市",
            shortname: "自贡",
            parentvalue: 510000,
            level: 2,

          },
          {
            value: 510400,
            label: "攀枝花市",
            shortname: "攀枝花",
            parentvalue: 510000,
            level: 2,

          },
          {
            value: 510500,
            label: "泸州市",
            shortname: "泸州",
            parentvalue: 510000,
            level: 2,

          },
          {
            value: 510600,
            label: "德阳市",
            shortname: "德阳",
            parentvalue: 510000,
            level: 2,

          },
          {
            value: 510700,
            label: "绵阳市",
            shortname: "绵阳",
            parentvalue: 510000,
            level: 2,

          },
          {
            value: 510800,
            label: "广元市",
            shortname: "广元",
            parentvalue: 510000,
            level: 2,

          },
          {
            value: 510900,
            label: "遂宁市",
            shortname: "遂宁",
            parentvalue: 510000,
            level: 2,

          },
          {
            value: 511000,
            label: "内江市",
            shortname: "内江",
            parentvalue: 510000,
            level: 2,

          },
          {
            value: 511100,
            label: "乐山市",
            shortname: "乐山",
            parentvalue: 510000,
            level: 2,

          },
          {
            value: 511300,
            label: "南充市",
            shortname: "南充",
            parentvalue: 510000,
            level: 2,

          },
          {
            value: 511400,
            label: "眉山市",
            shortname: "眉山",
            parentvalue: 510000,
            level: 2,

          },
          {
            value: 511500,
            label: "宜宾市",
            shortname: "宜宾",
            parentvalue: 510000,
            level: 2,

          },
          {
            value: 511600,
            label: "广安市",
            shortname: "广安",
            parentvalue: 510000,
            level: 2,

          },
          {
            value: 511700,
            label: "达州市",
            shortname: "达州",
            parentvalue: 510000,
            level: 2,

          },
          {
            value: 511800,
            label: "雅安市",
            shortname: "雅安",
            parentvalue: 510000,
            level: 2,

          },
          {
            value: 511900,
            label: "巴中市",
            shortname: "巴中",
            parentvalue: 510000,
            level: 2,

          },
          {
            value: 512000,
            label: "资阳市",
            shortname: "资阳",
            parentvalue: 510000,
            level: 2,

          },
          {
            value: 513200,
            label: "阿坝藏族羌族自治州",
            shortname: "阿坝",
            parentvalue: 510000,
            level: 2,

          },
          {
            value: 513300,
            label: "甘孜藏族自治州",
            shortname: "甘孜",
            parentvalue: 510000,
            level: 2,

          },
          {
            value: 513400,
            label: "凉山彝族自治州",
            shortname: "凉山",
            parentvalue: 510000,
            level: 2,

          }
        ]
      },
      {
        value: 520000,
        label: "贵州省",
        shortname: "贵州",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 520100,
            label: "贵阳市",
            shortname: "贵阳",
            parentvalue: 520000,
            level: 2,

          },
          {
            value: 520200,
            label: "六盘水市",
            shortname: "六盘水",
            parentvalue: 520000,
            level: 2,

          },
          {
            value: 520300,
            label: "遵义市",
            shortname: "遵义",
            parentvalue: 520000,
            level: 2,

          },
          {
            value: 520400,
            label: "安顺市",
            shortname: "安顺",
            parentvalue: 520000,
            level: 2,

          },
          {
            value: 522200,
            label: "铜仁市",
            shortname: "铜仁",
            parentvalue: 520000,
            level: 2,

          },
          {
            value: 522300,
            label: "黔西南布依族苗族自治州",
            shortname: "黔西南",
            parentvalue: 520000,
            level: 2,

          },
          {
            value: 522400,
            label: "毕节市",
            shortname: "毕节",
            parentvalue: 520000,
            level: 2,

          },
          {
            value: 522600,
            label: "黔东南苗族侗族自治州",
            shortname: "黔东南",
            parentvalue: 520000,
            level: 2,

          },
          {
            value: 522700,
            label: "黔南布依族苗族自治州",
            shortname: "黔南",
            parentvalue: 520000,
            level: 2,

          }
        ]
      },
      {
        value: 530000,
        label: "云南省",
        shortname: "云南",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 530100,
            label: "昆明市",
            shortname: "昆明",
            parentvalue: 530000,
            level: 2,

          },
          {
            value: 530300,
            label: "曲靖市",
            shortname: "曲靖",
            parentvalue: 530000,
            level: 2,

          },
          {
            value: 530400,
            label: "玉溪市",
            shortname: "玉溪",
            parentvalue: 530000,
            level: 2,

          },
          {
            value: 530500,
            label: "保山市",
            shortname: "保山",
            parentvalue: 530000,
            level: 2,

          },
          {
            value: 530600,
            label: "昭通市",
            shortname: "昭通",
            parentvalue: 530000,
            level: 2,

          },
          {
            value: 530700,
            label: "丽江市",
            shortname: "丽江",
            parentvalue: 530000,
            level: 2,

          },
          {
            value: 530800,
            label: "普洱市",
            shortname: "普洱",
            parentvalue: 530000,
            level: 2,

          },
          {
            value: 530900,
            label: "临沧市",
            shortname: "临沧",
            parentvalue: 530000,
            level: 2,

          },
          {
            value: 532300,
            label: "楚雄彝族自治州",
            shortname: "楚雄",
            parentvalue: 530000,
            level: 2,

          },
          {
            value: 532500,
            label: "红河哈尼族彝族自治州",
            shortname: "红河",
            parentvalue: 530000,
            level: 2,

          },
          {
            value: 532600,
            label: "文山壮族苗族自治州",
            shortname: "文山",
            parentvalue: 530000,
            level: 2,

          },
          {
            value: 532800,
            label: "西双版纳傣族自治州",
            shortname: "西双版纳",
            parentvalue: 530000,
            level: 2,

          },
          {
            value: 532900,
            label: "大理白族自治州",
            shortname: "大理",
            parentvalue: 530000,
            level: 2,

          },
          {
            value: 533100,
            label: "德宏傣族景颇族自治州",
            shortname: "德宏",
            parentvalue: 530000,
            level: 2,

          },
          {
            value: 533300,
            label: "怒江傈僳族自治州",
            shortname: "怒江",
            parentvalue: 530000,
            level: 2,

          },
          {
            value: 533400,
            label: "迪庆藏族自治州",
            shortname: "迪庆",
            parentvalue: 530000,
            level: 2,

          }
        ]
      },
      {
        value: 540000,
        label: "西藏自治区",
        shortname: "西藏",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 540100,
            label: "拉萨市",
            shortname: "拉萨",
            parentvalue: 540000,
            level: 2,

          },
          {
            value: 542100,
            label: "昌都地区",
            shortname: "昌都",
            parentvalue: 540000,
            level: 2,

          },
          {
            value: 542200,
            label: "山南地区",
            shortname: "山南",
            parentvalue: 540000,
            level: 2,

          },
          {
            value: 542300,
            label: "日喀则地区",
            shortname: "日喀则",
            parentvalue: 540000,
            level: 2,

          },
          {
            value: 542400,
            label: "那曲地区",
            shortname: "那曲",
            parentvalue: 540000,
            level: 2,

          },
          {
            value: 542500,
            label: "阿里地区",
            shortname: "阿里",
            parentvalue: 540000,
            level: 2,

          },
          {
            value: 542600,
            label: "林芝地区",
            shortname: "林芝",
            parentvalue: 540000,
            level: 2,

          }
        ]
      },
      {
        value: 610000,
        label: "陕西省",
        shortname: "陕西",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 610100,
            label: "西安市",
            shortname: "西安",
            parentvalue: 610000,
            level: 2,

          },
          {
            value: 610200,
            label: "铜川市",
            shortname: "铜川",
            parentvalue: 610000,
            level: 2,

          },
          {
            value: 610300,
            label: "宝鸡市",
            shortname: "宝鸡",
            parentvalue: 610000,
            level: 2,

          },
          {
            value: 610400,
            label: "咸阳市",
            shortname: "咸阳",
            parentvalue: 610000,
            level: 2,

          },
          {
            value: 610500,
            label: "渭南市",
            shortname: "渭南",
            parentvalue: 610000,
            level: 2,

          },
          {
            value: 610600,
            label: "延安市",
            shortname: "延安",
            parentvalue: 610000,
            level: 2,

          },
          {
            value: 610700,
            label: "汉中市",
            shortname: "汉中",
            parentvalue: 610000,
            level: 2,

          },
          {
            value: 610800,
            label: "榆林市",
            shortname: "榆林",
            parentvalue: 610000,
            level: 2,

          },
          {
            value: 610900,
            label: "安康市",
            shortname: "安康",
            parentvalue: 610000,
            level: 2,

          },
          {
            value: 611000,
            label: "商洛市",
            shortname: "商洛",
            parentvalue: 610000,
            level: 2,

          }
        ]
      },
      {
        value: 620000,
        label: "甘肃省",
        shortname: "甘肃",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 620100,
            label: "兰州市",
            shortname: "兰州",
            parentvalue: 620000,
            level: 2,

          },
          {
            value: 620200,
            label: "嘉峪关市",
            shortname: "嘉峪关",
            parentvalue: 620000,
            level: 2,

          },
          {
            value: 620300,
            label: "金昌市",
            shortname: "金昌",
            parentvalue: 620000,
            level: 2,

          },
          {
            value: 620400,
            label: "白银市",
            shortname: "白银",
            parentvalue: 620000,
            level: 2,

          },
          {
            value: 620500,
            label: "天水市",
            shortname: "天水",
            parentvalue: 620000,
            level: 2,

          },
          {
            value: 620600,
            label: "武威市",
            shortname: "武威",
            parentvalue: 620000,
            level: 2,

          },
          {
            value: 620700,
            label: "张掖市",
            shortname: "张掖",
            parentvalue: 620000,
            level: 2,

          },
          {
            value: 620800,
            label: "平凉市",
            shortname: "平凉",
            parentvalue: 620000,
            level: 2,

          },
          {
            value: 620900,
            label: "酒泉市",
            shortname: "酒泉",
            parentvalue: 620000,
            level: 2,

          },
          {
            value: 621000,
            label: "庆阳市",
            shortname: "庆阳",
            parentvalue: 620000,
            level: 2,

          },
          {
            value: 621100,
            label: "定西市",
            shortname: "定西",
            parentvalue: 620000,
            level: 2,

          },
          {
            value: 621200,
            label: "陇南市",
            shortname: "陇南",
            parentvalue: 620000,
            level: 2,

          },
          {
            value: 622900,
            label: "临夏回族自治州",
            shortname: "临夏",
            parentvalue: 620000,
            level: 2,

          },
          {
            value: 623000,
            label: "甘南藏族自治州",
            shortname: "甘南",
            parentvalue: 620000,
            level: 2,

          }
        ]
      },
      {
        value: 630000,
        label: "青海省",
        shortname: "青海",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 630100,
            label: "西宁市",
            shortname: "西宁",
            parentvalue: 630000,
            level: 2,

          },
          {
            value: 632100,
            label: "海东市",
            shortname: "海东",
            parentvalue: 630000,
            level: 2,

          },
          {
            value: 632200,
            label: "海北藏族自治州",
            shortname: "海北",
            parentvalue: 630000,
            level: 2,

          },
          {
            value: 632300,
            label: "黄南藏族自治州",
            shortname: "黄南",
            parentvalue: 630000,
            level: 2,

          },
          {
            value: 632500,
            label: "海南藏族自治州",
            shortname: "海南藏族",
            parentvalue: 630000,
            level: 2,

          },
          {
            value: 632600,
            label: "果洛藏族自治州",
            shortname: "果洛",
            parentvalue: 630000,
            level: 2,

          },
          {
            value: 632700,
            label: "玉树藏族自治州",
            shortname: "玉树",
            parentvalue: 630000,
            level: 2,

          },
          {
            value: 632800,
            label: "海西蒙古族藏族自治州",
            shortname: "海西",
            parentvalue: 630000,
            level: 2,

          }
        ]
      },
      {
        value: 640000,
        label: "宁夏回族自治区",
        shortname: "宁夏",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 640100,
            label: "银川市",
            shortname: "银川",
            parentvalue: 640000,
            level: 2,

          },
          {
            value: 640200,
            label: "石嘴山市",
            shortname: "石嘴山",
            parentvalue: 640000,
            level: 2,

          },
          {
            value: 640300,
            label: "吴忠市",
            shortname: "吴忠",
            parentvalue: 640000,
            level: 2,

          },
          {
            value: 640400,
            label: "固原市",
            shortname: "固原",
            parentvalue: 640000,
            level: 2,

          },
          {
            value: 640500,
            label: "中卫市",
            shortname: "中卫",
            parentvalue: 640000,
            level: 2,

          }
        ]
      },
      {
        value: 650000,
        label: "新疆维吾尔自治区",
        shortname: "新疆",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 650100,
            label: "乌鲁木齐市",
            shortname: "乌鲁木齐",
            parentvalue: 650000,
            level: 2,

          },
          {
            value: 650200,
            label: "克拉玛依市",
            shortname: "克拉玛依",
            parentvalue: 650000,
            level: 2,

          },
          {
            value: 652100,
            label: "吐鲁番地区",
            shortname: "吐鲁番",
            parentvalue: 650000,
            level: 2,

          },
          {
            value: 652200,
            label: "哈密地区",
            shortname: "哈密",
            parentvalue: 650000,
            level: 2,

          },
          {
            value: 652300,
            label: "昌吉回族自治州",
            shortname: "昌吉",
            parentvalue: 650000,
            level: 2,

          },
          {
            value: 652700,
            label: "博尔塔拉蒙古自治州",
            shortname: "博尔塔拉",
            parentvalue: 650000,
            level: 2,

          },
          {
            value: 652800,
            label: "巴音郭楞蒙古自治州",
            shortname: "巴音郭楞",
            parentvalue: 650000,
            level: 2,

          },
          {
            value: 652900,
            label: "阿克苏地区",
            shortname: "阿克苏",
            parentvalue: 650000,
            level: 2,

          },
          {
            value: 653000,
            label: "克孜勒苏柯尔克孜自治州",
            shortname: "克孜勒苏柯尔克孜",
            parentvalue: 650000,
            level: 2,

          },
          {
            value: 653100,
            label: "喀什地区",
            shortname: "喀什",
            parentvalue: 650000,
            level: 2,

          },
          {
            value: 653200,
            label: "和田地区",
            shortname: "和田",
            parentvalue: 650000,
            level: 2,

          },
          {
            value: 654000,
            label: "伊犁哈萨克自治州",
            shortname: "伊犁",
            parentvalue: 650000,
            level: 2,

          },
          {
            value: 654200,
            label: "塔城地区",
            shortname: "塔城",
            parentvalue: 650000,
            level: 2,

          },
          {
            value: 654300,
            label: "阿勒泰地区",
            shortname: "阿勒泰",
            parentvalue: 650000,
            level: 2,

          },
          {
            value: 659001,
            label: "石河子市",
            shortname: "石河子",
            parentvalue: 650000,
            level: 2,

          },
          {
            value: 659002,
            label: "阿拉尔市",
            shortname: "阿拉尔",
            parentvalue: 650000,
            level: 2,

          },
          {
            value: 659003,
            label: "图木舒克市",
            shortname: "图木舒克",
            parentvalue: 650000,
            level: 2,

          },
          {
            value: 659004,
            label: "五家渠市",
            shortname: "五家渠",
            parentvalue: 650000,
            level: 2,

          }
        ]
      },
      {
        value: 710000,
        label: "台湾",
        shortname: "台湾",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 710100,
            label: "台北市",
            shortname: "台北",
            parentvalue: 710000,
            level: 2,

          },
          {
            value: 710200,
            label: "高雄市",
            shortname: "高雄",
            parentvalue: 710000,
            level: 2,

          },
          {
            value: 710300,
            label: "台南市",
            shortname: "台南",
            parentvalue: 710000,
            level: 2,

          },
          {
            value: 710400,
            label: "台中市",
            shortname: "台中",
            parentvalue: 710000,
            level: 2,

          },
          {
            value: 710500,
            label: "金门县",
            shortname: "金门",
            parentvalue: 710000,
            level: 2,

          },
          {
            value: 710600,
            label: "南投县",
            shortname: "南投",
            parentvalue: 710000,
            level: 2,

          },
          {
            value: 710700,
            label: "基隆市",
            shortname: "基隆",
            parentvalue: 710000,
            level: 2,

          },
          {
            value: 710800,
            label: "新竹市",
            shortname: "新竹",
            parentvalue: 710000,
            level: 2,

          },
          {
            value: 710900,
            label: "嘉义市",
            shortname: "嘉义",
            parentvalue: 710000,
            level: 2,

          },
          {
            value: 711100,
            label: "新北市",
            shortname: "新北",
            parentvalue: 710000,
            level: 2,

          },
          {
            value: 711200,
            label: "宜兰县",
            shortname: "宜兰",
            parentvalue: 710000,
            level: 2,

          },
          {
            value: 711300,
            label: "新竹县",
            shortname: "新竹",
            parentvalue: 710000,
            level: 2,

          },
          {
            value: 711400,
            label: "桃园县",
            shortname: "桃园",
            parentvalue: 710000,
            level: 2,

          },
          {
            value: 711500,
            label: "苗栗县",
            shortname: "苗栗",
            parentvalue: 710000,
            level: 2,

          },
          {
            value: 711700,
            label: "彰化县",
            shortname: "彰化",
            parentvalue: 710000,
            level: 2,

          },
          {
            value: 711900,
            label: "嘉义县",
            shortname: "嘉义",
            parentvalue: 710000,
            level: 2,

          },
          {
            value: 712100,
            label: "云林县",
            shortname: "云林",
            parentvalue: 710000,
            level: 2,

          },
          {
            value: 712400,
            label: "屏东县",
            shortname: "屏东",
            parentvalue: 710000,
            level: 2,

          },
          {
            value: 712500,
            label: "台东县",
            shortname: "台东",
            parentvalue: 710000,
            level: 2,

          },
          {
            value: 712600,
            label: "花莲县",
            shortname: "花莲",
            parentvalue: 710000,
            level: 2,

          },
          {
            value: 712700,
            label: "澎湖县",
            shortname: "澎湖",
            parentvalue: 710000,
            level: 2,

          },
          {
            value: 712800,
            label: "连江县",
            shortname: "连江",
            parentvalue: 710000,
            level: 2,

          }
        ]
      },
      {
        value: 810000,
        label: "香港特别行政区",
        shortname: "香港",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 810100,
            label: "香港岛",
            shortname: "香港岛",
            parentvalue: 810000,
            level: 2,

          },
          {
            value: 810200,
            label: "九龙",
            shortname: "九龙",
            parentvalue: 810000,
            level: 2,

          },
          {
            value: 810300,
            label: "新界",
            shortname: "新界",
            parentvalue: 810000,
            level: 2,

          }
        ]
      },
      {
        value: 820000,
        label: "澳门特别行政区",
        shortname: "澳门",
        parentvalue: 0,
        level: 1,
        children: [
          {
            value: 820100,
            label: "澳门半岛",
            shortname: "澳门半岛",
            parentvalue: 820000,
            level: 2,

          },
          {
            value: 820200,
            label: "离岛",
            shortname: "离岛",
            parentvalue: 820000,
            level: 2,

          }
        ]
      }
    ];

export default cities;
