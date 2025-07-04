import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "./lib/auth";
import { LangProvider } from "./lib/lang";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import TechnicalConsultation from "@/pages/services/technical-consultation";
import EmpowermentHub from "@/pages/services/empowerment-hub";
import MentalHealthLab from "@/pages/services/mental-health-lab";
import Translation from "@/pages/services/translation";
import Team from "@/pages/team";
import Admin from "@/pages/admin";
import Contact from "@/pages/contact";
import Login from "@/pages/login";
import NotFound from "@/pages/not-found";

function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/services/technical-consultation" component={TechnicalConsultation} />
        <Route path="/services/empowerment-hub" component={EmpowermentHub} />
        <Route path="/services/mental-health-lab" component={MentalHealthLab} />
        <Route path="/services/translation" component={Translation} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/team" component={Team} />
        <Route path="/admin" component={Admin} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <LangProvider>
          <TooltipProvider>
            <Toaster />
            <AppRouter />
          </TooltipProvider>
        </LangProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
