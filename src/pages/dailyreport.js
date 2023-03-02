const memberList = [
  'Miku', 'Rin', 'Ruka', 'Ren', 'Meiko', 'Kaito',
  'Kanade', 'Mafuyu', 'Ichika', 'Saki', 'An', 'Airi', 'Shizuku'
]

const allcheck = (offon) => {
  const member = document.getElementsByName('member')
  for(let i = 0; i < member.length; ++i) {
    member[i].checked = offon
  }
}

const MemberList =`
  <div class="memberbox">
  ${memberList.reduce((pre, el) => {
    return pre +
           `<div class="memberitem">
              <input type="checkbox" name="member" id="${el} value="${el}">
              <lable for="${el}">${el}</lable>
            </div>
           `
  }, '')}
  </div>
`

const AllButton =`
  <button class="all-button" onclick="allcheck(true)">All Select</button>
  <button class="all-button" onclick="allcheck(false)">All Release</button>
`

const DailyReport =`
  <p class="content-title">Member List</p>
  ${AllButton}
  ${MemberList}
`

const dailyReport = document.getElementById('dailyreport')
dailyReport.insertAdjacentHTML('afterend', DailyReport)