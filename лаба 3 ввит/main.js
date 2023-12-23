function togglePortfolio() {
  const portfolioContent = document.getElementById('portfolioContent');
  const swaggerScreenshot = document.getElementById('swaggerScreenshot');
  const githubLink = document.getElementById('githubLink');
  const portfolioBtnText = document.getElementById('portfolioBtnText');

  if (portfolioContent.classList.contains('show')) {
    portfolioContent.classList.remove('show');
    portfolioBtnText.textContent = 'Открыть портфолио';
 
   
    swaggerScreenshot.style.display = 'none';
    githubLink.style.display = 'none';
  } else {
    portfolioContent.classList.add('show');
    portfolioBtnText.textContent = 'Закрыть портфолио';


    swaggerScreenshot.style.display = 'block';
    githubLink.style.display = 'block';
  }
}
