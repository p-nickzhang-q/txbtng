import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtillService {

  constructor() { }

  public sum(arr: Object[], sumPropertyName) {
    return arr.reduce((pv, cv, index) => {
      return pv + (cv[sumPropertyName] ? cv[sumPropertyName] : 0);
    }, 0)
  }

  public groupSum(arr: Object[], groupPropertyNames: any[], sumPropertyNames: any[]) {
    let map = {};
    arr.forEach(item => {
      let key = groupPropertyNames.reduce((pv, cv, index) => {
        if (index === 0) {
          return item[cv];
        } else {
          return pv + '.' + item[cv];
        }
      }, '')
      if (!map[key]) {
        map[key] = [];
      }
      map[key].push(item);
    });

    let sumMap = {}
    Object.keys(map).forEach(key => {
      let groupArr = map[key];
      sumMap[key] = {};
      sumPropertyNames.forEach(sumPropertyName => {
        //$count, 计算分组里的个数
        if (sumPropertyName === '$count') {
          sumMap[key]['$count'] = groupArr.length;
        } else {
          sumMap[key][sumPropertyName] = this.sum(groupArr, sumPropertyName);
        }
      })
    })

    return sumMap;

  }

  group(arr, groupPropertyNames) {
    const map = {};
    arr.forEach(item => {
      let key = groupPropertyNames.reduce((pv, cv, index) => {
        var cvArr = cv.split('.');
        var value = item;
        cvArr.forEach(k => {
          value = value[k];
          if (!value) {
            console.error(`Object ${JSON.stringify(item)} 的 ${cvArr} 不存在`);
          }
        })
        if (index === 0) {
          return value;
        } else {
          return pv + '.' + value;
        }
      }, '')
      if (!map[key]) {
        map[key] = [];
      }
      map[key].push(item);
    });
    return map;
  }

  isEmptyObj(obj) {
    return !obj || Object.keys(obj).length === 0;
  }
}
