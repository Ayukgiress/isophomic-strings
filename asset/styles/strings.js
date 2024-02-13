function isomorphicStrings (str1, str2) {
  if (str1.length !== str2.length) {
    return 'the string entered is not isomorphic.'
  }

  const map = new Map()
  const set = new Set()

  for (let i = 0; i < str1.length; i++) {
    const char1 = str1.charAt(i)
    const char2 = str2.charAt(i)

    if (map.has(char1)) {
      if (map.get(char1) !== char2) {
        return 'the string entered is not isomorphic.'
      }
    } else {
      if (set.has(char2)) {
        return 'the string entered is not isomorphic.'
      }
      map.set(char1, char2)
      set.add(char2)
    }
  }

  return 'the string entered is isomorphic.'
}

function checkIsomorphic () {
  const input1 = document.getElementById('string1').value
  const input2 = document.getElementById('string2').value
  const result = isomorphicStrings(input1, input2)
  document.getElementById('result').innerText = '' + result
}

checkIsomorphic()
