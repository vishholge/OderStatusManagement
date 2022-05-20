let statusBlock = document.getElementsByClassName("status-block");
let orderNo = document.getElementById("order-id-input");
const executeOrder = (callback) =>{
    let orderInfo = document.getElementById("order-id-info");
    orderInfo.innerText = "Status of Order ID " + orderNo.value
    statusBlock[0].classList.add("done");
    setTimeout(() =>{
        statusBlock[0].classList.remove("done");
        statusBlock[1].classList.add("done");
        setTimeout(() => {
            statusBlock[1].classList.remove("done");
            statusBlock[2].classList.add("done");
            setTimeout(() => {
                statusBlock[2].classList.remove("done");
                statusBlock[3].classList.add("done");
                setTimeout(() => {
                    statusBlock[3].classList.remove("done");
                    statusBlock[4].classList.add("done");
                    setTimeout(() => {
                        statusBlock[4].classList.remove("done");
                        statusBlock[5].classList.add("done");
                        setTimeout(() => {
                            statusBlock[5].classList.remove("done");
                            statusBlock[6].classList.add("done");
                            setTimeout(() => {
                                statusBlock[6].classList.remove("done");
                                statusBlock[7].classList.add("done");
                                setTimeout(() => {
                                    statusBlock[7].classList.remove("done");
                                    statusBlock[8].classList.add("done");
                                        callback();
                                    
                                }, 5000);
                            }, 6000);
                        }, 5000);
                    }, 6000);
                }, 5000);
            },6000)
        },5000)
    },2000)
}