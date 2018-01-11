class Util<T> {
    constructor(public mainVal : T){
    }

    add(inputVal:T){
      console.log(this.mainVal);
    }
}

const util = new Util<string>('aaa');
util.add('bbb');

const util1 = new Util<number>(10);
util1.add(20);




