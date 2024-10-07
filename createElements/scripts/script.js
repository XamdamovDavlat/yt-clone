const videoGrid = document.querySelector('.video-grid');

function reload(arr) {
    videoGrid.innerHTML = '';
    for (let video of arr) {
        const videoItem = document.createElement('div');
        const img = document.createElement('img');
        const videoInfo = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const deleteBtn = document.createElement('button');

        img.setAttribute('src', video.thumbnail);
        img.setAttribute('alt', video.title);

        h3.innerHTML = video.title;
        p.innerHTML = video.channel;

        deleteBtn.innerHTML = 'X';
        deleteBtn.classList.add('delete-btn');
        
        deleteBtn.addEventListener('click', function() {
            videoItem.remove(); 
        });

        videoInfo.classList.add('video-info');
        videoItem.classList.add('video-item');

        videoInfo.append(h3, p);
        videoItem.append(img, videoInfo, deleteBtn);
        videoGrid.append(videoItem);
    }
}

reload(videos);

const input = document.querySelector('input');

input.onsearch = () => {
    const value = input.value.toLowerCase();
    
    const filteredArray = videos.filter((item) => item.title.toLowerCase().includes(value));

    reload(filteredArray);
}