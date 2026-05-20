const reels = [
  {
    username: "traveller_guy",
    likeCount: 1200,
    isLiked: false,
    commentCount: 145,
    caption: "Travelling in desert 🔥",
    video: "./reel-videos/video1.mp4",
    userprofile: "https://picsum.photos/200?1",
    shareCount: 30,
    isFollowed: true
  },
  {
    username: "explore_nature",
    likeCount: 980,
    isLiked: true,
    commentCount: 88,
    caption: "Beautiful flowers heal our soul💞",
    video: "./reel-videos/video2.mp4",
    userprofile: "https://picsum.photos/200?2",
    shareCount: 20,
    isFollowed: false
  },
  {
    username: "travelwithme",
    likeCount: 5400,
    isLiked: true,
    commentCount: 320,
    caption: "Remembered something? #BellaChiao🔥",
    video: "./reel-videos/video3.mp4",
    userprofile: "https://picsum.photos/200?3",
    shareCount: 110,
    isFollowed: true
  },
  {
    username: "beach_explorer",
    likeCount: 2300,
    isLiked: true,
    commentCount: 260,
    caption: "Sunset aat Beach 🌅",
    video: "./reel-videos/video4.mp4",
    userprofile: "https://picsum.photos/200?4",
    shareCount: 50,
    isFollowed: false
  },
  {
    username: "my_world",
    likeCount: 780,
    isLiked: false,
    commentCount: 42,
    caption: "This place is so pleasant😌",
    video: "./reel-videos/video5.mp4",
    userprofile: "https://picsum.photos/200?5",
    shareCount: 12,
    isFollowed: false
  },
  {
    username: "dancewithemily",
    likeCount: 1500,
    isLiked: true,
    commentCount: 110,
    caption: "Dance is love for Me ❤️",
    video: "./reel-videos/video6.mp4",
    userprofile: "https://picsum.photos/200?6",
    shareCount: 40,
    isFollowed: true
  },
  {
    username: "model_lily",
    likeCount: 9000,
    isLiked: true,
    commentCount: 870,
    caption: "Capturing the moments📷",
    video: "./reel-videos/video7.mp4",
    userprofile: "https://picsum.photos/200?7",
    shareCount: 300,
    isFollowed: true
  },
  {
    username: "cat_videos",
    likeCount: 4100,
    isLiked: true,
    commentCount: 290,
    caption: "She's very playful today🐈",
    video: "./reel-videos/video8.mp4",
    userprofile: "https://picsum.photos/200?8",
    shareCount: 95,
    isFollowed: false
  },
  {
    username: "wild_videography",
    likeCount: 600,
    isLiked: false,
    commentCount: 20,
    caption: "Wild life is amazing ✨",
    video: "./reel-videos/video9.mp4",
    userprofile: "https://picsum.photos/200?9",
    shareCount: 10,
    isFollowed: false
  },
  {
    username: "pet_love",
    likeCount: 3600,
    isLiked: true,
    commentCount: 200,
    caption: "Just captured a cute cat sitting in her comfort😽",
    video: "./reel-videos/video10.mp4",
    userprofile: "https://picsum.photos/200?10",
    shareCount: 75,
    isFollowed: true
  }
];

let sum = ''

reels.forEach(function(elem){
    sum = sum + `<div class="reels">
                    <video autoplay muted loop src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userprofile}" alt="">                            
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div class="like">
                            <h4 class="like-icon">${elem.isLiked?'<i class="Love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="commet-icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div>`
})

let allReels = document.querySelector('.all-reels')
allReels.innerHTML = sum