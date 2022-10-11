import { useMultistepForm } from "./components/useMultistepForm";
import { UserForm } from "./steps/UserForm";
import { AddressForm } from "./steps/AddressForm";
import { AccountForm } from "./steps/AccountForm";
import { FormEvent, useState } from "react";
import { AccountData, AddressData, UserData } from "./model";

type FormData = UserData & AddressData & AccountData

const INITIAL_DATA: FormData = {
    firstname: "",
    lastname: "",
    age: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    password: ""
}

function App() {
    const [data, setData] = useState(INITIAL_DATA)

    function updateFields(fields: Partial<FormData>) {
        setData(prev => {
            return {...prev, ...fields}
        })
    }

    const {
        steps,
        step,
        currentStepIndex,
        isFirstStep,
        isLastStep,
        next,
        back
    } = useMultistepForm([
        <UserForm {...data} updateFields={updateFields}/>,
        <AddressForm {...data} updateFields={updateFields}/>,
        <AccountForm {...data} updateFields={updateFields}/>
    ])

    function onSubmit(e: FormEvent) {
        e.preventDefault()
        if (!isLastStep) return next()
        console.log(data)
        alert("Account created successfully!!")
    }

    return (
        <main className="has-background-white-bis m-0 p-3" style={{minHeight: "90vh"}}>
            <div className="box m-5">
                <div className="is-clearfix">
                    <span className="is-pulled-left"/>
                    <span className="is-pulled-right"><strong>{currentStepIndex + 1}/{steps.length}</strong></span>
                </div>

                <div>
                    <form onSubmit={onSubmit}>
                        {step}
                        <div className="buttons is-right">
                            {!isFirstStep &&
                                <button type="button" onClick={back} className="button is-text">Back</button>}
                            <button type="submit"
                                    className="button is-primary">{isLastStep ? "Finish" : "Next"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default App
