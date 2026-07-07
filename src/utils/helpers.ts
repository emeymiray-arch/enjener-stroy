import type { NavigateFunction } from 'react-router-dom';

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function scrollToElement(
  selector: string,
  offset = 80,
): void {
  const element = document.querySelector(selector);
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function navigateToSection(
  navigate: NavigateFunction,
  href: string,
  currentPath: string,
): void {
  if (currentPath === '/') {
    scrollToElement(href);
    return;
  }

  navigate('/');
  requestAnimationFrame(() => {
    setTimeout(() => scrollToElement(href), 150);
  });
}
