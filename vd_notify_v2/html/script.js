
window.addEventListener('message', function(event) {
        var item = event.data;
        let id = 0
        let id2 = 0

        if(item.action === "notify") {
            if(item.type === "info") {
                $(".main-container").append(`
                    <div class="info-container" id="`+id2+`">
                        <div class="info-block"></div>
                        <i class="fa-solid fa-bell"></i>
                        <div class="info-type">`+item.title+`</div>
                        <div class="mesaj">`+item.message+`</div>
                    </div>
                `)
             } 
            if(item.type === "error") {
                $(".main-container").append(`
                <div class="error-container" id="`+id2+`">
                    <div class="error-block"></div>
                    <i class="fa-solid fa-x"></i>
                    <div class="error-type">`+item.title+`</div>
                    <div class="mesaj">`+item.message+`</div>
                </div>
            `)
            } 
            if(item.type == "succes") {
                $(".main-container").append(`
                    <div class="succes-container" id="`+id2+`">
                        <div class="succes-block"></div>
                        <i class="fa-solid fa-check"></i>
                        <div class="succes-type">`+item.title+`</div>
                        <div class="mesaj">`+item.message+`</div>
                    </div>
                `)
            }
            $(`#${id2}`).hide().fadeIn(600)
            setTimeout(() => {
                $(`#${id2}`).fadeOut(600)
            }, 5000)

            setTimeout(() => {
                $(`#${id2}`).remove()
                id2++
            }, 5500)
        } 
    });