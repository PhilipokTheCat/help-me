module.exports = function count(s, pairs) {
  let sum = 1, count = 0, isRight, tempGCD, 
  gcd = function(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
  };

  for (let i of pairs) sum *= Math.pow(i[0], i[1]);
  if (!isFinite(sum) || sum > 1000000) return 0;
  for (let i = 0; i < sum; i++){
    for (let j = 0; j < s.length; j++){
      tempGCD = gcd(i+j, sum);
      if (s[j] === "1")
        if (tempGCD === 1) isRight = true;
        else {isRight = false; break;};
      if (s[j] === "0")
        if (tempGCD !== 1) isRight = true;
        else {isRight = false; break;};
    }
    if (isRight) count++;
  }
  return count % 1000000007;
}