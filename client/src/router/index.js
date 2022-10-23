// import { createRouter, createWebHistory } from "vue-router";
// import About from "../pages/About.vue";
// import Subscribe from "../pages/Subscribe.vue";
// import HowItWorks from "../pages/HowItWorks.vue";
// import Contact from "../pages/Contact.vue";
// import ClientHomePage from "../pages/ClientHomePage.vue";
// import WelcomePage from "../pages/WelcomePage.vue";
// import MentorPage from "../pages/MentorPage.vue";
// import MentorDetails from "../pages/MentorDetails.vue";
// import SignUpCandidate from "../pages/SignUpCandidate.vue";
// import SignUpSelection from "../pages/SignUpSelection.vue";
// import SignUpMentor from "../pages/SignUpMentor.vue";
// import SignUpMentor2 from "../pages/SignUpMentor2.vue";
// import Login from "../pages/Login.vue";
// import Search from "../pages/SearchMentor.vue";
// import CandidateDashboard from "../pages/CandidateDashboard.vue";
// import MentorCategories from "../pages/MentorCategories.vue";
// import AboutMe from "../components/UserDashboard/aboutMe.vue";
// import Sessions from "../components/UserDashboard/Sessions.vue";
// import Payment from "../components/UserDashboard/Payment.vue";
// import Security from "../components/UserDashboard/Security.vue";
// import Termsconditions from "../components/UserDashboard/termsConditions.vue";
// import rateMentor from "../components/UserDashboard/rateMentor.vue";
// import rateMentorPage from "../pages/UserDashboard/rateMentorPage.vue";
// import MentorLogin from "../pages/MentorSide/mentorLogin.vue";
// import MentorDashboard from "../pages/MentorSide/MentorDashboard.vue";
// import MentorRegister from "../pages/MentorSide/MentorRegister.vue";

// import { getAuth } from "firebase/auth";

// const routes = [
//   {
//     path: "/mentorLogin",
//     name: "mentorlogin",
//     component: MentorLogin,
//   },

//   {
//     path: "/mentorRegister",
//     name: "mentorRegister",
//     component: MentorRegister,
//   },

//   {
//     path: "/login",
//     name: "Login",
//     component: Login,
//   },

//   {
//     path: "/search/:search",
//     name: "Search",
//     component: Search,
//   },

//   {
//     path: "/signup/",
//     name: "SignUpCanidate",
//     component: SignUpCandidate,
//   },

//   {
//     path: "/signup/mentor",
//     name: "SignUpMentor",
//     component: SignUpMentor,
//   },

//   {
//     path: "/signup/mentor2",
//     name: "SignUpMentor2",
//     component: SignUpMentor2,
//   },

//   {
//     path: "/signupselection",
//     name: "SignUpSelection",
//     component: SignUpSelection,
//   },

//   {
//     path: "/",
//     name: "Welcome Page",
//     component: WelcomePage,
//   },
//   {
//     path: "/subscribe",
//     name: "subscribe",
//     component: Subscribe,
//   },

//   {
//     path: "/about",
//     name: "About",
//     component: About,
//   },
//   {
//     path: "/howitworks",
//     name: "HowItWorks",
//     component: HowItWorks,
//   },
//   {
//     path: "/contact",
//     name: "Contact",
//     component: Contact,
//   },
//   {
//     path: "/clientHomePage",
//     name: "Client Home Page",
//     component: ClientHomePage,
//   },
//   {
//     path: "/mentorpage",
//     name: "Mentor Page",
//     component: MentorPage,
//   },
//   {
//     path: "/mentors/categories/:category",
//     name: "Mentor Categories",
//     component: MentorCategories,
//     // meta: {
//     //   requiresAuth: true,
//     // },
//   },
//   {
//     path: "/mentordetails/:id",
//     name: "Mentor Details",
//     component: MentorDetails,
//   },

//   {
//     path: "/rateMentorPage/:id",
//     name: "rateMentorPage",
//     component: rateMentorPage,
//   },

//   {
//     path: "/Dashboard",
//     name: "CandidateDashboard",
//     component: CandidateDashboard,
//     // meta: {
//     //   requiresAuth: true,
//     // },
//     children: [
//       {
//         path: "aboutme",
//         name: "AboutMe",
//         component: AboutMe,
//       },

//       {
//         path: "sessions",
//         name: "sessions",
//         component: Sessions,
//         //set rateMentor as a child of sessions
//         children: [
//           {
//             path: "rateMentor/:id",
//             name: "rateMentor",
//             component: rateMentor,
//           },
//         ],

//         // children: [
//         //   {
//         //     path: "rateMentor/:id",
//         //     name: "rateMentor",
//         //     component: rateMentor,
//         //   },

//         //   {
//         //     path: "rateMentor/:id",
//         //     name: "rateMentor",
//         //     component: rateMentor,
//         //   },
//         //   // {
//         //   //   path: "seeMentorFeedback",
//         //   //   name: "seeMentorFeedback",
//         //   //   component: seeMentorFeedback,
//         //   // },
//         //   // {
//         //   //   path: "seeYourRequest",
//         //   //   name: "seeYourRequest",
//         //   //   component: seeYourRequest,
//         //   // },
//         // ],
//       },
//       {
//         path: "payment",
//         name: "payment",
//         component: Payment,
//       },
//       {
//         path: "security",
//         name: "security",
//         component: Security,
//       },
//       {
//         path: "termsconditions",
//         name: "termsconditions",
//         component: Termsconditions,
//       },
//     ],
//   },

//   {
//     path: "/MentorDashboard",
//     name: "MentorDashboard",
//     component: MentorDashboard,
//     // meta: {
//     //   requiresAuth: true,
//     // },
//     children: [
//       {
//         path: "aboutme",
//         name: "AboutMe",
//         component: AboutMe,
//       },

//       {
//         path: "sessions",
//         name: "sessions",
//         component: Sessions,
//         //set rateMentor as a child of sessions
//         children: [
//           {
//             path: "/rateMentor/:id",
//             name: "rateMentor",
//             component: rateMentor,
//           },
//         ],
//       },
//       {
//         path: "payment",
//         name: "payment",
//         component: Payment,
//       },
//       {
//         path: "security",
//         name: "security",
//         component: Security,
//       },
//       {
//         path: "termsconditions",
//         name: "termsconditions",
//         component: Termsconditions,
//       },
//     ],
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
//   scrollBehavior() {
//     document.getElementById("app").scrollIntoView();
//   },
// });

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (getAuth().currentUser) {
//       next();
//     } else {
//       next("/login");
//     }
//   } else {
//     next();
//   }
// });

// export default router;

import { createRouter, createWebHistory } from "vue-router";
import About from "../pages/About.vue";
import Subscribe from "../pages/Subscribe.vue";
import HowItWorks from "../pages/HowItWorks.vue";
import Contact from "../pages/Contact.vue";
import ClientHomePage from "../pages/ClientHomePage.vue";
import WelcomePage from "../pages/WelcomePage.vue";
import MentorPage from "../pages/MentorPage.vue";
import MentorDetails from "../pages/MentorDetails.vue";
import SignUpCandidate from "../pages/SignUpCandidate.vue";
import SignUpSelection from "../pages/SignUpSelection.vue";
import SignUpMentor from "../pages/SignUpMentor.vue";
import SignUpMentor2 from "../pages/SignUpMentor2.vue";
import Login from "../pages/Login.vue";
import Search from "../pages/SearchMentor.vue";
import CandidateDashboard from "../pages/CandidateDashboard.vue";
import MentorCategories from "../pages/MentorCategories.vue";
import AboutMe from "../components/UserDashboard/aboutMe.vue";
import Sessions from "../components/UserDashboard/Sessions.vue";
import Payment from "../components/UserDashboard/Payment.vue";
import Security from "../components/UserDashboard/Security.vue";
import Termsconditions from "../components/UserDashboard/termsConditions.vue";
import rateMentor from "../components/UserDashboard/rateMentor.vue";
import rateMentorPage from "../pages/UserDashboard/rateMentorPage.vue";
import MentorLogin from "../pages/MentorSide/mentorLogin.vue";
import MentorDashboardNav from "../pages/MentorSide/MentorDashboardNav.vue";
import MentorRegister from "../pages/MentorSide/MentorRegister.vue";
import mentorAboutMe from "../components/MentorDashboard/mentorAboutMe.vue";
import mentorSessions from "../components/MentorDashboard/mentorSessions.vue";
import mentorSecurity from "../components/MentorDashboard/mentorSecurity.vue";

import { getAuth } from "firebase/auth";

const routes = [
  {
    path: "/mentorlogin",
    name: "mentorlogin",
    component: MentorLogin,
  },

  {
    path: "/MentorRegister",
    name: "MentorRegister",
    component: MentorRegister,
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
  },

  {
    path: "/search/:search",
    name: "Search",
    component: Search,
  },

  {
    path: "/signup/",
    name: "SignUpCanidate",
    component: SignUpCandidate,
  },

  {
    path: "/signup/mentor",
    name: "SignUpMentor",
    component: SignUpMentor,
  },

  {
    path: "/signup/mentor2",
    name: "SignUpMentor2",
    component: SignUpMentor2,
  },

  {
    path: "/signupselection",
    name: "SignUpSelection",
    component: SignUpSelection,
  },

  {
    path: "/",
    name: "Welcome Page",
    component: WelcomePage,
  },
  {
    path: "/subscribe",
    name: "subscribe",
    component: Subscribe,
  },

  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/howitworks",
    name: "HowItWorks",
    component: HowItWorks,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/clientHomePage",
    name: "Client Home Page",
    component: ClientHomePage,
  },
  {
    path: "/mentorpage",
    name: "Mentor Page",
    component: MentorPage,
  },
  {
    path: "/mentors/categories/:category",
    name: "Mentor Categories",
    component: MentorCategories,
    // meta: {
    //   requiresAuth: true,
    // },
  },
  {
    path: "/mentordetails/:id",
    name: "Mentor Details",
    component: MentorDetails,
  },

  {
    path: "/rateMentorPage/:id",
    name: "rateMentorPage",
    component: rateMentorPage,
  },

  {
    path: "/Dashboard",
    name: "CandidateDashboard",
    component: CandidateDashboard,
    // meta: {
    //   requiresAuth: true,
    // },
    children: [
      {
        path: "aboutme",
        name: "AboutMe",
        component: AboutMe,
      },

      {
        path: "sessions",
        name: "sessions",
        component: Sessions,
        //set rateMentor as a child of sessions
        children: [
          {
            path: "rateMentor/:id",
            name: "rateMentor",
            component: rateMentor,
          },
        ],

        // children: [
        //   {
        //     path: "rateMentor/:id",
        //     name: "rateMentor",
        //     component: rateMentor,
        //   },

        //   {
        //     path: "rateMentor/:id",
        //     name: "rateMentor",
        //     component: rateMentor,
        //   },
        //   // {
        //   //   path: "seeMentorFeedback",
        //   //   name: "seeMentorFeedback",
        //   //   component: seeMentorFeedback,
        //   // },
        //   // {
        //   //   path: "seeYourRequest",
        //   //   name: "seeYourRequest",
        //   //   component: seeYourRequest,
        //   // },
        // ],
      },
      {
        path: "payment",
        name: "payment",
        component: Payment,
      },
      {
        path: "security",
        name: "security",
        component: Security,
      },
      {
        path: "termsconditions",
        name: "termsconditions",
        component: Termsconditions,
      },
    ],
  },

  {
    path: "/MentorDashboard",
    name: "MentorDashboard",
    component: MentorDashboardNav,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "aboutme",
        name: "mentorAboutMe",
        component: mentorAboutMe,
      },
      {
        path: "sessions",
        name: "mentorSessions",
        component: mentorSessions,
      },
      {
        path: "security",
        name: "mentorSecurity",
        component: mentorSecurity,
      },
    ],
  },

  // {
  //   path: "/MentorDashboard",
  //   name: "MentorDashboard",
  //   component: MentorDashboard,
  //   // meta: {
  //   //   requiresAuth: true,
  //   // },
  //   children: [
  //     {
  //       path: "aboutme",
  //       name: "AboutMe",
  //       component: AboutMe,
  //     },

  //     {
  //       path: "sessions",
  //       name: "sessions",
  //       component: Sessions,
  //       //set rateMentor as a child of sessions
  //       children: [
  //         {
  //           path: "rateMentor/:id",
  //           name: "rateMentor",
  //           component: rateMentor,
  //         },
  //       ],
  //     },
  //     {
  //       path: "payment",
  //       name: "payment",
  //       component: Payment,
  //     },
  //     {
  //       path: "security",
  //       name: "security",
  //       component: Security,
  //     },
  //     {
  //       path: "termsconditions",
  //       name: "termsconditions",
  //       component: Termsconditions,
  //     },
  //   ],
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (getAuth().currentUser) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
