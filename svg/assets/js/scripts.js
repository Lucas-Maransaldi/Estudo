import { Cards } from "./cards";

window.onload = () => {
    const animaCards = new Cards();
    document.addEventListener('scroll', animaCards.scrollCards.bind(animaCards));
}