function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
function openModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
// selecting the elements and storing them in a variable
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnHideModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
// looping through the node list and adding event listener to them so we can display the modal
for (let i = 0; i < btnShowModal.length; i++) {
    btnShowModal[i].addEventListener('click', openModal);
}

btnHideModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});