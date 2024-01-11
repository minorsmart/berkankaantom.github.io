function createHeader() {
    const headerContainer = document.getElementById('header-container');
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    const tabs = [
        { text: 'Home', url: 'index.html' },
        { text: 'Over ons', url: 'overons.html' },
        { text: 'Smart Business', url: 'smartbusiness.html', dropdownItems: [
            { text: 'Berkan', url: 'berkanbusiness.html' },
            { text: 'Kaan', url: 'kaanbusiness.html' },
            { text: 'Tom', url: 'tombusiness.html' }
        ]},
        { text: 'Smart Technology', url: 'smarttechnology.html', dropdownItems: [
            { text: 'Berkan', url: 'berkantechnology.html' },
            { text: 'Kaan', url: 'kaantechnology.html' },
            { text: 'Tom', url: 'tomtechnology.html' }
        ]},
        { text: 'Smart Connection', url: 'smartconnection.html', dropdownItems: [
            { text: 'Berkan', url: 'berkanconnection.html' },
            { text: 'Kaan', url: 'kaanconnection.html' },
            { text: 'Tom', url: 'tomconnection.html' }
        ]},
        { text: 'Smart Project', url: 'smartproject.html', dropdownItems: [
            { text: 'Berkan', url: 'berkanproject.html' },
            { text: 'Kaan', url: 'kaanproject.html' },
            { text: 'Tom', url: 'tomproject.html' }
        ]},
        { text: 'Smart Me', url: 'smartme.html', dropdownItems: [
            { text: 'Berkan', url: 'berkanme.html' },
            { text: 'Kaan', url: 'kaanme.html' },
            { text: 'Tom', url: 'tomme.html' }
        ]},
        { text: 'Hoogtepunten', url: 'hoogtepunten.html', dropdownItems: [
            { text: 'Berkan', url: 'berkanhoogtepunten.html' },
            { text: 'Kaan', url: 'kaanhoogtepunten.html' },
            { text: 'Tom', url: 'tomhoogtepunten.html' }
        ]},
        { text: 'API', url: 'api.html',} 
    ];

    tabs.forEach(tab => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = tab.url;
        a.textContent = tab.text;
        li.appendChild(a);

        if (tab.dropdownItems) {
            const dropdownUl = document.createElement('ul');
            tab.dropdownItems.forEach(item => {
                const dropdownLi = document.createElement('li');
                const dropdownA = document.createElement('a');
                dropdownA.href = item.url;
                dropdownA.textContent = item.text;
                dropdownLi.appendChild(dropdownA);
                dropdownUl.appendChild(dropdownLi);
            });
            li.appendChild(dropdownUl);
        }

        ul.appendChild(li);
    });

    nav.appendChild(ul);
    header.appendChild(nav);
    headerContainer.appendChild(header);
}

createHeader();