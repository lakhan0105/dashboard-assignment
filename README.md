# Dashboard Project

This project is a frontend dashboard created using React. It dynamically builds categories and widgets based on JSON data. Users can add, remove, and search widgets within categories.

# Features

- Dynamic Dashboard: Categories and widgets are generated dynamically from JSON data.
- Add Widget: Users can add new widgets to any category by providing the widget name and content.
- Remove Widget: Users can remove widgets from any category.
- Search: Users can search for specific widgets or categories.

# Technologies Used

- React: Frontend library for building user interfaces.
- Local Storage: For persisting data between sessions.
- nanoid: To generate unique IDs for categories and widgets.
- React Icons: For icons used in the UI.

# Project Structure

- Dashboard: The main component that contains the categories and widgets.
- CategoriesContainer: Handles the display of categories and their associated widgets.
- WidgetsContainer: Manages the display of widgets within a category.
- AddWidgetBtn: A button component to add new widgets.
- Modal: A modal form for adding new widgets.
- WidgetCard: A component that represents individual widgets.

# Installation and Setup

1. Clone the repository:

`git clone https://github.com/your-username/dashboard-project.git
cd dashboard-project`

2. Install dependencies:
   `npm install`

3. Run the application:
   `npm start`

4. Open the application:

The app will automatically open in your default browser. If not, visit "http://localhost:3000"

# How to Use

- Add a Widget: Click the "+ Add Widget" button, fill out the form in the modal, and submit.
- Remove a Widget: Click the "X" icon on any widget to remove it.
- Search: Use the search bar to find specific widgets or categories.

# JSON Structure

The dashboard is generated from the following JSON structure:
`{
"categories": [
{
    "categoryName": "CSPM executive dashboard",
    "categoryId": "unique-id-1",
    "widgets": [
    {
        "widgetName": "cloud accounts",
        "widgetId": "unique-id-2",
        "widgetValues": ["$120,00", "type: currency"],
        "widgetContent": "Description of the widget."
    }
   ]
  }
 ]
}`

# Future Improvements

- Add more advanced search functionality.
- Implement drag-and-drop for widget organization.
- Enhance UI with additional design elements.

# Conclusion

This project demonstrates the ability to create a dynamic and interactive dashboard using React. The code is modular and easy to extend, making it suitable for further development.
