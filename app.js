
document.getElementsByClassName('added-button')[0].addEventListener('click', function () {
        const playerName = document.getElementsByClassName('player-name')[0];
        // console.log(playerName.innerHTML);

        //Create New Tag for set Players
        const newPlayer = document.createElement('h2')
        console.log(newPlayer);
        newPlayer.innerText = playerName.innerHTML;

        //Append Child
        const playerContainer = document.getElementById('player-container');
        playerContainer.appendChild(newPlayer);

        //Disable Set Attribute
        document.getElementsByClassName('added-button')[0].style.display = 'none';

        //Display Delete button
        document.getElementsByClassName('delete-button')[0].style.display = 'inline-block';

        const deleteBtn = document.getElementsByClassName('delete-button')[0];
        deleteBtn.addEventListener('click', function () {
                console.log('Delete Click')
                playerContainer.removeChild(newPlayer);
                document.getElementsByClassName('delete-button')[0].style.display = 'none';
                document.getElementsByClassName('added-button')[0].style.display = 'inline-block';
        })
})

//Delete Players


document.getElementsByClassName('added-button')[1].addEventListener('click', function () {
        const playerName = document.getElementsByClassName('player-name')[1];
        // console.log(playerName.innerHTML);

        //Create New Tag for set Players
        const newPlayer = document.createElement('h2')
        console.log(newPlayer);
        newPlayer.innerText = playerName.innerHTML;

        //Append Child
        const playerContainer = document.getElementById('player-container');
        playerContainer.appendChild(newPlayer);

        //Display Delete button
        document.getElementsByClassName('delete-button')[1].style.display = 'inline-block';

        const deleteBtn = document.getElementsByClassName('delete-button')[1];
        deleteBtn.addEventListener('click', function () {
                console.log('Delete Click')
                playerContainer.removeChild(newPlayer);
        })
})

