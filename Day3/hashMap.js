class Data {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashMap {
  constructor(size) {
    this.mapSize = size;
    this.hashTable = [];

    // ----------Hash Function----------
    HashMap.prototype.getIndexNumber = (key) => {
      let ASCII = 0;

      for (let i = 0; i < key.length; i++) {
        ASCII += key.charCodeAt(i);
      }

      return ASCII % this.mapSize;
    };

    // ----------추가 함수----------
    HashMap.prototype.addInfo = (key, value) => {
      let index = this.getIndexNumber(key);

      if (this.hashTable[index] === undefined) {
        this.hashTable[index] = [];
      }
      this.hashTable[index].push(new Data(key, value));
    };

    // ----------삭제 함수----------
    HashMap.prototype.deleteInfo = (key) => {
      let index = this.getIndexNumber(key);
      let repositoryInfo = this.hashTable[index];

      if (repositoryInfo === undefined) {
        console.log('존재하지 않는 key 입니다');
        return;
      }

      for (let i = 0; i < repositoryInfo.length; i++) {
        if (repositoryInfo[i].key === key) {
          repositoryInfo.splice(i, 1);
          return;
        }
      }

      console.log('존재하지 않는 key 입니다');
    };

    // ----------HashMap 출력용----------
    HashMap.prototype.printHashMap = () => {
      let resultString = '';

      for (const repositoryInfo of this.hashTable) {
        if (repositoryInfo === undefined) {
          continue;
        }
        resultString += this.makeStringsPretty(repositoryInfo);
      }

      if (resultString.length !== '') {
        return resultString;
      } else {
        return '비어있는 HashMap 입니다';
      }
    };

    // ----------리스트의 키들을 문자열로 합침----------
    HashMap.prototype.makeStringsPretty = (repositoryInfo) => {
      let result = '[' + this.getIndexNumber(repositoryInfo[0].key) + ']';

      for (const information of repositoryInfo) {
        result += ' => ' + information.key + ' : ' + information.value;
      }

      return result + '\n';
    };
  }
}

//----------test----------
let hashMap = new HashMap(10);

hashMap.addInfo('치킨', '19,900원');
hashMap.addInfo('보쌈', '34,900원');

hashMap.addInfo('햄버거', '4,900원');

hashMap.addInfo('피자', '24,900원');
hashMap.addInfo('곱도리탕', '9,500원');

hashMap.addInfo('찜닭', '7000원');
hashMap.addInfo('짜장면', '7000원');

console.log(`전체출력 
${hashMap.printHashMap()}`);

console.log('-------------------------------------------');

hashMap.deleteInfo('치킨');
hashMap.deleteInfo('피자');
hashMap.deleteInfo('찜닭');

console.log(`치킨, 피자, 찜닭 삭제 후
${hashMap.printHashMap()}`);
