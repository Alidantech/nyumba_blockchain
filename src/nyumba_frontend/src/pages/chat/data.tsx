/* Your data component content */
import { ChatProps, UserProps } from "../../types/chat";

export const users: UserProps[] = [
  {
    name: "Land",
    username: "Steve Ekwe",
    avatar: "/static/images/avatar/2.jpg",
    online: true,
  },
  {
    name: "Land Lease",
    username: "Katherine Maina",
    avatar: "/static/images/avatar/3.jpg",
    online: true,
  },
  {
    name: "Real Estate",
    username: "William Nanini",
    avatar: "/static/images/avatar/1.jpg",
    online: true,
  },
  {
    name: "Rentals",
    username: "Eleanor Amima",
    avatar: "/static/images/avatar/4.jpg",
    online: true,
  },
];

export const chats: ChatProps[] = [
  {
    id: "1",
    sender: users[0],
    messages: [
      {
        id: "1",
        content: "Good morning! I heard you're in the market for some land. How can I assist you today?",
        timestamp: "Wednesday 9:10am",
        sender: users[0],
      },
      {
        id: "2",
        content: "Hi there, yes, I'm looking for a nice piece of land where I can build my dream home. I want something peaceful and preferably with a good view. What do you have available?",
        timestamp: "Wednesday 9:15am",
        sender: "You"
      },
      {
        id: "3",
        timestamp: "Wednesday 11:30am",
        sender: users[0],
        content: "I have just the thing. We recently listed a 5-acre plot in a serene location. It's surrounded by nature, offers stunning views of the mountains, and it's only a 10-minute drive from the city center. It might be perfect for what you're envisioning."
      },
      {
        id: "4",
        timestamp: "Wednesday 2:00pm",
        sender: "You",
        content: "That sounds interesting! Can you tell me more about the land? What's the terrain like? Are there any utilities already set up?"
      },
      {
        id: "5",
        timestamp: "Wednesday 4:30pm",
        sender: users[0],
        content: "Certainly. The terrain is mostly flat, which is great for construction, and it includes a small wooded area that adds to its charm. As for utilities, water and electricity are already available at the property line. You would need to set up a septic system, though."
      },
      {
        id: "6",
        timestamp: "Thursday 10:16am",
        sender: "You",
        content: "Sounds good. What about the price? And are there any restrictions on what can be built?"
      },
      {
        id: "7",
        timestamp: "Thursday 10:45am",
        sender: users[0],
        content: "The asking price is $150,000. It’s a competitive price for the area, considering the size and the amenities available. There are some building restrictions to preserve the area’s natural beauty and maintain the value of the properties. For instance, the house must be at least 2,000 square feet, and the design needs to be approved by the local homeowners’ association."
      },
      {
        id: "8",
        timestamp: "Thursday 11:00am",
        sender: "You",
        content: "I see. Could I possibly visit the site this weekend to get a better feel of the place?"
      },
      {
        id: "9",
        timestamp: "Thursday 11:30am",
        sender: users[0],
        content: "Absolutely, I’d be happy to show you the property. How does Saturday morning sound to you?"
      },
      {
        id: "10",
        timestamp: "Thursday 11:45am",
        sender: "You",
        content: "Saturday morning works great for me. Should I meet you at your office, or directly at the property?"
      },
      {
        id: "11",
        timestamp: "Thursday 12:00pm",
        sender: users[0],
        content: "Let’s meet at the property. I’ll send you the location details and my contact number, so you can reach me if you need any assistance finding the place."
      }
    ]
    
  },
  {
    id: "2",
    sender: users[1],
    messages: [
      {
        id: "1",
        content: "Hi there! I'm interested in leasing some land for organic farming. Do you have any available plots?",
        timestamp: "Wednesday 9:00am",
        sender: "You"
      },
      {
        id: "2",
        content: "Hello! Yes, we have several plots that might be suitable for organic farming. What size are you looking for?",
        timestamp: "Wednesday 9:05am",
        sender: users[1]
      },
      {
        id: "3",
        content: "I'm looking for something around 20 to 30 acres. It's important that the land has not been treated with chemicals in the recent past.",
        timestamp: "Wednesday 9:30am",
        sender: "You"
      },
      {
        id: "4",
        content: "We have a 25-acre plot that has been free from chemical treatments for the last 5 years. It could be perfect for your needs. Would you like more information on this?",
        timestamp: "Wednesday 9:45am",
        sender: users[1]
      },
      {
        id: "5",
        content: "Yes, please. Can you send the details on the lease terms and pricing?",
        timestamp: "Wednesday 10:00am",
        sender: "You"
      },
      {
        id: "6",
        content: "Of course. The lease terms are quite flexible, with options starting from 3 years. Pricing is competitive, designed to encourage sustainable farming practices. I'll send you a detailed proposal by the end of the day.",
        timestamp: "Wednesday 10:20am",
        sender: users[1]
      }
    ]
  },
  {
  id: "3",
  sender: users[2],
  messages: [
    {
      id: "1",
      content: "Hello! I saw your inquiry about available properties in the downtown area. Are you looking for residential or commercial spaces?",
      timestamp: "Monday 8:30am",
      sender: users[2]
    },
    {
      id: "2",
      content: "Hi, thanks for reaching out. I'm interested in residential properties, preferably a single-family home with a nice yard.",
      timestamp: "Monday 8:45am",
      sender: "You"
    },
    {
      id: "3",
      content: "Great choice! We have a newly listed four-bedroom home with a spacious backyard. It's located in a quiet neighborhood with easy access to downtown. Would you like to schedule a viewing?",
      timestamp: "Monday 9:00am",
      sender: users[2]
    },
    {
      id: "4",
      content: "That sounds exactly like what I'm looking for. Can you send me the details and the asking price?",
      timestamp: "Monday 9:15am",
      sender: "You"
    },
    {
      id: "5",
      content: "Absolutely. The asking price is $350,000. The house features modern amenities, a two-car garage, and a beautifully landscaped yard. I'll send over the full listing details and photos. How does this Saturday sound for a viewing?",
      timestamp: "Monday 9:30am",
      sender: users[2]
    },
    {
      id: "6",
      content: "Saturday works for me. Please send me the address and a time. Looking forward to it, thanks!",
      timestamp: "Monday 9:45am",
      sender: "You"
    }
  ]
},
{
  id: "4",
  sender: users[3],
  messages: [
    {
      id: "1",
      content: "Hello! I'm currently looking for a rental property in the city center, preferably a two-bedroom apartment with modern amenities. Do you have anything available?",
      timestamp: "Tuesday 10:00am",
      sender: "You"
    },
    {
      id: "2",
      content: "Good morning! Yes, we have several two-bedroom apartments that fit your criteria. They come with fully equipped kitchens, central air, and access to a fitness center. Are you interested in any specific features?",
      timestamp: "Tuesday 10:15am",
      sender: users[3]
    },
    {
      id: "3",
      content: "That sounds great. I'm particularly interested in a place with a good view and a balcony. Do any of the apartments offer that?",
      timestamp: "Tuesday 10:30am",
      sender: "You"
    },
    {
      id: "4",
      content: "Indeed, we do have a couple of units on higher floors with excellent city views and spacious balconies. One of them might be just what you're looking for. Would you like to arrange a viewing?",
      timestamp: "Tuesday 10:45am",
      sender: users[3]
    },
    {
      id: "5",
      content: "Yes, I would love to. Can we schedule a viewing for this weekend?",
      timestamp: "Tuesday 11:00am",
      sender: "You"
    },
    {
      id: "6",
      content: "Certainly! How does Saturday afternoon sound? I can show you both apartments back-to-back.",
      timestamp: "Tuesday 11:15am",
      sender: users[3]
    },
    {
      id: "7",
      content: "Saturday afternoon works perfectly for me. Please send me the details and the exact time.",
      timestamp: "Tuesday 11:30am",
      sender: "You"
    }
  ]
}

];
