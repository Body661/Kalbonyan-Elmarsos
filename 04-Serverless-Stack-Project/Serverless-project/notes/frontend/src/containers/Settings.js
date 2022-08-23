import React, { useState } from "react";
import { API } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import config from "../config";
import { loadStripe } from "@stripe/stripe-js";
import BillingForm from "../components/BillingForm";
import { Elements } from "@stripe/react-stripe-js";
import { useAlert } from 'react-alert'
import "./Settings.css";
import onError from "../lib/errorLib";

export default function Settings() {
    const alert = useAlert()
    const stripePromise = loadStripe(config.STRIPE_KEY);
    const nav = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    function billUser(details) {
        return API.post("notes", "/billing", {
            body: details,
        });
    }

    async function handleFormSubmit(storage, { token, error }) {
        if (error) {
            onError(error)
            return;
        }

        setIsLoading(true);

        try {
            await billUser({
                storage,
                source: token.id,
            });

            alert.show("Your card has been charged successfully!");
            nav("/");
        } catch (e) {
            onError(e)
            setIsLoading(false);
        }
    }

    return (
        <div className="Settings">
            <Elements
                stripe={stripePromise}
                fonts={[
                    {
                        cssSrc:
                            "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800",
                    },
                ]}
            >
                <BillingForm isLoading={isLoading} onSubmit={handleFormSubmit} />
            </Elements>
        </div>
    );
}