let users = [
  {
    profileimg:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    bgimg:
      "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    pendingMessage: 4,
    location: "Delhi, India",
    name: "Revati",
    age: 22,
    interests: [
      { icon: `<i class="ri-music-2-fill"></i>`, interest: "music" },
      {
        icon: `<i class="ri-gamepad-fill"></i>`,
        interest: "gaming",
      },
    ],
    bio: "lorem  ipsum dolor sit amet afdon annon lhdsp lsdkfjog dsjflaihsg",
    isFriend: null,
  },
  {
    profileimg:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fHww",
    bgimg:
      "https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 8,
    location: "Mumbai, India",
    name: "Nirmiti",
    age: 26,
    interests: [
      { icon: `<i class="ri-music-2-fill"></i>`, interest: "music" },
      {
        icon: `<i class="ri-gamepad-fill"></i>`,
        interest: "gaming",
      },
    ],
    bio: "lorem  ipsum dolor sit amet afdon  lorem ipsum dolor sit amet anna naunnu annon lhdsp lsdkfjog dsjflaihsg",
    isFriend: null,
  },
  {
    profileimg:
      "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    bgimg:
      "https://images.unsplash.com/photo-1588249175361-d64335d67e3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
    pendingMessage: 2,
    location: "Texas, USA",
    name: "Shreya",
    age: 25,
    interests: [
      { icon: `<i class="ri-music-2-fill"></i>`, interest: "music" },
      {
        icon: `<i class="ri-gamepad-fill"></i>`,
        interest: "gaming",
      },
    ],
    bio: "lorem  ipsum dolor sit amet afdon annon lhdsp iswishn all balck afii dwonn wanile",
    isFriend: null,
  },
  {
    profileimg:
      "https://images.unsplash.com/photo-1514136649217-b627b4b9cfb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
    bgimg:
      "https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 14,
    location: "Bangalore, India",
    name: "Pramila",
    age: 22,
    interests: [
      { icon: `<i class="ri-music-2-fill"></i>`, interest: "music" },
      {
        icon: `<i class="ri-gamepad-fill"></i>`,
        interest: "gaming",
      },
    ],
    bio: "lorem  ipsum dolor sit amet afdon annon lhdsp lsdkfjog dsjflaihsg lorem ipusm solor dolor amet sins and othofn indiwe",
    isFriend: null,
  },
];

function select(elem) {
  return document.querySelector(elem);
}

let curr = 0;
let isAnimating = false;

function setData(index) {
  select(".profileimg img").src = users[index].profileimg;
  select(".badge h5").textContent = users[index].pendingMessage;
  select(".location h3").innerText = users[index].location;
  select(".name h3:nth-child(1)").innerText = users[index].name;
  select(".name h3:nth-child(2)").innerText = users[index].age;

  let clutter = "";
  users[index].interests.forEach(function (interest) {
    clutter += `<div class="tag flex items-center justify-center bg-white/30 px-3 py-1 rounded-full gap-2">
        ${interest.icon}
        <h3 class="text-sm tracking-tight capitalize">${interest.interest}</h3>
    </div>`;
  });
  select(".tags").innerHTML = clutter;

  select(".bio p").innerText = users[index].bio;
}

function setInitials() {
  select(".maincard img").src = users[curr].bgimg;
  select(".incomingcard img").src = users[curr + 1].bgimg;

  setData(curr);
  curr = 2;
}
setInitials();

function changeImage() {
  if (!isAnimating) {
    isAnimating = true;
    let tl = gsap.timeline({
      onComplete: function () {
        isAnimating = false;
        let main = select(".maincard");
        let incoming = select(".incomingcard");

        incoming.classList.remove("z-[2]");
        incoming.classList.add("z-[3]");
        incoming.classList.remove("incomingcard");

        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");
        gsap.set(main, {
          scale: 1,
          opacity: 1,
        });

        if (curr === users.length) curr = 0;
        select(".maincard img").src = users[curr].bgimg;
        curr++;
        main.classList.remove("maincard");
        incoming.classList.add("maincard");
        main.classList.add("incomingcard");
      },
    });

    tl.to(
      ".maincard",
      {
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: 0.9,
      },
      "eksaath"
    );
    tl.from(
      ".incomingcard",
      {
        scale: 0.9,
        opacity: 0,
        ease: Circ,
        duration: 1.1,
      },
      "eksaath"
    );
  }
}

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function () {
  changeImage();
  setData(curr-1);
  gsap.from(".details .elementz", {
    y: "100%",
    stagger: 0.08,
    ease: Power4.easeInOut,
    duration: 1,
  });
});

accept.addEventListener("click", function () {
    changeImage();
    setData(curr-1);
    gsap.from(".details .elementz", {
      y: "100%",
      stagger: 0.08,
      ease: Power4.easeInOut,
      duration: 1,
    });
  });


function containerCreator() {
  document.querySelectorAll(".elementz").forEach(function (element) {
    let div = document.createElement("div");
    div.classList.add(`${element.classList[1]}container`, "overflow-hidden");
    div.appendChild(element);
    select(".details").appendChild(div);
    // console.log(div);
  });
}
containerCreator();
