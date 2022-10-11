import { UserData } from "../model";

type UserFormProps = {
    updateFields: (fields: Partial<UserData>) => void
} & UserData

export function UserForm({firstname, lastname, age, updateFields}: UserFormProps) {
    return (<div className="mb-3">
        <div className="is-centered has-text-centered">
            <h1 className="title">User Details</h1>
        </div>

        <div className="field">
            <label className="label">First Name</label>
            <div className="control">
                <input autoFocus required className="input" type="text" placeholder="First Name" value={firstname}
                       onChange={e => updateFields({firstname: e.target.value})}/>
            </div>
        </div>

        <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
                <input required className="input" type="text" placeholder="Last Name" value={lastname}
                       onChange={e => updateFields({lastname: e.target.value})}/>
            </div>
        </div>

        <div className="field">
            <label className="label">Age</label>
            <div className="control">
                <input required className="input" min={1} type="number" placeholder="Age" value={age}
                       onChange={e => updateFields({age: e.target.value})}/>
            </div>
        </div>
    </div>)
}