const inputText = document.getElementById('inputText');
        const sendButton = document.getElementById('sendButton');
        const itemList = document.getElementById('itemList');
        const listSection = document.getElementById('listSection');

        sendButton.addEventListener('click', function() {
            const text = inputText.value.trim();
            if (text.length >= 2) {
                const listItem = document.createElement('li');
                listItem.innerHTML = `${text} <button class="removeButton">Sil</button>`;
                itemList.appendChild(listItem);
                inputText.value = '';
                listSection.style.display = 'block';

                const removeButtons = document.querySelectorAll('.removeButton');
                removeButtons.forEach(button => {
                    button.addEventListener('click', function() {
                        button.parentElement.remove();
                    });
                });
            } else {
                alert('Nese yazda brat.');
            }
        });


        searchButton.addEventListener('click', function() {
            const searchText = searchInput.value.trim().toLowerCase();
            const listItems = itemList.getElementsByTagName('li');
            let found = false;

            for (let i = 0; i < listItems.length; i++) {
                const listItemText = listItems[i].textContent.toLowerCase();
                if (listItemText.includes(searchText)) {
                    listItems[i].style.display = 'block';
                    found = true;
                } else {
                    listItems[i].style.display = 'none';
                }
            }

            if (!found) {
                alert('Məlumat bazada yoxdur.');
            }
        });