const utils = {
  clickAjax (clickD, dataName) {
    $.ajax({
      url: '/query/frontendQuery.php',
      type: 'POST',
      data: {
        dataName: dataName
      },
      success:function (data) {
        if (data === 'success') {
          clickD.classList.add('checkOK');
        }
      }
    });
  },
  clickData () {
    const cData = findElem.setSelectorAll('.clickData > span');
    for (let i = 0; i < cData.length; i++){
      (function (j) {
        cData[j].addEventListener('click', function () {
          let clickThis = this;
          let dataName = this.getAttribute('data-name');
          utils.clickCreateTag(utils.clickIdGet(clickThis, 'title'), j);
          // clickCreateTag(clickIdGet);
          utils.clickAjax(clickThis, dataName);
        });
      })(i);
    }
  },
  clickIdGet (clickThis, className) {
    let it = clickThis.parentNode;
    while (!(it.getAttribute('class') === className)) {
      it = it.parentNode;
    }
    return it.getAttribute('id');
  },
  dataNumAdd () {
    const cData = findElem.setSelectorAll('.clickData > span');
    for (let i = 0; i < cData.length; i++) {
      cData[i].setAttribute('data-num', i);
    }
  },
  clickCreateTag (id, index) {
    let divCre = document.createElement('DIV');
    let spanCreLink = document.createElement('SPAN');
    let spanCreComplete = document.createElement('SPAN');
    divCre.classList.add(id);
    divCre.setAttribute('data-num', index);
    // spanCreOne.setAttribute('class', '')
    console.log(divCre);
  }
};

const findElem = {
  setSelectorAll(findStr) {
    return document.querySelectorAll(findStr);
  },
  setSelector(findStr) {
    return document.querySelector(findStr);
  }
};



const init = function () {
  utils.clickData();
}
init();