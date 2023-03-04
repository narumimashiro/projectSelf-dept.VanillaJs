const SUN = 0;  const MON = 1;  const TUE = 2;  const WED = 3;
const THU = 4;  const FRI = 5;  const SAT = 6; const WEEK = 7;

const memberList = [
  'Miku', 'Rin', 'Ruka', 'Ren', 'Meiko', 'Kaito',
  'Kanade', 'Mafuyu', 'Ichika', 'Saki', 'An', 'Airi', 'Shizuku'
]

const allcheck = (offon, list) => {
  const member = document.getElementsByName(list)
  for(let i = 0; i < member.length; ++i) {
    member[i].checked = offon
  }
}

const getDateString = (before) => {
  let dateData = new Date()
  dateData.setDate(dateData.getDate() - before)
  const month = `0${dateData.getMonth()+1}`.slice(-2)
  const date = `0${dateData.getDate()}`.slice(-2)
  let day
  switch(dateData.getDay()) {
  case SUN: day = '(日)'; break;
  case MON: day = '(月)'; break;
  case TUE: day = '(火)'; break;
  case WED: day = '(水)'; break;
  case THU: day = '(木)'; break;
  case FRI: day = '(金)'; break;
  case SAT: day = '(土)'; break;
  default: break; // Dont come here
  }
  return `${month}/${date}${day}`
}

const getCheckbox = (elName) => {
  const cb = document.getElementsByName(elName)
  let resVal = new Array()
  cb.forEach(el => {
    if(el.checked) {
      resVal.push(el.value)
    }
  })
  return resVal
}

const getRadio = (elName)=> {
  const radio = document.getElementsByName(elName)
  let res
  radio.forEach(el => {
    if(el.checked) {
      res = el.value
    }
  })
  return res
}

const createText = () => {
  const memList1 = getCheckbox('member1')
  const memList2 = getCheckbox('member2')
  const deadLine = getRadio('dating')

  const inputText =
// ****************************************
`
[Notice]

${memList1.reduce((pre, el) => {
  return pre + `${el}さん、`
}, '')}

締め切りが${deadLine}です。

${memList2.reduce((pre, el) => {
  return pre + `${el}さん、`
}, '')}
`
// ***************************************

  console.log(inputText)
  document.getElementById('output').textContent = `${inputText}`
}

const OutputText =`
  <div class="output-text">
    <textarea id="output"></textarea>
  </div>
`

const CreateText =`
  <div class="create-btn">
    <button onclick="createText()">Create</button>
  </div>
`

const MemberList1 =`
  <div class="memberbox">
  ${memberList.reduce((pre, el) => {
    return pre +
           `<div class="memberitem">
              <input type="checkbox" name="member1" id="${el}" value="${el}">
              <lable for="${el}">${el}</lable>
            </div>
           `
  }, '')}
  </div>
`

const MemberList2 =`
  <div class="memberbox">
  ${memberList.reduce((pre, el) => {
    return pre +`
            <div class="memberitem">
              <input type="checkbox" name="member2" id="${el}" value="${el}">
              <lable for="${el}">${el}</lable>
            </div>`
  }, '')}
  </div>
`

const ClosingDate =`
  <div class="dating-line">
    ${Array(WEEK).fill('').reduce((pre, _, index) => {
      const timeStr = getDateString(index)
      return pre +`
              <div class="dating-item">
                <input type="radio" name="dating" id="${index}" value="${timeStr}">
                <label for="${index}">${timeStr}</label>
              </div>`
    }, '')}
  </div>
`

const AllButton =`
  <div class="all-button">
    <button onclick="allcheck(true, 'member2')">All Select</button>
    <button onclick="allcheck(false, 'member2')">All Release</button>
  </div>
`

const DailyReport =`
  <p class="content-title">Member List1</p>
  ${MemberList1}
  ${ClosingDate}
  <div style="display: flex">
    <p class="content-title">Member List2</p>
    ${AllButton}
  </div>
  ${MemberList2}
  ${CreateText}
  ${OutputText}
`

const dailyReport = document.getElementById('dailyreport')
dailyReport.insertAdjacentHTML('afterend', DailyReport)