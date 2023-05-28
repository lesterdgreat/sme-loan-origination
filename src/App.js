import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavigationBar from "./components/navigation-bar";
import DataEntry from "./pages/dataentry/dataentry";
import Verification from "./pages/verification/verification";
import Assessment from "./pages/assessment/assessment";
import Scanner from "./pages/scanner";
import LandingPage from "./pages/landingpage";
import Footer from "./components/footer";
import "./index.css";
import DataEntryDetailsScreen from "./pages/dataentry/dataentry-details";
import AssessmentDetailsScreen from "./pages/assessment/assessment-details";
import VerificationDetailsScreen from "./pages/verification/verification-details";
import SideBarComponent from "./components/side-bar";

const App = () => {
    return(
        <>
        <body className="d-flex flex-column min-vh-100">
            <Router basename="/sme-loan-origination">
                <SideBarComponent />
                <div className="container">
                    <div className="container-fluid">
                        <Routes>
                            <Route exact path="/" Component={LandingPage}></Route>
                            <Route path="/scanner" Component={Scanner}></Route>
                            <Route path="/dataentry" Component={DataEntry}></Route>
                            <Route path="/verification" Component={Verification}></Route>
                            <Route path="/assessment" Component={Assessment}></Route>
                            <Route path="/dataentry/:id" Component={DataEntryDetailsScreen}></Route>
                            <Route path="/assessment/:id" Component={AssessmentDetailsScreen}></Route>
                            <Route path="/verification/:id" Component={VerificationDetailsScreen}></Route>
                        </Routes>
                    </div>
                </div>
            </Router>
        </body>
        </>
    );
};

export default App;