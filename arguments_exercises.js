function sum(){
  let args = Array.from(arguments);
  let sum = 0;

  args.forEach(el => {
    sum += el;
  });
  return sum;

}

// console.log(sum(4,3,2,1));

function sum_with_rest(...args) {
  let sum = 0;

  args.forEach(el => {
    sum += el;
  });
  return sum;

}
// console.log(sum_with_rest(4, 3, 2, 1));

Function.prototype.myBind = function(subject, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(subject, bindArgs.concat(callArgs));
  };
};

Function.prototype.myWorseBind = function(subject) {
  let bindArgs = Array.from(arguments).slice(1);
  return () => {
    let callArgs = Array.from(arguments);
    return this.apply(subject, bindArgs.concat(callArgs));
  };
};

function curriedSum(numArgs) {
  let args = [];
  
  return function(num) {
    args.concat(num);
    if (args.length === numArgs) {
      let sum = 0;
      args.forEach(ele => sum += ele);
      return sum;
    }
    return this;
  };
}

Function.prototype.curry = function(numArgs){
  let args = [];

  return () => {
    args = args.concat(Array.from(arguments));

    if(args.length === numArgs){
      return this.apply(this, args);
    }
  }
};

Function.prototype.restfulCurry = function (numArgs) {
  let args = [];

  return () => {
    args = args.concat(Array.from(arguments));

    if (args.length === numArgs) {
      return this.apply(this, args);
    }
  }
};
