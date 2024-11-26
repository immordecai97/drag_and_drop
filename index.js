const imgInput = document.querySelector('#imgInput');
const imgPreview = document.querySelector('#imgPreview');
const defaultImg = 'https://placehold.co/600x400';
imgPreview.src = defaultImg;

imgInput.onchange = (e) => {
    console.log(e.target.files[0]);
    const reader = new FileReader();
    const file = imgInput.files[0];
    reader.onload = () => {
        imgPreview.src = reader.result;
    }
    reader.readAsDataURL(file);
}