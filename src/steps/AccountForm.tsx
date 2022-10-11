import { AccountData } from "../model";

type AccountFormProps = {
    updateFields: (value: Partial<AccountData>) => void
} & AccountData

export function AccountForm({email, password, updateFields}: AccountFormProps) {
    return (<div className="mb-3">
        <div className="is-centered has-text-centered">
            <h1 className="title">Account</h1>
        </div>

        <div className="field">
            <label className="label">Email</label>
            <div className="control">
                <input autoFocus required className="input" type="email" placeholder="Email" value={email}
                onChange={e => updateFields({email: e.target.value})}/>
            </div>
        </div>

        <div className="field">
            <label className="label">Password</label>
            <div className="control">
                <input required className="input" type="password" placeholder="password" value={password}
                       onChange={e => updateFields({password: e.target.value})}/>
            </div>
        </div>
    </div>)
}