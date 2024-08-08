import React, { useState } from 'react';


const MyForm = () => {
    // State for form fields
    const [firstName, setFirstName] = useState('Mark');
    const [lastName, setLastName] = useState('Otto');
    const [username, setUsername] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [agree, setAgree] = useState(false);
    const [isValid, setIsValid] = useState(true); // Validation state

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        // Perform validation checks
        if (!firstName || !lastName || !username || !city || !state || !zip || !agree) {
            setIsValid(false);
            return;
        }
        // Handle form submission (e.g., API call)
        console.log('Form submitted', { firstName, lastName, username, city, state, zip, agree });
    };

    return (
        <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
            <div className="col-md-4">
                <label htmlFor="validationCustom01" className="form-label">First name</label>
                <input
                    type="text"
                    className={`form-control ${!isValid ? 'is-invalid' : ''}`}
                    id="validationCustom01"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <div className="valid-feedback">
                    Looks good!
                </div>
                <div className="invalid-feedback">
                    Please provide a first name.
                </div>
            </div>
            <div className="col-md-4">
                <label htmlFor="validationCustom02" className="form-label">Last name</label>
                <input
                    type="text"
                    className={`form-control ${!isValid ? 'is-invalid' : ''}`}
                    id="validationCustom02"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <div className="valid-feedback">
                    Looks good!
                </div>
                <div className="invalid-feedback">
                    Please provide a last name.
                </div>
            </div>
            <div className="col-md-4">
                <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                    <input
                        type="text"
                        className={`form-control ${!isValid ? 'is-invalid' : ''}`}
                        id="validationCustomUsername"
                        aria-describedby="inputGroupPrepend"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <div className="invalid-feedback">
                        Please choose a username.
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="validationCustom03" className="form-label">City</label>
                <input
                    type="text"
                    className={`form-control ${!isValid ? 'is-invalid' : ''}`}
                    id="validationCustom03"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />
                <div className="invalid-feedback">
                    Please provide a valid city.
                </div>
            </div>
            <div className="col-md-3">
                <label htmlFor="validationCustom04" className="form-label">State</label>
                <select
                    className={`form-select ${!isValid ? 'is-invalid' : ''}`}
                    id="validationCustom04"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                >
                    <option selected disabled value="">Choose...</option>
                    <option value="CA">California</option>
                    <option value="TX">Texas</option>
                    <option value="NY">New York</option>
                </select>
                <div className="invalid-feedback">
                    Please select a valid state.
                </div>
            </div>
            <div className="col-md-3">
                <label htmlFor="validationCustom05" className="form-label">Zip</label>
                <input
                    type="text"
                    className={`form-control ${!isValid ? 'is-invalid' : ''}`}
                    id="validationCustom05"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    required
                />
                <div className="invalid-feedback">
                    Please provide a valid zip.
                </div>
            </div>
            <div className="col-12">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="invalidCheck"
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                        required
                    />
                    <label className="form-check-label" htmlFor="invalidCheck">
                        Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">
                        You must agree before submitting.
                    </div>
                </div>
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>
    );
};

export default MyForm;
