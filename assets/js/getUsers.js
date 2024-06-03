$(async function () {
    const endpoint = 'https://backend-intranet.nationalmuseum.ch/pimcore-graphql-webservices/photostation_v1?apikey=11463f69c9ea3197165a083eaa6a12c7';
    const query = `
        query {
            getMemberListing(sortBy:"lastname", sortOrder:"ASC") {
                edges {
                  node {
                    firstname
                    lastname
                    email
                  }
                }
          }
        }
    `;
    const fetchData = async () => {
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query }),
            });

            const result = await response.json();

            if (response.ok) {
                sessionStorage.setItem('snmUsers', JSON.stringify(result.data.getMemberListing.edges));
            } else {
                console.error('GraphQL error:', result.errors);
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };
    const localStorageUsers = sessionStorage.getItem('snmUsers');
    if(!localStorageUsers) {
        await fetchData();
    }
})
