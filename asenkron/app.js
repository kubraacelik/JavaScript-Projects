const users = [
  {
    userId: 5,
    post: "Enes Post 1",
  },
  {
    userId: 5,
    post: "Enes Post 2",
  },
  {
    userId: 5,
    post: "Enes Post 3",
  },
  {
    userId: 6,
    post: "Ali Post 1",
  },
  {
    userId: 7,
    post: "Ayşe Post 1",
  },
];

function getUserId(callback) {
  setTimeout(() => {
    let userId = 5;
    callback(userId);
  }, 1000);
}

function getPostByUserId(userId) {
  setTimeout(() => {
    users.forEach((user) => {
      if (user.userId == userId) {
        console.log(user.post);
      }
    });
  }, 500);
}

getUserId(getPostByUserId);
