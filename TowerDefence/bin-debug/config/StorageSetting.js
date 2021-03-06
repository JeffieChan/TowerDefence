var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 本地数据存储库
 * @author Andrew_Huang
 * @class StorageSetting
 */
var StorageSetting = (function () {
    function StorageSetting() {
    }
    /**
     * 读取storage
     * @author Andrew_Huang
     * @static
     * @param {string} key
     * @returns {string}
     * @memberof StorageSetting
     */
    StorageSetting.getItem = function (key) {
        var value = egret.localStorage.getItem(key);
        if (value == null)
            value = "0";
        return value;
    };
    /**读取本地游戏配置和储存的数据*/
    StorageSetting.loadConfig = function () {
        var value;
        var i;
        var len;
        //清除storage
        //egret.localStorage.clear();
        //return;
        //读取所有关卡当前状态(小旗旗)
        len = GuanKaConfig.data.length;
        for (i = 0; i < len; i++) {
            value = "1";
            egret.localStorage.setItem("ispass" + i, value);
            GuanKaConfig.data[i]["ispass"] = Boolean(Number(value));
            value = egret.localStorage.getItem("wujin" + i);
            if (value == null) {
                value = "0";
                egret.localStorage.setItem("wujin" + i, value);
            }
            GuanKaConfig.data[i]["wujin"] = Number(value);
        }
        //读取塔升级配置
        for (i = 0; i < 4; i++) {
            for (var j = 0; j < 3; j++) {
                value = "1";
                egret.localStorage.setItem(TowerLevel.towNameArr[i] + TowerLevel.keyNameArr[j], value);
                if (i == 0) {
                    TowerLevel.ArrowTower[TowerLevel.keyNameArr[j]] = Boolean(Number(value));
                }
                else if (i == 1) {
                    TowerLevel.ShieldTower[TowerLevel.keyNameArr[j]] = Boolean(Number(value));
                }
                else if (i == 2) {
                    TowerLevel.MagicTower[TowerLevel.keyNameArr[j]] = Boolean(Number(value));
                }
                else if (i == 3) {
                    TowerLevel.ExploTower[TowerLevel.keyNameArr[j]] = Boolean(Number(value));
                }
            }
        }
        //读取玩家获得金星数量
        value = egret.localStorage.getItem("goldStar");
        if (value == null) {
            value = "0";
            egret.localStorage.setItem("goldStar", value);
        }
        GameSetting.goldStar = Number(value);
        //读取英雄数据 各个英雄解锁状态、当前选中英雄、(攻击力、生命力、攻击速度、移动速度)
    };
    /**设置关卡故事模式通关状态*/
    StorageSetting.setGuankaPass = function (idx) {
        egret.localStorage.setItem("ispass" + idx, "1");
        GuanKaConfig.data[idx]["ispass"] = true;
    };
    /**设置关卡无尽模式通关状态*/
    StorageSetting.setGuankaWujin = function (idx, num) {
        var oldnum = egret.localStorage.getItem("wujin" + idx);
        if (num <= Number(oldnum))
            return;
        egret.localStorage.setItem("wujin" + idx, String(num));
        GuanKaConfig.data[idx]["wujin"] = num;
    };
    /**
     * 设置塔升级状况
     * @author Andrew_Huang
     * @static
     * @param {number} j
     * @memberof StorageSetting
     */
    StorageSetting.setTowerUpgrade = function (j) {
        for (var i = 0; i < 4; i++) {
            egret.localStorage.setItem(TowerLevel.towNameArr[i] + TowerLevel.keyNameArr[j], "1");
            if (i == 0) {
                TowerLevel.ArrowTower[TowerLevel.keyNameArr[j]] = true;
            }
            else if (i == 1) {
                TowerLevel.ShieldTower[TowerLevel.keyNameArr[j]] = true;
            }
            else if (i == 2) {
                TowerLevel.MagicTower[TowerLevel.keyNameArr[j]] = true;
            }
            else if (i == 3) {
                TowerLevel.ExploTower[TowerLevel.keyNameArr[j]] = true;
            }
        }
    };
    return StorageSetting;
}());
__reflect(StorageSetting.prototype, "StorageSetting");
