/*
 * @Author: guowei
 * @Date: 2021-04-14 15:26:44
 * @LastEditors: guowei
 * @LastEditTime: 2021-10-12 19:13:28
 * @Description: https://github.com/rockboom/SheetJS-docs-zh-CN
 */

const XLSX = require("xlsx");

function readXlsx() {
  /**
   * 读文件
   */
  var workbook = XLSX.readFile("test.xlsx");
  // 获取 sheetName
  var first_sheet_name = workbook.SheetNames[0];

  /* Get worksheet */
  var worksheet = workbook.Sheets[first_sheet_name];
}
function writeNewXlsx() {
  // 新建一个工作簿
  var workbook = XLSX.utils.book_new();
  /**
   * aoa_to_sheet 把数组转换为工作表。
   * json_to_sheet 把 JSON 转换为工作表。
   * table_to_sheet 把DOM TABLE元素转换为工作表。
   * sheet_add_aoa 把数组添加到已存在的工作表中。
   * sheet_add_json 把 JSON 添加到已存在的工作表中。
   */
  var ws = XLSX.utils.aoa_to_sheet([
    "SheetJS".split(""),
    [1, 2, 3, 4, 5, 6, 7],
    [2, 3, 4, 5, 6, 7, 8],
  ]);
  /**
   * 将工作表添加到工作簿中
   */
  XLSX.utils.book_append_sheet(workbook, ws);
  XLSX.writeFile(workbook, "out.xlsx");
}
// readXlsx();
writeNewXlsx();
