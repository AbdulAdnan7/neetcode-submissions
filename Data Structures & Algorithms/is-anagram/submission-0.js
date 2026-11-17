class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const a = s.split('').sort().join('')
        const b = t.split('').sort().join('')

        if(a === b) {
            return true
        } else {
          return  false
        }
    }
}
