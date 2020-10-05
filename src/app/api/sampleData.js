export const sampleData = [
    {
        id: '1',
        title: 'Trip to Walgreens',
        date: new Date('2018-03-21'),
        category: 'culture',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: {
            address: 'NY, USA',
            latlng: {
                lat: 40.7484405,
                lng:  -73.98566440000002
            }
        },
        place: {
            address: 'Empire State Building, 5th Avenue, New York, NY, USA',
            latlng: {
                lat: 40.7484405,
                lng:  -73.98566440000002
            }
        },
        hostedBy: 'Lavender',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/23.jpg',
        attendees: [
            {
                id: 'a',
                displayName: 'Lavender',
                photoURL: 'https://randomuser.me/api/portraits/men/23.jpg'
            },
            {
                id: 'b',
                displayName: 'Chuck',
                photoURL: 'https://randomuser.me/api/portraits/men/21.jpg'
            }
        ]
    },
    {
        id: '2',
        title: 'Ordering Burger City',
        date: new Date('2018-03-18'),
        category: 'drinks',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: {
            address: 'London, UK',
            latlng: {
                lat: 51.5118074,
                lng: -0.12300089999996544
            }
        },
        place: {
            address: 'Butt & Judy, Henrietta Street, London, UK',
            latlng: {
                lat: 51.5118074,
                lng: -0.12300089999996544
            }
        },
        hostedBy: 'Bobby',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/25.jpg',
        attendees: [
            {
                id: 'a',
                displayName: 'Lavender',
                photoURL: 'https://randomuser.me/api/portraits/men/23.jpg'
            },
            {
                id: 'b',
                displayName: 'Chuck',
                photoURL: 'https://randomuser.me/api/portraits/men/21.jpg'
            }
        ]
    }
];
