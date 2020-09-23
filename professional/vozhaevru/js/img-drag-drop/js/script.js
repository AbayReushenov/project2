 const fill = document.querySelector('.fill');
 const empties = document.querySelectorAll(".empty");

 // fill listeners
 fill.addEventListener('dragstart', dragStart);
 fill.addEventListener('dragend', dragEnd);

// loop through empties end call drag events
for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

 // Drag  start
function dragStart() {
    console.log("start")
    this.className += ' hold';
    // this.className = 'invisible'
    // it happens after we move it
    setTimeout(() => (this.className = 'invisible'), 0);
    }

 function dragEnd() {
     this.className = 'fill';
    console.log("end");
}

function dragOver(event) {
    event.preventDefault();
    console.log("over");
}
function dragEnter(newevent) {
    newevent.preventDefault();
    this.className += ' hovered';
    console.log("enter");
}

function dragLeave() {
    this.className = 'empty'
    console.log("leave");
}

function dragDrop() {
    this.className = 'empty';
    this.append(fill); 
    console.log("Drop and fill");
}
