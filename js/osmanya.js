var trans = {
 
  kh :'𐒅', 
  sh :'𐒉',
  dh :'𐒊',
  aa :'𐒛',
  ee :'𐒜',
  oo :'𐒝',
  "'" :'𐒀',
  b :'𐒁',
  t :'𐒂',
  j :'𐒃',
  x :'𐒄',
  d :'𐒆',
  r :'𐒇',
  s :'𐒈',
  c :'𐒋',
  g :'𐒌',
  f :'𐒍',
  q :'𐒎',
  k :'𐒏',
  l :'𐒐',
  m :'𐒑',
  n :'𐒒',
  w :'𐒓',
  h :'𐒔',
  y :'𐒕',
  a :'𐒖',
  e :'𐒗',
  i :'𐒘',
  o :'𐒙',
  u :'𐒚',
}

let keys = [
"kh",
"sh",
"dh",
"aa",
"ee",
"oo",
"'",
"b",
"t",
"j",
"x",
"d",
"r",
"s",
"c",
"g",
"f",
"q",
"k",
"l",
"m",
"n",
"w",
"h",
"y",
"a",
"e",
"i",
"o",
"u",];

function doubleLetters(input, index) {
    var translit = input.split(keys[index]);
    if (index + 1 === keys.length) return translit.join(trans[keys[index]]);
    var output = [];
    for (var item of translit) output.push(doubleLetters(item, index + 1));
    return output.join(trans[keys[index]]);
}

function transliterate() {
  var latin = doubleLetters(document.getElementById('latin').value, 0);
  document.getElementById('result').innerHTML = latin;
  return false;
}

if(latin) {
document.getElementById('latin').addEventListener('keyup', transliterate);
}
 
document.querySelector("#copy-button").onclick = function() {
document.querySelector("#result").select();
document.execCommand('copy');
};