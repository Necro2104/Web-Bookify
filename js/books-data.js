// Sample books data
const books = [
    {
        id: 1,
        title: "The Midnight Library",
        author: "Matt Haig",
        category: "fiction",
        price: 22.99,
        originalPrice: 29.99,
        description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
        image: "https://images.pexels.com/photos/4153146/pexels-photo-4153146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        featured: true,
        bestseller: true
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        category: "non-fiction",
        price: 19.99,
        originalPrice: 24.99,
        description: "No matter your goals, Atomic Habits offers a proven framework for improving every day. Learn how small changes can transform your habits and deliver remarkable results.",
        image: "https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        featured: true,
        bestseller: true
    },
    {
        id: 3,
        title: "The Watchmen",
        author: "Alan Moore",
        category: "comics",
        price: 18.50,
        originalPrice: 22.99,
        description: "A groundbreaking graphic novel that takes superhero comics to a whole new level with its complex characters and gripping narrative.",
        image: "https://images.pexels.com/photos/6373307/pexels-photo-6373307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        featured: false,
        bestseller: true
    },
    {
        id: 4,
        title: "The Very Hungry Caterpillar",
        author: "Eric Carle",
        category: "children",
        price: 9.99,
        originalPrice: 12.99,
        description: "A classic children's book that follows the journey of a caterpillar as it eats its way through various foods before transforming into a butterfly.",
        image: "https://images.pexels.com/photos/1741230/pexels-photo-1741230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        featured: true,
        bestseller: false
    },
    {
        id: 5,
        title: "Dune",
        author: "Frank Herbert",
        category: "fiction",
        price: 24.99,
        originalPrice: 29.99,
        description: "Set on the desert planet Arrakis, Dune is the story of Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the 'spice' melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for. When House Atreides is betrayed, the destruction of Paul's family will set the boy on a journey toward a destiny greater than he could ever have imagined.",
        image: "https://images.pexels.com/photos/3876407/pexels-photo-3876407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        featured: true,
        bestseller: true
    },
    {
        id: 6,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        category: "non-fiction",
        price: 21.99,
        originalPrice: 27.99,
        description: "A groundbreaking narrative of humanity's creation and evolution, exploring how biology and history have defined us and enhanced our understanding of what it means to be human.",
        image: "https://images.pexels.com/photos/2767814/pexels-photo-2767814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        featured: false,
        bestseller: true
    },
    {
        id: 7,
        title: "Batman: The Dark Knight Returns",
        author: "Frank Miller",
        category: "comics",
        price: 17.99,
        originalPrice: 22.99,
        description: "In this groundbreaking Batman story, an aging Bruce Wayne returns from retirement to fight crime in a future Gotham City spiraling into chaos.",
        image: "https://images.pexels.com/photos/5739108/pexels-photo-5739108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        featured: true,
        bestseller: false
    },
    {
        id: 8,
        title: "Where the Wild Things Are",
        author: "Maurice Sendak",
        category: "children",
        price: 8.99,
        originalPrice: 11.99,
        description: "The story of Max, who becomes king of the wild things, only to find that he wants to be where someone loves him best of all.",
        image: "https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        featured: false,
        bestseller: false
    },
    {
        id: 9,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        category: "fiction",
        price: 15.99,
        originalPrice: 19.99,
        description: "Alicia Berenson's life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London's most desirable areas.",
        image: "https://images.pexels.com/photos/3008509/pexels-photo-3008509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        featured: false,
        bestseller: true
    },
    {
        id: 10,
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        category: "non-fiction",
        price: 23.99,
        originalPrice: 29.99,
        description: "Engaging the reader in a lively conversation about how we think, Kahneman reveals where we can and cannot trust our intuitions and how we can tap into the benefits of slow thinking.",
        image: "https://images.pexels.com/photos/3671120/pexels-photo-3671120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        featured: true,
        bestseller: false
    },
    {
        id: 11,
        title: "Maus",
        author: "Art Spiegelman",
        category: "comics",
        price: 16.99,
        originalPrice: 21.99,
        description: "A haunting tale of survival, guilt, and generational trauma, told through a groundbreaking graphic novel format with Jews portrayed as mice and Nazis as cats.",
        image: "https://images.pexels.com/photos/5748908/pexels-photo-5748908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        featured: false,
        bestseller: true
    },
    {
        id: 12,
        title: "Oh, The Places You'll Go!",
        author: "Dr. Seuss",
        category: "children",
        price: 10.99,
        originalPrice: 13.99,
        description: "A perennial favorite that offers wisdom for all ages—this book is filled with wonderful advice for those embarking on new adventures.",
        image: "https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        featured: true,
        bestseller: true
    }
];
// Testimonials data
const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        avatar: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        quote: "Bookify has completely transformed my reading experience. The selection is amazing, and the delivery is super fast!",
        rating: 5,
        date: "January 15, 2025"
    },
    {
        id: 2,
        name: "Michael Rodriguez",
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        quote: "I've been a book lover all my life, and Bookify has become my go-to online bookstore. Their customer service is exceptional!",
        rating: 5,
        date: "February 3, 2025"
    },
    {
        id: 3,
        name: "Emily Chang",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        quote: "The variety of books available on Bookify is impressive. I've discovered so many new authors and genres thanks to their recommendations.",
        rating: 4,
        date: "March 11, 2025"
    },
    {
        id: 4,
        name: "David Wilson",
        avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        quote: "Fast shipping, great prices, and an incredible selection. What more could a book lover ask for? Highly recommend!",
        rating: 5,
        date: "April 7, 2025"
    },
    {
        id: 5,
        name: "Olivia Martinez",
        avatar: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        quote: "I love that Bookify supports local authors. It's become my favorite way to discover new voices in literature.",
        rating: 5,
        date: "May 19, 2025"
    },
    {
        id: 6,
        name: "James Thompson",
        avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        quote: "The recommendations feature on Bookify is spot on! It feels like they really understand my reading preferences.",
        rating: 4,
        date: "June 2, 2025"
    }
];