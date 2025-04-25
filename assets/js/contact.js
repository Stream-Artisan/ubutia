function toggleFaq(element) {
    const answer = element.nextElementSibling;
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}
function showFaqContent(index) {
    const tabs = document.querySelectorAll('.faq-tab');
    const contents = document.querySelectorAll('.faq-content');

    tabs.forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
        tab.setAttribute('aria-selected', i === index);
    });

    contents.forEach((content, i) => {
        content.classList.toggle('active', i === index);
    });
}
