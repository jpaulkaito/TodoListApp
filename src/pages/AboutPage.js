import { Container, Row, Col } from 'reactstrap';
import SubHeader from '../components/SubHeader';

const AboutPage = () => {
  return (
    <Container className="mt-5">
      <SubHeader current='About Us' />
      <Row>
        <Col>
          <h2>About My Monthly To-Do List</h2>
          <p>
            Welcome to "My Monthly To-Do List" – your personal assistant to help you stay organized and on top of your tasks every month! Whether you're a busy professional, a student juggling multiple assignments, or someone who simply loves to plan and organize, this app is designed to make your life easier.
          </p>
          <h4>Why Choose My Monthly To-Do List?</h4>
          <ul>
            <li>
              <strong>Monthly Planning Made Easy:</strong> Create and organize your to-do list on a monthly basis. Set goals, add tasks, and prioritize them effortlessly. Our app's clean and straightforward interface ensures a seamless planning experience.
            </li>
            <li>
              <strong>Status Tracking:</strong> Mark tasks as "Pending" or "Completed" to monitor your progress. Visual cues make it easy to see what needs to be done and what you've accomplished.
            </li>
            <li>
              <strong>Edit and Update Tasks:</strong> Life is dynamic, and plans can change. Our app allows you to edit, update, or reschedule tasks with just a few clicks.
            </li>
            <li>
              <strong>User-Friendly Interface:</strong> We designed the app with simplicity and usability in mind. You don't need to be a tech expert to start using "My Monthly To-Do List."
            </li>
          </ul>
          <h4>How to Get Started</h4>
          <ol>
            <li>
              <strong>Create a New Month:</strong> Begin by creating a new month for your to-do list. Give it a name (e.g., "July 2023") and start adding your tasks.
            </li>
            <li>
              <strong>Add Tasks:</strong> Simply click the "Add Task" button to insert a new task. Fill in the task title, description, and choose its status (Pending or Completed).
            </li>
            <li>
              <strong>Edit and Update:</strong> Need to modify a task? Click on it, and you can easily edit the details or change the status.
            </li>
            <li>
              <strong>Stay Organized:</strong> Categorize your tasks, set priorities, and stay on top of your goals.
            </li>
            <li>
              <strong>Review and Accomplish:</strong> At the end of the month, review your accomplishments, and start a new month with a fresh to-do list.
            </li>
          </ol>
          <p>
            Start Your Organized Journey Today! Don't let your tasks overwhelm you. Take control of your schedule and productivity with "My Monthly To-Do List." Join thousands of satisfied users who have found success in staying organized and focused. Sign up now and experience the power of effective task management!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;
