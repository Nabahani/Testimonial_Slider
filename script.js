const imgEl = document.querySelector("img");
const textEl = document.querySelector("#text");
const userName = document.querySelector("#username");

let index = 0;

const testimonials = [
    {
        name: "Emily Johnson",
        text: "I am extremely impressed with Apple's innovative, user-friendly, and affordable laptops. Their products have truly enhanced my productivity and efficiency. I highly recommended Apple to any one in need of top-quality technology.",
        image: "user1.avif"
    },
    {
        name: "Alice Johnson",
        text: "I love the innovative design of Apples phones. They are so user-freindly and affordable. I recommended Apple to everyone looking for quality technology.",
        image: "user2.avif"
    },
    {
        name: "Samantha Jones",
        text: "Apple's innovative Tablet is truly user-friendly and affordable. I have been able to seamlessly integrate it into my daily routine, making work and entertainment more conveneint than ever. Highly recommended!",
        image: "user3.avif"
    }
];

function updateTestimonial() {
    const { name, text, image } = testimonials[index];
    imgEl.src = image;
    textEl.innerText = text;
    userName.innerHTML = name;
    index++;
    if (index === testimonials.length) {
        index = 0;
    }
    setTimeout(() => {
        updateTestimonial();
    }, 10000);
}

updateTestimonial()