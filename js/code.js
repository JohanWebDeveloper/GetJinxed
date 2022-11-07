// Title function
const title = document.querySelector('.title');
const container = document.querySelector('.container')
const imgContainer = document.querySelector('.grid-gallery');


title.addEventListener('click',()=>{
    container.classList.toggle('inactive');
    title.classList.toggle('active');
    imgContainer.classList.toggle('active');
    
})


// Gallery Function
const gallery = (id)=>{

    const imageId = id; 
    const nextImg = imageId + 2; 
    const nextImage = document.getElementById('next-image');
    nextImage.addEventListener('click',()=>{
                    
                    modal.innerHTML = `<div class="closeIcon-modal" id="closeIcon">
                    <span class="bar-modal-1"></span>
                    <span class="bar-modal-2"></span>
                   </div>

                    <div class="next-image" id="next-image">
                        <span class="next-modal-1"></span>
                        <span class="next-modal-2"></span>
                    </div>

                    <div class="previous-image" id="previous-image">
                        <span class="previous-modal-1"></span>
                        <span class="previous-modal-2"></span>
                    </div>
                    <img class="img active" src="img/${nextImg}.jpg" id="img-${nextImg}">
                    `;
                     const closeIcon = document.getElementById('closeIcon')
                        closeIcon.addEventListener('click',()=>{
                        modalContainer.classList.remove('active')
                        modal.innerHTML = ``;
                    });
                }
    )

}

const galleryExecution = ()=>{
    for(var i = 0; i < 18; i++){
        
            gallery(i);
        
    }
}



const execution = ()=>{
    for(var i = 1; i < 18; i++){
        functionModal(i);
    }
}




// Function Modal
const modalContainer = document.querySelector('.modal-image');
const modal = document.querySelector('.modal')

const functionModal = (id)=>{
    const img = document.getElementById(`img-${id}`);
        if(img){
        img.addEventListener('click',()=>{
        
        modalContainer.classList.toggle('active');
        modal.innerHTML = `<div class="closeIcon-modal" id="closeIcon">
                            <span class="bar-modal-1"></span>
                            <span class="bar-modal-2"></span>
                           </div>

                            <div class="next-image" id="next-image">
                                <span class="next-modal-1"></span>
                                <span class="next-modal-2"></span>
                            </div>

                            <div class="previous-image" id="previous-image">
                                <span class="previous-modal-1"></span>
                                <span class="previous-modal-2"></span>
                            </div>
                            <img class="img active" src="img/${id}.jpg" id="img-${id}">
                            `;
        
        

        const closeIcon = document.getElementById('closeIcon')
            closeIcon.addEventListener('click',()=>{
                modalContainer.classList.remove('active')
                modal.innerHTML = ``;
            });   

        
            galleryExecution(gallery(id));
        
            
            
      
    });
    }
}



// Execution of the function


functionModal(execution());






