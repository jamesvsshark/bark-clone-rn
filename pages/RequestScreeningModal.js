import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTailwind } from "tailwind-rn";

const RequestScreeningModal = ({ route }) => {
  const tailwind = useTailwind();
  const navigation = useNavigation();
  const screeningQuestions = route.params.selectedService.screeningQuestions;

  return (
    <View style={tailwind("flex flex-1 bg-white")}>
      {/* ScreeningQuestionsProgressBar */}
      {/* Maintain State of questions in the modal and pass as props to progress bar*/}
      <ProgressBar />

      <View style={tailwind("flex flex-row justify-end px-2 pb-4 pt-1")}>
        {/* TODO: onPress below warn before closing */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} style={tailwind("text-gray-400")} />
        </TouchableOpacity>
      </View>

      <View>
        <MultiStep steps={screeningQuestions} />
      </View>
    </View>
  );
};

const ProgressBar = () => {
  const tailwind = useTailwind();
  // TODO some logic to make the width calculate based on props received
  const dynamicWidth = "w-1/4";
  return (
    <View
      style={tailwind(`flex flex-row ${dynamicWidth} h-1 bg-blue-500`)}
    ></View>
  );
};

const MultiStep = ({ steps }) => {
  const tailwind = useTailwind();
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [doesCurrentStepHaveAPrevious, setDoesCurrentStepHaveAPrevious] =
    useState(false);

  const goToNextStep = () => {
    const nextStep = steps[steps.indexOf(currentStep) + 1];

    if (nextStep) {
      setDoesCurrentStepHaveAPrevious(true);
      setCurrentStep(nextStep);
    }

    console.log("submit");
  };

  const goToPreviousStep = () => {
    const previousStep = steps[steps.indexOf(currentStep) - 1];

    if (previousStep) {
      if (steps.indexOf(previousStep) > 0) {
        setDoesCurrentStepHaveAPrevious(true);
      } else {
        setDoesCurrentStepHaveAPrevious(false);
      }
      setCurrentStep(previousStep);
    }
  };

  return (
    <View>
      <View>
        <Text
          style={tailwind("text-center text-xl font-medium pt-2 mb-4 px-4")}
        >
          {currentStep.questionText}
        </Text>
      </View>

      <View>
        {currentStep.answerType === "single" ? (
          <SingleChoiceOptions choices={currentStep.answerChoices} />
        ) : (
          <MultiChoiceOptions choices={currentStep.answerChoices} />
        )}
      </View>

      <View style={tailwind("px-4 mt-6 flex flex-row justify-end")}>
        {doesCurrentStepHaveAPrevious && (
          <TouchableOpacity
            onPress={goToPreviousStep}
            style={[
              tailwind("rounded-lg px-6 py-2 bg-white mt-4 mb-12 w-1/2 mr-1"),
              // {
              //   shadowOffset: { width: 0, height: 4 },
              //   elevation: 4,
              //   shadowOpacity: 0.1,
              //   shadowRadius: 2,
              //   filter:
              //     "filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
              // },
            ]}
          >
            <Text
              style={tailwind("text-center text-gray-500 text-lg font-medium")}
            >
              Back
            </Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          onPress={goToNextStep}
          style={[
            tailwind("rounded-lg px-6 py-2 bg-blue-500 mt-4 mb-12 w-1/2 ml-1"),
            {
              shadowOffset: { width: 0, height: 4 },
              elevation: 4,
              shadowOpacity: 0.1,
              shadowRadius: 2,
              filter:
                "filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
            },
          ]}
        >
          <Text style={tailwind("text-center text-white text-lg font-medium")}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SingleChoiceOptions = ({ choices }) => {
  const tailwind = useTailwind();

  return (
    <View
      style={[
        tailwind("mt-4 mx-4 border border-b-0 rounded"),
        { borderColor: "rgb(215, 215, 215)" },
      ]}
    >
      {choices.map((choice, index) => {
        return (
          <View
            key={index}
            style={[
              tailwind("p-2 border-b"),
              { borderColor: "rgb(215, 215, 215)" },
            ]}
          >
            <TouchableOpacity>
              <View style={tailwind("flex flex-row items-center pl-2")}>
                <Ionicons
                  name="md-radio-button-off-outline"
                  size={24}
                  style={tailwind("text-gray-500")}
                />
                <Text
                  style={tailwind("text-base font-medium px-3 text-gray-500")}
                >
                  {choice}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const MultiChoiceOptions = ({ choices }) => {
  const tailwind = useTailwind();

  return (
    <View
      style={[
        tailwind("mt-4 mx-4 border border-b-0 rounded"),
        { borderColor: "rgb(215, 215, 215)" },
      ]}
    >
      {choices.map((choice, index) => {
        return (
          <View
            key={index}
            style={[
              tailwind("p-2 border-b"),
              { borderColor: "rgb(215, 215, 215)" },
            ]}
          >
            <TouchableOpacity>
              <View style={tailwind("flex flex-row items-center pl-2")}>
                <Ionicons
                  name="square-outline"
                  size={24}
                  style={tailwind("text-gray-500")}
                />
                <Text
                  style={tailwind("text-base font-medium px-3 text-gray-500")}
                >
                  {choice}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default RequestScreeningModal;
