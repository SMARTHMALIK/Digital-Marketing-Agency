document.querySelector('.js-cardBody1')
  .addEventListener('click',()=>{
    const html = `
    <img src="fruits.png" alt="" style="width: 700px; height: 550px;border-radius:15px;object-fit:cover;box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.8);">`;
    document.querySelector('.image-slides')
      .innerHTML=html;
  });
  document.querySelector('.js-cardBody2')
  .addEventListener('click',()=>{
    const html = `
    <img src="random2.jpg" alt="" style="width: 700px; height: 550px;border-radius:15px;object-fit:cover;box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.8);">`;
    document.querySelector('.image-slides')
      .innerHTML=html;
  });
  document.querySelector('.js-cardBody3')
  .addEventListener('click',()=>{
    const html = `
    <img src="random3.jpg" alt="" style="width: 700px; height: 550px;border-radius:15px;object-fit:cover;box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.8);">`;
    document.querySelector('.image-slides')
      .innerHTML=html;
  });  