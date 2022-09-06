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
import Dashboard from "../pages/CandidateDashboard.vue";
import MentorCategories from "../pages/MentorCategories.vue";
import { getAuth } from "firebase/auth";

const routes = [
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
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
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
