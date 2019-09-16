var twoSum = function (nums, target) {
  var hash = []
  for (let i = 0; i < nums.length; i++) {
    debugger
    if (hash[nums[i]]!=undefined) {
      return [hash[nums[i]],i]
    }
    hash[target - nums[i]] = i
  }
  return
};

console.log(twoSum([2, 7, 11, 15], 9))