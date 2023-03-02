const linkList = [
  {page: 'dailyreport', title: 'Daily Report'},
  {page: 'dailyreport', title: 'Sample 1'},
  {page: 'dailyreport', title: 'Sample 2'},
  {page: 'dailyreport', title: 'Sample 3'},
  {page: 'dailyreport', title: 'Sample 4'},
  {page: 'dailyreport', title: 'Sample 5'},
  {page: 'dailyreport', title: 'Sample 6'},
  {page: 'dailyreport', title: 'Sample 7'},
  {page: 'dailyreport', title: 'Sample 8'},
]

const Home =`
  <div class="container">
    ${linkList.reduce((pre, el) => {
      return pre +` 
             <div class="sticky">
               <p><a href="./pages/${el.page}.html">${el.title}</a></p>
             </div>`
    }, '')}
  </div>
`

const topPage = document.getElementById("home")
topPage.insertAdjacentHTML("afterend", Home)