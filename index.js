function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n){
  const ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i=0; i<ranks.length; i++){
    ranks[i].innerHTML = ( parseInt(ranks[i].innerHTML, 10) + n ).toString();
  }
}

function deepestChild(){
  let oldChild = '';
  let newChild = document.getElementById('grand-node');
  let flag = 1;
  while (flag>0){
    oldChild = newChild;
    newChild = oldChild.querySelector('div');
    if (!newChild){flag = 1}
  }
  return oldChild;
}