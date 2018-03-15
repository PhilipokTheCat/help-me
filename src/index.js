module.exports = function count(s, pairs) {
  let sum = 1, count = 1, isRight, tempGCD,
  gcd = function(a, b) {
    while (true){
      if (a === 0) return b;
      b %= a;
      if (b === 0) return a;
      a %= b;
    }
  };

  for (let i of pairs) sum *= Math.pow(i[0], i[1]);
  //if (!isFinite(sum)) return 0;
  if (sum > 1000000){
    let func = function (s, pair){
      count = 0;
      for (let i = 0; i < pair[0]; i++){
        isRight = false;
        for (let j = 0; j < s.length; j++){
          tempGCD = gcd(i+j, pair[0]);
          if (s[j] === "1"){
            if (tempGCD === 1) isRight = true
            else {isRight = false; break;};}
          else {
            if (tempGCD !== 1) isRight = true
            else {isRight = false; break;};
          };
        }
        if (isRight) count++;
      }
      count *= Math.pow(pair[0], pair[1]-1);
      return count;
    };
    sum = 1;
    for (let i = 0; i < pairs.length; i++){
      let temp = func(s, pairs[i]);
      sum *= temp !== 0 ? temp : 1;
    }
    return sum === 1 ? 0 : sum;
  }
  else {
    count = 0;
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
  
}