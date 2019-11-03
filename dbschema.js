let db = {
  users: [
    {
      userId: 'viy5fQZ8XrSTz34nOrjnlgoiYyI2',
      email: 'user@email.com',
      handle: 'user',
      createdAt: '2019-08-14T19:06:21.787Z',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/socialapp-c26ee.appspot.com/o/41903377678.jpg?alt=media',
      bio: 'Hello, my name is user, nice to meet you',
      website: 'https://user.com',
      location: 'london, uk'
    }
  ],

  screams: [
    {
      userHandle: 'user',
      body: 'this is the scream body',
      createdAt: '2019-08-18T32:46:01.018z',
      likeCount: 5,
      commentCount: 2
    }
  ],
  comments: [
    {
      userHandle: 'user',
      screamId: 'kdjsfgdksuufhgkdsufky',
      body: 'tnice one mate',
      createdAt: '2019-08-18T32:46:01.018z'
    }
  ],
  notifications: [
    {
      recipient: 'user',
      sender: 'john',
      read: 'true | false',
      screamId: 'kdjsfgdksuufhgkdsufky',
      type: 'like | comment',
      createdAt: '2019-08-19T32:46:01.018z'
    }
  ]
};

const userDetails = {
  // Redux Data
  credentials: {
    userId: 'viy5fQZ8XrSTz34nOrjnlgoiYyI2',
    email: 'user@email.com',
    handle: 'user',
    createdAt: '2019-08-14T19:06:21.787Z',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/socialapp-c26ee.appspot.com/o/41903377678.jpg?alt=media',
    bio: 'Hello, my name is user, nice to meet you',
    website: 'https://user.com',
    location: 'brussels'
  },
  likes: [
    {
      userHandle: ' user',
      screamId: 'hh705oWfWucVzGbHH2pa'
    },
    {
      userHandle: ' user',
      screamId: '3IOnFoQexRcofs50hBXO'
    }
  ]
};
