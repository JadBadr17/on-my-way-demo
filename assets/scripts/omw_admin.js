function showContent(id) {
    const allContent = document.querySelectorAll('.content');
    allContent.forEach(div => div.classList.remove('active'));
    
    const selectedDiv = document.getElementById(id);
    selectedDiv.classList.add('active');
  }