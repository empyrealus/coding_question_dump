let prop = "soin(*29392adudejskn)",
substring = "dude";
function find_substring(string_in, target){
  let substring_regex = new RegExp(target, "gm");
  return Boolean(substring_regex.test(string_in));
} console.log(find_substring(prop, substring));
