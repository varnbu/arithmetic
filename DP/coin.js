/**
 * 查找最少硬币数
 * @param {Array<int>} coins  硬币数组
 */

function MinCoinChange (coins) {
    var coins = coins;
    var cache = {};

    this.makChange = function (amount) {
        var me = this
        if (!amount) {
            return [];
        }
        if (cache[amount]) {
            return cache[amount];
        }

        var min = [], newMin, newAmount;
        for (var i = 0; i < coins.length; i++) {
            var coin = coins[i];
            newAmount = amount - coin
            if (newAmount >= 0) {
                newMin = me.makChange(newAmount);
            }
            if (newAmount >= 0
                && (newMin.length < min.length - 1 || !min.length)
                && (newMin.length || !newAmount)) {
                min = [coin].concat(newMin);
                console.log('new Min :', min, 'for', amount);
            }
        }
        return (cache[amount] = min);
    }
}

/*


*/


