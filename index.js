let buttons = document.getElementsByClassName("buttons");
        let btn = document.getElementsByTagName("span");
        let value = document.getElementById("value");
        for(let i=0; i<btn.length; i++) {
            btn[i].addEventListener('click', function(){
                if(this.innerHTML == "=") {
                    value.innerHTML = eval(value.innerHTML);
                }
                else {
                    if(this.innerHTML == "Clear"){
                        value.innerHTML = "";
                    }
                    else {
                        value.innerHTML += this.innerHTML;
                    }
                }
            })
        }