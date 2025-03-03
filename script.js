const toggleBtn = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed')
  toggleBtn.classList.toggle('fa-angles-right')
  toggleBtn.classList.toggle('fa-angles-left')

  closeAllSubMenus()
})

function toggleSidebar(){
  sidebar.classList.toggle('close')

  closeAllSubMenus()
}