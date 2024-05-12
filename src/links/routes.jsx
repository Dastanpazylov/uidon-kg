import ModalWindow from '../components/ModalWindows/ModalWindow';
import ClientPostPage from '../pages/ClientProfilePage/ClientPostPage';
import ClientProfilePage from '../pages/ClientProfilePage/ClientProfilePage';
import Freelance from '../pages/Freelancer/MainFreelancer';
import JobDetailsPage from '../pages/JobDetailsPage/JobDetailsPage';
import { ChangePassword, LogEmail, LogIn } from '../pages/LoginPage';
import {
  AuthCustomer,
  AuthExecutor,
  EmailVerification,
  RegPage,
  VerificationCompleted,
} from '../pages/RegPage';
import { links } from './links.jsx';
import WelcomePage from '../pages/WelcomePage/WelcomePage.jsx';
import WorkDetailsPublication from '../pages/WorkDetailsPublication/WorkDetailsPublication';
import FreelancerInfoForm from '../pages/FreelancerInfoPage/FreelancerInfoForm';
import ProfileSettings from '../pages/ProfileSettings/ProfileSettings';
import MainFreelancer from '../pages/Freelancer/MainFreelancer';
import LoginPageChecked from '../pages/LoginPage/LoginPageChecked';
import SavedFreelance from '../pages/Freelancer/SavedFreelance';
import ClientErrorPage from '../pages/ErrorPage/ClientErrorPage';
import ListOfJob from '../pages/ClientProfilePage/ListOfJob';
import MainPageClient from '../pages/MainPageClient/MainPageClient';
import FreelanceProfilePageResponce from '../pages/FreelanceProfilePageResponce/FreelanceProfilePageResponce';
import ClientInfoPage from '../pages/ClientInfoPage/ClientInfoPage';
import FreelanceProfilePageResponceCustomer from '../pages/FreelanceProfilePageResponce/FreelancerProfilePageRescponceCustomer';
import FreelancerSearchPage from '../pages/SearchPage/FreelancerSearchPage';
import ClientInfoForm from '../pages/ClientInfoPage/ClientInfoForm';
import ClientSearchPage from '../pages/SearchPage/ClientSearchPage';
import FreelancerDetails from '../pages/FreelancerDetails/FreelancerDetails';
import ModalWindowCustomer from '../components/ModalWindows/ModalWindowCustomer';
import ClientFeedbackPage from '../pages/ClientFeedbackPage/ClientFeedbackPage';
import ClientFeedbackPagesecond from '../pages/ClientFeedbackPage/ClientFeedbackPagesecond';
import SavedJobswaiting from '../components/Freelancer/SavedJobswaiting';

export const ArrayOfRoutes = [
  {
    path: links.base,
    element: <WelcomePage />,
  },
  {
    path: links.clientInfoPage,
    element: <ClientInfoPage />,
  },
  {
    path: links.clientInfoForm,
    element: <ClientInfoForm />,
  },
  {
    path: links.freelancerInfoForm,
    element: <FreelancerInfoForm />,
  },
  {
    path: links.signIn,
    element: < LogIn/>,
  },
  {
    path: links.signUp,
    element: < RegPage/>,
  },
  {
    path: links.executor,
    element: <AuthExecutor />,
  },
  {
    path: links.customer,
    element: <AuthCustomer/>,
  },
  {
    path: links.emailVerification,
    element: <EmailVerification />,
  },
  {
    path: links.clientProfilePage,
    element: <ClientProfilePage />,
  },
  {
    path: links.clientPostPage,
    element: <ClientPostPage />,
  },
  {
    path: links.clientSearchPage,
    element: <ClientSearchPage />,
  },
  {
    path: links.freelancerDetails,
    element: <FreelancerDetails />, 
  },
  {
    path: links.freelancerProfilePage,
    element: <FreelanceProfilePageResponce />,
  },
  {
    path: links.freelancerProfilePageCustomer,
    element: <FreelanceProfilePageResponceCustomer />,
  },
  {
    path: links.freelancerSearchPage,
    element: <FreelancerSearchPage />,
  },
  {
    path: links.jobDetails,
    element: <JobDetailsPage />,
  },
  {
    path: links.workDetails,
    element: <WorkDetailsPublication />,
  },
  {
    path: links.modalExecutor,
    element: <ModalWindow />,
  },
  {
    path: links.modalCustomer,
    element: <ModalWindowCustomer />,
  },
  {
    path: links.changePassword,
    element: <ChangePassword />,
  },
  {
    path: links.signUpEmail,
    element: <LogEmail />,
  },
  {
    path: links.successfulSignUp,
    element: <VerificationCompleted />,
  },
  {
    path: links.mainPageClient,
    element: <MainPageClient />,
  },
  {
    path: links.mainPageFreelancer,
    element: <MainFreelancer />,
  },
  {
    path: '*',
    element: <ClientErrorPage />,
  },
  {
    path: links.profileSettings,
    element: <ProfileSettings />,
  },
  {
    path: links.saved,
    element: <SavedFreelance />,
  },
  {
    path: links.waiting,
    element: <SavedJobswaiting />
  },
  {
    path: links.logInPageChecked,
    element: <LoginPageChecked />,
  },
  {
    path: links.listOfJob,
    element: <ListOfJob />,
  },
  {
    path: links.changePassword,
    element: <ChangePassword />,
  },
  {
    path: links.clientFeedbackPage,
    element: <ClientFeedbackPage />
  },
  {
    path: links.clientFeedbackPagesecond,
    element: <ClientFeedbackPagesecond />
  }
  // {
  //   path: links.
  // },
];
