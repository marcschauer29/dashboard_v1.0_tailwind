import { useState } from "react";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import { UseContextProvider } from "./contexts/StepperContext";
import UserInfo from "./components/steps/UserInfo";
import Address from "./components/steps/Address";
import Profile from "./components/steps/Profile";
import Card from "components/card";

const NewUser = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { stepNo: 1, name: "User Info" },
    { stepNo: 2, name: "Address" },
    { stepNo: 3, name: "Profile" },
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <UserInfo />;
      case 2:
        return <Address />;
      case 3:
        return <Profile />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <div className="mt-3 h-full w-full">
      <div className="h-[350px] w-full rounded-[20px] bg-gradient-to-br from-brandLinear to-blueSecondary md:h-[390px]" />
      <div className="w-md:2/3 mx-auto h-full w-5/6 md:px-3  3xl:w-7/12">
        <div className="-mt-[280px] w-full pb-10 md:-mt-[240px] md:px-[70px]">
          <Stepper
            action={setCurrentStep}
            steps={steps}
            currentStep={currentStep}
          />
        </div>

        <Card extra={"h-full mx-auto pb-3"}>
          <div className="rounded-[20px]">
            <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
          </div>
          {/* navigation button */}

          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        </Card>
      </div>
    </div>
  );
};

export default NewUser;
