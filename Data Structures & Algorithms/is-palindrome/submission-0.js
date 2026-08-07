class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let string = "";
        for(let c of s){
            if(/^[a-zA-Z0-9]$/.test(c)){
                string += c.toLowerCase()
            }
        }

        let left = 0;
        let right = string.length - 1;

        while(left < right){
            if(string[left] !== string[right]){
                return false
            }
            left++;
            right--;
        }

        return true;

    }
    
}
