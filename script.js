document.addEventListener("DOMContentLoaded", function() {
    let qrText = document.getElementById("qrText");
    let imgBox = document.getElementById("imgBox");
    let qrImage = document.getElementById("qrImage");

        function generateQR() {
            if(qrText.value.trim().length > 0){
                qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
                imgBox.classList.add("show-img");
            }else{
                qrText.classList.add('error');
                setTimeout(()=>{
                    qrText.classList.remove('error');
                },1000);
            }
        }
    window.generateQR = generateQR;
});
