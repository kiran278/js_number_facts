let fact = document.querySelector('#fact');
        let factText = document.querySelector('#factText');
        let numberInput = document.querySelector('#numberInput');
        
        // ------------Using Ajax-----------

        numberInput.addEventListener('input', getFactAjax);

        function getFactAjax() {
            let number = numberInput.value;

            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://numbersapi.com/' + number);

            xhr.onload = function () {
                if (this.status == 200 && number != '') {
                    fact.style.display = 'block';
                    factText.innerHTML = this.responseText;
                } else if ( number == '') {
                    fact.style.display = 'none';
                }
            }

            xhr.send();
        }


        //-------------Using Fetch API---------------

        // numberInput.addEventListener('input', getFactFetch);

        // function getFactFetch() {
        //     let number = numberInput.value;

        //     fetch('http://numbersapi.com/' + number)
        //         .then((response) => response.text())
        //         .then((data) => {
        //             if (number != '') {
        //                 fact.style.display = 'block'
        //                 factText.innerText = data;
        //             } else if(number == ''){
        //                 fact.style.display = 'none';
        //             }

        //         })
        //         .catch(error => console.log(error));
        // }