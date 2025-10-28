import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PlanProvider } from "@/contexts/PlanContext";
import LandingPage from "@/components/LandingPage";
import AuthPage from "@/components/AuthPage";
import DualOptionPage from "@/components/DualOptionPage";
import FreePlanDashboard from "@/components/FreePlanDashboard";
import ProPlanDashboard from "@/components/ProPlanDashboard";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/select-plan" component={DualOptionPage} />
      <Route path="/free" component={FreePlanDashboard} />
      <Route path="/pro" component={ProPlanDashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <PlanProvider>
          <Toaster />
          <Router />
        </PlanProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
