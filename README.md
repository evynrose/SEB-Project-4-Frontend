# Description:

Welcome to Helping Hands, where individuals with physical or mental conditions come together to share their experiences and offer support. Join our compassionate community to connect, learn, and uplift one another on our journey towards healing and resilience.

# Deployment Link:

https://main--helpingeachother.netlify.app/

# Getting Started/Code Installation:

To access the frontend code, clone the repository from GitHub.

https://github.com/evynrose/SEB-Project-4-Frontend

To access the backend code, clone the repository from GitHub.

https://github.com/evynrose/SEB-Project-4-Backend

# Timeframe & Working Team:

I worked on this project for a week with Syed Siddiqui.
His github is: 

https://github.com/SadeSiddiqui

# Technologies Used:

Frontend: React, Vite
Backend: Python, Flask, SQLAlchemy
Database: PostgreSQL
Other: Marshmallow, Git

# Brief:

# Technical Requirements
You must:

Build a full-stack application by making your own backend and your own front-end

Use a Python Flask API using a Flask REST Framework to serve your data from a Postgres database

Consume your API with a separate front-end built with React

Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models

Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut

Have a visually impressive design to kick your portfolio up a notch and have something to wow future clients & employers.

Be deployed online so it's publicly accessible.

# Necessary Deliverables

A working app hosted on the internet

A link to your hosted working app in the URL section of your Github repo

A git repository hosted on Github, with a link to your hosted project, and frequent commits dating back to the very beginning of the project

A readme.md file following the provided template by the outcomes team.


# Planning:

The initial planning stage involved:

Wireframing the frontend UI - View the wireframe drawing: https://imgur.com/a/2xKcaXQ
Designing ERDs for the database schema.


# Build/Code Process:

Build/Code Process:

During the development of this project, we followed a structured approach to build both the backend API using Python and Flask, as well as the frontend with React.

Backend API with Python and Flask:

We started by setting up the backend API using Python and Flask. Flask provides a lightweight and flexible framework for building web applications. We structured our API routes using Flask's Blueprint feature, allowing us to organize our codebase efficiently.

For handling data validation and serialization, we employed Marshmallow, a powerful library for object serialization. Marshmallow helped us define schemas for our data models and validate incoming request data.

One key aspect of our backend implementation was securing routes using custom middleware. We implemented a secure route middleware to authenticate and authorize requests, ensuring that only authenticated users could access certain endpoints.

In terms of data modeling, we defined models for conditions and comments using SQLAlchemy, an ORM (Object-Relational Mapping) library for Python. SQLAlchemy facilitated database interactions and allowed us to define relationships between different data entities.

Moreover, we implemented functionalities to add and delete comments associated with specific conditions. Below are the relevant code snippets for adding and deleting comments:

```
@router.route("/posts/<int:conditions_id>", methods=["POST"])
@secure_route
def create_comment(conditions_id):
    comment_dictionary = request.json
    comment_dictionary["conditions_id"] = conditions_id
    comment_dictionary["user_id"] = g.current_user.id
    existing_conditions = ConditionsModel.query.get(conditions_id)
    if not existing_conditions:
        return {"message": "No condition found"}, HTTPStatus.NOT_FOUND
    try:
        comment = comment_schema.load(comment_dictionary)
        comment.conditions_id = conditions_id
        comment.save()
    except ValidationError as e:
        return {"errors": e.messages, "message": "Something went wrong"}
    return comment_schema.jsonify(comment), HTTPStatus.CREATED

@router.route("/posts/<int:comment_id>", methods=["DELETE"])
@secure_route
def remove_comment(comment_id):
    current_user = g.current_user
    comment = CommentModel.query.get(comment_id)
    if not comment:
        return {"message": "No comment found"}, HTTPStatus.NOT_FOUND
    if comment.user_id != current_user.id:
        return {
            "message": "You are not authorized to delete this comment"
        }, HTTPStatus.UNAUTHORIZED
    comment.remove()
    return "", HTTPStatus.NO_CONTENT
```

Frontend with React:

On the frontend side, we utilized React to create a dynamic and responsive user interface. React's component-based architecture allowed us to build reusable UI components and manage state effectively.

We structured our frontend application into components, each responsible for rendering a specific part of the user interface. This modular approach enabled us to maintain a clean and organized codebase.

For managing client-server communication, we utilized Axios, a popular HTTP client for JavaScript. Axios facilitated making asynchronous requests to our backend API endpoints, enabling seamless data exchange between the frontend and backend.

Additionally, we implemented features to add and delete comments on the frontend, providing users with the ability to interact with the application's content dynamically. Below is the relevant code snippet for adding and deleting comments on the frontend:

```
// Function to handle deleting a comment
async function deleteComment(commentId) {
    try {
        const token = localStorage.getItem("token");
        await axios.delete(`${baseUrl}/posts/${commentId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        // Refresh the page or update the comments list
        // based on your application's design
    } catch (error) {
        console.error("Error deleting comment:", error);
    }
}
```
By incorporating these functionalities into our application, we were able to provide users with a seamless experience, allowing them to interact with comments effortlessly.

# Challenges:

Our main challenge revolved around the comment functionality, where an initial bug caused unintended deletion of users. We successfully addressed this by refining the cascade operation in the backend, ensuring data integrity.

# Wins:

Key achievements include the successful implementation of comment functionality, robust backend API development, and responsive frontend design. Effective collaboration, learning, and successful deployment were also significant wins for the project.

# Key Learnings/Takeaways:

Through this project, I gained valuable insights into Python backend development, particularly in utilizing Flask and SQLAlchemy. This experience deepened my understanding of data modeling, authentication, and error handling, providing a solid foundation for future projects.

# Bugs:

We encountered a bug where unauthorized users could delete conditions, compromising data integrity. Future improvements will address this vulnerability by implementing stricter authorization checks.

# Future Improvements:

Future improvements include fixing the unauthorized deletion of conditions and adding user profile functionality. These enhancements will enhance security, user experience, and community engagement within the platform.

