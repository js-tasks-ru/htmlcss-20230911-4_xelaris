const switchers = document.querySelectorAll('[id^="theme-changer"]');
const switchTheme = e => {
  document.documentElement.toggleAttribute('data-theme-dark');
  switchers.forEach(switcher => {
    if (switcher != e.target) {
      switcher.checked = !switcher.checked;
    }
  });
}  
switchers.forEach(switcher => switcher.addEventListener('change', switchTheme));
