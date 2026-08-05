class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let map1 = new Map();
        let map2 = new Map();

        for(let i=0; i<s.length; i++){
            map1.set(s[i], (map1.get(s[i]) || 0) + 1)
        }

        for(let j=0; j<t.length; j++){
            map2.set(t[j], (map2.get(t[j]) || 0) + 1)
        }

        if (map1.size !== map2.size) return false;

        for(let [char, count] of map1){
            if(map2.get(char) !== count) return false;
        }

        return true;

    }
}
