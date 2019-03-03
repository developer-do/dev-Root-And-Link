const common = {
  idGet (clickThis, className) {
    let it = clickThis.parentNode;
    while (!(it.getAttribute('class') === className)) {
      it = it.parentNode;
    }
    return it.getAttribute('id');
  }
}


const utils = {
  clickAjax (clickD, dataName) {
    $.ajax({
      url: '/query/frontendQuery.php',
      type: 'POST',
      data: {
        dataName: dataName
      },
      success: function (data) {
        console.log(data);
        if (data === 'success') {
          clickD.classList.add('checkOK');
        }
      }
    });
  },

  clickData () {
    const cData = findElem.setSeleAll('.clickData > span');
    for (let i = 0; i < cData.length; i++){
      (function (j) {
        cData[j].addEventListener('click', function () {
          let clickThis = this;
          let dataName = this.getAttribute('data-name');
          utils.clickAjax(clickThis, dataName);
          create.clickCreateTag(clickThis);
        });
      })(i);
    }
  },

  dataNumAdd() {
    const findE = findElem.setSeleAll('.title');
    let findArr = [];
    for (let i = 0; i < findE.length; i++) {
      findArr.push(findE[i].getAttribute('id'));
    }
    for (let i = 0; i < findArr.length; i++) {
      let insideElem = findElem.setSeleAll('#' + findArr[i] + ' .clickData > span');
      for (let j = 0; j < insideElem.length; j++) {
        insideElem[j].setAttribute('data-cnt', findArr[i] + (j+1));
      }
    }
  },

  
};

const deleteElem = {
  clickDelete() {
    let deleteBtn = findElem.setSele('.deleteBtn');
    deleteBtn.addEventListener('click', function () {
      let it = findElem.setSele('.popup');
      it.remove();
    });
  }
};

const create = {
  clickCreateTag(that) {
    let divCre = document.createElement('DIV');
    let divWrapCre = document.createElement('DIV');
    let spanCreLink = document.createElement('SPAN');
    let spanCreComplete = document.createElement('SPAN');
    let clickDelete = document.createElement('button');
    let titleName = common.idGet(that, 'title');
    let titleElem = findElem.setSele('#' + titleName + ' > .sTitle');

    divWrapCre.innerHTML = `<h2>${titleElem.innerText + " " + that.innerText}</h2>`;
    spanCreComplete.innerHTML = `<input type="button" value="공부 완료" name="${that.getAttribute('data-name')}">`;
    spanCreLink.innerHTML = `<a href='/link/${that.getAttribute('data-name')}.php'>관련 링크</a>`;
    clickDelete.innerHTML = `CLOSE`;
    
    divCre.classList.add(that.getAttribute('data-cnt'));
    divCre.classList.add('popup');
    divWrapCre.classList.add('popupWrap');
    clickDelete.classList.add('deleteBtn');

    
    document.body.appendChild(divCre);
    divCre.appendChild(divWrapCre);
    divWrapCre.appendChild(clickDelete);
    divWrapCre.appendChild(spanCreComplete);
    divWrapCre.appendChild(spanCreLink);
    
    create.itFullWidHei(divCre);
    deleteElem.clickDelete();
  },

  itFullWidHei(that) {
    let winWid = window.innerWidth - 20;
    let winHei = window.innerHeight;
    that.style.width = winWid + 'px';
    that.style.height = winHei + 'px';
    
    window.addEventListener('resize', function () {
      winWid = this.innerWidth - 20;
      winHei = this.innerHeight;
      console.log(winWid);
      console.log(winHei);
      that.style.width = winWid + 'px';
      that.style.height = winHei + 'px';
    });
  },
}



const findElem = {
  setSeleAll(findStr) {
    return document.querySelectorAll(findStr);
  },
  setSele(findStr) {
    return document.querySelector(findStr);
  }
};




const init = function () {
  utils.dataNumAdd();
  utils.clickData();
}
init();
