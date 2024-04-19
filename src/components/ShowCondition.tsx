import React, { SyntheticEvent, useState } from "react"; // Importing necessary modules from React
import { useNavigate, useParams } from "react-router-dom"; // Importing hooks from React Router
import axios from 'axios'; // Importing Axios for HTTP requests
import { IUser } from "../interfaces/user"; // Importing IUser interface
import { ICondition } from "../interfaces/conditions"; //importing icondition interface
import { baseUrl } from "../config";

function ShowCondition({ user }: { user: null | IUser }) { // Functional component ShowCondition receiving user prop

    const [condition, updateCondition] = React.useState<ICondition | null>(null); // State for condition data
    const [isActive, setIsActive] = useState(true); // State for modal activation

    const { conditionId } = useParams(); // Getting conditionId from URL parameters
    const navigate = useNavigate(); // Initializing the useNavigate hook for navigation

    const handleToggle = () => { // Function to handle modal toggle
        setIsActive(false); // Deactivating the modal
        navigate('/conditions'); // Navigating to the /conditions route
    };

    React.useEffect(() => { // Effect hook to fetch 
        async function fetchConditions() {
            try {
                const resp = await fetch(`${baseUrl}/conditions/${conditionId}`); // Fetching condition data from API
                const ConditionsData = await resp.json(); // Parsing response data
                updateCondition(ConditionsData); // Updating condition state with fetched data
            } catch (e) {
                // Handle error
            }
        }
        fetchConditions();
    }, [conditionId]); // Added conditionId as a dependency

    async function deleteCondition(e: SyntheticEvent) { // 
        try {
            const token = localStorage.getItem('token'); // Getting token from localStorage
            await axios.delete(`${baseUrl}/conditions/` + conditionId, { // Sending DELETE request to delete condition
                headers: { Authorization: `Bearer ${token}` } // Attaching authorization token to request headers
            });
            navigate('/conditions'); // Navigating to the '/songs' route after successful deletion
        } catch (e: any) {
            console.log(e.response.data); // Logging error message if deletion fails
        }
    }

    function redirectToComments() {
        try {
            window.location.href = `/posts/${conditionId}`; // Redirecting to the comments page for the specified conditionId
        } catch (error) {
            console.log(error); // Logging error message if redirection fails
        }
    }


    console.log(condition);


    return (
        <section className="section">
            {isActive}
            <div className="modal is-active"> {/* Modal for displaying condition details */}
                <div className="modal-background" onClick={handleToggle}></div> {/* Background to close modal */}
                <div className="modal-card tempTag"> {/* Modal card */}
                    <header className="modal-card-head"> {/* Modal header */}
                        <p className="modal-card-title">{condition?.name}</p> {/* condition name */}
                        <button className="delete" aria-label="close" onClick={handleToggle}></button> {/* Button to close modal */}
                    </header>
                    <section className="modal-card-body px-3"> {/* Modal body */}
                        <div className="container"> {/* Container for modal content */}
                            <div className="columns"> {/* Columns for layout */}
                                <div className="column"> {/* Column for condition details */}
                                    <h1 className="title has-text-centered">{condition?.name}</h1> {/* condition name */}
                                    <p className="subtitle has-text-centered">{condition?.about}</p> {/* about the poster */}
                                    <p className="subtitle has-text-centered">{condition?.info}</p>
                                    <p className="subtitle has-text-centered"> {condition?.advice}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer className="modal-card-foot"> {/* Modal footer */}
                        <div className="buttons"> {/* Buttons section */}
                            {condition && (user?._id === condition.user) && <button className="button is-danger" onClick={deleteCondition}>Delete Condition</button>}
                            {/* Delete condition button */}
                        </div>
                        <div className="buttons has-text-right"> {/* Buttons section */}
                            {condition && (user?._id === condition.user) && <button className="button is-dark" onClick={redirectToComments}>Add a Comment</button>} </div>
                    </footer>
                </div>
            </div>
            {/* } */}
        </section>
    );
}

export default ShowCondition; // Exporting the Showcondition component