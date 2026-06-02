// Mark the current page's nav link as active
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  link.classList.toggle('active', href === path || (path === '' && href === 'index.html'));
});