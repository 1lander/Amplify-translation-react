import React, { useEffect } from "react";
import { Amplify } from "aws-amplify";
import Predictions, {
  AmazonAIPredictionsProvider,
} from "@aws-amplify/predictions";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);
Amplify.addPluggable(new AmazonAIPredictionsProvider());

function App() {
  useEffect(() => {
    const translate = async () => {
      const identify = await Predictions.identify({
        text: "Hello, world!",
        languageCode: "en",
      });
      console.log(identify);
    };

    translate();
  }, []);

  return (
    <div>
      <div>Some text</div>
    </div>
  );
}

export default App;
