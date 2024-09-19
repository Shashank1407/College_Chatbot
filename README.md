# College Chatbot for Website #

## Project Overview ##

The College Chatbot is designed to help both new and existing students by providing answers to common questions about the institution. It serves as a virtual assistant that can handle inquiries related to admissions, courses, fees, scholarships, campus life, and more. By leveraging AI and natural language processing, the chatbot can automatically redirect users to relevant pages or provide detailed responses, making it easier to navigate the college's website and gather important information.

Problem Statement

Develop a chatbot for a college website that can address basic queries and doubts from new and existing students. The chatbot should redirect users to relevant pages based on their queries and provide accurate responses to commonly asked questions related to courses, admissions, fees, and other information.

Solution Approach

Data Collection & Preprocessing: The chatbot will rely on structured data stored in a MySQL database, including user data, frequently asked questions (FAQs), course details, and admission information.

Model Selection: 

Natural language processing (NLP) models are employed to understand user queries and map them to predefined intents. DialogFlow or Rasa can be used to manage the AI-based conversation logic, depending on the chosen platform.

Evaluation Metrics: 

Performance will be evaluated based on user satisfaction metrics, response accuracy, and the correct redirection to the appropriate pages. User feedback will help improve the system over time.

Optimization Strategy: 

Continuous improvements will be made through data refinement and adding more FAQs. NLP model fine-tuning and regular database updates will ensure that the chatbot remains accurate and helpful as new data is collected.

Tech Stack

Backend: FastAPI
Database: MySQL
NLP Platform: DialogFlow or Rasa
API Integration: Webhooks for querying database and responding to user inputs
Frontend: Embedded chatbot UI on the college website
Model Design & Workflow
Model Architecture: The chatbot will use a standard NLP architecture with intent detection and entity recognition to process user inputs and provide accurate responses. For more complex queries, the chatbot will query the MySQL database through APIs.

Data Flow:

The data flow begins with the user entering a query. The NLP engine (DialogFlow/Rasa) processes the query, extracts intents, and either provides a predefined response or queries the backend database (via FastAPI and webhooks) to fetch relevant data.

Training & Testing: 

Training will involve feeding the chatbot with various user queries and responses. The chatbot will be validated and tested using real user interactions to ensure it provides accurate and useful information.

Deployment & Scalability

Deployment Strategy:

The chatbot will be deployed as a web service using FastAPI, with DialogFlow or Rasa as the core NLP engine. Webhooks will handle real-time data fetching from the MySQL database. It will be embedded into the college website for easy access.

Scalability Considerations: 

The solution can scale by handling multiple queries in real-time, thanks to cloud-based deployment options like Google Cloud (for DialogFlow) or a custom server setup for Rasa. The database can handle increasing amounts of data related to FAQs, admissions, and course details.

Future Scope

Model Improvements: 

Continuous training using real user queries will help improve the chatbot's accuracy. New intents and entities can be added to address a wider range of queries, making the chatbot more robust.

Additional Features: 

Future updates could include multilingual support, voice interactions, and integration with other college systems (e.g., student portals, event calendars). User authentication could also be added for personalized responses.

Database Structure

The project uses a MySQL database with the following tables:

Users: Stores information about users interacting with the chatbot.
Intents: Predefined intents related to queries like admissions, courses, and fees.
Entities: Entities such as course names and admission years extracted from user queries.
FAQs: Frequently asked questions and their corresponding answers.
Course Details: Information about courses offered by the institution.
Admission Details: Admission criteria, deadlines, and other details for various courses.
Query Logs: Logs of user queries and responses for tracking and analysis.
Webhook Responses: Logs of requests and responses for webhook-based interactions.

Conclusion
The College Chatbot project provides a user-friendly interface for students to get instant answers to their queries. By leveraging AI, natural language processing, and webhooks for real-time data fetching, the chatbot is both scalable and adaptable to a wide range of needs, making it an essential tool for improving the overall student experience.
