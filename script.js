function generateQrCode(){
    const $url = document.getElementById("input").value;
    if ($url === ""){
        alert("Please enter a URL");
    } else {
        const qrCode = "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent($url) + "&margin=10";
        const $qrCode = document.getElementById("qr-code");
        $qrCode.src = qrCode;
    }
}

function downloadQrCode(){
    const $qrCode = document.getElementById("qr-code").src;
    if ($qrCode.includes("qrplaceholder.svg")){
        alert("Please generate a QR code first");
    } else {
        const $downloadLink = document.createElement("a");
        $downloadLink.href = $qrCode;
        $downloadLink.download = 'qr-code.png';
        
        // forzar la descarga
        document.body.appendChild($downloadLink);
        $downloadLink.click();
        document.body.removeChild($downloadLink);
        console.log($downloadLink)
    }
}