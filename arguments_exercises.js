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

  return function alice(num) {
    args.push(num);
    if (args.length === numArgs) {
      let sum = 0;
      args.forEach(ele => sum += ele);
      return sum;
    }
    return alice;
  };
}


// function curriedSum(numArgs) {
//   let args = [];

//   const alice = function (num) {
//     args.push(num);
//     if (args.length === numArgs) {
//       let sum = 0;
//       args.forEach(ele => sum += ele);
//       return sum;
//     }
//     return alice;
//   };
//   return alice;

// }





Function.prototype.curry = function(numArgs){
  let args = [];
  let banana = this;

  return function alice() {
    args = args.concat(Array.from(arguments));

    if(args.length === numArgs){
      return banana.apply(banana, args);
    }
    return alice;
  }
};

Function.prototype.restfulCurry = function (numArgs) {
  let args = [];
  let that = this;

  const alice = function(){
    args = args.concat(Array.from(arguments));

    if (args.length === numArgs) {
      return that.apply(that, args);
    }
    return alice;
  };
  return alice;
};


function printer(...args){
  args.forEach(el => {
    console.log(el);
  })
}
