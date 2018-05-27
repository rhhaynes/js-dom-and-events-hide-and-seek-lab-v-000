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
  let child = document.getElementById('grand-node');
  while (child.length>1){child = child.querySelector('div')}
  return child;
}