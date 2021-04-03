function setOverFollowToHTML(event) {
    let htmlTag = document.querySelector('html')
    if (event.target.checked) {
        htmlTag.style.overflow = 'hidden'
    }else{
        htmlTag.style.overflow = 'auto'
    }
}
document.querySelector('.header_checkedBox').addEventListener('change',setOverFollowToHTML)
fetch('../JS/main.json').then(response => response.json())
                        .then(result =>{console.log(result)})
                        .catch(err => {
                            console.log(err);
                        })
                        