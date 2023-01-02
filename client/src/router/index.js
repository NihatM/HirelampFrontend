import { createRouter, createWebHistory } from "vue-router";
import About from "../pages/About.vue";
import Subscribe from "../pages/Subscribe.vue";
import HowItWorks from "../pages/HowItWorks.vue";
import Contact from "../pages/Contact.vue";
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
import mentorPayment from "../components/MentorDashboard/mentorPayment.vue";
import mentorFeedback from "../pages/MentorSide/mentorFeedback.vue";
import mentorSeeRequest from "../pages/MentorSide/mentorSeeRequest.vue";
import notFoundPage from "../pages/notFoundPage.vue";
import PopupCalendar from "../components/MentorDashboard/PopupCalendar.vue";
import webinarPage from "../pages/webinarPage.vue";

import { getAuth } from "firebase/auth";

const routes = [
  {
    path: "/:catchAll(.*)",
    name: "NotFoundPage",
    component: notFoundPage,
  },
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
    path: "/mentors",
    name: "Mentor Page",
    component: MentorPage,
    props: true,
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
    path: "/mentor/:id",
    name: "Mentor Details",
    component: MentorDetails,
    props: true,
  },
  {
    path: "/mentor/:str",
    name: "MentorDetails",
    component: MentorDetails,
    props: true,
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
    path: "/mentorFeedback/:id",
    name: "mentorFeedback",
    component: mentorFeedback,
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
        children: [
          {
            path: "popupCalendar",
            name: "PopupCalendar",
            component: PopupCalendar,
          },
        ],
      },
      {
        path: "sessions",
        name: "mentorSessions",
        component: mentorSessions,
        //add mentorFeedback as a child of mentorSessions
        // children: [
        //   {
        //     path: "mentorFeedback/:id",
        //     name: "mentorFeedback",
        //     params: true,
        //     component: mentorFeedback,
        //   },
        // ],
      },
      {
        path: "security",
        name: "mentorSecurity",
        component: mentorSecurity,
      },
      {
        path: "payment",
        name: "mentorPayment",
        component: mentorPayment,
      },
    ],
  },

  {
    path: "/mentorSeeRequest/:id",
    name: "mentorSeeRequest",
    component: mentorSeeRequest,
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
  {
    path: "/webinarPage",
    name: "webinarPage",
    component: webinarPage,
  },
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
