import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import StepFinish from "./StepFinish";
import StepSelectFolders from "./StepSelectFolders";
import StepChooseProvider from "./StepChooseProvider";
import StepFilters from "./StepFilters";
import StepImapAuth from "./StepImapAuth";
import StepAuthenticate from "./StepAuthenticate";

const ConnectNewAccount = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProvider, setSelectedProvider] = useState("");

  const steps = [
    { id: 1, name: t("connect.steps.chooseProvider") },
    { id: 2, name: t("connect.steps.authenticate") },
    { id: 3, name: t("connect.steps.selectFolders") },
    { id: 4, name: t("connect.steps.filters") },
    { id: 5, name: t("connect.steps.finish") },
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepChooseProvider
            selectedProvider={selectedProvider}
            setSelectedProvider={(provider) => {
              setSelectedProvider(provider);
              setCurrentStep(2);
            }}
          />
        );
      case 2:
        if (selectedProvider === "imap") {
          return <StepImapAuth onSuccess={() => setCurrentStep(3)} />;
        }
        return (
          <StepAuthenticate
            selectedProvider={selectedProvider}
            onSuccess={() => setCurrentStep(3)}
          />
        );
      case 3:
        return <StepSelectFolders />;
      case 4:
        return <StepFilters />;
      case 5:
        return <StepFinish />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {t("connect.title")}
      </h2>

      <div className="flex gap-6">
        {/* Left Side - Steps Card */}
        <div className="bg-white rounded-xl border border-gray-200 w-1/2 p-4">
          <ul className="space-y-3">
            {steps.map((step) => (
              <li
                key={step.id}
                className={`flex items-center text-sm cursor-pointer px-3 py-2 rounded-md border ${
                  currentStep === step.id
                    ? "border-gray-400 bg-gray-50 font-semibold"
                    : "border-gray-200 text-gray-500 hover:bg-gray-50"
                }`}
                onClick={() => setCurrentStep(step.id)}
              >
                <input
                  type="checkbox"
                  checked={currentStep > step.id}
                  readOnly
                  className="mr-2"
                />
                {step.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Step Content Card */}
        <div className="bg-white rounded-lg border border-gray-200 w-3/4 p-6 flex flex-col justify-between">
          <div>{renderStepContent()}</div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => currentStep > 1 && setCurrentStep(currentStep - 1)}
          className={`px-6 py-2 rounded-lg border ${
            currentStep === 1
              ? "text-gray-400 cursor-not-allowed border-gray-200"
              : "text-gray-700 border-gray-300 hover:bg-gray-50"
          }`}
          disabled={currentStep === 1}
        >
          {t("connect.prev")}
        </button>
        <button
          onClick={() => currentStep < steps.length && setCurrentStep(currentStep + 1)}
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
        >
          {currentStep === steps.length ? t("connect.finishBtn") : t("connect.next")}
        </button>
      </div>
    </div>
  );
};

export default ConnectNewAccount;
