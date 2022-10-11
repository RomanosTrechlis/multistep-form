import { AddressData } from "../model";

type AddressFormProps = {
    updateFields: (value: Partial<AddressData>) => void
} & AddressData

export function AddressForm({street, city, state, zip, updateFields}: AddressFormProps) {
    return (<div className="mb-3">
        <div className="is-centered has-text-centered">
            <h1 className="title">Address</h1>
        </div>

        <div className="field">
            <label className="label">Street</label>
            <div className="control">
                <input autoFocus required className="input" type="text" placeholder="Street" value={street}
                       onChange={e => updateFields({street: e.target.value})}/>
            </div>
        </div>

        <div className="field">
            <label className="label">City</label>
            <div className="control">
                <input required className="input" type="text" placeholder="City" value={city}
                       onChange={e => updateFields({city: e.target.value})}/>
            </div>
        </div>

        <div className="field">
            <label className="label">State</label>
            <div className="control">
                <input required className="input" type="text" placeholder="State" value={state}
                       onChange={e => updateFields({state: e.target.value})}/>
            </div>
        </div>

        <div className="field">
            <label className="label">Zip</label>
            <div className="control">
                <input required className="input" type="text" placeholder="Zip" value={zip}
                       onChange={e => updateFields({zip: e.target.value})}/>
            </div>
        </div>
    </div>)
}