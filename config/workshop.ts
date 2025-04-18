export type WorkshopConfig = typeof workshopConfig;

export const workshopConfig = {
  // 基本信息
  title: "Responsible AI",
  subtitle: "NExT 2025 Workshop, Changsha, China",
  date: "Thur June 5 - Sat June 7, 2025",
  
  // 简介信息
  introduction: {
    description: "We are pleased to announce the NExT Singapore Workshop 2025, which will take place from June 5 to 7, 2025. The theme of this year's workshop is \"Responsible AI\", featuring a series of focused activities:",
    activities: [
      {
        date: "5-6 June",
        title: "NExT Workshop.",
        description: "The theme is on \"Responsible AI\". It will include social programs on the 5-th and 6-th June evenings."
      },
      {
        date: "7 June",
        title: "",
        description: "Trends of AI and related academic activities, and planning for future NExT Workshops."
      }
    ],
    venue: "The AI Policy Workshop will be held at the Yuelu Academy (exact location to be confirmed).",
    participation: "This workshop is designed to bring together NExT members and collaborators to explore the advancements, applications, and future pathways of \"Responsible AI\". Participation is by invitation only, with registration limited to invitees."
  },
  
  // 联系信息
  contactEmail: "workshop@next-events.org",

  // 注册信息
  registration: {
    title: "Registration",
    subtitle: "NExT 2025 Workshop, Changsha, China",
    description: "Registration for the NExT 2025 Workshop is by invitation only. If you have received an invitation, please complete the registration form by clicking the button below.",
    buttonText: "Registration Form",
    confirmation: "After completing the registration form, you will receive a confirmation email with further details about the workshop, including accommodation options and program schedule."
  },
  
  // 酒店信息
  hotel: {
    title: "Hotel",
    subtitle: "Accommodation Information",
    name: "TBD. More details will be shared soon—stay tuned!",
    address: "",
    location: ""
  },
  
  // 日程信息
  program: {
    title: "Program",
    subtitle: "Workshop Schedule",
    description: "TBD. More details will be shared soon—stay tuned!"
  },
  
  // 组织者信息
  organizers: {
    title: "Organizers",
    subtitle: "Workshop Committee",
    description: "",
    people: [
      {
        image: "./img/NUS.png",
        name: "NUS",
        width: "auto",
        height: "80px"
      },
      {
        image: "./img/thu.png",
        name: "THU",
        width: "auto",
        height: "100px"
      },
      {
        image: "./img/hunan_university.png",
        name: "HUNAN UNIVERSITY",
        width: "auto",
        height: "100px"
      }
    ]
  },
  
  // 赞助商信息
  sponsors: {
    title: "Sponsors",
    subtitle: "Event Partners",
    description: "More details about the sponsors will be shared soon—stay tuned!"
  },
  
  // Location Information
location: {
  title: "Location",
  subtitle: "Venue Information",
  name: "Yuelu Academy, Changsha",
  address: "At the foot of Yuelu Mountain, Yuelu District, Changsha, Hunan",
  venues: [
    {
      event: "AI Policy Workshop (Dec 2-3)",
      location: "Yuelu Academy (exact location to be confirmed)"
    },
    {
      event: "NExT Workshop (Dec 4-5)",
      location: "Designated seminar room within Yuelu Academy"
    },
    {
      event: "Discussion Session (Dec 6)",
      location: "Designated seminar room within Yuelu Academy"
    }
  ],
  mapUrl: "https://maps.app.goo.gl/SWKUa6c6VaXgw6uG9",
  buttonText: "View on Google Maps",
  transport: {
    publicTransport: [
      "Take Metro Line 2 to Yuelu Mountain Station",
      "Exit at Exit A, and walk about 10 minutes to reach Yuelu Academy"
    ],
    taxi: "Ask the driver to drop you off at Yuelu Academy, located at the foot of Yuelu Mountain.",
    car: "Limited parking is available around Yuelu Academy. Enter via Yuelu Mountain Road."
  },
  amenities: [
    "Nearby restaurants and tea houses",
    "Convenient public restrooms",
    "Shops and souvenir stores around the area"
  ]
}
}; 