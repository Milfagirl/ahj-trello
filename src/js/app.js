const list = { 1: [], 2: [], 3: [] };

const divinput = `<form><input type = 'text'>
<button class = 'addnewtask'>Add task</button>
<button class = 'deletenewtask'>X</button>
</form>`;

function redraw(data, value) {
  return `<div class="task" data-id=${data}><span>${value}</span><button class = 'deletecard'>X</button></div>`
}

const divtask = `<div class="task"><span></span><button class = 'deletecard'>X</button></div>`

const buttonadd = document.querySelectorAll('.add');

buttonadd.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    const tasks = element.closest('.column').querySelector('.tasks');
   
    tasks.insertAdjacentHTML('afterEnd', divinput);
    const form = element.closest('.column').querySelector('form');
    element.style.display = 'none';
   
    const input = form.querySelector('input');
    const addnewtask = form.querySelector('.addnewtask');
    const deletenewtask = form.querySelector('.deletenewtask');
    addnewtask.addEventListener('click', (e1) => {
      e1.preventDefault();
      const index = form.closest('.column').dataset.id;
      list[Number(index)].push(input.value);
      tasks.innerHTML = '';
      list[Number(index)].forEach((el) => {
        tasks.insertAdjacentHTML('beforeEnd', redraw(list[Number(index)].indexOf(el),el));
      });
      form.remove();
      element.style.display = 'block';
      element.style.marginLeft = 'auto';
      element.style.marginRight = 'auto';
    });
    deletenewtask.addEventListener('click', (e2) => {
      e2.preventDefault();
      form.remove();
      element.style.display = 'block'
      element.style.marginLeft = 'auto';
      element.style.marginRight = 'auto';
    });
  });
});
document.addEventListener('mouseover', (e3) => {
  if (e3.target.className === 'task' || e3.target.tagName === 'SPAN') {
    const deletecard = e3.target.closest('.task').querySelector('.deletecard');
    deletecard.style.display = 'block';
  };
})
document.addEventListener('mouseout', (e4) => {
  if (e4.target.className === 'task' || e4.target.tagName === 'SPAN') {
    const deletecard = e4.target.closest('.task').querySelector('.deletecard');
    deletecard.style.display = 'none';
  };
})

// if (document.querySelector('.deletecard')) {

document.addEventListener('click', (e5) => {
  if (e5.target.className === 'deletecard') {
    e5.preventDefault();
    const index1 = Number(e5.target.closest('.column').dataset.id);
    const index2 = Number(e5.target.closest('.task').dataset.id);
    const tasks = e5.target.closest('.tasks');
    console.log(list);
    list[index1].splice(index2,1);
    console.log(list);
    tasks.innerHTML = '';
    list[index1].forEach((el) => {
      tasks.insertAdjacentHTML('beforeEnd', redraw(list[index1].indexOf(el),el));
    });
  };
});
// }